package com.aaiins.service.controller;

import com.aaiins.service.dto.request.AddMemberRequest;
import com.aaiins.service.dto.request.AssignMentorRequest;
import com.aaiins.service.dto.request.CreateProjectRequest;
import com.aaiins.service.dto.request.UpdateStageRequest;
import com.aaiins.service.dto.response.ProjectResponse;
import com.aaiins.service.dto.response.ProjectUpdateResponse;
import com.aaiins.service.entity.User;
import com.aaiins.service.enums.ProjectStage;
import com.aaiins.service.enums.Role;
import com.aaiins.service.service.ProjectService;
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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;
    private final UserService userService;

    @PreAuthorize("hasAnyRole('DIRECTOR','SUPER_ADMIN')")
    @PostMapping
    public ResponseEntity<ProjectResponse> createProject(@Valid @RequestBody CreateProjectRequest request,
                                                         Authentication authentication) {
        User creator = userService.getByEmail(authentication.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(projectService.createProject(request, creator));
    }

    @PreAuthorize("hasRole('SUPER_ADMIN') or @projectSecurity.isProjectDirector(#id, authentication.name) or @projectSecurity.isMember(#id, authentication.name) or @projectSecurity.isMentor(#id, authentication.name)")
    @GetMapping("/{id}")
    public ProjectResponse getProject(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    @GetMapping
    public List<ProjectResponse> listProjects(@RequestParam(required = false) ProjectStage stage,
                                              @RequestParam(required = false) String area,
                                              Authentication authentication) {
        String areaFilter = (area == null || area.isBlank()) ? null : area.trim();
        User user = userService.getByEmail(authentication.getName());
        if (user.getRole() == Role.SUPER_ADMIN) {
            return projectService.listProjects(stage, areaFilter);
        }
        return projectService.listProjectsForUser(user.getId(), stage, areaFilter);
    }

    @PreAuthorize("hasRole('SUPER_ADMIN') or @projectSecurity.isProjectDirector(#id, authentication.name)")
    @PostMapping("/{id}/members")
    public ResponseEntity<ProjectResponse> addMember(@PathVariable Long id,
                                                     @Valid @RequestBody AddMemberRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(projectService.addMember(id, request));
    }

    @PreAuthorize("hasRole('SUPER_ADMIN') or @projectSecurity.isProjectDirector(#id, authentication.name)")
    @PostMapping("/{id}/mentor")
    public ResponseEntity<ProjectResponse> assignMentor(@PathVariable Long id,
                                                        @Valid @RequestBody AssignMentorRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(projectService.assignMentor(id, request));
    }

    @PreAuthorize("hasRole('SUPER_ADMIN') or @projectSecurity.isProjectDirector(#id, authentication.name) or @projectSecurity.isMember(#id, authentication.name) or @projectSecurity.isMentor(#id, authentication.name)")
    @PutMapping("/{id}/stage")
    public ProjectResponse updateStage(@PathVariable Long id,
                                       @Valid @RequestBody UpdateStageRequest request,
                                       Authentication authentication) {
        Long userId = userService.getByEmail(authentication.getName()).getId();
        return projectService.updateStage(id, request.stage(), request.comment(), userId);
    }

    @PreAuthorize("hasRole('SUPER_ADMIN') or @projectSecurity.isProjectDirector(#id, authentication.name) or @projectSecurity.isMember(#id, authentication.name) or @projectSecurity.isMentor(#id, authentication.name)")
    @GetMapping("/{id}/timeline")
    public List<ProjectUpdateResponse> getTimeline(@PathVariable Long id) {
        return projectService.getTimeline(id);
    }
}
