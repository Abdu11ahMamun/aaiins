package com.aaiins.service.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AddMemberRequest(
        @NotNull(message = "User is required")
        Long userId,

        @NotBlank(message = "Role is required")
        @Size(max = 50, message = "Role must be at most 50 characters")
        String role
) {
}
