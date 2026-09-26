package com.aaiins.service.dto.response;

import com.aaiins.service.enums.Role;

public record AuthResponse(
        String token,
        String name,
        String email,
        Role role
) {
}
