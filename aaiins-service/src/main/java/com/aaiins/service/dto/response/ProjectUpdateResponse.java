package com.aaiins.service.dto.response;

import com.aaiins.service.enums.ProjectStage;

import java.time.LocalDateTime;

public record ProjectUpdateResponse(
        Long id,
        Long projectId,
        Long userId,
        String userName,
        ProjectStage oldStage,
        ProjectStage newStage,
        String comment,
        LocalDateTime createdAt
) {
}
