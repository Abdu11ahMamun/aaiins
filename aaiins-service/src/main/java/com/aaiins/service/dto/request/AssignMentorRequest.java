package com.aaiins.service.dto.request;

import jakarta.validation.constraints.NotNull;

public record AssignMentorRequest(
        @NotNull(message = "User is required")
        Long userId
) {
}
