package com.aaiins.service.dto.response;

import com.aaiins.service.enums.PublicationStatus;

public record PublicPublicationResponse(
        Long id,
        String title,
        String authors,
        String journal,
        Integer year,
        PublicationStatus status,
        String doi,
        String pdfUrl,
        String codeUrl,
        String abstractText
) {
}
