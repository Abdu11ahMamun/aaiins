package com.aaiins.service.dto.response;

import com.aaiins.service.enums.Role;
import com.aaiins.service.enums.UserStatus;

import java.time.LocalDateTime;

public record UserResponse(
        Long id,
        String name,
        String email,
        Role role,
        UserStatus status,
        LocalDateTime joinedAt
) {
}
