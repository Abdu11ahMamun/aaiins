package com.aaiins.service.dto.response;

import com.aaiins.service.enums.ApprovalItemType;
import com.aaiins.service.enums.ApprovalStatus;

import java.time.LocalDateTime;

public record ApprovalResponse(
        Long id,
        ApprovalItemType itemType,
        Long itemId,
        Long submittedById,
        String submittedByName,
        ApprovalStatus status,
        Long decidedById,
        String decidedByName,
        String note,
        LocalDateTime createdAt,
        LocalDateTime decidedAt
) {
}
