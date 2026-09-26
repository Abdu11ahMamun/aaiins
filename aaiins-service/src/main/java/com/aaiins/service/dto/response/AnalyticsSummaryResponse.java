package com.aaiins.service.dto.response;

public record AnalyticsSummaryResponse(
        long activeProjects,
        long stalledProjects,
        long publishedCount,
        long underReviewCount
) {
}
