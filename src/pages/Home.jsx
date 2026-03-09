import { Link } from 'react-router-dom';
import { Sparkles, Beaker, BookOpen, Eye, Brain, Wand2, HeartPulse, Leaf, Bot, Users, PlusCircle } from 'lucide-react';
import TypewriterText from '../components/effects/TypewriterText';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Home() {
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

  return (
    <div className="relative z-[1] pt-[72px] min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-72px)] flex items-center py-18 px-0 pb-10">
        <div className="max-w-[1240px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_450px] gap-10 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(54,225,198,0.24)] bg-[rgba(54,225,198,0.08)] text-[#36e1c6] text-[0.76rem] font-bold tracking-[0.08em] uppercase mb-4">
                <Sparkles size={14} />
                Global AI Research Lab
              </div>
              <h1 className="text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.055em] my-4 mb-4 font-black">
                Applied Artificial Intelligence<br/>and <TypewriterText />
              </h1>
              <p className="text-[1.06rem] text-[#9fb0c7] max-w-[650px] leading-[1.9] mb-7">
                AAIINS Lab brings together ambitious researchers to build intelligent systems with scientific depth and real-world impact — across computer vision, health AI, generative models, machine learning, and environmental intelligence.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link to="/research" className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-transparent text-[0.92rem] font-bold transition-all duration-[280ms] bg-gradient-to-br from-[#36e1c6] to-[#69f0da] text-[#07231f] shadow-[0_10px_32px_rgba(54,225,198,0.26)] hover:translate-y-[-2px] hover:shadow-[0_16px_40px_rgba(54,225,198,0.30)]">
                  <Beaker size={18} />
                  Explore Research
                </Link>
                <Link to="/publications" className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-white/[0.16] text-[0.92rem] font-bold transition-all duration-[280ms] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:translate-y-[-2px]">
                  <BookOpen size={18} />
                  View Publications
                </Link>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="perspective-[1400px]"
            >
              <div 
                ref={addCardRef}
                className="p-6 rounded-[26px] relative overflow-hidden bg-gradient-to-b from-white/[0.09] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-[16px] transition-all duration-[280ms]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-[-1px] rounded-[inherit] bg-gradient-to-br from-white/[0.15] via-transparent to-[rgba(54,225,198,0.2)] pointer-events-none" />
                <div 
                  className="absolute inset-[-1px] bg-[radial-gradient(240px_circle_at_var(--mx,50%)_var(--my,50%),rgba(54,225,198,0.14),transparent_40%)] opacity-0 transition-opacity duration-[280ms] pointer-events-none"
                  style={{ '--mx': '50%', '--my': '50%' }}
                />
                
                <div className="relative z-[1]" style={{ transform: 'translateZ(18px)', transformStyle: 'preserve-3d' }}>
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3.5 mb-4">
                    {[
                      { num: '30+', label: 'Researchers' },
                      { num: '12+', label: 'Published' },
                      { num: '20+', label: 'Under Review' },
                      { num: '5', label: 'Research Areas' }
                    ].map((stat, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center" style={{ transform: 'translateZ(18px)' }}>
                        <div className="text-[1.9rem] font-extrabold text-white">{stat.num}</div>
                        <div className="text-[0.74rem] text-[#7f90a8] uppercase tracking-[0.1em] mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[0.72rem] text-[#7f90a8] uppercase tracking-[0.16em] mb-2.5">Research Domains</p>
                  
                  <div className="flex flex-wrap gap-2" style={{ transform: 'translateZ(18px)' }}>
                    {[
                      { label: 'Computer Vision', color: 'teal' },
                      { label: 'Generative AI', color: 'indigo' },
                      { label: 'Health Informatics', color: 'blue' },
                      { label: 'Machine Learning', color: 'teal' },
                      { label: 'LLMs', color: 'indigo' },
                      { label: 'Env. Modelling', color: 'blue' }
                    ].map((tag, i) => (
                      <span key={i} className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-[0.76rem] ${
                        tag.color === 'teal' ? 'border-[rgba(54,225,198,0.22)] bg-[rgba(54,225,198,0.08)] text-[#36e1c6]' :
                        tag.color === 'blue' ? 'border-[rgba(104,168,255,0.24)] bg-[rgba(104,168,255,0.10)] text-[#a6cbff]' :
                        'border-[rgba(139,140,255,0.24)] bg-[rgba(139,140,255,0.10)] text-[#bbb8ff]'
                      } border`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Ring */}
                  <div className="absolute right-[-20px] bottom-[-18px] w-[180px] h-[180px] rounded-full border border-white/[0.08]" style={{ transform: 'translateZ(50px)' }}>
                    <div className="absolute inset-4 rounded-full border border-[rgba(54,225,198,0.16)]" />
                    <div className="absolute inset-[34px] rounded-full border border-[rgba(104,168,255,0.16)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="py-6 pt-0">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: 'Q1', label: 'Journal Publications' },
              { num: '3+', label: 'International Collaborations' },
              { num: '30+', label: 'Active Researchers' },
              { num: '2', label: 'Partner Universities' }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-5 rounded-[18px] text-center bg-gradient-to-b from-white/[0.09] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-[16px]"
              >
                <div className="text-[2.2rem] font-[850] text-white">{metric.num}</div>
                <div className="text-[0.78rem] text-[#9fb0c7] uppercase tracking-[0.1em] mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>
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
            <div className="text-[0.75rem] tracking-[0.18em] uppercase text-[#36e1c6] font-extrabold mb-2.5">What We Do</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold tracking-[-0.04em] mb-3">Research Areas with Real-World Reach</h2>
            <p className="max-w-[720px] text-[#9fb0c7] text-base">Our work sits at the intersection of scientific rigor, deployable intelligence, and meaningful societal impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Eye, title: 'Computer Vision', desc: 'Advanced deep learning for image and video understanding, medical imaging, detection, recognition, and explainable perception systems.', color: 'teal' },
              { icon: Brain, title: 'Machine Learning', desc: 'Research spanning supervised, unsupervised, and reinforcement learning for predictive, adaptive, and scalable intelligent systems.', color: 'blue' },
              { icon: Wand2, title: 'Generative AI', desc: 'Generation of text, images, audio, and multimodal content to advance interaction design, simulation, and creative intelligence.', color: 'amber' },
              { icon: HeartPulse, title: 'Health Informatics', desc: 'AI for clinical support, diagnosis, longitudinal modelling, and multi-modal medical decision systems with emphasis on interpretability.', color: 'rose' },
              { icon: Leaf, title: 'Environmental Modelling', desc: 'Satellite, sensor, and simulation-driven learning for climate, biodiversity, ecological forecasting, and sustainability analytics.', color: 'emerald' },
              { icon: Bot, title: 'Artificial Intelligence', desc: 'Foundational research in reasoning, planning, language understanding, and intelligent decision-making for complex environments.', color: 'teal' }
            ].map((area, i) => (
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
                <div className="relative z-[1] p-6">
                  <div 
                    className={`w-[58px] h-[58px] rounded-2xl grid place-items-center text-[1.28rem] border border-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] mb-4 ${
                      area.color === 'teal' ? 'bg-gradient-to-br from-[rgba(54,225,198,0.18)] to-[rgba(54,225,198,0.06)] text-[#36e1c6]' :
                      area.color === 'blue' ? 'bg-gradient-to-br from-[rgba(104,168,255,0.18)] to-[rgba(104,168,255,0.06)] text-[#9cc2ff]' :
                      area.color === 'amber' ? 'bg-gradient-to-br from-[rgba(250,204,21,0.18)] to-[rgba(250,204,21,0.06)] text-[#ffd86f]' :
                      area.color === 'rose' ? 'bg-gradient-to-br from-[rgba(244,63,94,0.18)] to-[rgba(244,63,94,0.06)] text-[#ff9bb0]' :
                      'bg-gradient-to-br from-[rgba(16,185,129,0.18)] to-[rgba(16,185,129,0.06)] text-[#68f0bb]'
                    }`}
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <area.icon size={22} />
                  </div>
                  <h3 className="text-[1.03rem] font-[760] mb-2.5" style={{ transform: 'translateZ(16px)' }}>{area.title}</h3>
                  <p className="text-[#9fb0c7] text-[0.92rem]" style={{ transform: 'translateZ(16px)' }}>{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[26px] text-center relative overflow-hidden bg-gradient-to-b from-white/[0.09] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-[16px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(54,225,198,0.16),transparent_45%)] pointer-events-none" />
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-[850] mb-2.5 relative z-[1]">Science That Inspires</h2>
            <p className="text-[#9fb0c7] max-w-[760px] mx-auto mb-5 relative z-[1]">We create a collaborative platform for promising researchers worldwide to explore, publish, and build impactful intelligent systems that matter.</p>
            <div className="flex flex-wrap gap-3.5 justify-center relative z-[1]">
              <Link to="/people" className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-transparent text-[0.92rem] font-bold transition-all duration-[280ms] bg-gradient-to-br from-[#36e1c6] to-[#69f0da] text-[#07231f] shadow-[0_10px_32px_rgba(54,225,198,0.26)] hover:translate-y-[-2px] hover:shadow-[0_16px_40px_rgba(54,225,198,0.30)]">
                <Users size={18} />
                Meet the Team
              </Link>
              <Link to="/join" className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-white/[0.16] text-[0.92rem] font-bold transition-all duration-[280ms] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:translate-y-[-2px]">
                <PlusCircle size={18} />
                Join AAIINS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
