package com.aaiins.service.security;

import com.aaiins.service.repository.MentorRepository;
import com.aaiins.service.repository.ProjectMemberRepository;
import com.aaiins.service.repository.ProjectRepository;
import com.aaiins.service.repository.PublicationRepository;
import com.aaiins.service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.function.BiPredicate;

@Component("projectSecurity")
@RequiredArgsConstructor
public class ProjectSecurity {

    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    private final ProjectMemberRepository projectMemberRepository;
    private final MentorRepository mentorRepository;
    private final PublicationRepository publicationRepository;

    public boolean isMember(Long projectId, String userEmail) {
        return check(projectId, userEmail, projectMemberRepository::existsByProjectIdAndUserId);
    }

    public boolean isMentor(Long projectId, String userEmail) {
        return check(projectId, userEmail, mentorRepository::existsByProjectIdAndUserId);
    }

    public boolean isProjectDirector(Long projectId, String userEmail) {
        return check(projectId, userEmail, projectRepository::existsByIdAndDirectorId);
    }

    public boolean isPublicationProjectMember(Long publicationId, String userEmail) {
        return checkPublication(publicationId, userEmail, this::isMember);
    }

    public boolean isPublicationProjectMentor(Long publicationId, String userEmail) {
        return checkPublication(publicationId, userEmail, this::isMentor);
    }

    public boolean isPublicationProjectDirector(Long publicationId, String userEmail) {
        return checkPublication(publicationId, userEmail, this::isProjectDirector);
    }

    private boolean check(Long projectId, String userEmail, BiPredicate<Long, Long> projectAndUserCheck) {
        if (projectId == null || userEmail == null) {
            return false;
        }
        return userRepository.findByEmail(userEmail)
                .map(user -> projectAndUserCheck.test(projectId, user.getId()))
                .orElse(false);
    }

    private boolean checkPublication(Long publicationId, String userEmail, BiPredicate<Long, String> projectCheck) {
        if (publicationId == null) {
            return false;
        }
        return publicationRepository.findProjectIdById(publicationId)
                .map(projectId -> projectCheck.test(projectId, userEmail))
                .orElse(false);
    }
}
