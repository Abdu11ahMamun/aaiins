package com.aaiins.service.repository;

import com.aaiins.service.entity.Approval;
import com.aaiins.service.enums.ApprovalItemType;
import com.aaiins.service.enums.ApprovalStatus;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApprovalRepository extends JpaRepository<Approval, Long> {

    @EntityGraph(attributePaths = {"submittedBy", "decidedBy"})
    List<Approval> findByStatusOrderByCreatedAtAsc(ApprovalStatus status);

    boolean existsByItemTypeAndItemIdAndStatus(ApprovalItemType itemType, Long itemId, ApprovalStatus status);
}
