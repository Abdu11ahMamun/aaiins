package com.aaiins.service.service;

import com.aaiins.service.dto.request.CreateUserRequest;
import com.aaiins.service.dto.response.PublicPersonResponse;
import com.aaiins.service.dto.response.UserResponse;
import com.aaiins.service.entity.User;
import com.aaiins.service.enums.Role;
import com.aaiins.service.enums.UserStatus;
import com.aaiins.service.exception.DuplicateResourceException;
import com.aaiins.service.exception.ResourceNotFoundException;
import com.aaiins.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private static final String BIO_PLACEHOLDER = "";

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public User createUser(String name, String email, String rawPassword, Role role) {
        if (userRepository.existsByEmail(email)) {
            throw new DuplicateResourceException("Email is already registered");
        }

        return userRepository.save(User.builder()
                .name(name)
                .email(email)
                .password(passwordEncoder.encode(rawPassword))
                .role(role)
                .build());
    }

    @Transactional
    public UserResponse createUserAsAdmin(CreateUserRequest request) {
        User user = createUser(request.name(), request.email(), request.password(), request.role());
        return new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getRole(),
                user.getStatus(), user.getJoinedAt());
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + email));
    }

    public List<PublicPersonResponse> getPublicPeople() {
        return userRepository.findByStatusAndRoleNotOrderByNameAsc(UserStatus.ACTIVE, Role.SUPER_ADMIN).stream()
                .map(u -> new PublicPersonResponse(u.getName(), u.getRole(), BIO_PLACEHOLDER, u.getJoinedAt()))
                .toList();
    }
}
