import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { UNSPLASH } from '../data';
import styles from './People.module.css';

const imageMap = import.meta.glob('../assets/*', { eager: true, import: 'default' });
const getImage = (fileName) => imageMap[`../assets/${fileName}`] || null;

const MENTORS_CHIEF = {
  name: 'Professor Sami Azam',
  role: 'Chief Mentor',
  org: ['Discipline Chair, Information Technology', 'Faculty of Science and Technology', 'Charles Darwin University, Australia'],
  bio: 'Professor Sami Azam leads the academic panel for AAIINS Lab, providing strategic research direction and mentorship. His expertise spans applied AI, computer vision, and intelligent systems, with over 120 international publications and a deep commitment to nurturing the next generation of AI researchers worldwide.',
  image: getImage('sami-azam_0-removebg-preview-e1757102988261.png'),
  links: { email: 'mailto:sami.azam@cdu.edu.au', scholar: 'https://www.scopus.com/authid/detail.uri?authorId=54894635100', website: 'https://researchers.cdu.edu.au/en/persons/sami-azam' },
};

const MENTORS_SENIOR = [
  {
    name: 'Mohaimenul Azam Khan Raiaan',
    role: 'Senior Mentor',
    title: 'PhD Student — Data Science & Artificial Intelligence',
    dept: 'NativeBee+ Tech Facility Lab, Monash University',
    inst: 'Melbourne, VIC, Australia',
    bio: 'First-year Ph.D. student at Monash University supervised by Professor Alan Dorin and Associate Professor Ehsan Abbasnejad. His research focuses on computer vision and its applications in the behavioral analysis of bees, with emphasis on algorithm design for 3D modeling. Previously a Consultant-Research Assistant at Charles Darwin University contributing to computer vision and machine learning projects. He hosts The Half Hour Hustle every Friday 4:30–7:30 PM Melbourne time — open to anyone for discussions on research, ideas, and collaboration.',
    image: getImage('mak-raian.jpg'),
    links: {
      email: 'mailto:mohaimenul.raiaan@monash.edu',
      linkedin: 'https://www.linkedin.com/in/makraiaan/',
      scholar: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=Gg4yXLoAAAAJ',
      website: 'https://mak-raiaan.github.io/',
    },
  },
  {
    name: 'Sadia Sultana Chowa',
    role: 'Senior Mentor',
    title: 'PhD Student — Software Systems & Cybersecurity',
    dept: 'Monash University, Australia',
    inst: 'Melbourne, VIC, Australia',
    bio: 'First-year PhD student at Monash University. Her research focuses on Large Language Models (LLMs), Computer Vision, and Artificial Intelligence, particularly in building intelligent vision–language systems and multimodal AI applications. Previously a remote Consultant–Research Assistant at Charles Darwin University contributing to applied AI research. Actively mentors students and early-stage researchers from Bangladesh through AAIINS Lab, guiding them on AI-driven research projects and fostering collaborative learning.',
    image: getImage('Chowa-scaled.jpg'),
    links: {
      email: 'mailto:sadia15-3052@diu.edu.bd',
      linkedin: 'https://www.linkedin.com/in/sadia-sultana-chowa-/',
      scholar: 'https://scholar.google.com/citations?user=JKcqHrMAAAAJ&hl=en',
      website: 'https://sultana-chowa.github.io/',
    },
  },
];

const director = {
  name: 'Nur Mohammad Fahad',
  role: 'Director',
  joined: 'Joined August 2023',
  bio: "Nur Mohammad Fahad is a Lecturer at the University of Scholars, completed his bachelor's degree in CSE from United International University (UIU), Bangladesh. With over 3.5 years of active research experience, he has contributed to multiple high impact Q1 publications and mentored research groups in the fields of computer vision, optimization, and UAV systems. His research focuses on developing efficient AI systems integrating reasoning and adaptability for complex challenges. Alongside academic expertise, his involvement in industry-blended projects has strengthened his practical and analytical skills, reflecting his strong commitment to developing sustainable and intelligent AI solutions for real-world applications.",
  image: getImage('IMG_20251020_030347.png'),
  links: {
    email: 'mailto:nfahad191040@bscse.uiu.ac.bd',
    linkedin: 'https://www.linkedin.com/in/nur-mohammad-fahad-a90482229/',
    scholar: 'https://scholar.google.com/citations?user=ztlVksUAAAAJ&hl=en&oi=ao',
    website: 'https://sites.google.com/bscse.uiu.ac.bd/nmfahad/home',
  },
};

const associateDirectors = [
  {
    name: 'Arefin Ittesafun Abian',
    role: 'Associate Director',
    subRole: 'Research Operations',
    joined: 'Joined August 2023',
    bio: "Arefin Ittesafun Abian is a Research Assistant in the Department of Computer Science and Engineering at United International University, Bangladesh. She graduated from the same institution with Magna Cum Laude distinction. She has been doing research on Computer Vision, Explainable Artificial Intelligence (XAI), Medical Image Analysis, and Environmental Modelling. During her undergraduate studies, she served as an Undergraduate Teaching Assistant and Grader for several courses, gaining valuable experience in academic instruction and student mentoring while contributing to the department's teaching activities.",
    image: getImage('Abian-Arefin-Ittesafun-Abian.jpg'),
    links: {
      email: 'mailto:aabian191042@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/arefin-ittesafun-abian-439ab4255/',
      scholar: 'https://scholar.google.com/citations?user=6yyi8qgAAAAJ&hl=en&oi=ao',
      website: 'https://ittesafunabian.github.io/',
    },
  },
  {
    name: 'Abdur Rahman',
    role: 'Associate Director',
    subRole: 'Research Integrity and Ethics',
    joined: 'Joined August 2023',
    bio: "Md. Abdur Rahman is affiliated with United International University (UIU), Bangladesh. He currently works as a Research Assistant at UIU on a grant in collaboration with Charles Darwin University, Australia. His research interests include machine learning, pattern recognition, signal processing, and computer vision. A significant part of his work focuses on 3D and multimodal imaging. He is also motivated by challenges in limited-data environments and low-resource settings, and he aims to design novel, efficient, and applicable frameworks for real-world scenarios.",
    image: getImage('AR.jpg'),
    links: {
      email: 'mailto:mrahman202260@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/abdurrahman4127/',
      scholar: 'https://scholar.google.com/citations?user=Pektt38AAAAJ&hl=en',
      website: 'https://abdurrahman4127.github.io/',
    },
  },
  {
    name: 'Debopom Sutradhar',
    role: 'Associate Director',
    subRole: 'Research Strategy and Impact',
    joined: 'Joined August 2023',
    bio: "Debopom Sutradhar holds a bachelor's degree in Computer Science and Engineering from United International University and currently working as Research Administrator at AIINS Lab. His research involves innovative applications of computer vision techniques. Debopom's recently published paper introduces a system for detecting cervical spine fractures using YOLOv8 with a deep attention-based vertebrae classification method, ensuring explainability. His other projects include domain adaptation via latent space consistency, CT scan denoising using reinforcement learning and a dual path encoder for land cover segmentation using SAR and optical images.",
    image: getImage('Debopom.jpg'),
    links: {
      email: 'mailto:dsutradhar201046@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/debopom-sutradhar-748496232/',
      scholar: 'https://scholar.google.com/citations?user=18BSv5UAAAAJ&hl=en&oi=ao',
      website: 'https://debopom.github.io/',
    },
  },
];

const graduateResearchers = [
  {
    name: 'Ripon Kumar Debnath',
    joined: 'Joined September 2023',
    bio: "Ripon Kumar Debnath received his Bachelor's degree in Computer Science and Engineering from United International University (UIU) in 2024 and is currently pursuing his Master's degree at UIU. He is working as a Research Assistant at the Institute for Advanced Research (IAR), UIU. His research interests include computer vision, natural language processing (NLP), graph theory, health informatics, and explainable artificial intelligence (XAI). He is actively engaged in innovative research activities aimed at advancing intelligent systems with practical applications in healthcare and data-driven technologies.",
    image: getImage('ripon.jpeg'),
    links: {
      email: 'mailto:rdebnath192071@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/ripon-k-debnath',
      scholar: 'https://scholar.google.com/citations?user=ftnnKzcAAAAJ&hl=en&oi=ao',
    },
  },
  {
    name: 'Musarrat Zeba',
    joined: 'Joined January 2025',
    bio: "Musarrat Zeba is an aspiring software engineer who completed her B.Sc. in Computer Science and Engineering from United International University (UIU). She works as a software engineer, building highly configurable and customized backend systems to solve real-world problems. Her expertise includes developing scalable and secure server-side architectures, APIs, and database solutions. Her research focuses on ethically aware and trustworthy Large Language Models (LLMs), exploring ways to make AI systems more reliable, transparent, and aligned with human values while creating practical solutions for real-world challenges.",
    image: getImage('Zeba.jpg'),
    links: {
      email: 'mailto:mzeba201090@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/musarrat-zeba-42ab52251/',
      scholar: 'https://scholar.google.com/citations?user=eeQdj7QAAAAJ&hl=en',
      website: 'https://zeba201090.github.io/portfolio-zeba/',
    },
  },
  {
    name: 'Abdullah Al Mamun',
    joined: 'Joined January 2025',
    bio: "Abdullah Al Mamun specializes in building secure, intelligent solutions for the fintech sector. His core strengths include Java Spring Boot REST API development and Large Language Model (LLM) applications. He has significantly contributed to key financial systems like BEFTN, RTGS, and payment gateways, as well as the Ababil Islamic Core Banking System. A notable achievement is his design of an LLM-powered Shariah Auditing System that automates compliance for Islamic banking. Abdullah holds a B.Sc. in Computer Science & Engineering with a major in Data Science from United International University.",
    image: getImage('Mamun (1).png'),
    links: {
      email: 'mailto:cs.abdullah.mamun@gmail.com',
      linkedin: 'https://www.linkedin.com/in/abdu11ahmamun',
    },
  },
  {
    name: 'Wasimul Karim',
    joined: 'Joined December 2023',
    bio: "Wasimul Karim holds a Bachelor of Science degree in Computer Science and Engineering from United International University (UIU), Bangladesh, graduating with Magna Cum Laude distinction. He has over two years of experience serving as an Undergraduate Teaching Assistant at UIU. He is actively engaged in collaborative research, submitted scientific papers in Q1 journal. His research interests include 3D medical imaging, Generative AI, energy and environmental modeling, and multimodal learning. He is currently employed as a Research Assistant at University of Scholars, where he showcases expertise in multiple project works.",
    image: getImage('wasimul.jpg'),
    links: {
      email: 'mailto:wkarim211105@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/wasimulkarim/',
      scholar: 'https://scholar.google.com/citations?user=CHErqJ4AAAAJ&hl=en',
    },
  },
  {
    name: 'Afsar Ul Hoque',
    joined: 'Joined August 2025',
    bio: "Afsar Ul Hoque is an aspiring researcher with a strong academic background in Electrical and Electronics Engineering from Ahsanullah University of Science & Technology. His research interests include Biomedical Instrumentation, Digital Signal Processing, Semiconductor Electronics, and Computer Architecture. With a foundation in Signals and Communication, he is particularly interested in Biomedical Signal Processing and its applications. He is also expanding his knowledge in machine learning and artificial intelligence, aiming to integrate data-driven approaches with signal analysis.",
    image: getImage('Hoque-Afsar.jpg'),
    links: {
      email: 'mailto:hoqueafsar@gmail.com',
      linkedin: 'https://www.linkedin.com/in/hoqueafsar',
    },
  },
  {
    name: 'Subhey Sadi Rahman',
    joined: 'Joined January 2024',
    bio: "Subhey Sadi Rahman has completed his graduation from United International University (UIU), Bangladesh and currently is affiliated with the AIINS Lab and the Institute for Advanced Research (IAR), UIU. His research interests include medical imaging, artificial intelligence in healthcare, natural language processing, and large language models (LLMs). He has successfully completed three research works and continues to contribute to ongoing projects in these domains. During his undergraduate studies, he also served as a Grader and Undergraduate Teaching Assistant, demonstrating strong academic engagement and research dedication.",
    image: getImage('SubheySadi-scaled.jpg'),
    links: {
      email: 'mailto:srahman212074@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/subheysadirahman/',
      scholar: 'https://scholar.google.com/citations?user=wcePoMcAAAAA&hl=en',
    },
  },
  {
    name: 'Kishoar Jahan Tithee',
    joined: 'Joined January 2025',
    bio: "Kishoar Jahan Tithee is a Software Quality Assurance Engineer with expertise in manual and automation testing across fintech and telecommunication domains. She has worked extensively on core banking systems and high-traffic consumer mobile applications, ensuring quality, reliability, and performance. Her professional experience in ensuring software quality has fueled a deep interest in large language models, machine learning, and artificial intelligence. She is particularly motivated to explore how these technologies can redefine quality to enable more intelligent, adaptive, and effective solutions.",
    image: getImage('Tithee.jpeg.jpg'),
    links: {
      email: 'mailto:kj.tithee@asthait.com',
      linkedin: 'https://www.linkedin.com/in/kishoar/',
    },
  },
  {
    name: 'Fatiha Binta Masud',
    joined: 'Joined January 2025',
    bio: "Fatiha Binta Masud is currently affiliated with Tutorsplan Technology Limited as an Associate Technical Product Manager. She is an emerging researcher with interests in Computer Vision, Deep Learning, and Medical Image Analysis. Her focus is on developing intelligent and explainable imaging models that support healthcare applications and clinical decision-making. She is passionate about interdisciplinary research that connects technology with medical science, aiming to create innovative and practical solutions that improve diagnostic accuracy.",
    image: getImage('Fatiha-Binta-Masud-Fatiha-Subha.png'),
    links: {
      email: 'mailto:fmasud191124@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/fatihasubha/',
      scholar: 'https://scholar.google.com/citations?user=k1PBR1IAAAAJ&hl=en',
      website: 'https://sites.google.com/view/fatiha-binta-masud',
    },
  },
  {
    name: 'Arnisha Akter',
    joined: 'Joined January 2025',
    bio: "Arnisha is currently working as an Associate Technical Product Manager while conducting research work in AIINS Lab on multimodal deep learning systems in medical imaging. Her work focuses on developing integrated frameworks that facilitate visual language models on medical images for automated medical report generation and improve clinical decision support. She aims to develop advance models that improve the interpretability in multimodal medical AI systems to ensure more transparent and trustworthy healthcare applications.",
    image: getImage('Arnisha-Akter-pic.jpg'),
    links: {
      email: 'mailto:aakter191194@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/arnisha-akter/',
      website: 'https://sites.google.com/view/arnisha-akter',
    },
  },
  {
    name: 'MD Aktaruzzaman Siddiquei',
    joined: 'Joined July 2025',
    bio: "Aktaruzzaman Siddiquei is currently pursuing an M.Sc. in Applied Statistics and Data Science at Jahangirnagar University. He holds a B.Sc. in Computer Science and Engineering from Daffodil International University. He is working to found DietXperts, a startup focused on promoting healthy eating habits and personalized nutrition. His research interests span deep learning, computer vision, and data analytics. He actively participates in leadership initiatives and has earned recognition in national science and entrepreneurship competitions.",
    image: getImage('Aktaruzzaman-Aktaruzzaman-Siddiquei-scaled.jpg'),
    links: {
      email: 'mailto:aktaruzzaman15-3132@diu.edu.bd',
      linkedin: 'https://www.linkedin.com/in/aktaruzzaman-siddiquei-2947351a9',
      scholar: 'https://scholar.google.com/citations?user=kEGrQfAAAAAJ&hl=en',
    },
  },
  {
  name: 'Soykot Podder',
  joined: 'Joined January 2026',
  bio: 'Soykot Podder is a Machine Learning Engineer with expertise in Machine Learning, Deep Learning, and Computer Vision. Awarded the 100% SII Scholarship in 2021 for his M.Tech at Indian Institute of Information Technology Design and Manufacturing Jabalpur, he builds scalable AI systems for object detection, image classification, and real-time vision applications. Skilled in Python, Django, FastAPI, and end-to-end ML pipelines, Soykot develops high-performance models and integrates them into production.',
  image: getImage('Soykot Podder.jpeg'),
  links: {
    email: 'mailto:diptopodder95@gmail.com',
    linkedin: 'https://www.linkedin.com/in/soykot-podder-424684146/',
    website: 'https://protfolio-soykot.vercel.app',
  },
}
];

const undergraduateResearchers = [
  {
    name: 'Md. Adnanul Islam',
    joined: 'Joined January 2024',
    bio: "Md. Adnanul Islam is currently a student at United International University. His research focuses on large language models and computer vision, and he is currently working on multiple projects of this domain. Alongside his research, he also enjoys developing AI-based software applications. With strong dedication and curiosity, he is committed to building his skills as a researcher and contributing meaningful work that bridges theory with practical impact in these fields.",
    image: getImage('Adnanul-Adnanul-Islam-scaled.jpg'),
    links: {
      email: 'mailto:mislam221096@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/md-adnanul-islam-443158291',
      scholar: 'https://scholar.google.com/citations?user=1egXc3wAAAAJ&hl=en',
    },
  },
  {
    name: 'Riasad Alvi',
    joined: 'Joined April 2025',
    bio: "Riasad Alvi is currently pursuing a Bachelor of Science in Computer Science and Engineering at United International University (UIU), Bangladesh. He is deeply fascinated by the transformative potential of Generative AI and Large Language Models (LLMs) in addressing complex real-world challenges. His research interests include Computer Vision, LLMs, and Multimodal Machine Learning. He aspires to advance AI innovations for meaningful societal impact.",
    image: getImage('Alvi.jpg'),
    links: {
      email: 'mailto:ralvi212069@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/riasad-alvi-175a5a231/',
      scholar: 'https://scholar.google.com/citations?user=WuGGzcAAAAAJ',
    },
  },
  {
    name: 'Md Noman Hossain',
    joined: 'Joined June 2025',
    bio: "Md Noman Hossain is an undergraduate student in Computer Science at United International University. His research interests include AI, with a focus on Computer Vision, Semi-Supervised Learning, and Large Language Models. His work focuses on advancing object detection and segmentation techniques for monitoring, explainable AI, and information reliability. He has recently worked on Marine Pollution Mapping using Deep Learning with spatial-temporal awareness.",
    image: getImage('noman-scaled.jpg'),
    links: {
      email: 'mailto:mhossain222159@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/noman-hossainn/',
    },
  },
  {
    name: 'Jubair Ahmed',
    joined: 'Joined March 2024',
    bio: "Jubair Ahmed is an undergraduate student in Computer Science & Engineering at United International University, Bangladesh. His research focuses on advancing computer vision and medical image analysis, emphasizing deep learning innovations that enhance diagnostic accuracy and model interpretability. He is particularly interested in developing explainable and efficient AI systems for real-world applications. Passionate about pushing the boundaries of artificial intelligence, Jubair actively engages in collaborative research projects.",
    image: getImage('jubair-scaled.jpg'),
    links: {
      email: 'mailto:jahmed222136@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/jubair-ahmed/',
      website: 'https://jubairahmed010.github.io/',
    },
  },
  {
    name: 'Ariful Haque Shahed',
    joined: 'Joined November 2024',
    bio: "Ariful Haque Shahed is an undergraduate student of Shahjalal University of Science and Technology. His research interest includes mathematical modeling, artificial intelligence, and complex theory. Ariful is determined to contribute cutting-edge advancements in these fields by combining theoretical insights with practical applications, aiming to solve real-world problems through interdisciplinary approaches. Currently, he is utilising expertise to design a physics-informed deep learning algorithm to predict wildfire spread.",
    image: getImage('shahed-Ariful-Haque-Shahed-scaled.jpg'),
    links: {
      email: 'mailto:arifulhaqueshahed@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ariful-haque-shahed-626727199',
    },
  },
  {
  name: 'Md Alif Abdullah Ibne Ezaz',
  joined: 'Joined January 2026',
  bio: 'Md Alif Abdullah Ibne Ezaz is an undergraduate student in Computing and Information System, majoring in Artificial Intelligence at Daffodil International University. His academic training includes data structures, algorithms, object-oriented programming, database systems, and software engineering. His research interests focus on deep learning, computer vision, and natural language processing, with an emphasis on developing scalable, efficient AI models for healthcare and data-driven real-world applications.',
  image: getImage('Alif Abdullah.jpeg'),
  links: {
    email: 'mailto:ezaz2312091019@diu.edu.bd',
    linkedin: 'https://www.linkedin.com/in/alif-abdullah-',
    scholar: 'https://scholar.google.com/citations?user=s0VeZTwAAAAJ&hl=en',
   },
  },
];

const LINK_ICONS = {
  email: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  linkedin: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  scholar: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  website: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

const LINK_LABELS = {
  email: 'Email',
  linkedin: 'LinkedIn',
  scholar: 'Scholar',
  website: 'Website',
};
    
function LinkButton({ linkKey, href, name, isDir }) {
  return React.createElement(
    'a',
    {
      href: href,
      className: isDir ? styles.dirLink : styles.backLink,
      target: linkKey !== 'email' ? '_blank' : undefined,
      rel: linkKey !== 'email' ? 'noopener noreferrer' : undefined,
      'aria-label': LINK_LABELS[linkKey] + ' of ' + name,
    },
    LINK_ICONS[linkKey],
    LINK_LABELS[linkKey]
  );
}

function FlipCard({ person, index }) {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(function() {
    const obs = new IntersectionObserver(
      function(entries) {
        const e = entries[0];
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return function() { obs.disconnect(); };
  }, []);

  function toggle() {
    setFlipped(function(f) { return !f; });
  }

 return (
    <div
      ref={ref}
      className={styles.flipOuter + ' ' + (visible ? styles.flipVisible : '')}
      style={{ transitionDelay: (index % 4) * 75 + 'ms' }}
      onClick={toggle}
      onKeyDown={function (e) { if (e.key === 'Enter' || e.key === ' ') toggle(); }}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={person.name + ' — click to ' + (flipped ? 'hide' : 'show') + ' bio'}
    >
      <div className={styles.flipInner + ' ' + (flipped ? styles.flipped : '')}>

        {/* FRONT */}
        <div className={styles.flipFront}>
          <div className={styles.cardPhoto}>
            {person.image
              ? <img src={person.image} alt={'Photo of ' + person.name} loading="lazy" />
              : <div className={styles.cardInitials}>{person.name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 3)}</div>
            }
            <div className={styles.cardGradient} aria-hidden="true" />
            <div className={styles.cardHint} aria-hidden="true">tap for bio</div>
          </div>
          <div className={styles.cardFrontInfo}>
            <p className={styles.cardRole}>
              {person.role || 'Graduate Researcher'}
              {person.subRole && <span className={styles.cardSubRole}> — {person.subRole}</span>}
            </p>
            <h3 className={styles.cardName}>{person.name}</h3>
            {person.joined && <p className={styles.cardJoined}>{person.joined}</p>}

            {/* ── Social icons on front ── */}
            {person.links && Object.keys(person.links).length > 0 && (
              <div
                className={styles.frontLinks}
                onClick={function (e) { e.stopPropagation(); }}
              >
                {Object.keys(person.links).map(function (key) {
                  return React.createElement(
                    'a',
                    {
                      key: key,
                      href: person.links[key],
                      className: styles.frontLink,
                      target: key !== 'email' ? '_blank' : undefined,
                      rel: key !== 'email' ? 'noopener noreferrer' : undefined,
                      'aria-label': LINK_LABELS[key] + ' of ' + person.name,
                      title: LINK_LABELS[key],
                    },
                    LINK_ICONS[key]
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* BACK */}
        <div className={styles.flipBack}>
          <div className={styles.backScroll}>
            <p className={styles.cardRole}>
              {person.role || 'Graduate Researcher'}
              {person.subRole && <span className={styles.cardSubRole}> — {person.subRole}</span>}
            </p>
            <h3 className={styles.cardNameBack}>{person.name}</h3>
            {person.joined && <p className={styles.cardJoined}>{person.joined}</p>}
            <p className={styles.backBio}>{person.bio}</p>
          </div>
          <div className={styles.backCloseHint} aria-hidden="true">tap to close ×</div>
        </div>

      </div>
    </div>
  );
}
function TiltCard({ mentor, index }) {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const cardRef = useRef(null);

  useEffect(function() {
    const obs = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) { setVisible(true); obs.unobserve(entries[0].target); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return function() { obs.disconnect(); };
  }, []);

  function onMove(e) {
    if (flipped) return;
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -6,
      y: ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 6,
    });
  }

  function toggle() { setFlipped(function(f) { return !f; }); }

  return (
    <div
      ref={ref}
      className={styles.tiltOuter + ' ' + (visible ? styles.tiltVisible : '')}
      style={{ transitionDelay: index * 110 + 'ms' }}
    >
      <div
        ref={cardRef}
        className={styles.tiltScene}
        onClick={toggle}
        onKeyDown={function(e) { if (e.key === 'Enter' || e.key === ' ') toggle(); }}
        tabIndex={0}
        role="button"
        aria-pressed={flipped}
        aria-label={mentor.name + ' — click to ' + (flipped ? 'hide' : 'show') + ' bio'}
        style={{
          transform: !flipped && hovered
            ? 'perspective(900px) rotateX(' + tilt.x + 'deg) rotateY(' + tilt.y + 'deg) scale3d(1.02,1.02,1.02)'
            : 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
          transition: hovered && !flipped ? 'transform 0.12s ease' : 'transform 0.55s ease',
        }}
        onMouseMove={onMove}
        onMouseEnter={function() { setHovered(true); }}
        onMouseLeave={function() { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      >
        <div className={styles.tiltFlipInner + ' ' + (flipped ? styles.tiltFlipped : '')}>

          {/* ── FRONT — photo, name, org, social icons ── */}
          <div className={styles.tiltFront}>
            <div className={styles.tiltAccent} aria-hidden="true" />
            <div className={styles.tCTL} aria-hidden="true" />
            <div className={styles.tCBR} aria-hidden="true" />
            <div
              className={styles.tiltGlare}
              style={{
                opacity: hovered && !flipped ? 0.1 : 0,
                background: 'radial-gradient(circle at ' + (50 + tilt.y * 4) + '% ' + (50 + tilt.x * 4) + '%, rgba(200,168,107,0.9), transparent 65%)',
              }}
              aria-hidden="true"
            />
            <div className={styles.tiltPhotoWrap}>
              {mentor.image
                ? React.createElement('img', { src: mentor.image, alt: 'Photo of ' + mentor.name, loading: 'lazy' })
                : React.createElement('div', { className: styles.tiltInitials }, mentor.name.split(' ').map(function(w) { return w[0]; }).join('').slice(0, 2))
              }
              <div className={styles.tiltShine} aria-hidden="true" />
              <div className={styles.tiltPhotoGradient} aria-hidden="true" />
              <div className={styles.tiltHint} aria-hidden="true">tap for bio</div>
            </div>
            <div className={styles.tiltInfo}>
              <div className={styles.tiltRoleRow}>
                <span className={styles.tiltRole}>{mentor.role}</span>
                <div className={styles.tiltRoleLine} aria-hidden="true" />
              </div>
              <h3 className={styles.tiltName}>{mentor.name}</h3>
              {mentor.title && React.createElement('p', { className: styles.tiltTitle }, mentor.title)}
              {mentor.dept && React.createElement('p', { className: styles.tiltDept }, mentor.dept)}
              {mentor.inst && React.createElement('p', { className: styles.tiltInst }, mentor.inst)}
              {/* Social icons on front */}
              <div
                className={styles.tiltSocial}
                onClick={function(e) { e.stopPropagation(); }}
              >
                {Object.keys(mentor.links).map(function(key) {
                  return React.createElement('a', {
                    key: key,
                    href: mentor.links[key],
                    className: styles.tiltSocialIcon,
                    target: key !== 'email' ? '_blank' : undefined,
                    rel: key !== 'email' ? 'noopener noreferrer' : undefined,
                    'aria-label': LINK_LABELS[key] + ' of ' + mentor.name,
                    title: LINK_LABELS[key],
                  }, LINK_ICONS[key]);
                })}
              </div>
            </div>
          </div>

          {/* ── BACK — bio summary ── */}
          <div className={styles.tiltBack}>
            <div className={styles.tiltBackAccent} aria-hidden="true" />
            <div className={styles.tiltBackContent}>
              <span className={styles.tiltRole}>{mentor.role}</span>
              <h3 className={styles.tiltNameBack}>{mentor.name}</h3>
              {mentor.inst && React.createElement('p', { className: styles.tiltInst, style: { marginBottom: '0.75rem' } }, mentor.inst)}
              <div className={styles.tiltBackRule} aria-hidden="true" />
              <p className={styles.tiltBio}>{mentor.bio}</p>
            </div>
            <div className={styles.tiltCloseHint} aria-hidden="true">tap to close ×</div>
          </div>

        </div>
      </div>
    </div>
  );
}
function PeopleSection({ id, title, badge, count, people, alt }) {
  return (
    <section id={id} aria-label={title} className={alt ? styles.altBg : styles.normBg}>
      <div className={styles.segHeader}>
        <h2 className={styles.segTitle}>{title}</h2>
        <span className={styles.segBadge}>{badge}</span>
        <span className={styles.segCount}>{count} members</span>
      </div>
      <div className={styles.cardGrid}>
        {people.map(function(p, i) {
          return <FlipCard key={i} person={p} index={i} />;
        })}
      </div>
    </section>
  );
}

export default function People() {

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <main id="main-content">

      <div className="page-hero">
        <img src={UNSPLASH.peopleBg} alt="" className="page-hero-img" aria-hidden="true" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="page-hero-dots" aria-hidden="true" />
        <div className="page-hero-content">
          <span className="eyebrow">Brilliant Minds</span>
          <h1 className="page-hero-title"><em>Our People</em></h1>
        </div>
      </div>

      {/* STICKY TABS */}
      <nav className={styles.tabs} aria-label="Jump to team section">
        {[
          { id: 'leadership', label: 'Leadership' },
          { id: 'graduate',   label: 'Graduate Researchers' },
          { id: 'undergrad',  label: 'Undergraduates' },
        ].map(function(t) {
          return (
            <button key={t.id} className={styles.tab} onClick={function() { scrollTo(t.id); }}>
              {t.label}
            </button>
          );
        })}
      </nav>


   {/* ── LEADERSHIP — Mentors + Director + Associates unified ── */}
      <section id="leadership" aria-label="Leadership" className={styles.normBg}>
        <div className={styles.segHeader}>
          <h2 className={styles.segTitle}>Leadership</h2>
          <span className={styles.segBadge}>Mentors, Director & Associates</span>
          <span className={styles.segCount}>{2 + 1 + associateDirectors.length} members</span>
        </div>
        <div className={styles.cardGrid}>
       
          {/* Director */}
          <FlipCard
            key="director"
            person={Object.assign({}, director, { role: 'Director', subRole: null })}
            index={3}
          />
          {/* Associate Directors */}
          {associateDirectors.map(function (p, i) {
            return <FlipCard key={p.name} person={p} index={i + 4} />;
          })}

             {/* Chief Mentor as flip card */}
          <FlipCard
            key="chief"
            person={{
              name: MENTORS_CHIEF.name,
              role: MENTORS_CHIEF.role,
              joined: 'Charles Darwin University, Australia',
              bio: MENTORS_CHIEF.bio,
              image: MENTORS_CHIEF.image,
              links: MENTORS_CHIEF.links,
            }}
            index={0}
          />
          {/* Senior Mentors as flip cards */}
          {MENTORS_SENIOR.map(function (m, i) {
            return (
              <FlipCard
                key={m.name}
                person={{
                  name: m.name,
                  role: m.role,
                  joined: m.inst,
                  bio: m.bio,
                  image: m.image,
                  links: m.links,
                }}
                index={i + 1}
              />
            );
          })}
        </div>
      </section>

      {/* ── GRADUATE ── */}
      <PeopleSection
        id="graduate"
        title="Graduate Researchers"
        badge="PhD & Masters"
        count={graduateResearchers.length}
        people={graduateResearchers}
      />

      {/* ── UNDERGRAD ── */}
      <PeopleSection
        id="undergrad"
        title="Undergraduates"
        badge="Honours & Research"
        count={undergraduateResearchers.length}
        people={undergraduateResearchers}
        alt
      />

      <div className="collab-cta" style={{ marginTop: 0 }}>
        <h2>Join our <em>team</em></h2>
        <p>We're always looking for brilliant, curious minds to push the frontier of AI research.</p>
        <div className="cta-buttons">
          <a href="mailto:aaiins.research@gmail.com" className="btn-primary">Get in Touch</a>
          <Link to="/join" className="btn-outline">Apply Now</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}