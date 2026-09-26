package com.aaiins.service.service;

import com.aaiins.service.dto.request.LoginRequest;
import com.aaiins.service.dto.request.RegisterRequest;
import com.aaiins.service.dto.response.AuthResponse;
import com.aaiins.service.entity.User;
import com.aaiins.service.enums.Role;
import com.aaiins.service.exception.ResourceNotFoundException;
import com.aaiins.service.repository.UserRepository;
import com.aaiins.service.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {

    private static final List<Role> SELF_REGISTRATION_ROLES = List.of(Role.GRAD_RESEARCHER, Role.UNDERGRAD);

    private final UserRepository userRepository;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtService jwtService;

    public AuthResponse register(RegisterRequest request) {
        Role role = resolveRegistrationRole(request.role());
        User user = userService.createUser(request.name(), request.email(), request.password(), role);

        UserDetails userDetails = userDetailsService.loadUserByUsername(user.getEmail());
        return toResponse(user, userDetails);
    }

    private Role resolveRegistrationRole(String requested) {
        if (requested != null) {
            String normalized = requested.trim();
            for (Role allowed : SELF_REGISTRATION_ROLES) {
                if (allowed.name().equalsIgnoreCase(normalized)) {
                    return allowed;
                }
            }
        }
        return Role.GRAD_RESEARCHER;
    }

    public AuthResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password()));
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        user.setLastActive(LocalDateTime.now());
        userRepository.save(user);

        return toResponse(user, userDetails);
    }

    private AuthResponse toResponse(User user, UserDetails userDetails) {
        return new AuthResponse(jwtService.generateToken(userDetails), user.getName(), user.getEmail(), user.getRole());
    }
}
