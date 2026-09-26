package com.aaiins.service.repository;

import com.aaiins.service.entity.ProjectUpdate;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectUpdateRepository extends JpaRepository<ProjectUpdate, Long> {

    @EntityGraph(attributePaths = "user")
    List<ProjectUpdate> findByProjectIdOrderByCreatedAtDescIdDesc(Long projectId);
}
