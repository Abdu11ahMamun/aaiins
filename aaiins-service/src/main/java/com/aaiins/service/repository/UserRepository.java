package com.aaiins.service.repository;

import com.aaiins.service.entity.User;
import com.aaiins.service.enums.Role;
import com.aaiins.service.enums.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    List<User> findByStatusAndRoleNotOrderByNameAsc(UserStatus status, Role role);
}
