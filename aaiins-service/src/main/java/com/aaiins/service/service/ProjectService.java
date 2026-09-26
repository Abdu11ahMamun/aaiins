package com.aaiins.service.service;

import com.aaiins.service.dto.request.AddMemberRequest;
import com.aaiins.service.dto.request.AssignMentorRequest;
import com.aaiins.service.dto.request.CreateProjectRequest;
import com.aaiins.service.dto.response.ProjectResponse;
import com.aaiins.service.dto.response.ProjectUpdateResponse;
import com.aaiins.service.dto.response.ProjectResponse.MemberResponse;
import com.aaiins.service.dto.response.ProjectResponse.MentorResponse;
import com.aaiins.service.entity.Mentor;
import com.aaiins.service.entity.Project;
import com.aaiins.service.entity.ProjectMember;
import com.aaiins.service.entity.ProjectUpdate;
import com.aaiins.service.entity.User;
import com.aaiins.service.enums.ProjectStage;
import com.aaiins.service.enums.Role;
import com.aaiins.service.exception.DuplicateResourceException;
import com.aaiins.service.exception.InvalidStateException;
import com.aaiins.service.exception.ResourceNotFoundException;
import com.aaiins.service.repository.MentorRepository;
import com.aaiins.service.repository.ProjectMemberRepository;
import com.aaiins.service.repository.ProjectRepository;
import com.aaiins.service.repository.ProjectUpdateRepository;
import com.aaiins.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMemberRepository projectMemberRepository;
    private final MentorRepository mentorRepository;
    private final ProjectUpdateRepository projectUpdateRepository;
    private final UserRepository userRepository;
    private final AuditLogService auditLogService;

    @Transactional
    public ProjectResponse createProject(CreateProjectRequest request, User creator) {
        User director = (creator.getRole() == Role.SUPER_ADMIN && request.directorId() != null)
                ? findUser(request.directorId())
                : creator;

        Project project = projectRepository.save(Project.builder()
                .title(request.title())
                .description(request.description())
                .stage(request.stage() == null ? ProjectStage.PROPOSED : request.stage())
                .researchArea(request.researchArea())
                .director(director)
                .targetJournal(request.targetJournal())
                .journalTier(request.journalTier())
                .visibility(Boolean.TRUE.equals(request.visibility()))
                .build());

        return toResponse(project);
    }

    public ProjectResponse getProjectById(Long id) {
        return toResponse(findProject(id));
    }

    public List<ProjectResponse> listProjects(ProjectStage stage, String area) {
        return toResponses(projectRepository.search(stage, area));
    }

    public List<ProjectResponse> listProjectsForUser(Long userId, ProjectStage stage, String area) {
        return toResponses(projectRepository.searchForUser(userId, stage, area));
    }

    @Transactional
    public ProjectResponse addMember(Long projectId, AddMemberRequest request) {
        Project project = findProject(projectId);
        User user = findUser(request.userId());

        if (projectMemberRepository.existsByProjectIdAndUserId(projectId, user.getId())) {
            throw new DuplicateResourceException("User is already a member of this project");
        }

        projectMemberRepository.save(ProjectMember.builder()
                .project(project)
                .user(user)
                .role(request.role())
                .build());

        return toResponse(project);
    }

    @Transactional
    public ProjectResponse assignMentor(Long projectId, AssignMentorRequest request) {
        Project project = findProject(projectId);
        User user = findUser(request.userId());

        if (mentorRepository.existsByProjectIdAndUserId(projectId, user.getId())) {
            throw new DuplicateResourceException("User is already a mentor of this project");
        }

        mentorRepository.save(Mentor.builder()
                .project(project)
                .user(user)
                .build());

        return toResponse(project);
    }

    @Transactional
    public ProjectResponse updateStage(Long projectId, ProjectStage newStage, String comment, Long userId) {
        Project project = findProject(projectId);
        User user = findUser(userId);

        ProjectStage oldStage = project.getStage();
        if (oldStage == newStage) {
            throw new InvalidStateException("Project is already in stage " + newStage);
        }

        project.setStage(newStage);
        projectUpdateRepository.save(ProjectUpdate.builder()
                .project(project)
                .user(user)
                .oldStage(oldStage)
                .newStage(newStage)
                .comment(comment)
                .build());

        auditLogService.log(userId, "PROJECT_STAGE_CHANGED", "PROJECT", projectId, oldStage.name(), newStage.name());

        return toResponse(project);
    }

    public List<ProjectUpdateResponse> getTimeline(Long projectId) {
        if (!projectRepository.existsById(projectId)) {
            throw new ResourceNotFoundException("Project not found: " + projectId);
        }
        return projectUpdateRepository.findByProjectIdOrderByCreatedAtDescIdDesc(projectId).stream()
                .map(u -> new ProjectUpdateResponse(
                        u.getId(),
                        projectId,
                        u.getUser().getId(),
                        u.getUser().getName(),
                        u.getOldStage(),
                        u.getNewStage(),
                        u.getComment(),
                        u.getCreatedAt()))
                .toList();
    }

    private Project findProject(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found: " + id));
    }

    private User findUser(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + id));
    }

    private ProjectResponse toResponse(Project project) {
        return toResponses(List.of(project)).get(0);
    }

    private List<ProjectResponse> toResponses(List<Project> projects) {
        if (projects.isEmpty()) {
            return List.of();
        }

        List<Long> projectIds = projects.stream().map(Project::getId).toList();

        Map<Long, List<MemberResponse>> membersByProject = projectMemberRepository.findByProjectIdIn(projectIds).stream()
                .collect(Collectors.groupingBy(
                        pm -> pm.getProject().getId(),
                        Collectors.mapping(pm -> new MemberResponse(
                                pm.getUser().getId(), pm.getUser().getName(), pm.getRole()), Collectors.toList())));

        Map<Long, List<MentorResponse>> mentorsByProject = mentorRepository.findByProjectIdIn(projectIds).stream()
                .collect(Collectors.groupingBy(
                        m -> m.getProject().getId(),
                        Collectors.mapping(m -> new MentorResponse(
                                m.getUser().getId(), m.getUser().getName(), m.getAssignedAt()), Collectors.toList())));

        return projects.stream()
                .map(p -> new ProjectResponse(
                        p.getId(),
                        p.getTitle(),
                        p.getDescription(),
                        p.getStage(),
                        p.getResearchArea(),
                        p.getDirector().getId(),
                        p.getDirector().getName(),
                        p.getTargetJournal(),
                        p.getJournalTier(),
                        p.isVisibility(),
                        p.getCreatedAt(),
                        p.getUpdatedAt(),
                        membersByProject.getOrDefault(p.getId(), List.of()),
                        mentorsByProject.getOrDefault(p.getId(), List.of())))
                .toList();
    }
}
