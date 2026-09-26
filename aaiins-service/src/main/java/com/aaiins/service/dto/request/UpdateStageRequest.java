package com.aaiins.service.dto.request;

import com.aaiins.service.enums.ProjectStage;
import jakarta.validation.constraints.NotNull;

public record UpdateStageRequest(
        @NotNull(message = "Stage is required")
        ProjectStage stage,

        String comment
) {
}
