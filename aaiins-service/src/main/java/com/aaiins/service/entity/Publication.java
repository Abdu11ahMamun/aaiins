package com.aaiins.service.entity;

import com.aaiins.service.enums.PublicationStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "publications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String authors;

    private String journal;

    @Column(name = "publication_year")
    private Integer year;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private PublicationStatus status = PublicationStatus.UNDER_REVIEW;

    private String doi;

    @Column(length = 1000)
    private String pdfUrl;

    @Column(length = 1000)
    private String codeUrl;

    @Column(columnDefinition = "TEXT")
    private String abstractText;

    @Column(nullable = false)
    private boolean approvedForWebsite;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "approved_by")
    private User approvedBy;
}
