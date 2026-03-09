import { Link } from 'react-router-dom';
import { Eye, Brain, Wand2, HeartPulse, Leaf, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative z-[1] pt-[72px] min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-72px)] flex items-center py-20 px-0">
        <div className="max-w-[1100px] mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.15] tracking-[-0.03em] mb-8 font-[750] text-white">
              Applied Artificial Intelligence and<br/>Intelligent Systems Lab
            </h1>
            <div className="max-w-[900px] mx-auto mb-10">
              <p className="text-[1.08rem] text-[#b8c5d6] leading-[1.85] mb-4">
                Welcome to Applied Artificial Intelligence and Intelligent Systems (AAIINS) Lab. At AAIINS Lab, we believe in science that inspires. Our mission is to connect talented young researchers from around the world, providing them with a platform to explore their potential and contribute to groundbreaking discoveries.
              </p>
              <p className="text-[1.08rem] text-[#b8c5d6] leading-[1.85]">
                We work at the intersection of Computer Vision, Artificial Intelligence, Machine Learning, Generative AI, Health Informatics, and Environmental Modelling, with a shared focus on building intelligent systems that enhance human interaction and improve lives. Our ultimate goal is global outreach, fostering collaboration, sharing knowledge, and turning innovative ideas into impactful solutions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/research" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/[0.12] text-[0.95rem] font-semibold transition-all duration-[250ms] bg-white/[0.06] text-white hover:bg-white/[0.10] hover:border-white/[0.18]">
                Explore Research
              </Link>
              <Link to="/publications" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/[0.12] text-[0.95rem] font-semibold transition-all duration-[250ms] bg-white/[0.06] text-white hover:bg-white/[0.10] hover:border-white/[0.18]">
                Publications
              </Link>
              <Link to="/join" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#36e1c6]/[0.24] text-[0.95rem] font-semibold transition-all duration-[250ms] bg-[#36e1c6]/[0.08] text-[#36e1c6] hover:bg-[#36e1c6]/[0.14] hover:border-[#36e1c6]/[0.32]">
                Join Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact & Stats Section */}
      <section className="py-16 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-[2rem] font-[700] tracking-[-0.02em] mb-3 text-white">Our Impact</h2>
            <p className="max-w-[700px] mx-auto text-[#9fb0c7] text-[1.02rem] leading-[1.7]">
              Building a global community of researchers pushing the boundaries of intelligent systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, num: '30+', label: 'Active Researchers', color: '#bbb8ff', bg: 'from-[#8b8cff]/[0.18] to-[#8b8cff]/[0.06]' },
              { icon: Eye, num: '12+', label: 'Published Papers', color: '#9cc2ff', bg: 'from-[#68a8ff]/[0.18] to-[#68a8ff]/[0.06]' },
              { icon: Wand2, num: '20+', label: 'Under Review', color: '#ffd86f', bg: 'from-[#facc15]/[0.18] to-[#facc15]/[0.06]' },
              { icon: Bot, num: '6', label: 'Research Areas', color: '#36e1c6', bg: 'from-[#36e1c6]/[0.18] to-[#36e1c6]/[0.06]' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-[18px] bg-gradient-to-b from-white/[0.08] to-white/[0.05] border border-white/[0.10] text-center group hover:border-white/[0.18] transition-all duration-300"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.bg} border border-white/[0.10] grid place-items-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} style={{ color: stat.color }} />
                </div>
                <div className="text-[2.5rem] font-[850] mb-2 text-white">{stat.num}</div>
                <div className="text-[0.85rem] text-[#9fb0c7] uppercase tracking-[0.1em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
