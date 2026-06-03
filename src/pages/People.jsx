import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { UNSPLASH } from '../data';
import styles from './People.module.css';

const imageMap = import.meta.glob('../assets/*', { eager: true, import: 'default' });
const getImage = (fileName) => imageMap[`../assets/${fileName}`] || null;

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
    name: 'Delwar Shahadat Deepu',
    joined: 'Joined December 2024',
    bio: "Md Delwar Shahadat Deepu is a Lecturer at Shanto-Mariam University of Creative Technology and a recent graduate of United International University. He is also an active researcher specializing in Artificial Intelligence, with primary interests in Machine Learning, Deep Learning, and Computer Vision. He is committed to exploring novel methods and making significant contributions to these fields, successfully balancing his academic and research responsibilities. His goal is to advance the practical applications of AI and make a significant and meaningful impact.",
    image: getImage('Deepu.jpg'),
    links: {
      email: 'mailto:mdeepu202037@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/delwar-shahadat',
      scholar: 'https://scholar.google.com/citations?user=-fWfGKgAAAAJ&hl=en',
      website: 'https://portfolio-deepu.vercel.app/',
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
    name: 'Shahil Yasar Haque',
    joined: 'Joined June 2024',
    bio: "Shahil Yasar Haque is a part-time lecturer at United International University, where his research and teaching span both computational and biological domains. With a solid academic foundation in data science, he brings a unique multidisciplinary perspective to his work. His primary academic interests include large language models, computer vision, and bioinformatics. He is particularly focused on the strategic integration of artificial intelligence techniques to facilitate data interpretation and analysis, with a core emphasis on fostering data-driven discovery.",
    image: getImage('shahil.jpg'),
    links: {
      email: 'mailto:shaque201021@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/shahil-yasar-haque-aa0093228/',
      scholar: 'https://scholar.google.com/citations?user=KL27QD8AAAAJ&hl=en',
    },
  },
  {
    name: 'Eashrat Jahan',
    joined: 'Joined June 2024',
    bio: "Eashrat Jahan is currently working as a Lecturer in the Department of Computer Science and Engineering at Shanto-Mariam University of Creative Technology. She earned her Bachelor of Science degree in Computer Science and Engineering in 2024. Her academic and research interests encompass Bioinformatics, Digital Image Processing, and Human Computer Interaction. She is aspiring to pursue doctoral studies at a highly reputed university. She is passionate about contributing to innovative research that bridges technology and human well-being.",
    image: getImage('eashrat.jpg'),
    links: {
      email: 'mailto:ejahan201165@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/eashrat-jahan-7126841b1/',
      scholar: 'https://scholar.google.com/citations?user=kRgoIoQAAAAJ&hl=en',
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
    name: 'Sayeem Been Zaman',
    joined: 'Joined December 2023',
    bio: "Sayeem Been Zaman is a Computer Science and Engineering graduate from United International University (UIU), Bangladesh, where he completed his degree with Summa Cum Laude distinction. He has two years of experience as an Undergraduate Teaching Assistant at UIU. He is currently engaged in collaborative research in the field of 3D medical imaging, diffusion-based generative models, multimodal deep learning, and bioinformatics applications. He has already compiled a few works and continues his dedication to produce more impactful research.",
    image: getImage('sayeem.jpg'),
    links: {
      email: 'mailto:szaman211088@bscse.uiu.ac.bd',
      linkedin: 'https://www.linkedin.com/in/sayeemzzzaman/',
      scholar: 'https://scholar.google.com/citations?user=7lpZmdsAAAAJ&hl=en',
      website: 'https://sayeemzzzaman.github.io/',
    },
  },
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
    name: 'Abhishek Nag',
    joined: 'Joined November 2024',
    bio: "Abhishek Nag is currently pursuing his studies in the Department of Mathematics at Shahjalal University of Science and Technology. He has a keen interest in the field of deep learning and is actively engaged in research related to wildfire prediction. His work primarily focuses on applying advanced deep learning techniques to train predictive models that can forecast the spread and behavior of wildfires. With a strong mathematical foundation, Abhishek is committed to research that integrates theoretical understanding with practical implementations.",
    image: getImage('Abhishek-Nag.jpg'),
    links: {
      email: 'mailto:nagabhishek248@gmail.com',
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

      <nav className={styles.tabs} aria-label="Jump to team section">
        {[
          { id: 'director',   label: 'Director' },
          { id: 'associates', label: 'Associate Directors' },
          { id: 'graduate',   label: 'Graduate Researchers' },
          { id: 'undergrad',  label: 'Undergraduates' },
        ].map(function(t) {
          return (
            <button
              key={t.id}
              className={styles.tab}
              onClick={function() { scrollTo(t.id); }}
            >
              {t.label}
            </button>
          );
        })}
      </nav>

      {/* DIRECTOR */}
      <section id="director" aria-label="Director" className={styles.normBg}>
        <div className={styles.dirLabel}>
          <span className="eyebrow" style={{ marginBottom: 0 }}>Leadership</span>
          <span className={styles.dirLabelLine} aria-hidden="true" />
        </div>
        <div className={styles.dirBlock}>
          <div className={styles.dirPhotoWrap}>
            {director.image
              ? <img src={director.image} alt={'Photo of ' + director.name} loading="lazy" />
              : <div className={styles.dirInitials}>NMF</div>
            }
            <div className={styles.dirPhotoOverlay} aria-hidden="true" />
          </div>
          <div className={styles.dirContent}>
            <div className={styles.dirTopRow}>
              <div>
                <p className={styles.dirRole}>{director.role}</p>
                <h2 className={styles.dirName}>{director.name}</h2>
                {director.joined && <p className={styles.dirJoined}>{director.joined}</p>}
              </div>
              <div className={styles.dirDeco} aria-hidden="true">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="26" stroke="rgba(200,168,107,0.22)" strokeWidth="1"/>
                  <circle cx="28" cy="28" r="16" stroke="rgba(200,168,107,0.14)" strokeWidth="1"/>
                  <circle cx="28" cy="12" r="2.5" fill="rgba(200,168,107,0.5)"/>
                  <circle cx="42" cy="36" r="2.5" fill="rgba(200,168,107,0.5)"/>
                  <circle cx="14" cy="36" r="2.5" fill="rgba(200,168,107,0.5)"/>
                  <line x1="28" y1="14.5" x2="41" y2="34" stroke="rgba(200,168,107,0.28)" strokeWidth="0.8"/>
                  <line x1="28" y1="14.5" x2="15" y2="34" stroke="rgba(200,168,107,0.28)" strokeWidth="0.8"/>
                  <line x1="15.5" y1="36" x2="40.5" y2="36" stroke="rgba(200,168,107,0.28)" strokeWidth="0.8"/>
                </svg>
              </div>
            </div>
            <div className={styles.dirRule} />
            <p className={styles.dirBio}>{director.bio}</p>
            <div className={styles.dirLinks}>
              {Object.keys(director.links).map(function (key) {
                return (
                  <LinkButton
                    key={key}
                    linkKey={key}
                    href={director.links[key]}
                    name={director.name}
                    isDir={true}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <PeopleSection
        id="associates"
        title="Associate Directors"
        badge="Senior Leadership"
        count={associateDirectors.length}
        people={associateDirectors}
      />
      <PeopleSection
        id="graduate"
        title="Graduate Researchers"
        badge="PhD & Masters"
        count={graduateResearchers.length}
        people={graduateResearchers}
        alt
      />
      <PeopleSection
        id="undergrad"
        title="Undergraduates"
        badge="Honours & Research"
        count={undergraduateResearchers.length}
        people={undergraduateResearchers}
      />

      <div className="collab-cta" style={{ marginTop: 0 }}>
        <h2>Join our <em>team</em></h2>
        <p>We're always looking for brilliant, curious minds to push the frontier of AI research.</p>
        <div className="cta-buttons">
          <a href="mailto:aaiins.research@gmail.com" className="btn-primary">Get in Touch</a>
          <Link to="/mentors" className="btn-outline">Meet Our Mentors</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}