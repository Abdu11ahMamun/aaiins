// Modern JavaScript for AAIINS Lab Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("AAIINS site loaded");
    
    // Initialize all functionality
    initNavbar();
    initScrollReveal();
    initCounters();
    initSmoothScroll();
    initParallax();
    initPeoplePagePagination();
    initResearchPagePagination();
    initPublicationsPagePagination();
});

// Research Projects Data
const researchProjectsData = [
    {
        title: "Neural Architecture Search",
        category: "ai",
        description: "Automated discovery of optimal neural network architectures using evolutionary algorithms and reinforcement learning.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$250K NSF Grant"
    },
    {
        title: "Real-time Object Detection",
        category: "vision",
        description: "Efficient algorithms for real-time object detection in video streams with edge computing optimization.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$180K DARPA"
    },
    {
        title: "Large Language Models",
        category: "nlp",
        description: "Developing parameter-efficient fine-tuning methods for large-scale language understanding.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format",
        status: "Completed",
        funding: "$300K Google Research"
    },
    {
        title: "Federated Learning Systems",
        category: "ai",
        description: "Privacy-preserving machine learning across distributed devices and data sources.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$200K Microsoft Research"
    },
    {
        title: "Medical Image Analysis",
        category: "vision",
        description: "AI-powered diagnostic tools for medical imaging with interpretability and reliability.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$150K NIH Grant"
    },
    {
        title: "Conversational AI",
        category: "nlp",
        description: "Building intelligent dialogue systems with emotional understanding and context awareness.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&auto=format",
        status: "Planning",
        funding: "Seeking Funding"
    },
    {
        title: "Autonomous Navigation",
        category: "robotics",
        description: "Developing robust navigation systems for autonomous vehicles in complex environments.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$400K Toyota Research"
    },
    {
        title: "Explainable AI",
        category: "ai",
        description: "Creating interpretable machine learning models for critical decision-making applications.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$220K IARPA"
    },
    {
        title: "Computer Vision for Robotics",
        category: "vision",
        description: "Advanced vision systems for robotic manipulation and environment understanding.",
        image: "https://images.unsplash.com/photo-1553808350-6c6e55665fce?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$180K Boston Dynamics"
    },
    {
        title: "Multilingual NLP",
        category: "nlp",
        description: "Cross-lingual transfer learning for low-resource language understanding and translation.",
        image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=400&h=250&fit=crop&auto=format",
        status: "Completed",
        funding: "$160K Facebook Research"
    },
    {
        title: "Human-Robot Interaction",
        category: "robotics",
        description: "Natural and intuitive interfaces for human-robot collaboration in shared workspaces.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$280K Honda Research"
    },
    {
        title: "Edge AI Computing",
        category: "ai",
        description: "Optimizing deep learning models for deployment on resource-constrained edge devices.",
        image: "https://images.unsplash.com/photo-1520869562399-e772bf99d4c8?w=400&h=250&fit=crop&auto=format",
        status: "Active",
        funding: "$190K Intel Labs"
    }
];

// Publications Data
const publicationsData = [
    {
        title: "Efficient Neural Architecture Search via Gradient-Free Optimization",
        authors: ["Emily Rodriguez", "Sarah Johnson", "Michael Chen"],
        year: "2025",
        venue: "International Conference on Machine Learning (ICML) 2025",
        type: "conference",
        topic: "ml",
        citations: 15,
        abstract: "This paper presents a novel approach to neural architecture search that eliminates the need for gradient-based optimization."
    },
    {
        title: "Real-Time Medical Image Segmentation Using Lightweight Deep Networks",
        authors: ["David Kim", "Sarah Johnson", "Lisa Wang"],
        year: "2025",
        venue: "IEEE Transactions on Medical Imaging",
        type: "journal",
        topic: "cv",
        citations: 8,
        abstract: "We propose a lightweight deep learning architecture for real-time medical image segmentation applications."
    },
    {
        title: "Federated Learning with Differential Privacy for Healthcare Applications",
        authors: ["Aisha Patel", "Marcus Thompson", "Sarah Johnson"],
        year: "2024",
        venue: "Nature Machine Intelligence",
        type: "journal",
        topic: "ml",
        citations: 42,
        abstract: "A comprehensive framework for privacy-preserving federated learning in sensitive healthcare domains."
    },
    {
        title: "Cross-Modal Learning for Visual Question Answering",
        authors: ["Lisa Wang", "Carlos Martinez", "David Kim"],
        year: "2024",
        venue: "Computer Vision and Pattern Recognition (CVPR) 2024",
        type: "conference",
        topic: "cv",
        citations: 28,
        abstract: "Novel cross-modal attention mechanisms for improved visual question answering performance."
    },
    {
        title: "Large Language Models for Code Generation: A Systematic Study",
        authors: ["Sophia Chen", "Ahmed Hassan", "Emily Rodriguez"],
        year: "2024",
        venue: "Empirical Methods in Natural Language Processing (EMNLP) 2024",
        type: "conference",
        topic: "nlp",
        citations: 35,
        abstract: "A comprehensive evaluation of large language models for automated code generation tasks."
    },
    {
        title: "Adversarial Robustness in Deep Neural Networks: A Survey",
        authors: ["Ahmed Hassan", "Marcus Thompson", "Sarah Johnson"],
        year: "2024",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        type: "journal",
        topic: "ml",
        citations: 67,
        abstract: "A systematic review of adversarial attack methods and defense strategies in deep learning."
    },
    {
        title: "Graph Neural Networks for Social Network Analysis",
        authors: ["Sophia Chen", "Aisha Patel", "Lisa Wang"],
        year: "2023",
        venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
        type: "conference",
        topic: "ml",
        citations: 54,
        abstract: "Novel graph neural network architectures for large-scale social network analysis and prediction."
    },
    {
        title: "Transformer-Based Models for Time Series Forecasting",
        authors: ["Carlos Martinez", "Emily Rodriguez", "David Kim"],
        year: "2023",
        venue: "Journal of Machine Learning Research",
        type: "journal",
        topic: "ml",
        citations: 89,
        abstract: "Adapting transformer architectures for improved time series forecasting across multiple domains."
    },
    {
        title: "Privacy-Preserving Machine Learning in the Cloud",
        authors: ["Marcus Thompson", "Aisha Patel", "Sarah Johnson"],
        year: "2023",
        venue: "ACM Computing Surveys",
        type: "journal",
        topic: "ml",
        citations: 123,
        abstract: "A comprehensive survey of privacy-preserving techniques for machine learning in cloud environments."
    },
    {
        title: "Multimodal Sentiment Analysis Using Deep Learning",
        authors: ["Ahmed Hassan", "Sophia Chen", "Lisa Wang"],
        year: "2023",
        venue: "Association for Computational Linguistics (ACL) 2023",
        type: "conference",
        topic: "nlp",
        citations: 76,
        abstract: "A multimodal approach combining text, audio, and visual features for enhanced sentiment analysis."
    },
    {
        title: "Efficient Transfer Learning for Computer Vision",
        authors: ["David Kim", "Carlos Martinez", "Emily Rodriguez"],
        year: "2022",
        venue: "International Conference on Computer Vision (ICCV) 2022",
        type: "conference",
        topic: "cv",
        citations: 145,
        abstract: "Novel transfer learning techniques for efficient adaptation of vision models to new domains."
    },
    {
        title: "Reinforcement Learning for Autonomous Systems",
        authors: ["Marcus Thompson", "Ahmed Hassan", "Sarah Johnson"],
        year: "2022",
        venue: "Autonomous Agents and Multi-Agent Systems",
        type: "journal",
        topic: "robotics",
        citations: 98,
        abstract: "Advanced reinforcement learning algorithms for autonomous system control and decision making."
    }
];

// Research pagination variables
let currentResearchPage = 1;
let currentResearchFilter = 'all';
const projectsPerPage = 6;

// Publications pagination variables
let currentPublicationsPage = 1;
let currentPublicationsFilters = { year: '', type: '', topic: '' };
const publicationsPerPage = 5;

// Students data for people page
const studentsData = [
    // PhD Students
    {
        name: "Emily Rodriguez",
        type: "phd",
        title: "PhD Student",
        image: "https://images.unsplash.com/photo-1494790108755-2616b95b9c32?w=150&h=150&fit=crop&auto=format",
        bio: "Working on neural architecture search and automated machine learning. Emily focuses on developing efficient search strategies for optimal network designs.",
        specialties: ["AutoML", "Neural Architecture Search"],
        email: "emily.rodriguez@university.edu"
    },
    {
        name: "David Kim",
        type: "phd",
        title: "PhD Student",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
        bio: "Researching computer vision and medical image analysis. David develops AI systems for automated diagnosis and medical imaging applications.",
        specialties: ["Computer Vision", "Medical AI"],
        email: "david.kim@university.edu"
    },
    {
        name: "Lisa Wang",
        type: "phd",
        title: "PhD Student",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format",
        bio: "Specializing in natural language processing and large language models. Lisa works on efficient training methods and model compression techniques.",
        specialties: ["Natural Language Processing", "Model Compression"],
        email: "lisa.wang@university.edu"
    },
    {
        name: "Marcus Thompson",
        type: "phd",
        title: "PhD Student",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
        bio: "Developing reinforcement learning algorithms for robotics applications. Marcus focuses on multi-agent systems and cooperative learning.",
        specialties: ["Reinforcement Learning", "Multi-Agent Systems"],
        email: "marcus.thompson@university.edu"
    },
    {
        name: "Aisha Patel",
        type: "phd",
        title: "PhD Student",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&auto=format",
        bio: "Researching federated learning and privacy-preserving machine learning. Aisha works on distributed AI systems for healthcare applications.",
        specialties: ["Federated Learning", "Privacy-Preserving AI"],
        email: "aisha.patel@university.edu"
    },
    {
        name: "Carlos Martinez",
        type: "phd",
        title: "PhD Student",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format",
        bio: "Focusing on explainable AI and interpretable machine learning models. Carlos develops methods to make AI decisions more transparent.",
        specialties: ["Explainable AI", "Interpretability"],
        email: "carlos.martinez@university.edu"
    },
    {
        name: "Sophia Chen",
        type: "phd",
        title: "PhD Student",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&auto=format",
        bio: "Working on graph neural networks and their applications in social network analysis and recommendation systems.",
        specialties: ["Graph Neural Networks", "Social Network Analysis"],
        email: "sophia.chen@university.edu"
    },
    {
        name: "Ahmed Hassan",
        type: "phd",
        title: "PhD Student",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&auto=format",
        bio: "Researching adversarial machine learning and robust AI systems. Ahmed develops defenses against adversarial attacks on neural networks.",
        specialties: ["Adversarial ML", "Robustness"],
        email: "ahmed.hassan@university.edu"
    },
    // Master's Students
    {
        name: "James Thompson",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&auto=format",
        bio: "Working on federated learning and privacy-preserving machine learning algorithms for distributed systems.",
        specialties: ["Federated Learning", "Privacy"],
        email: "james.thompson@university.edu"
    },
    {
        name: "Priya Singh",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&auto=format",
        bio: "Researching reinforcement learning applications in robotics and autonomous navigation systems.",
        specialties: ["Reinforcement Learning", "Robotics"],
        email: "priya.singh@university.edu"
    },
    {
        name: "Alex Rivera",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&auto=format",
        bio: "Focusing on edge computing and optimizing deep learning models for resource-constrained devices.",
        specialties: ["Edge Computing", "Model Optimization"],
        email: "alex.rivera@university.edu"
    },
    {
        name: "Maria Garcia",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&auto=format",
        bio: "Developing computer vision algorithms for autonomous vehicles and real-time object detection systems.",
        specialties: ["Computer Vision", "Autonomous Vehicles"],
        email: "maria.garcia@university.edu"
    },
    {
        name: "Ryan Park",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&auto=format",
        bio: "Working on natural language processing for multilingual applications and cross-lingual transfer learning.",
        specialties: ["Multilingual NLP", "Transfer Learning"],
        email: "ryan.park@university.edu"
    },
    {
        name: "Nina Kowalski",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&auto=format",
        bio: "Researching AI applications in finance, particularly algorithmic trading and risk assessment models.",
        specialties: ["AI in Finance", "Algorithmic Trading"],
        email: "nina.kowalski@university.edu"
    },
    {
        name: "Kevin Wu",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&auto=format",
        bio: "Developing machine learning models for time series analysis and predictive maintenance in industrial applications.",
        specialties: ["Time Series Analysis", "Predictive Maintenance"],
        email: "kevin.wu@university.edu"
    },
    {
        name: "Sarah Al-Rashid",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1494790108755-2616b95b9c32?w=150&h=150&fit=crop&auto=format",
        bio: "Working on AI-powered recommendation systems and collaborative filtering algorithms for e-commerce platforms.",
        specialties: ["Recommendation Systems", "Collaborative Filtering"],
        email: "sarah.alrashid@university.edu"
    },
    {
        name: "Tom Anderson",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&auto=format",
        bio: "Researching blockchain applications in AI and developing decentralized machine learning systems.",
        specialties: ["Blockchain AI", "Decentralized ML"],
        email: "tom.anderson@university.edu"
    },
    {
        name: "Julia Müller",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&auto=format",
        bio: "Focusing on AI ethics and bias detection in machine learning models, developing fair and equitable AI systems.",
        specialties: ["AI Ethics", "Bias Detection"],
        email: "julia.muller@university.edu"
    },
    {
        name: "Daniel Lee",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&auto=format",
        bio: "Working on quantum machine learning algorithms and their implementation on quantum computing platforms.",
        specialties: ["Quantum ML", "Quantum Computing"],
        email: "daniel.lee@university.edu"
    },
    {
        name: "Fatima Al-Zahra",
        type: "masters",
        title: "Master's Student",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&auto=format",
        bio: "Developing AI solutions for environmental monitoring and climate change prediction using satellite imagery.",
        specialties: ["Environmental AI", "Climate Modeling"],
        email: "fatima.alzahra@university.edu"
    }
];

// Pagination variables
let currentPage = 1;
let currentFilter = 'all';
const studentsPerPage = 6;

// Initialize research page pagination
function initResearchPagePagination() {
    if (window.location.pathname.includes('research.html')) {
        initResearchFilterButtons();
        displayResearchProjects();
        updateResearchPagination();
    }
}

// Initialize research filter buttons
function initResearchFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter and reset to page 1
            currentResearchFilter = this.getAttribute('data-filter');
            currentResearchPage = 1;
            
            // Display filtered projects
            displayResearchProjects();
            updateResearchPagination();
        });
    });
}

// Filter research projects based on current filter
function getFilteredResearchProjects() {
    if (currentResearchFilter === 'all') {
        return researchProjectsData;
    }
    return researchProjectsData.filter(project => project.category === currentResearchFilter);
}

// Display research projects for current page
function displayResearchProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    const filteredProjects = getFilteredResearchProjects();
    const startIndex = (currentResearchPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsToShow = filteredProjects.slice(startIndex, endIndex);
    
    projectsGrid.innerHTML = '';
    
    projectsToShow.forEach(project => {
        const projectCard = createResearchProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create research project card HTML
function createResearchProjectCard(project) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    
    const statusClass = project.status.toLowerCase() === 'active' ? 'status-active' : 
                       project.status.toLowerCase() === 'completed' ? 'status-completed' : 'status-planning';
    
    col.innerHTML = `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" class="img-fluid">
                <div class="project-status ${statusClass}">${project.status}</div>
            </div>
            <div class="project-content">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="project-funding">${project.funding}</div>
                <a href="#" class="btn btn-outline-primary btn-sm">Learn More</a>
            </div>
        </div>
    `;
    
    return col;
}

// Update research pagination
function updateResearchPagination() {
    const pagination = document.getElementById('research-pagination');
    if (!pagination) return;
    
    const filteredProjects = getFilteredResearchProjects();
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    
    pagination.innerHTML = '';
    
    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentResearchPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
    `;
    if (currentResearchPage > 1) {
        prevLi.addEventListener('click', function(e) {
            e.preventDefault();
            currentResearchPage--;
            displayResearchProjects();
            updateResearchPagination();
        });
    }
    pagination.appendChild(prevLi);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentResearchPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        
        li.addEventListener('click', function(e) {
            e.preventDefault();
            currentResearchPage = i;
            displayResearchProjects();
            updateResearchPagination();
        });
        
        pagination.appendChild(li);
    }
    
    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentResearchPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
    `;
    if (currentResearchPage < totalPages) {
        nextLi.addEventListener('click', function(e) {
            e.preventDefault();
            currentResearchPage++;
            displayResearchProjects();
            updateResearchPagination();
        });
    }
    pagination.appendChild(nextLi);
}

// Initialize publications page pagination
function initPublicationsPagePagination() {
    if (window.location.pathname.includes('publications.html')) {
        initPublicationsFilters();
        displayPublications();
        updatePublicationsPagination();
    }
}

// Initialize publications filters
function initPublicationsFilters() {
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    const topicFilter = document.getElementById('topic-filter');
    
    if (yearFilter) {
        yearFilter.addEventListener('change', function() {
            currentPublicationsFilters.year = this.value;
            currentPublicationsPage = 1;
            displayPublications();
            updatePublicationsPagination();
        });
    }
    
    if (typeFilter) {
        typeFilter.addEventListener('change', function() {
            currentPublicationsFilters.type = this.value;
            currentPublicationsPage = 1;
            displayPublications();
            updatePublicationsPagination();
        });
    }
    
    if (topicFilter) {
        topicFilter.addEventListener('change', function() {
            currentPublicationsFilters.topic = this.value;
            currentPublicationsPage = 1;
            displayPublications();
            updatePublicationsPagination();
        });
    }
}

// Filter publications based on current filters
function getFilteredPublications() {
    return publicationsData.filter(pub => {
        return (!currentPublicationsFilters.year || pub.year === currentPublicationsFilters.year) &&
               (!currentPublicationsFilters.type || pub.type === currentPublicationsFilters.type) &&
               (!currentPublicationsFilters.topic || pub.topic === currentPublicationsFilters.topic);
    });
}

// Display publications for current page
function displayPublications() {
    const publicationsGrid = document.getElementById('publications-grid');
    if (!publicationsGrid) return;
    
    const filteredPublications = getFilteredPublications();
    const startIndex = (currentPublicationsPage - 1) * publicationsPerPage;
    const endIndex = startIndex + publicationsPerPage;
    const publicationsToShow = filteredPublications.slice(startIndex, endIndex);
    
    publicationsGrid.innerHTML = '';
    
    publicationsToShow.forEach(publication => {
        const publicationItem = createPublicationItem(publication);
        publicationsGrid.appendChild(publicationItem);
    });
}

// Create publication item HTML
function createPublicationItem(publication) {
    const div = document.createElement('div');
    div.className = 'publication-item mb-4';
    
    const authorsHTML = publication.authors.map((author, index) => {
        if (index === 0) return `<strong>${author}</strong>`;
        return author;
    }).join(', ');
    
    div.innerHTML = `
        <div class="publication-content">
            <h5 class="publication-title">${publication.title}</h5>
            <div class="publication-authors">${authorsHTML}</div>
            <div class="publication-venue">${publication.venue}</div>
            <div class="publication-abstract">${publication.abstract}</div>
            <div class="publication-links">
                <a href="#" class="pub-link">
                    <i class="fas fa-file-pdf"></i> PDF
                </a>
                <a href="#" class="pub-link">
                    <i class="fab fa-github"></i> Code
                </a>
                <a href="#" class="pub-link">
                    <i class="fas fa-quote-left"></i> Cite
                </a>
            </div>
        </div>
        <div class="publication-metrics">
            <div class="metric">
                <span class="metric-value">${publication.citations}</span>
                <span class="metric-label">Citations</span>
            </div>
        </div>
    `;
    
    return div;
}

// Update publications pagination
function updatePublicationsPagination() {
    const pagination = document.getElementById('publications-pagination');
    if (!pagination) return;
    
    const filteredPublications = getFilteredPublications();
    const totalPages = Math.ceil(filteredPublications.length / publicationsPerPage);
    
    pagination.innerHTML = '';
    
    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPublicationsPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
    `;
    if (currentPublicationsPage > 1) {
        prevLi.addEventListener('click', function(e) {
            e.preventDefault();
            currentPublicationsPage--;
            displayPublications();
            updatePublicationsPagination();
        });
    }
    pagination.appendChild(prevLi);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPublicationsPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        
        li.addEventListener('click', function(e) {
            e.preventDefault();
            currentPublicationsPage = i;
            displayPublications();
            updatePublicationsPagination();
        });
        
        pagination.appendChild(li);
    }
    
    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPublicationsPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
    `;
    if (currentPublicationsPage < totalPages) {
        nextLi.addEventListener('click', function(e) {
            e.preventDefault();
            currentPublicationsPage++;
            displayPublications();
            updatePublicationsPagination();
        });
    }
    pagination.appendChild(nextLi);
}

// Initialize people page pagination
function initPeoplePagePagination() {
    if (window.location.pathname.includes('people.html')) {
        initFilterButtons();
        displayStudents();
        updatePagination();
    }
}

// Initialize filter buttons
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter and reset to page 1
            currentFilter = this.getAttribute('data-filter');
            currentPage = 1;
            
            // Display filtered students
            displayStudents();
            updatePagination();
        });
    });
}

// Filter students based on current filter
function getFilteredStudents() {
    if (currentFilter === 'all') {
        return studentsData;
    }
    return studentsData.filter(student => student.type === currentFilter);
}

// Display students for current page
function displayStudents() {
    const studentsGrid = document.getElementById('students-grid');
    if (!studentsGrid) return;
    
    const filteredStudents = getFilteredStudents();
    const startIndex = (currentPage - 1) * studentsPerPage;
    const endIndex = startIndex + studentsPerPage;
    const studentsToShow = filteredStudents.slice(startIndex, endIndex);
    
    studentsGrid.innerHTML = '';
    
    studentsToShow.forEach(student => {
        const studentCard = createStudentCard(student);
        studentsGrid.appendChild(studentCard);
    });
}

// Create student card HTML
function createStudentCard(student) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    
    const specialtiesHTML = student.specialties.map(specialty => 
        `<span class="specialty">${specialty}</span>`
    ).join('');
    
    col.innerHTML = `
        <div class="person-card student-card">
            <div class="person-image">
                <img src="${student.image}" alt="${student.name}" class="img-fluid rounded-circle">
            </div>
            <div class="person-info">
                <h5>${student.name}</h5>
                <div class="person-title">${student.title}</div>
                <p class="person-bio">${student.bio}</p>
                <div class="person-specialties">
                    ${specialtiesHTML}
                </div>
                <div class="person-contact">
                    <a href="mailto:${student.email}" class="contact-link">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="#" class="contact-link">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Update pagination
function updatePagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const filteredStudents = getFilteredStudents();
    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
    
    pagination.innerHTML = '';
    
    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
    `;
    if (currentPage > 1) {
        prevLi.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage--;
            displayStudents();
            updatePagination();
        });
    }
    pagination.appendChild(prevLi);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        
        li.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage = i;
            displayStudents();
            updatePagination();
        });
        
        pagination.appendChild(li);
    }
    
    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
    `;
    if (currentPage < totalPages) {
        nextLi.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage++;
            displayStudents();
            updatePagination();
        });
    }
    pagination.appendChild(nextLi);
}

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });
    }

    // Active nav link highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Scroll reveal animations
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add scroll reveal to elements
    const revealElements = document.querySelectorAll('.feature-card, .research-card, .stat-item');
    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Animated counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.ceil(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
            element.classList.add('counting');
        }
    }, 40);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect for hero section
function initParallax() {
    const heroBackground = document.querySelector('.neural-network');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}