package com.aaiins.service.service;

import com.aaiins.service.dto.response.AuditLogResponse;
import com.aaiins.service.entity.AuditLog;
import com.aaiins.service.entity.User;
import com.aaiins.service.repository.AuditLogRepository;
import com.aaiins.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AuditLogService {

    private final AuditLogRepository auditLogRepository;
    private final UserRepository userRepository;

    @Transactional
    public void log(Long actorId, String action, String targetType, Long targetId, String before, String after) {
        auditLogRepository.save(AuditLog.builder()
                .actorId(actorId)
                .action(action)
                .targetType(targetType)
                .targetId(targetId)
                .beforeValue(before)
                .afterValue(after)
                .build());
    }

    public Page<AuditLogResponse> search(Long actorId, String action, LocalDate from, LocalDate to, Pageable pageable) {
        Page<AuditLog> page = auditLogRepository.search(
                actorId,
                action,
                from == null ? null : from.atStartOfDay(),
                to == null ? null : to.plusDays(1).atStartOfDay(),
                pageable);

        List<Long> actorIds = page.getContent().stream().map(AuditLog::getActorId).distinct().toList();
        Map<Long, String> actorNames = userRepository.findAllById(actorIds).stream()
                .collect(Collectors.toMap(User::getId, User::getName, (a, b) -> a));

        return page.map(a -> new AuditLogResponse(
                a.getId(),
                a.getActorId(),
                actorNames.get(a.getActorId()),
                a.getAction(),
                a.getTargetType(),
                a.getTargetId(),
                a.getBeforeValue(),
                a.getAfterValue(),
                a.getCreatedAt()));
    }
}
