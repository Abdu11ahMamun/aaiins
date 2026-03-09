import { motion } from 'framer-motion';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

function People() {
  const director = {
    name: 'Nur Mohammad Fahad',
    role: 'Director',
    bio: 'Nur Mohammad Fahad is a lecturer in the Department of Computer Science and Engineering at Jahangirnagar University and director of the Artificial and Augmented Intelligence-based Novel Systems (AAIINS) Research Lab. He is recognized for his innovative research that leverages advanced AI methodologies to tackle real-world challenges across healthcare, sustainability, and beyond. With a keen interest in machine learning applications, his work aims to push the boundaries of what AI can achieve in complex, multidisciplinary domains.',
    image: null,
    linkedin: '#',
    email: 'nur.fahad@juniv.edu'
  };

  const coreTeam = [
    {
      name: 'Arefin Abian',
      role: 'Research Lead',
      bio: 'Arefin Imdadul Abian is a research lead at AAIINS and a lecturer in the Department of Computer Science and Engineering at Jahangirnagar University. His research interests span AutoML, NAS, and scalable AI solutions for multimodal biodiversity and health data. With a strong expertise in deep learning and computer vision, he has been instrumental in driving research innovations at AAIINS.',
      image: null,
      linkedin: '#',
      email: 'arefin@juniv.edu'
    },
    {
      name: 'Abdur Rahman',
      role: 'Research Lead',
      bio: 'Abdur Rahman is a research lead at AAIINS and a lecturer in the Department of Computer Science and Engineering at Jahangirnagar University. His research focuses on medical imaging, dermatology AI, and explainable deep learning. With a keen eye for pixel-level detail, he integrates unsupervised learning techniques to improve diagnostic accuracy in skin cancer and related fields.',
      image: null,
      linkedin: '#',
      email: 'abdur.rahman@juniv.edu'
    },
    {
      name: 'Debopom Sutradhar',
      role: 'Research Lead',
      bio: 'Debopom Sutradhar is a research lead at AAIINS and a lecturer in the Department of Computer Science and Engineering at Jahangirnagar University. His research interests include LLMs, knowledge graphs, multimodal learning, and tool-assisted AI systems. He focuses on building systems that integrate linguistic, visual, and structured knowledge to advance language-driven AI capabilities.',
      image: null,
      linkedin: '#',
      email: 'debopom@juniv.edu'
    }
  ];

  const graduateResearchers = [
    {
      name: 'Ripon Kumar Debnath',
      role: 'Graduate Researcher',
      focus: 'Computer Vision & Medical Imaging',
      image: null
    },
    {
      name: 'Musarrat Zeba',
      role: 'Graduate Researcher',
      focus: 'Natural Language Processing',
      image: null
    },
    {
      name: 'Abdullah Al Mamun',
      role: 'Graduate Researcher',
      focus: 'Computer Vision & LLMs',
      image: null
    },
    {
      name: 'Wasimul Karim',
      role: 'Graduate Researcher',
      focus: 'Reinforcement Learning',
      image: null
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
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-[850] tracking-[-0.04em] mb-2.5">Our Team</h1>
            <p className="max-w-[760px] mx-auto text-[#9fb0c7]">Meet the researchers and engineers driving innovation in artificial intelligence and machine learning.</p>
          </motion.div>
        </div>
      </div>

      {/* Director */}
      <section className="py-8">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[1.7rem] font-[820] tracking-[-0.024em] mb-6 flex items-center gap-2.5">
              <GraduationCap className="text-[#36e1c6]" size={30} />
              Director
            </h2>
            <div className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.09] to-white/[0.06] border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-[16px]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-36 h-36 rounded-[18px] bg-gradient-to-br from-[#68a8ff] to-[#36e1c6] flex items-center justify-center text-[3rem] font-bold">
                  NF
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.7rem] font-[820] tracking-[-0.024em] mb-1">{director.name}</h3>
                  <p className="text-[#36e1c6] font-bold text-[1.02rem] mb-4">{director.role}</p>
                  <p className="text-[#c2cfdf] leading-[1.7] mb-5">{director.bio}</p>
                  <div className="flex gap-3">
                    <a 
                      href={director.linkedin} 
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[12px] bg-[rgba(104,168,255,0.12)] border border-[rgba(104,168,255,0.24)] text-[#68a8ff] font-bold text-[0.92rem] transition-all duration-[280ms] hover:translate-y-[-2px] hover:bg-[rgba(104,168,255,0.20)]"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                    <a 
                      href={`mailto:${director.email}`} 
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[12px] bg-[rgba(54,225,198,0.12)] border border-[rgba(54,225,198,0.24)] text-[#36e1c6] font-bold text-[0.92rem] transition-all duration-[280ms] hover:translate-y-[-2px] hover:bg-[rgba(54,225,198,0.20)]"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Team */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[1.7rem] font-[820] tracking-[-0.024em] mb-6">Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTeam.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-[20px] bg-gradient-to-b from-white/[0.08] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] transition-all duration-[280ms] hover:translate-y-[-4px]"
                >
                  <div className="w-20 h-20 rounded-[14px] bg-gradient-to-br from-[#68a8ff] to-[#36e1c6] flex items-center justify-center text-[1.8rem] font-bold mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-[1.3rem] font-[800] tracking-[-0.020em] mb-1">{member.name}</h3>
                  <p className="text-[#68a8ff] font-bold text-[0.92rem] mb-3">{member.role}</p>
                  <p className="text-[#c2cfdf] text-[0.92rem] leading-[1.6] mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <a 
                      href={member.linkedin} 
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] text-[0.82rem] font-bold transition-all duration-[280ms] hover:border-[rgba(104,168,255,0.28)] hover:bg-[rgba(104,168,255,0.10)]"
                    >
                      <Linkedin size={14} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] text-[0.82rem] font-bold transition-all duration-[280ms] hover:border-[rgba(54,225,198,0.28)] hover:bg-[rgba(54,225,198,0.10)]"
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Graduate Researchers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[1.7rem] font-[820] tracking-[-0.024em] mb-6">Graduate Researchers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {graduateResearchers.map((researcher, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-[18px] bg-gradient-to-b from-white/[0.08] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] text-center transition-all duration-[280ms] hover:translate-y-[-4px]"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b8cff] to-[#36e1c6] flex items-center justify-center text-[1.4rem] font-bold mb-3 mx-auto">
                    {researcher.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-[1.1rem] font-[800] tracking-[-0.018em] mb-1">{researcher.name}</h3>
                  <p className="text-[#8b8cff] font-bold text-[0.82rem] mb-2">{researcher.role}</p>
                  <p className="text-[#9fb0c7] text-[0.82rem]">{researcher.focus}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default People;
