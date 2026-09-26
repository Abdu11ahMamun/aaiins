package com.aaiins.service.service;

import com.aaiins.service.dto.request.DecideApprovalRequest;
import com.aaiins.service.dto.response.ApprovalResponse;
import com.aaiins.service.entity.Approval;
import com.aaiins.service.entity.Publication;
import com.aaiins.service.entity.User;
import com.aaiins.service.enums.ApprovalItemType;
import com.aaiins.service.enums.ApprovalStatus;
import com.aaiins.service.exception.InvalidStateException;
import com.aaiins.service.exception.ResourceNotFoundException;
import com.aaiins.service.repository.ApprovalRepository;
import com.aaiins.service.repository.PublicationRepository;
import com.aaiins.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ApprovalService {

    private final ApprovalRepository approvalRepository;
    private final PublicationRepository publicationRepository;
    private final UserRepository userRepository;
    private final AuditLogService auditLogService;

    public List<ApprovalResponse> listPending() {
        return approvalRepository.findByStatusOrderByCreatedAtAsc(ApprovalStatus.PENDING).stream()
                .map(ApprovalService::toResponse)
                .toList();
    }

    @Transactional
    public ApprovalResponse decide(Long approvalId, DecideApprovalRequest request, Long userId) {
        Approval approval = approvalRepository.findById(approvalId)
                .orElseThrow(() -> new ResourceNotFoundException("Approval not found: " + approvalId));
        User decider = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));

        if (approval.getStatus() != ApprovalStatus.PENDING) {
            throw new InvalidStateException("Approval has already been decided");
        }

        ApprovalStatus before = approval.getStatus();
        ApprovalStatus after = request.approve() ? ApprovalStatus.APPROVED : ApprovalStatus.REJECTED;

        approval.setStatus(after);
        approval.setDecidedBy(decider);
        approval.setNote(request.note());
        approval.setDecidedAt(LocalDateTime.now());

        if (after == ApprovalStatus.APPROVED && approval.getItemType() == ApprovalItemType.PUBLICATION) {
            Publication publication = publicationRepository.findById(approval.getItemId())
                    .orElseThrow(() -> new ResourceNotFoundException("Publication not found: " + approval.getItemId()));
            publication.setApprovedForWebsite(true);
            publication.setApprovedBy(decider);
        }

        auditLogService.log(userId, "APPROVAL_" + after.name(), "APPROVAL", approvalId, before.name(), after.name());

        return toResponse(approval);
    }

    static ApprovalResponse toResponse(Approval a) {
        User decidedBy = a.getDecidedBy();
        return new ApprovalResponse(
                a.getId(),
                a.getItemType(),
                a.getItemId(),
                a.getSubmittedBy().getId(),
                a.getSubmittedBy().getName(),
                a.getStatus(),
                decidedBy == null ? null : decidedBy.getId(),
                decidedBy == null ? null : decidedBy.getName(),
                a.getNote(),
                a.getCreatedAt(),
                a.getDecidedAt());
    }
}
