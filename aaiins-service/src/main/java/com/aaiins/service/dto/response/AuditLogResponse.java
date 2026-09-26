package com.aaiins.service.dto.response;

import java.time.LocalDateTime;

public record AuditLogResponse(
        Long id,
        Long actorId,
        String actorName,
        String action,
        String targetType,
        Long targetId,
        String beforeValue,
        String afterValue,
        LocalDateTime createdAt
) {
}
