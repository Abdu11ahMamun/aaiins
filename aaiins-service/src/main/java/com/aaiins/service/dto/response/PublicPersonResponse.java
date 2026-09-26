package com.aaiins.service.dto.response;

import com.aaiins.service.enums.Role;

import java.time.LocalDateTime;

public record PublicPersonResponse(
        String name,
        Role role,
        String bio,
        LocalDateTime joinedAt
) {
}
