package com.aaiins.service.repository;

import com.aaiins.service.entity.Mentor;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface MentorRepository extends JpaRepository<Mentor, Long> {

    boolean existsByProjectIdAndUserId(Long projectId, Long userId);

    @EntityGraph(attributePaths = "user")
    List<Mentor> findByProjectIdIn(Collection<Long> projectIds);
}
