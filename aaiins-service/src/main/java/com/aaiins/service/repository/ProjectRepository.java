package com.aaiins.service.repository;

import com.aaiins.service.entity.Project;
import com.aaiins.service.enums.ProjectStage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Query("""
            select p from Project p join fetch p.director
            where (:stage is null or p.stage = :stage)
              and (:area is null or lower(p.researchArea) = lower(:area))
            order by p.createdAt desc
            """)
    List<Project> search(@Param("stage") ProjectStage stage, @Param("area") String area);

    @Query("""
            select p from Project p join fetch p.director
            where (p.director.id = :userId
                   or exists (select 1 from ProjectMember pm where pm.project = p and pm.user.id = :userId)
                   or exists (select 1 from Mentor m where m.project = p and m.user.id = :userId))
              and (:stage is null or p.stage = :stage)
              and (:area is null or lower(p.researchArea) = lower(:area))
            order by p.createdAt desc
            """)
    List<Project> searchForUser(@Param("userId") Long userId,
                                @Param("stage") ProjectStage stage,
                                @Param("area") String area);

    long countByStage(ProjectStage stage);

    boolean existsByIdAndDirectorId(Long id, Long directorId);

    @Query("""
            select count(p) from Project p
            where p.stage = :stalledStage
               or (p.stage <> :publishedStage
                   and coalesce((select max(u.createdAt) from ProjectUpdate u where u.project = p), p.createdAt) < :cutoff)
            """)
    long countStalled(@Param("stalledStage") ProjectStage stalledStage,
                      @Param("publishedStage") ProjectStage publishedStage,
                      @Param("cutoff") LocalDateTime cutoff);
}
