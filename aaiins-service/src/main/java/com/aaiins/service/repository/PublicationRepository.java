package com.aaiins.service.repository;

import com.aaiins.service.entity.Publication;
import com.aaiins.service.enums.PublicationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PublicationRepository extends JpaRepository<Publication, Long> {

    List<Publication> findByProjectIdOrderByYearDescIdDesc(Long projectId);

    List<Publication> findByApprovedForWebsiteTrueOrderByYearDescIdDesc();

    long countByStatus(PublicationStatus status);

    @Query("select p.project.id from Publication p where p.id = :id")
    Optional<Long> findProjectIdById(@Param("id") Long id);
}
