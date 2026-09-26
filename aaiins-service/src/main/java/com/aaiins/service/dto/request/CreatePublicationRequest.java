package com.aaiins.service.dto.request;

import com.aaiins.service.enums.PublicationStatus;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CreatePublicationRequest(
        @NotNull(message = "Project is required")
        Long projectId,

        @NotBlank(message = "Title is required")
        @Size(max = 255, message = "Title must be at most 255 characters")
        String title,

        String authors,

        @Size(max = 255, message = "Journal must be at most 255 characters")
        String journal,

        @Min(value = 1900, message = "Year must be 1900 or later")
        @Max(value = 2100, message = "Year must be 2100 or earlier")
        Integer year,

        PublicationStatus status,

        @Size(max = 255, message = "DOI must be at most 255 characters")
        String doi,

        @Size(max = 1000, message = "PDF URL must be at most 1000 characters")
        String pdfUrl,

        @Size(max = 1000, message = "Code URL must be at most 1000 characters")
        String codeUrl,

        String abstractText
) {
}
