import { motion } from 'framer-motion';
import { Bot, Brain, Eye, Wand2, HeartPulse, Leaf } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Research() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (card) => (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -10;
      const ry = ((x / rect.width) - 0.5) * 12;
      
      card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    };

    const handleMouseLeave = (card) => () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
    };

    cardRefs.current.forEach((card) => {
      if (card) {
        const moveHandler = handleMouseMove(card);
        const leaveHandler = handleMouseLeave(card);
        card.addEventListener('mousemove', moveHandler);
        card.addEventListener('mouseleave', leaveHandler);
        card._moveHandler = moveHandler;
        card._leaveHandler = leaveHandler;
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card && card._moveHandler && card._leaveHandler) {
          card.removeEventListener('mousemove', card._moveHandler);
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
      description: 'We study broad AI foundations including reasoning, planning, language understanding, and autonomous decision-making to solve complex real-world problems.',
      color: 'teal'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Our ML research explores data-driven methods that learn robust representations, generalize effectively, and improve continuously across application domains.',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'We develop advanced models for visual perception, scene understanding, image analysis, medical imaging, and explainable diagnostic systems.',
      color: 'teal'
    },
    {
      icon: Wand2,
      title: 'Generative AI',
      description: 'We design systems that generate realistic and useful content across modalities, enabling synthesis, augmentation, simulation, and human-centered interaction.',
      color: 'amber'
    },
    {
      icon: HeartPulse,
      title: 'Health Informatics',
      description: 'Our research combines medical images, physiological signals, and records to support diagnosis, prognosis, and clinically interpretable AI decision tools.',
      color: 'rose'
    },
    {
      icon: Leaf,
      title: 'Environmental Modelling',
      description: 'We integrate sensing, remote observation, and learning-based forecasting to model environmental systems and anticipate ecological change.',
      color: 'emerald'
    }
  ];

  return (
    <div className="relative z-[1] pt-[72px] min-h-screen">
      {/* Page Hero */}
      <div className="py-14 pb-6 relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-[24px] text-center bg-gradient-to-b from-white/[0.09] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-[16px]"
          >
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-[850] tracking-[-0.04em] mb-2.5">AAIINS Research</h1>
            <p className="max-w-[760px] mx-auto text-[#9fb0c7]">Advancing artificial intelligence through interdisciplinary, technically rigorous, and impact-driven research.</p>
          </motion.div>
        </div>
      </div>

      {/* Research Areas */}
      <section className="py-22">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-[0.75rem] tracking-[0.18em] uppercase text-[#36e1c6] font-extrabold mb-2.5">Focus Areas</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold tracking-[-0.04em]">What We Research</h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                ref={addCardRef}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative rounded-[18px] bg-gradient-to-b from-white/[0.08] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] overflow-hidden transition-all duration-[280ms] hover:border-[rgba(54,225,198,0.28)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.33)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.10] via-transparent to-[rgba(54,225,198,0.10)] opacity-75 pointer-events-none" />
                <div 
                  className="absolute inset-[-1px] bg-[radial-gradient(240px_circle_at_var(--mx,50%)_var(--my,50%),rgba(54,225,198,0.14),transparent_40%)] opacity-0 transition-opacity duration-[280ms] pointer-events-none hover:opacity-100"
                  style={{ '--mx': '50%', '--my': '50%' }}
                />
                <div className="relative z-[1] p-6 grid grid-cols-[64px_1fr] gap-4 items-start">
                  <div 
                    className={`w-[64px] h-[64px] rounded-2xl grid place-items-center text-[1.28rem] border border-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${
                      area.color === 'teal' ? 'bg-gradient-to-br from-[rgba(54,225,198,0.18)] to-[rgba(54,225,198,0.06)] text-[#36e1c6]' :
                      area.color === 'blue' ? 'bg-gradient-to-br from-[rgba(104,168,255,0.18)] to-[rgba(104,168,255,0.06)] text-[#9cc2ff]' :
                      area.color === 'amber' ? 'bg-gradient-to-br from-[rgba(250,204,21,0.18)] to-[rgba(250,204,21,0.06)] text-[#ffd86f]' :
                      area.color === 'rose' ? 'bg-gradient-to-br from-[rgba(244,63,94,0.18)] to-[rgba(244,63,94,0.06)] text-[#ff9bb0]' :
                      'bg-gradient-to-br from-[rgba(16,185,129,0.18)] to-[rgba(16,185,129,0.06)] text-[#68f0bb]'
                    }`}
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <area.icon size={26} />
                  </div>
                  <div style={{ transform: 'translateZ(16px)' }}>
                    <h3 className="text-[1.03rem] font-[760] mb-2.5">{area.title}</h3>
                    <p className="text-[#9fb0c7] text-[0.92rem]">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Research;
