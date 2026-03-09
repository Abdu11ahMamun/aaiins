import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Bot, Brain, Eye, Wand2, HeartPulse, Leaf, Sparkles, Network, Activity } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Research() {
  const cardRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (card, index) => (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      card.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
    };

    const handleMouseEnter = (card, index) => () => {
      setHoveredCard(index);
    };

    const handleMouseLeave = (card) => () => {
      card.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
      setHoveredCard(null);
    };

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const moveHandler = handleMouseMove(card, index);
        const enterHandler = handleMouseEnter(card, index);
        const leaveHandler = handleMouseLeave(card);
        card.addEventListener('mousemove', moveHandler);
        card.addEventListener('mouseenter', enterHandler);
        card.addEventListener('mouseleave', leaveHandler);
        card._moveHandler = moveHandler;
        card._enterHandler = enterHandler;
        card._leaveHandler = leaveHandler;
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card && card._moveHandler && card._enterHandler && card._leaveHandler) {
          card.removeEventListener('mousemove', card._moveHandler);
          card.removeEventListener('mouseenter', card._enterHandler);
          card.removeEventListener('mouseleave', card._leaveHandler);
        }
      });
    };
  }, []);

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const researchAreas = [
    {
      icon: Bot,
      title: 'Artificial Intelligence',
      description: 'At AAIINS, we conduct research across the broad spectrum of Artificial Intelligence to build systems capable of intelligent behavior. This includes developing algorithms for reasoning, planning, natural language understanding, and decision-making that can solve complex real-world challenges.',
      color: 'teal',
      gradient: 'from-[#36e1c6] via-[#4dd4ac] to-[#36e1c6]',
      bgGradient: 'from-[rgba(54,225,198,0.15)] via-[rgba(77,212,172,0.08)] to-transparent',
      iconBg: 'from-[rgba(54,225,198,0.25)] to-[rgba(54,225,198,0.10)]',
      glowColor: 'rgba(54,225,198,0.4)',
      illustration: Network
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Our Machine Learning research centers on developing algorithms that enable computers to learn from data and improve over time. We explore supervised, unsupervised, and reinforcement learning methods using advanced deep learning architectures for various applications.',
      color: 'purple',
      gradient: 'from-[#8b8cff] via-[#a5a6ff] to-[#8b8cff]',
      bgGradient: 'from-[rgba(139,140,255,0.15)] via-[rgba(165,166,255,0.08)] to-transparent',
      iconBg: 'from-[rgba(139,140,255,0.25)] to-[rgba(139,140,255,0.10)]',
      glowColor: 'rgba(139,140,255,0.4)',
      illustration: Activity
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Our research in Computer Vision focuses on enabling machines to interpret and understand visual data from the world. We develop advanced deep learning models for image and video analysis, object detection, recognition, and scene understanding applications.',
      color: 'blue',
      gradient: 'from-[#68a8ff] via-[#8ec5ff] to-[#68a8ff]',
      bgGradient: 'from-[rgba(104,168,255,0.15)] via-[rgba(142,197,255,0.08)] to-transparent',
      iconBg: 'from-[rgba(104,168,255,0.25)] to-[rgba(104,168,255,0.10)]',
      glowColor: 'rgba(104,168,255,0.4)',
      illustration: Sparkles
    },
    {
      icon: Wand2,
      title: 'Generative AI',
      description: 'In Generative AI, we focus on designing models that can create new and realistic content such as images, text, audio, and even video. These models enable creative applications like content generation, data augmentation, and synthetic data creation. By improving the quality and diversity of generated content, we aim to unlock new possibilities in human-computer interaction.',
      color: 'amber',
      gradient: 'from-[#facc15] via-[#fde047] to-[#facc15]',
      bgGradient: 'from-[rgba(250,204,21,0.15)] via-[rgba(253,224,71,0.08)] to-transparent',
      iconBg: 'from-[rgba(250,204,21,0.25)] to-[rgba(250,204,21,0.10)]',
      glowColor: 'rgba(250,204,21,0.4)',
      illustration: Sparkles
    },
    {
      icon: HeartPulse,
      title: 'Health Informatics',
      description: 'Our research in Health Informatics applies AI and machine learning to diverse healthcare data, including medical images, physiological signals, and electronic health records. We design advanced models to extract insights, support diagnosis, and predict outcomes. By integrating multi-modal health data, we aim to advance personalised medicine and develop interpretable AI tools for clinical applications.',
      color: 'rose',
      gradient: 'from-[#f43f5e] via-[#fb7185] to-[#f43f5e]',
      bgGradient: 'from-[rgba(244,63,94,0.15)] via-[rgba(251,113,133,0.08)] to-transparent',
      iconBg: 'from-[rgba(244,63,94,0.25)] to-[rgba(244,63,94,0.10)]',
      glowColor: 'rgba(244,63,94,0.4)',
      illustration: Activity
    },
    {
      icon: Leaf,
      title: 'Environmental Modelling',
      description: 'We use AI and machine learning techniques to create models that simulate and predict environmental systems and changes. This includes climate modeling, pollution tracking, biodiversity monitoring, and ecosystem dynamics. Our research integrates data from satellites, sensors, and simulations to enhance accuracy and reliability. Our models help understand complex interactions within natural systems and anticipate future environmental impacts.',
      color: 'emerald',
      gradient: 'from-[#10b981] via-[#34d399] to-[#10b981]',
      bgGradient: 'from-[rgba(16,185,129,0.15)] via-[rgba(52,211,153,0.08)] to-transparent',
      iconBg: 'from-[rgba(16,185,129,0.25)] to-[rgba(16,185,129,0.10)]',
      glowColor: 'rgba(16,185,129,0.4)',
      illustration: Network
    }
  ];

  return (
    <div className="relative z-[1] pt-[72px] min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#36e1c6] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#8b8cff] blur-[130px]"
        />
      </div>

      {/* Page Hero */}
      <div className="py-16 pb-8 relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#36e1c6]/[0.15] to-[#8b8cff]/[0.15] border border-[#36e1c6]/[0.3] mb-6 backdrop-blur-sm"
            >
              <span className="text-[0.85rem] font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-[#36e1c6] to-[#8b8cff] bg-clip-text text-transparent">
                Research Excellence
              </span>
            </motion.div>
            
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-[900] tracking-[-0.04em] mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-white to-[#b8c5d6] bg-clip-text text-transparent">
                Our Research Focus
              </span>
            </h1>
            
            <p className="max-w-[820px] mx-auto text-[1.15rem] text-[#b8c5d6] leading-[1.8] font-light">
              Advancing artificial intelligence through interdisciplinary collaboration, technical excellence, and impactful innovation across six core research domains.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Research Areas Grid */}
      <section className="py-12 pb-24 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                ref={addCardRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative rounded-[28px] bg-gradient-to-br from-white/[0.10] via-white/[0.05] to-transparent border border-white/[0.12] overflow-hidden transition-all duration-500 ease-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
              >
                {/* Animated gradient background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={hoveredCard === i ? {
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-[-2px] rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), ${area.glowColor}, transparent 40%)`
                  }}
                />
                
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.1) 50%, transparent)',
                  }}
                  animate={hoveredCard === i ? {
                    x: ['-100%', '200%'],
                  } : {}}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Content */}
                <div className="relative z-10 p-8" style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
                  {/* Icon and decoration */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`relative w-20 h-20 rounded-[20px] bg-gradient-to-br ${area.iconBg} backdrop-blur-xl border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-center group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.2)] transition-all duration-500`}
                      style={{ transform: 'translateZ(60px)' }}
                    >
                      <area.icon 
                        size={36} 
                        className={`${
                          area.color === 'teal' ? 'text-[#36e1c6]' :
                          area.color === 'purple' ? 'text-[#bbb8ff]' :
                          area.color === 'blue' ? 'text-[#9cc2ff]' :
                          area.color === 'amber' ? 'text-[#ffd86f]' :
                          area.color === 'rose' ? 'text-[#ff9bb0]' :
                          'text-[#68f0bb]'
                        }`}
                      />
                      
                      {/* Icon glow */}
                      <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    </motion.div>

                    {/* Decorative illustration icon */}
                    <motion.div
                      animate={hoveredCard === i ? {
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    >
                      <area.illustration size={80} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-[1.75rem] font-[800] mb-4 tracking-[-0.02em] text-white group-hover:text-white transition-colors duration-300"
                    style={{ transform: 'translateZ(50px)' }}
                  >
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-[1rem] text-[#b8c5d6] leading-[1.75] font-light group-hover:text-[#d4dce8] transition-colors duration-300"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {area.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className={`mt-6 h-1 rounded-full bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={{ width: 0 }}
                    whileInView={{ width: hoveredCard === i ? '100%' : 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ transform: 'translateZ(30px)' }}
                  />
                </div>

                {/* Bottom edge highlight */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 pb-24 relative">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-[32px] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent border border-white/[0.15] text-center overflow-hidden group"
          >
            {/* Animated background */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#36e1c6]/[0.1] via-[#8b8cff]/[0.1] to-[#36e1c6]/[0.1]"
            />
            
            <div className="relative z-10">
              <h2 className="text-[2rem] font-[850] mb-4 tracking-[-0.02em]">
                <span className="bg-gradient-to-r from-white to-[#b8c5d6] bg-clip-text text-transparent">
                  Collaborate With Us
                </span>
              </h2>
              <p className="text-[1.1rem] text-[#b8c5d6] mb-8 leading-[1.7] max-w-[600px] mx-auto">
                Join our research community and contribute to groundbreaking AI innovations that shape the future.
              </p>
              
              <motion.a
                href="/join"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-[16px] bg-gradient-to-r from-[#36e1c6] to-[#68a8ff] text-[#0a1929] font-[800] text-[1.05rem] shadow-[0_12px_48px_rgba(54,225,198,0.3)] hover:shadow-[0_16px_64px_rgba(54,225,198,0.4)] transition-all duration-300"
              >
                <Sparkles size={20} />
                Get Involved
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Research;
