import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { Crown, Shield, Users, GraduationCap, Sparkles, Github, Mail, Linkedin, Calendar } from 'lucide-react';

function People() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const director = {
    name: 'Nur Mohammad Fahad',
    role: 'Director',
    bio: 'Nur Mohammad Fahad is a Lecturer at the University of Scholars, completed his bachelor\'s degree in CSE from United International University (UIU), Bangladesh. With over 3.5 years of active research experience, he has contributed to multiple high impact Q1 publications and mentored research groups in the fields of computer vision, optimization, and UAV systems. His research focuses on developing efficient AI systems integrating reasoning and adaptability for complex challenges. Alongside academic expertise, his involvement in industry-blended projects has strengthened his practical and analytical skills, reflecting his strong commitment to developing sustainable and intelligent AI solutions for real-world applications.',
    initials: 'NMF',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    glowColor: 'rgba(168, 85, 247, 0.4)'
  };

  const associateDirectors = [
    {
      name: 'Arefin Ittesafun Abian',
      role: 'Associate Director',
      subRole: 'Research Operations',
      joining: 'August 2023',
      bio: 'Arefin Ittesafun Abian is a Research Assistant in the Department of Computer Science and Engineering at United International University, Bangladesh. She graduated from the same institution with Magna Cum Laude distinction. She has been doing research on Computer Vision, Explainable Artificial Intelligence (XAI), Medical Image Analysis, and Environmental Modelling. During her undergraduate studies, she served as an Undergraduate Teaching Assistant and Grader for several courses, gaining valuable experience in academic instruction and student mentoring while contributing to the department\'s teaching activities.',
      initials: 'AIA',
      gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
      glowColor: 'rgba(20, 184, 166, 0.4)'
    },
    {
      name: 'Abdur Rahman',
      role: 'Associate Director',
      subRole: 'Research Integrity and Ethics',
      joining: 'August 2023',
      bio: 'Md. Abdur Rahman is affiliated with United International University (UIU), Bangladesh. He currently works as a Research Assistant at UIU on a grant in collaboration with Charles Darwin University, Australia. His research interests include machine learning, pattern recognition, signal processing, and computer vision. A significant part of his work focuses on 3D and multimodal imaging. He is also motivated by challenges in limited-data environments and low-resource settings, and he aims to design novel, efficient, and applicable frameworks for real-world scenarios.',
      initials: 'AR',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      glowColor: 'rgba(99, 102, 241, 0.4)'
    },
    {
      name: 'Debopom Sutradhar',
      role: 'Associate Director',
      subRole: 'Research Strategy and Impact',
      joining: 'August 2023',
      bio: 'Debopom Sutradhar holds a bachelor\'s degree in Computer Science and Engineering from United International University and currently working as Research Administrator at AIINS Lab. His research involves innovative applications of computer vision techniques. Debopom\'s recently published paper introduces a system for detecting cervical spine fractures using YOLOv8 with a deep attention-based vertebrae classification method, ensuring explainability. His other projects include domain adaptation via latent space consistency, CT scan denoising using reinforcement learning and a dual path encoder for land cover segmentation using SAR and optical images.',
      initials: 'DS',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      glowColor: 'rgba(251, 146, 60, 0.4)'
    }
  ];

  const graduateResearchers = [
    {
      name: 'Ripon Kumar Debnath',
      joining: 'September 2023',
      bio: 'Ripon Kumar Debnath received his Bachelor\'s degree in Computer Science and Engineering from United International University (UIU) in 2024 and is currently pursuing his Master\'s degree at UIU. He is working as a Research Assistant at the Institute for Advanced Research (IAR), UIU. His research interests include computer vision, natural language processing (NLP), graph theory, health informatics, and explainable artificial intelligence (XAI). He is actively engaged in innovative research activities aimed at advancing intelligent systems with practical applications in healthcare and data-driven technologies.',
      initials: 'RKD'
    },
    {
      name: 'Musarrat Zeba',
      joining: 'January 2025',
      bio: 'Musarrat Zeba is an aspiring software engineer who completed her B.Sc. in Computer Science and Engineering from United International University (UIU). She works as a software engineer, building highly configurable and customized backend systems to solve real-world problems. Her expertise includes developing scalable and secure server-side architectures, APIs, and database solutions. Her research focuses on ethically aware and trustworthy Large Language Models (LLMs), exploring ways to make AI systems more reliable, transparent, and aligned with human values while creating practical solutions for real-world challenges.',
      initials: 'MZ'
    },
    {
      name: 'Abdullah Al Mamun',
      joining: 'January 2025',
      bio: 'Abdullah Al Mamun specializes in building secure, intelligent solutions for the fintech sector. His core strengths include Java Spring Boot REST API development and Large Language Model (LLM) applications. He has significantly contributed to key financial systems like BEFTN, RTGS, and payment gateways, as well as the Ababil Islamic Core Banking System. A notable achievement is his design of an LLM-powered Shariah Auditing System that automates compliance for Islamic banking. Abdullah holds a B.Sc. in Computer Science & Engineering with a major in Data Science from United International University.',
      initials: 'AAM'
    },
    {
      name: 'Wasimul Karim',
      joining: 'December 2023',
      bio: 'Wasimul Karim holds a Bachelor of Science degree in Computer Science and Engineering from United International University (UIU), Bangladesh, graduating with Magna Cum Laude distinction. He has over two years of experience serving as an Undergraduate Teaching Assistant at UIU. He is actively engaged in collaborative research, submitted scientific papers in Q1 journal. His research interests include 3D medical imaging, Generative AI, energy and environmental modeling, and multimodal learning. He is currently employed as a Research Assistant at University of Scholars, where he showcases expertise in multiple project works.',
      initials: 'WK'
    },
    {
      name: 'Afsar Ul Hoque',
      joining: 'August 2025',
      bio: 'Afsar Ul Hoque is an aspiring researcher with a strong academic background in Electrical and Electronics Engineering from Ahsanullah University of Science & Technology. His research interests include Biomedical Instrumentation, Digital Signal Processing, Semiconductor Electronics, and Computer Architecture. With a foundation in Signals and Communication, he is particularly interested in Biomedical Signal Processing and its applications. He is also expanding his knowledge in machine learning and artificial intelligence, aiming to integrate data-driven approaches with signal analysis. His work on hybrid renewable energy systems reflects his commitment to sustainable solutions.',
      initials: 'AUH'
    },
    {
      name: 'Subhey Sadi Rahman',
      joining: 'January 2024',
      bio: 'Subhey Sadi Rahman has completed his graduation from United International University (UIU), Bangladesh and currently is affiliated with the AIINS Lab and the Institute for Advanced Research (IAR), UIU. His research interests include medical imaging, artificial intelligence in healthcare, natural language processing, and large language models (LLMs). He has successfully completed three research works and continues to contribute to ongoing projects in these domains. During his undergraduate studies, he also served as a Grader and Undergraduate Teaching Assistant, demonstrating strong academic engagement and research dedication.',
      initials: 'SSR'
    },
    {
      name: 'Kishoar Jahan Tithee',
      joining: 'January 2025',
      bio: 'Kishoar Jahan Tithee is a Software Quality Assurance Engineer with expertise in manual and automation testing across fintech and telecommunication domains. She has worked extensively on core banking systems and high-traffic consumer mobile applications, ensuring quality, reliability, and performance. Her professional experience in ensuring software quality has fueled a deep interest in large language models, machine learning, and artificial intelligence. She is particularly motivated to explore how these technologies can redefine quality to enable more intelligent, adaptive, and effective solutions.',
      initials: 'KJT'
    },
    {
      name: 'Delwar Shahadat Deepu',
      joining: 'December 2024',
      bio: 'Md Delwar Shahadat Deepu is a Lecturer at Shanto-Mariam University of Creative Technology and a recent graduate of United International University. He is also an active researcher specializing in Artificial Intelligence, with primary interests in Machine Learning, Deep Learning, and Computer Vision. He is committed to exploring novel methods and making significant contributions to these fields, successfully balancing his academic and research responsibilities. His goal is to advance the practical applications of AI and make a significant and meaningful impact.',
      initials: 'DSD'
    },
    {
      name: 'Fatiha Binta Masud',
      joining: 'January 2025',
      bio: 'Fatiha Binta Masud is currently affiliated with Tutorsplan Technology Limited as an Associate Technical Product Manager. She is an emerging researcher with interests in Computer Vision, Deep Learning, and Medical Image Analysis. Her focus is on developing intelligent and explainable imaging models that support healthcare applications and clinical decision-making. She is passionate about interdisciplinary research that connects technology with medical science, aiming to create innovative and practical solutions that improve diagnostic accuracy and promote the effective use of artificial intelligence in healthcare.',
      initials: 'FBM'
    },
    {
      name: 'Shahil Yasar Haque',
      joining: 'June 2024',
      bio: 'Shahil Yasar Haque is a part-time lecturer at United International University, where his research and teaching span both computational and biological domains. With a solid academic foundation in data science, he brings a unique multidisciplinary perspective to his work. His primary academic interests include large language models, computer vision, and bioinformatics. He is particularly focused on the strategic integration of artificial intelligence techniques to facilitate data interpretation and analysis, with a core emphasis on fostering data-driven discovery and advancing computational approaches in modern research. He develops AI methods to advance science and real-world impact.',
      initials: 'SYH'
    },
    {
      name: 'Eashrat Jahan',
      joining: 'June 2024',
      bio: 'Eashrat Jahan is currently working as a Lecturer in the Department of Computer Science and Engineering at Shanto-Mariam University of Creative Technology. In addition, she has been engaged as a part-time instructor at an international coding platform for the past six months. She earned her Bachelor of Science degree in Computer Science and Engineering in 2024. Her academic and research interests encompass Bioinformatics, Digital Image Processing, and Human Computer Interaction. She is aspiring to pursue doctoral studies at a highly reputed university. She is passionate about contributing to innovative research that bridges technology and human well-being.',
      initials: 'EJ'
    },
    {
      name: 'Arnisha Akter',
      joining: 'January 2025',
      bio: 'Arnisha is currently working as an Associate Technical Product Manager while conducting research work in AIINS Lab on multimodal deep learning systems in medical imaging. Her work focuses on developing integrated frameworks that facilitate visual language models on medical images for automated medical report generation and improve clinical decision support. She aims to continue working in this domain, develop advance models that improve the interpretability in multimodal medical AI systems to ensure more transparent and trustworthy healthcare applications.',
      initials: 'AA'
    },
    {
      name: 'MD Aktaruzzaman Siddiquei',
      joining: 'July 2025',
      bio: 'Aktaruzzaman Siddiquei is currently pursuing an M.Sc. in Applied Statistics and Data Science at Jahangirnagar University. He holds a B.Sc. in Computer Science and Engineering from Daffodil International University. He is working to found DietXperts, a startup focused on promoting healthy eating habits and personalized nutrition. His professional background includes roles in business development, strategy. Aktaruzzaman\'s research interests span deep learning, computer vision, and data analytics. He actively participates in leadership initiatives and has earned recognition in national science and entrepreneurship competitions.',
      initials: 'MAS'
    },
    {
      name: 'Sayeem Been Zaman',
      joining: 'December 2023',
      bio: 'Sayeem Been Zaman is a Computer Science and Engineering graduate from United International University (UIU), Bangladesh, where he completes his degree with Summa Cum Laude distinction. He has two years of experience as an Undergraduate Teaching Assistant at UIU, providing academic support in programming, data structures & algorithms courses. He is currently engaged in collaborative research in the field of 3D medical imaging, diffusion-based generative models, multimodal deep learning, and bioinformatics applications. He has already compiled a few works and continues his dedication, efforts to produce more impactful works.',
      initials: 'SBZ'
    }
  ];

  const undergraduateResearchers = [
    {
      name: 'Md. Adnanul Islam',
      joining: 'January 2024',
      bio: 'Md. Adnanul Islam is currently a student at United International University. His research focuses on large language models and computer vision, and he is currently working on multiple projects of this domain. Alongside his research, he also enjoys developing AI-based software applications. With strong dedication and curiosity, he is committed to building his skills as a researcher and contributing meaningful work that bridges theory with practical impact in these fields. He actively seeks opportunities to engage in interdisciplinary projects that challenge conventional thinking and promote innovation.',
      initials: 'MAI'
    },
    {
      name: 'Riasad Alvi',
      joining: 'April 2025',
      bio: 'Riasad Alvi is currently pursuing a Bachelor of Science in Computer Science and Engineering at United International University (UIU), Bangladesh. He is deeply fascinated by the transformative potential of Generative AI and Large Language Models (LLMs) in addressing complex real-world challenges. His research interests include Computer Vision, LLMs, and Multimodal Machine Learning, with a particular focus on the evolving capabilities of LLMs. Beyond academics, he demonstrates strong dedication to his work and studies. He aspires to advance AI innovations for meaningful societal impact.',
      initials: 'RA'
    },
    {
      name: 'Md Noman Hossain',
      joining: 'June 2025',
      bio: 'Md Noman Hossain is an undergraduate student in Computer Science at United International University. His research interests include AI, with a focus on Computer Vision, Semi-Supervised Learning, and Large Language Models. His work focuses on advancing object detection and segmentation techniques for monitoring, explainable AI, and information reliability. He has recently worked on Marine Pollution Mapping using Deep Learning with spatial-temporal awareness. He has also investigated underwater image enhancement and instance segmentation. Additionally, he is currently working on hallucination mitigation in Retrieval-Augmented Large Language Models.',
      initials: 'MNH'
    },
    {
      name: 'Jubair Ahmed',
      joining: 'March 2024',
      bio: 'Jubair Ahmed is an undergraduate student in Computer Science & Engineering at United International University, Bangladesh. His research focuses on advancing computer vision and medical image analysis, emphasizing deep learning innovations that enhance diagnostic accuracy and model interpretability. He is particularly interested in developing explainable and efficient AI systems for real-world applications. Passionate about pushing the boundaries of artificial intelligence, Jubair Ahmed actively engages in collaborative research projects and aims to contribute to the broader progress of machine learning and intelligent systems.',
      initials: 'JA'
    },
    {
      name: 'Ariful Haque Shahed',
      joining: 'November 2024',
      bio: 'Ariful Haque Shahed is an undergraduate student of Shahjalal University of Science and Technology. His research interest includes mathematical modeling, artificial intelligence, complex theory etc. Ariful is determined to contribute cutting-edge advancements in these fields by combining theoretical insights with practical applications, aiming to solve real-world problems through interdisciplinary approaches. Currently, he is utilising expertise to design a physics-informed deep learning algorithm to predict wildfire spread. His research uses remote sensing and environmental factors to inform decision-making.',
      initials: 'AHS'
    },
    {
      name: 'Abhishek Nag',
      joining: 'November 2024',
      bio: 'Abhishek Nag is currently pursuing his studies in the Department of Mathematics at Shahjalal University of Science and Technology. He has a keen interest in the field of deep learning and is actively engaged in research related to wildfire prediction. His work primarily focuses on applying advanced deep learning techniques to train predictive models that can forecast the spread and behavior of wildfires. With a strong mathematical foundation, Abhishek is committed to research and development of novel approaches that integrate theoretical understanding with practical implementations in the real world.',
      initials: 'AN'
    }
  ];

  // 3D Card Component
  const TeamCard3D = ({ member, index, size = 'default' }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseXPos = e.clientX - rect.left;
      const mouseYPos = e.clientY - rect.top;
      const xPct = mouseXPos / width - 0.5;
      const yPct = mouseYPos / height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    const gradients = [
      'from-violet-500 to-purple-500',
      'from-cyan-500 to-teal-500',
      'from-blue-500 to-indigo-500',
      'from-amber-500 to-orange-500',
      'from-rose-500 to-pink-500',
      'from-emerald-500 to-green-500',
      'from-fuchsia-500 to-purple-500',
      'from-sky-500 to-blue-500'
    ];

    const gradient = member.gradient || gradients[index % gradients.length];

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        className={`relative group cursor-pointer ${
          size === 'large' ? 'h-auto' : 'h-full'
        }`}
      >
        {/* Glow Effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute -inset-[1px] bg-gradient-to-r ${gradient} rounded-[24px] blur-xl`}
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-20px)' }}
        />

        {/* Card Content */}
        <motion.div
          animate={{
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`relative h-full bg-gradient-to-br from-white/[0.10] to-white/[0.05] backdrop-blur-xl rounded-[24px] border border-white/[0.15] overflow-hidden ${
            size === 'large' ? 'p-8' : 'p-6'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Shimmer Effect */}
          <motion.div
            animate={{
              x: isHovered ? ['0%', '100%'] : '0%',
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}
          />

          {/* Avatar */}
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`${
              size === 'large' ? 'w-32 h-32 text-4xl mb-6' : 'w-20 h-20 text-2xl mb-4'
            } rounded-[18px] bg-gradient-to-br ${gradient} flex items-center justify-center font-bold shadow-xl relative overflow-hidden mx-auto`}
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <span className="relative z-10 text-white">{member.initials}</span>
          </motion.div>

          {/* Content */}
          <div style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
            <h3 className={`${
              size === 'large' ? 'text-2xl mb-2' : 'text-lg mb-1.5'
            } font-[820] tracking-[-0.024em] text-center`}>
              {member.name}
            </h3>
            
            <p className={`text-center font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {member.role}
            </p>

            {member.subRole && (
              <p className="text-sm text-[#9fb0c7] text-center mb-3 font-medium">
                {member.subRole}
              </p>
            )}

            {member.joining && (
              <div className="flex items-center justify-center gap-1.5 mb-4">
                <Calendar size={14} className="text-[#36e1c6]" />
                <span className="text-xs text-[#9fb0c7]">Joined {member.joining}</span>
              </div>
            )}

            <p className={`text-[#c2cfdf] leading-relaxed text-center ${
              size === 'large' ? 'text-base' : 'text-sm'
            }`}>
              {member.bio}
            </p>
          </div>

          {/* Corner Sparkle */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.5,
              rotate: isHovered ? 180 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute top-4 right-4"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}
          >
            <Sparkles size={20} className={`text-transparent bg-gradient-to-r ${gradient} bg-clip-text`} style={{ fill: 'currentColor', opacity: 0.6 }} />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="relative z-[1] pt-[72px] min-h-screen">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[120px]"
        />
      </div>

      {/* Page Hero */}
      <div className="py-16 pb-8 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6"
            >
              <Users size={16} className="text-purple-400" />
              <span className="text-sm font-semibold text-[#e8eef8]">Meet Our Team</span>
            </motion.div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-[900] tracking-[-0.04em] mb-4 bg-gradient-to-r from-[#e8eef8] via-[#36e1c6] to-[#8b8cff] bg-clip-text text-transparent">
              Brilliant Minds
            </h1>
            <p className="max-w-[820px] mx-auto text-[#9fb0c7] text-lg leading-relaxed">
              Our team comprises dedicated researchers, engineers, and innovators working at the forefront of artificial intelligence and machine learning.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Director Section */}
      <section className="py-8">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Crown className="text-purple-400" size={32} />
              <h2 className="text-[2rem] font-[850] tracking-[-0.028em]">Director</h2>
            </div>
            
            <div className="max-w-[900px] mx-auto">
              <TeamCard3D member={director} index={0} size="large" />
            </div>
          </motion.div>

          {/* Associate Directors */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="text-cyan-400" size={32} />
              <h2 className="text-[2rem] font-[850] tracking-[-0.028em]">Associate Directors</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {associateDirectors.map((member, i) => (
                <TeamCard3D key={i} member={member} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Graduate Researchers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="text-amber-400" size={32} />
              <h2 className="text-[2rem] font-[850] tracking-[-0.028em]">Graduate Researchers</h2>
            </div>
            <div className="flex justify-center mb-8">
              <span className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold">
                {graduateResearchers.length} Members
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {graduateResearchers.map((member, i) => (
                <TeamCard3D key={i} member={{...member, role: 'Graduate Researcher'}} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Undergraduate Researchers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-emerald-400" size={32} />
              <h2 className="text-[2rem] font-[850] tracking-[-0.028em]">Undergraduate Researchers</h2>
            </div>
            <div className="flex justify-center mb-8">
              <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold">
                {undergraduateResearchers.length} Members
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {undergraduateResearchers.map((member, i) => (
                <TeamCard3D key={i} member={{...member, role: 'Undergraduate Researcher'}} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white/[0.09] to-white/[0.05] border border-white/[0.12] p-12 text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-[100px]"
            />
            
            <div className="relative z-10">
              <h2 className="text-[2rem] font-[850] tracking-[-0.028em] mb-4">Join Our Team</h2>
              <p className="text-[#9fb0c7] max-w-[600px] mx-auto mb-8 text-lg">
                We're always looking for passionate researchers and engineers to join our mission of advancing AI research.
              </p>
              <motion.a
                href="/join"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[16px] bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg shadow-[0_8px_32px_rgba(139,92,246,0.3)] transition-shadow hover:shadow-[0_12px_48px_rgba(139,92,246,0.4)]"
              >
                <Users size={20} />
                Explore Opportunities
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default People;
