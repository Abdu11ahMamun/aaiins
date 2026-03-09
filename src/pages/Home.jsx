import { Link } from 'react-router-dom';
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

    </div>
  );
}

export default Home;
