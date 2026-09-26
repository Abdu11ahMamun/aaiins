package com.aaiins.service.service;

import com.aaiins.service.dto.request.CreatePublicationRequest;
import com.aaiins.service.dto.response.ApprovalResponse;
import com.aaiins.service.dto.response.PublicPublicationResponse;
import com.aaiins.service.dto.response.PublicationResponse;
import com.aaiins.service.entity.Approval;
import com.aaiins.service.entity.Project;
import com.aaiins.service.entity.Publication;
import com.aaiins.service.entity.User;
import com.aaiins.service.enums.ApprovalItemType;
import com.aaiins.service.enums.ApprovalStatus;
import com.aaiins.service.enums.PublicationStatus;
import com.aaiins.service.exception.InvalidStateException;
import com.aaiins.service.exception.ResourceNotFoundException;
import com.aaiins.service.repository.ApprovalRepository;
import com.aaiins.service.repository.ProjectRepository;
import com.aaiins.service.repository.PublicationRepository;
import com.aaiins.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PublicationService {

    private final PublicationRepository publicationRepository;
    private final ProjectRepository projectRepository;
    private final ApprovalRepository approvalRepository;
    private final UserRepository userRepository;

    @Transactional
    public PublicationResponse create(CreatePublicationRequest request) {
        Project project = projectRepository.findById(request.projectId())
                .orElseThrow(() -> new ResourceNotFoundException("Project not found: " + request.projectId()));

        Publication publication = publicationRepository.save(Publication.builder()
                .project(project)
                .title(request.title())
                .authors(request.authors())
                .journal(request.journal())
                .year(request.year())
                .status(request.status() == null ? PublicationStatus.UNDER_REVIEW : request.status())
                .doi(request.doi())
                .pdfUrl(request.pdfUrl())
                .codeUrl(request.codeUrl())
                .abstractText(request.abstractText())
                .build());

        return toResponse(publication);
    }

    @Transactional
    public ApprovalResponse submitForApproval(Long publicationId, Long userId) {
        Publication publication = publicationRepository.findById(publicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found: " + publicationId));
        User submitter = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));

        if (publication.isApprovedForWebsite()) {
            throw new InvalidStateException("Publication is already approved for the website");
        }
        if (approvalRepository.existsByItemTypeAndItemIdAndStatus(
                ApprovalItemType.PUBLICATION, publicationId, ApprovalStatus.PENDING)) {
            throw new InvalidStateException("Publication already has a pending approval");
        }

        Approval approval = approvalRepository.save(Approval.builder()
                .itemType(ApprovalItemType.PUBLICATION)
                .itemId(publicationId)
                .submittedBy(submitter)
                .build());

        return ApprovalService.toResponse(approval);
    }

    public List<PublicationResponse> listByProject(Long projectId) {
        if (!projectRepository.existsById(projectId)) {
            throw new ResourceNotFoundException("Project not found: " + projectId);
        }
        return publicationRepository.findByProjectIdOrderByYearDescIdDesc(projectId).stream()
                .map(this::toResponse)
                .toList();
    }

    public List<PublicPublicationResponse> listApprovedForWebsite() {
        return publicationRepository.findByApprovedForWebsiteTrueOrderByYearDescIdDesc().stream()
                .map(p -> new PublicPublicationResponse(
                        p.getId(), p.getTitle(), p.getAuthors(), p.getJournal(), p.getYear(),
                        p.getStatus(), p.getDoi(), p.getPdfUrl(), p.getCodeUrl(), p.getAbstractText()))
                .toList();
    }

    private PublicationResponse toResponse(Publication p) {
        return new PublicationResponse(
                p.getId(),
                p.getProject().getId(),
                p.getTitle(),
                p.getAuthors(),
                p.getJournal(),
                p.getYear(),
                p.getStatus(),
                p.getDoi(),
                p.getPdfUrl(),
                p.getCodeUrl(),
                p.getAbstractText(),
                p.isApprovedForWebsite(),
                p.getApprovedBy() == null ? null : p.getApprovedBy().getId());
    }
}
