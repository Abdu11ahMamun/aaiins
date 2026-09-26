package com.aaiins.service.controller;

import com.aaiins.service.dto.response.PublicPersonResponse;
import com.aaiins.service.dto.response.PublicPublicationResponse;
import com.aaiins.service.service.PublicationService;
import com.aaiins.service.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class PublicContentController {

    private final UserService userService;
    private final PublicationService publicationService;

    @GetMapping("/people")
    public List<PublicPersonResponse> getPeople() {
        return userService.getPublicPeople();
    }

    @GetMapping("/publications")
    public List<PublicPublicationResponse> getPublications() {
        return publicationService.listApprovedForWebsite();
    }
}
