package com.aaiins.service.controller;

import com.aaiins.service.dto.response.AuditLogResponse;
import com.aaiins.service.service.AuditLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PagedModel;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/admin/audit-log")
@RequiredArgsConstructor
public class AuditLogController {

    private static final int MAX_PAGE_SIZE = 100;

    private final AuditLogService auditLogService;

    @GetMapping
    public PagedModel<AuditLogResponse> search(
            @RequestParam(required = false) Long actorId,
            @RequestParam(required = false) String action,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        PageRequest pageable = PageRequest.of(
                Math.max(page, 0),
                Math.min(Math.max(size, 1), MAX_PAGE_SIZE),
                Sort.by(Sort.Direction.DESC, "createdAt", "id"));
        String actionFilter = (action == null || action.isBlank()) ? null : action.trim();
        return new PagedModel<>(auditLogService.search(actorId, actionFilter, from, to, pageable));
    }
}
