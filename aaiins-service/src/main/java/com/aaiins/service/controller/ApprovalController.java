package com.aaiins.service.controller;

import com.aaiins.service.dto.request.DecideApprovalRequest;
import com.aaiins.service.dto.response.ApprovalResponse;
import com.aaiins.service.service.ApprovalService;
import com.aaiins.service.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/approvals")
@RequiredArgsConstructor
public class ApprovalController {

    private final ApprovalService approvalService;
    private final UserService userService;

    @GetMapping("/pending")
    public List<ApprovalResponse> listPending() {
        return approvalService.listPending();
    }

    @PutMapping("/{id}/decide")
    public ApprovalResponse decide(@PathVariable Long id,
                                   @Valid @RequestBody DecideApprovalRequest request,
                                   Authentication authentication) {
        Long userId = userService.getByEmail(authentication.getName()).getId();
        return approvalService.decide(id, request, userId);
    }
}
