package com.aaiins.service.dto.response;

import com.aaiins.service.enums.ProjectStage;

import java.time.LocalDateTime;
import java.util.List;

public record ProjectResponse(
        Long id,
        String title,
        String description,
        ProjectStage stage,
        String researchArea,
        Long directorId,
        String directorName,
        String targetJournal,
        String journalTier,
        boolean visibility,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        List<MemberResponse> members,
        List<MentorResponse> mentors
) {

    public record MemberResponse(Long userId, String name, String role) {
    }

    public record MentorResponse(Long userId, String name, LocalDateTime assignedAt) {
    }
}
