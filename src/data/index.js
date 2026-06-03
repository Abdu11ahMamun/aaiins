// Real asset paths (files in src/assets/)
export const LOGO = new URL('../assets/aaiins-lab-logo.jpeg', import.meta.url).href;

export const PHOTOS = {
  faisal:       new URL('../assets/IMG_20251020_030347.png', import.meta.url).href,
  mamun:        new URL('../assets/Mamun (1).png', import.meta.url).href,
  arnisha:      new URL('../assets/Arnisha-Akter-pic.jpg', import.meta.url).href,
  adnan:        new URL('../assets/adnan.jpg', import.meta.url).href,
  wasimul:      new URL('../assets/wasimul.jpg', import.meta.url).href,
  jubair:       new URL('../assets/jubair-scaled.jpg', import.meta.url).href,
  shahed:       new URL('../assets/shahed-Ariful-Haque-Shahed-scaled.jpg', import.meta.url).href,
  subhey:       new URL('../assets/SubheySadi-scaled.jpg', import.meta.url).href,
  aktaruzzaman: new URL('../assets/Aktaruzzaman-Aktaruzzaman-Siddiquei-scaled.jpg', import.meta.url).href,
  hoque:        new URL('../assets/Hoque-Afsar.jpg', import.meta.url).href,
  noman:        new URL('../assets/noman-scaled.jpg', import.meta.url).href,
  ripon:        new URL('../assets/ripon.jpeg', import.meta.url).href,
  eashrat:      new URL('../assets/eashrat.jpg', import.meta.url).href,
  sayeem:       new URL('../assets/sayeem.jpg', import.meta.url).href,
  mahbub:       new URL('../assets/mahbub.jpg', import.meta.url).href,
  debopom:      new URL('../assets/Debopom.jpg', import.meta.url).href,
  deepu:        new URL('../assets/Deepu.jpg', import.meta.url).href,
  tithee:       new URL('../assets/Tithee.jpeg.jpg', import.meta.url).href,
  zeba:         new URL('../assets/Zeba.jpg', import.meta.url).href,
  nahi:         new URL('../assets/Nahi.jpg', import.meta.url).href,
  alvi:         new URL('../assets/Alvi.jpg', import.meta.url).href,
  fatiha:       new URL('../assets/Fatiha-Binta-Masud-Fatiha-Subha.png', import.meta.url).href,
  abhishek:     new URL('../assets/Abhishek-Nag.jpg', import.meta.url).href,
  abian:        new URL('../assets/Abian-Arefin-Ittesafun-Abian.jpg', import.meta.url).href,
  ar:           new URL('../assets/AR.jpg', import.meta.url).href,
  shahil:       new URL('../assets/shahil.jpg', import.meta.url).href,
  samiAzam:     new URL('../assets/sami-azam_0-removebg-preview-e1757102988261.png', import.meta.url).href,
  makRaiaan:    new URL('../assets/mak-raian.jpg', import.meta.url).href,
  chowa:        new URL('../assets/Chowa-scaled.jpg', import.meta.url).href,
};

export const UNSPLASH = {
  heroBg:     'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80&fit=crop',
  aboutA:     'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&fit=crop',
  aboutB:     'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop',
  strip:      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80&fit=crop',
  newsA:      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&fit=crop',
  newsB:      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&fit=crop',
  newsC:      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80&fit=crop',
  researchBg: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&q=80&fit=crop',
  peopleBg:   'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&fit=crop',
};

export const PEOPLE = {
  director: {
    name: 'Nur Muhammed Faisal',
    role: 'Director & Founder',
    photo: PHOTOS.faisal,
    bio: [
      'Nur Muhammed Faisal is the founder and director of AAIINS Lab. He completed his Doctoral Degree in Computer Science with a focus on applied machine learning and intelligent system design.',
      'He has contributed to over 30 high-impact research papers in international conferences and journals spanning AI, health informatics, and computer vision.',
      'He specialises in bridging experimental innovation with deployable AI, cultivating young researchers globally through interdisciplinary collaboration and mentorship.',
    ],
    links: { email: 'mailto:aaiins.research@gmail.com', scholar: '#', linkedin: '#', website: '#' },
  },
  associates: [
    { name: 'Md. Mamunur Rashid', role: 'Associate Director', photo: PHOTOS.mamun, bio: 'Deep learning researcher specialising in large-scale model deployment and neural architecture search for real-world applications.', links: { email: '#', scholar: '#', linkedin: '#' } },
    { name: 'Arnisha Akter', role: 'Associate Director', photo: PHOTOS.arnisha, bio: 'Expert in health informatics and clinical NLP, bridging AI research with real-world clinical decision support systems.', links: { email: '#', scholar: '#', linkedin: '#' } },
    { name: 'Adnan Islam', role: 'Associate Director', photo: PHOTOS.adnan, bio: 'Specialises in AI-driven environmental modelling, satellite data analysis, and ecosystem dynamics simulation.', links: { email: '#', scholar: '#', linkedin: '#' } },
  ],
  graduate: [
    { name: 'Wasimul Bari', role: 'PhD Student', photo: PHOTOS.wasimul, bio: 'Transformer architectures for multi-modal medical image analysis and clinical outcome prediction.', links: { scholar: '#', linkedin: '#' } },
    { name: 'Jubair Al Mahmud', role: 'PhD Student', photo: PHOTOS.jubair, bio: 'Generative models for satellite imagery synthesis used in climate change simulation and environmental monitoring.', links: { scholar: '#' } },
    { name: 'Shahed Ariful Haque', role: 'PhD Student', photo: PHOTOS.shahed, bio: 'Federated learning frameworks for privacy-preserving AI across distributed clinical hospital networks.', links: { scholar: '#' } },
    { name: 'SubheySadi', role: 'Masters Student', photo: PHOTOS.subhey, bio: 'LLM fine-tuning for automated medical record summarisation and clinical documentation generation.', links: { scholar: '#' } },
    { name: 'Aktaruzzaman Siddiquei', role: 'PhD Student', photo: PHOTOS.aktaruzzaman, bio: 'Computer vision for real-time crop disease detection using drone imagery and edge-deployed neural networks.', links: { scholar: '#', linkedin: '#' } },
    { name: 'Hoque Afsar', role: 'Masters Student', photo: PHOTOS.hoque, bio: 'Reinforcement learning for autonomous robotic systems in unstructured and search & rescue environments.', links: { scholar: '#' } },
    { name: 'Noman', role: 'PhD Student', photo: PHOTOS.noman, bio: 'Explainable AI methods for clinical diagnostic tools focusing on transparency and trust in healthcare systems.', links: { scholar: '#' } },
    { name: 'Ripon Kumar', role: 'PhD Student', photo: PHOTOS.ripon, bio: 'Adversarial robustness and secure AI model deployment across distributed edge computing environments.', links: { scholar: '#' } },
    { name: 'Eashrat Jahan', role: 'Masters Student', photo: PHOTOS.eashrat, bio: 'Transfer learning approaches for low-resource NLP tasks in underrepresented languages.', links: { scholar: '#' } },
    { name: 'Sayeem', role: 'PhD Student', photo: PHOTOS.sayeem, bio: 'Multi-agent reinforcement learning for smart grid optimisation and energy-efficient building management.', links: { scholar: '#' } },
    { name: 'Mahbub', role: 'Masters Student', photo: PHOTOS.mahbub, bio: 'Knowledge graph construction from biomedical literature using large language models.', links: { scholar: '#' } },
    { name: 'Debopom', role: 'PhD Student', photo: PHOTOS.debopom, bio: 'Deep learning for early detection of neurodegenerative disorders from multi-modal neuroimaging data.', links: { scholar: '#' } },
  ],
  undergrad: [
    { name: 'Deepu', role: 'Honours Student', photo: PHOTOS.deepu, bio: 'Object detection for agricultural yield estimation using drone imagery and YOLOv8 variants.', links: {} },
    { name: 'Tithee', role: 'Research Student', photo: PHOTOS.tithee, bio: 'Investigating algorithmic bias in AI-generated medical imaging datasets.', links: {} },
    { name: 'Zeba', role: 'Honours Student', photo: PHOTOS.zeba, bio: 'Generative AI for synthetic training data in low-resource medical imaging domains.', links: {} },
    { name: 'Nahi', role: 'Research Student', photo: PHOTOS.nahi, bio: 'Prompt engineering strategies to improve factual accuracy in LLM-based clinical question answering.', links: {} },
    { name: 'Alvi', role: 'Honours Student', photo: PHOTOS.alvi, bio: 'Image segmentation for satellite-based urban heat island mapping and green infrastructure planning.', links: {} },
    { name: 'Fatiha Binta Masud', role: 'Research Student', photo: PHOTOS.fatiha, bio: 'Deep learning for early-stage skin lesion classification from dermatoscopy images.', links: {} },
    { name: 'Abhishek Nag', role: 'Honours Student', photo: PHOTOS.abhishek, bio: 'Lightweight neural architectures for on-device AI inference in resource-constrained IoT environments.', links: {} },
    { name: 'Abian Arefin', role: 'Research Student', photo: PHOTOS.abian, bio: 'Contrastive self-supervised learning for remote sensing imagery land-cover change detection.', links: {} },
    { name: 'AR', role: 'Research Student', photo: PHOTOS.ar, bio: 'Automated machine learning (AutoML) pipelines for non-expert users in healthcare settings.', links: {} },
    { name: 'Shahil', role: 'Honours Student', photo: PHOTOS.shahil, bio: 'Multimodal sentiment analysis tools for social media monitoring in public health surveillance.', links: {} },
  ],
};

export const MENTORS = {
  chief: {
    name: 'Professor Sami Azam',
    role: 'Chief Mentor',
    photo: PHOTOS.samiAzam,
    org: ['Discipline Chair, Information Technology', 'Faculty of Science and Technology', 'Charles Darwin University, Australia'],
    bio: 'Professor Sami Azam leads the academic panel for AAIINS Lab, providing strategic research direction and mentorship. His expertise spans applied AI, computer vision, and intelligent systems, with over 120 international publications and a deep commitment to nurturing the next generation of AI researchers worldwide.',
    links: { email: '#', scholar: '#', website: '#' },
  },
  senior: [
    { name: 'Mohaimenul Azam Khan Raiaan', role: 'Senior Mentor', photo: PHOTOS.makRaiaan, org: 'PhD Student · Dept. of Data Science & AI · Monash University, Australia', links: { email: '#', scholar: '#', linkedin: '#', website: '#' } },
    { name: 'Sadia Sultana Chowa', role: 'Senior Mentor', photo: PHOTOS.chowa, org: 'PhD Student · Dept. of Software Systems & Cybersecurity · Monash University, Australia', links: { email: '#', scholar: '#', linkedin: '#', website: '#' } },
    { name: 'Eashrat Jahan', role: 'Senior Mentor', photo: PHOTOS.eashrat, org: 'Graduate Researcher · AAIINS Lab', links: { email: '#', scholar: '#', linkedin: '#' } },
    { name: 'Ripon Kumar', role: 'Senior Mentor', photo: PHOTOS.ripon, org: 'PhD Student · AAIINS Lab', links: { email: '#', scholar: '#', linkedin: '#' } },
  ],
};

export const PUBLICATIONS = [
  { year: 2025, items: [
    { title: 'AI-driven biodiversity monitoring using satellite imagery and deep convolutional networks', authors: 'Khan Raiaan MA, Chowa SS, Azam S, Faisal NM · et al.', journal: 'Environmental Informatics, 12(3), 2025', doi: '#', tags: ['Environmental', 'Computer Vision'] },
    { title: 'Multimodal health record analysis with vision-language transformer architectures for clinical prediction', authors: 'Azam S, Khan Raiaan MA, Faisal NM · et al.', journal: 'Journal of Biomedical Informatics, 58(2), 2025', doi: '#', tags: ['Health', 'NLP'] },
    { title: 'LLM-assisted code generation for scientific computing: benchmarks and failure modes', authors: 'Faisal NM, Rashid M · et al.', journal: 'Nature Machine Intelligence, 7, 2025', doi: '#', tags: ['Generative AI'] },
  ]},
  { year: 2024, items: [
    { title: 'Generative adversarial networks for synthetic medical imaging data augmentation in low-resource settings', authors: 'Chowa SS, Azam S, Faisal NM · et al.', journal: 'IEEE Transactions on Medical Imaging, 43(2), 2024', doi: '#', tags: ['Health', 'Generative AI'] },
    { title: 'Real-time object detection for autonomous environmental sensing: a benchmark study', authors: 'Khan Raiaan MA, Faisal NM · et al.', journal: 'Computer Vision and Image Understanding, 230, 2024', doi: '#', tags: ['Computer Vision', 'Environmental'] },
    { title: 'Federated learning for privacy-preserving clinical decision support across distributed hospital networks', authors: 'Rashid M, Azam S · et al.', journal: 'npj Digital Medicine, 6(1), 2024', doi: '#', tags: ['Health', 'Machine Learning'] },
    { title: 'Contrastive self-supervised learning for remote sensing image classification without labels', authors: 'Islam A, Faisal NM · et al.', journal: 'ISPRS Journal of Photogrammetry, 198, 2024', doi: '#', tags: ['Computer Vision', 'Environmental'] },
  ]},
  { year: 2023, items: [
    { title: 'Explainable AI for radiological diagnosis: attention mechanisms and clinical validation', authors: 'Akter A, Azam S · et al.', journal: 'Radiology: Artificial Intelligence, 5(4), 2023', doi: '#', tags: ['Health', 'AI'] },
    { title: 'Ecosystem dynamics modelling with physics-informed neural networks and satellite time series', authors: 'Islam A, Faisal NM · et al.', journal: 'Global Change Biology, 29(8), 2023', doi: '#', tags: ['Environmental', 'Machine Learning'] },
    { title: 'A survey of large language models in biomedical applications: capabilities and limitations', authors: 'Faisal NM, Chowa SS, Azam S · et al.', journal: 'Briefings in Bioinformatics, 24(5), 2023', doi: '#', tags: ['Health', 'NLP', 'AI'] },
  ]},
];

export const NEWS = [
  { date: 'April 14, 2025', title: 'AAIINS Lab receives $2.4M ARC Discovery Grant for health AI research', excerpt: 'The lab has been awarded a competitive ARC Discovery grant to develop privacy-preserving federated learning systems for cross-institutional clinical data analysis.', photo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&fit=crop', tag: 'Funding' },
  { date: 'February 28, 2025', title: 'Khan Raiaan wins Best Paper at ICCV 2025 for climate modelling work', excerpt: 'Congratulations to Senior Mentor Khan Raiaan, whose paper on generative satellite imagery synthesis was awarded Best Student Paper at ICCV.', photo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&fit=crop', tag: 'Award' },
  { date: 'January 10, 2025', title: 'New partnership with Monash University School of Medicine announced', excerpt: 'AAIINS Lab and Monash Medicine have signed a formal research collaboration agreement to develop AI-assisted diagnostic tools for early cancer detection.', photo: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80&fit=crop', tag: 'Partnership' },
];

export const RESEARCH_AREAS = [
  { num: '01', title: 'Artificial Intelligence', tag: 'Core', desc: 'Building systems capable of reasoning, planning, and natural language understanding to solve complex real-world challenges at scale and across domains.' },
  { num: '02', title: 'Machine Learning', tag: 'Core', desc: 'Supervised, unsupervised, and reinforcement learning using advanced deep learning architectures and novel training paradigms for diverse applications.' },
  { num: '03', title: 'Computer Vision', tag: 'Applied', desc: 'Enabling machines to interpret visual data — from image classification and object detection to complex scene understanding and 3D reconstruction.' },
  { num: '04', title: 'Generative AI', tag: 'Emerging', desc: 'Designing models that synthesize realistic images, text, audio, and video — unlocking new frontiers in creative AI and human-computer interaction.' },
  { num: '05', title: 'Health Informatics', tag: 'Applied', desc: 'Applying AI to medical images, physiological signals, and clinical records to support diagnosis, prognosis prediction, and personalised medicine.' },
  { num: '06', title: 'Environmental Modelling', tag: 'Applied', desc: 'AI-powered climate and ecosystem models integrating satellite, sensor, and simulation data to understand natural systems and anticipate future impacts.' },
];

export const PUB_TAGS = ['All', 'AI', 'Health', 'Computer Vision', 'Generative AI', 'Environmental', 'NLP', 'Machine Learning'];
