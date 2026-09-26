package com.aaiins.service.service;

import com.aaiins.service.dto.response.AnalyticsSummaryResponse;
import com.aaiins.service.enums.ProjectStage;
import com.aaiins.service.enums.PublicationStatus;
import com.aaiins.service.repository.ProjectRepository;
import com.aaiins.service.repository.PublicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AnalyticsService {

    private static final int STALLED_AFTER_DAYS = 30;

    private final ProjectRepository projectRepository;
    private final PublicationRepository publicationRepository;

    public AnalyticsSummaryResponse getSummary() {
        LocalDateTime cutoff = LocalDateTime.now().minusDays(STALLED_AFTER_DAYS);

        return new AnalyticsSummaryResponse(
                projectRepository.countByStage(ProjectStage.ACTIVE),
                projectRepository.countStalled(ProjectStage.STALLED, ProjectStage.PUBLISHED, cutoff),
                publicationRepository.countByStatus(PublicationStatus.PUBLISHED),
                publicationRepository.countByStatus(PublicationStatus.UNDER_REVIEW));
    }
}
