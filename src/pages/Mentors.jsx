import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Plus } from 'lucide-react';

function Mentors() {
  const mentors = [
    {
      name: 'Professor Sami Azam',
      institution: 'Charles Darwin University',
      role: 'Senior Lecturer',
      color: 'from-[#68a8ff] to-[#36e1c6]'
    },
    {
      name: 'Mohaimenul Azam Khan Raiaan',
      institution: 'Monash University',
      role: 'PhD Scholar',
      color: 'from-[#8b8cff] to-[#68a8ff]'
    },
    {
      name: 'Sadia Sultana Chowa',
      institution: 'Monash University',
      role: 'PhD Scholar',
      color: 'from-[#36e1c6] to-[#68a8ff]'
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
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-[850] tracking-[-0.04em] mb-2.5">Mentors</h1>
            <p className="max-w-[760px] mx-auto text-[#9fb0c7]">Guided by leading researchers and scholars from around the world.</p>
          </motion.div>
        </div>
      </div>

      {/* Mentors */}
      <section className="py-8 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-[20px] bg-gradient-to-b from-white/[0.08] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] transition-all duration-[280ms] hover:translate-y-[-6px] text-center relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${mentor.color} opacity-[0.04]`} />
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${mentor.color} flex items-center justify-center text-[1.6rem] font-bold mb-4 mx-auto`}>
                    {mentor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="text-[1.3rem] font-[820] tracking-[-0.020em] mb-1">{mentor.name}</h3>
                  <div className="flex items-center justify-center gap-1.5 text-[#68a8ff] font-bold text-[0.88rem] mb-1">
                    <GraduationCap size={16} />
                    {mentor.institution}
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[#36e1c6] font-bold text-[0.82rem]">
                    <Briefcase size={14} />
                    {mentor.role}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Interested in Mentoring Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: mentors.length * 0.1 }}
              className="p-7 rounded-[20px] bg-gradient-to-br from-white/[0.09] to-white/[0.05] border-2 border-dashed border-white/[0.16] shadow-[0_12px_40px_rgba(0,0,0,0.24)] flex flex-col items-center justify-center text-center transition-all duration-[280ms] hover:translate-y-[-6px] hover:border-[rgba(54,225,198,0.32)] cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#36e1c6] to-[#68a8ff] flex items-center justify-center mb-4">
                <Plus size={36} className="text-white font-bold" />
              </div>
              <h3 className="text-[1.2rem] font-[820] tracking-[-0.020em] mb-2">Interested in Mentoring?</h3>
              <p className="text-[#9fb0c7] text-[0.88rem] leading-[1.6] mb-4">Join our team of expert mentors and guide the next generation of AI researchers.</p>
              <button className="px-5 py-2.5 rounded-[12px] bg-gradient-to-r from-[#36e1c6] to-[#68a8ff] text-white font-bold text-[0.92rem] transition-all duration-[280ms] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(54,225,198,0.32)]">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mentors;
