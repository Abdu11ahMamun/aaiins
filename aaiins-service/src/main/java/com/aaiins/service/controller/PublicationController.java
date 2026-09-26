package com.aaiins.service.controller;

import com.aaiins.service.dto.request.CreatePublicationRequest;
import com.aaiins.service.dto.response.ApprovalResponse;
import com.aaiins.service.dto.response.PublicationResponse;
import com.aaiins.service.service.PublicationService;
import com.aaiins.service.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/publications")
@RequiredArgsConstructor
public class PublicationController {

    private final PublicationService publicationService;
    private final UserService userService;

    @PreAuthorize("hasRole('SUPER_ADMIN') or @projectSecurity.isProjectDirector(#request.projectId(), authentication.name) or @projectSecurity.isMember(#request.projectId(), authentication.name) or @projectSecurity.isMentor(#request.projectId(), authentication.name)")
    @PostMapping
    public ResponseEntity<PublicationResponse> create(@Valid @RequestBody CreatePublicationRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(publicationService.create(request));
    }

    @PreAuthorize("hasRole('SUPER_ADMIN') or @projectSecurity.isProjectDirector(#projectId, authentication.name) or @projectSecurity.isMember(#projectId, authentication.name) or @projectSecurity.isMentor(#projectId, authentication.name)")
    @GetMapping("/project/{projectId}")
    public List<PublicationResponse> listByProject(@PathVariable Long projectId) {
        return publicationService.listByProject(projectId);
    }

    @PreAuthorize("hasRole('SUPER_ADMIN') or @projectSecurity.isPublicationProjectDirector(#id, authentication.name) or @projectSecurity.isPublicationProjectMember(#id, authentication.name) or @projectSecurity.isPublicationProjectMentor(#id, authentication.name)")
    @PostMapping("/{id}/submit-for-approval")
    public ResponseEntity<ApprovalResponse> submitForApproval(@PathVariable Long id,
                                                              Authentication authentication) {
        Long userId = userService.getByEmail(authentication.getName()).getId();
        return ResponseEntity.status(HttpStatus.CREATED).body(publicationService.submitForApproval(id, userId));
    }
}
