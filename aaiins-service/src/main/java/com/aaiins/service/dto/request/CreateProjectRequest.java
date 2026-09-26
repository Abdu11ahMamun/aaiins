package com.aaiins.service.dto.request;

import com.aaiins.service.enums.ProjectStage;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateProjectRequest(
        @NotBlank(message = "Title is required")
        @Size(max = 255, message = "Title must be at most 255 characters")
        String title,

        String description,

        ProjectStage stage,

        @Size(max = 255, message = "Research area must be at most 255 characters")
        String researchArea,

        Long directorId,

        @Size(max = 255, message = "Target journal must be at most 255 characters")
        String targetJournal,

        @Size(max = 50, message = "Journal tier must be at most 50 characters")
        String journalTier,

        Boolean visibility
) {
}
