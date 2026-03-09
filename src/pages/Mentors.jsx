import { motion } from 'framer-motion';
import { useState } from 'react';
import { Crown, ShieldCheck, Mail, Linkedin, BookOpen, Globe } from 'lucide-react';

function Mentors() {
  const imageMap = import.meta.glob('../assets/*', { eager: true, import: 'default' });
  const getImage = (fileName) => imageMap[`../assets/${fileName}`] || null;

  const mentors = [
    {
      name: 'Professor Sami Azam',
      tier: 'Chief Mentor',
      title: 'Discipline Chair, Information Technology',
      department: 'Faculty of Science and Technology',
      institution: 'Charles Darwin University, Australia',
      image: getImage('sami-azam_0-removebg-preview-e1757102988261.png'),
      links: {
        email: 'mailto:sami.azam@cdu.edu.au',
        scholar: 'https://www.scopus.com/authid/detail.uri?authorId=54894635100',
        website: 'https://researchers.cdu.edu.au/en/persons/sami-azam',
      },
      gradient: 'from-[#374151] to-[#1f2937]',
      accent: '#cbd5e1',
      icon: Crown,
      initials: 'SA',
    },
    {
      name: 'Mohaimenul Azam Khan Raiaan',
      tier: 'Senior Mentor',
      title: 'PhD Student',
      department: 'Department of Data Science and AI',
      institution: 'Monash University, Australia',
      bio: '',
      image: getImage('Mohaimenul Azam Khan Raiaan.jpg') || getImage('mak-raian.jpg'),
      links: {
        email: 'mailto:mohaimenul.raiaan@monash.edu',
        linkedin: 'https://www.linkedin.com/in/makraiaan/',
        scholar: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=Gg4yXLoAAAAJ',
        website: 'https://mak-raiaan.github.io/',
      },
      gradient: 'from-[#1f3b5a] to-[#1e293b]',
      accent: '#7dd3fc',
      icon: ShieldCheck,
      initials: 'MR',
    },
    {
      name: 'Sadia Sultana Chowa',
      tier: 'Senior Mentor',
      title: 'PhD Student',
      department: 'Department of Software Systems & Cybersecurity',
      institution: 'Monash University, Australia',
      bio: '',
      image: getImage('Chowa-scaled.jpg'),
      links: {
        email: 'mailto:sadia15-3052@diu.edu.bd',
        linkedin: 'https://www.linkedin.com/in/sadia-sultana-chowa-/',
        scholar: 'https://scholar.google.com/citations?user=JKcqHrMAAAAJ&hl=en',
        website: 'https://sultana-chowa.github.io/',
      },
      gradient: 'from-[#1f4d4d] to-[#1e293b]',
      accent: '#5eead4',
      icon: ShieldCheck,
      initials: 'SC',
    },
  ];

  const featuredMentor = mentors[0];
  const supportingMentors = mentors.slice(1);

  const MentorCard = ({ mentor, index, featured = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.1 }}
        whileHover={{ y: -3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative ${featured ? 'mx-auto max-w-[1120px]' : ''}`}
      >
        <div className="absolute inset-0 translate-y-[4px] rounded-[26px] bg-black/25 blur-[2px]" />
        <motion.div
          animate={{
            borderColor: isHovered
              ? ['rgba(56,189,248,0.95)', 'rgba(167,139,250,0.95)', 'rgba(52,211,153,0.95)', 'rgba(56,189,248,0.95)']
              : 'rgba(255,255,255,0.12)',
            boxShadow: isHovered
              ? ['0 0 0 1px rgba(56,189,248,0.35)', '0 0 0 1px rgba(167,139,250,0.35)', '0 0 0 1px rgba(52,211,153,0.35)', '0 0 0 1px rgba(56,189,248,0.35)']
              : '0 0 0 0px rgba(0,0,0,0)',
          }}
          transition={{
            borderColor: { duration: 1.8, ease: 'linear', repeat: isHovered ? Infinity : 0 },
            boxShadow: { duration: 1.8, ease: 'linear', repeat: isHovered ? Infinity : 0 },
          }}
          className={`relative rounded-[26px] border border-white/[0.12] bg-[#0f1726]/95 p-6 backdrop-blur-[14px] ${
            featured ? 'lg:p-10' : ''
          }`}
        >
          <div className="absolute inset-0 rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />

          <div className="relative flex flex-col items-center text-center">
            <div
              className={`overflow-hidden rounded-[18px] border border-white/[0.16] bg-gradient-to-br ${mentor.gradient} shadow-[0_8px_22px_rgba(0,0,0,0.3)] ${
                featured ? 'h-56 w-56 lg:h-64 lg:w-64' : 'h-40 w-40 lg:h-44 lg:w-44'
              }`}
            >
              {mentor.image ? (
                <img src={mentor.image} alt={mentor.name} className="h-full w-full object-cover object-top" />
              ) : (
                <div className="grid h-full w-full place-items-center text-2xl font-black text-white">{mentor.initials}</div>
              )}
            </div>

            <div className="mt-6 max-w-[860px]">
              <h3 className={`${featured ? 'text-[2.15rem]' : 'text-[1.35rem]'} font-[850] tracking-[-0.03em]`}>
                {mentor.name}
              </h3>

              <p className="mt-2 text-[1rem] font-semibold text-[#c7d3e2]">{mentor.title}</p>
              <p className="mt-1 text-[0.95rem] font-medium text-[#9fb0c7]">{mentor.department}</p>
              <p className="mt-1 text-[0.95rem] text-[#8ea2bb]">{mentor.institution}</p>

              {featured && mentor.bio && (
                <p className="mt-4 rounded-[14px] border border-white/[0.10] bg-white/[0.03] px-4 py-3 text-[0.98rem] leading-[1.75] text-[#cdd8e8]">
                  {mentor.bio}
                </p>
              )}

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {mentor.links.email && (
                  <a
                    href={mentor.links.email}
                    className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/[0.14] bg-white/[0.04] px-2.5 py-1.5 text-xs font-semibold text-[#c9d5e7] transition-colors hover:border-[#68a8ff]/50 hover:text-[#68a8ff]"
                    aria-label={`${mentor.name} email`}
                  >
                    <Mail size={13} />
                    Email
                  </a>
                )}
                {mentor.links.linkedin && (
                  <a
                    href={mentor.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/[0.14] bg-white/[0.04] px-2.5 py-1.5 text-xs font-semibold text-[#c9d5e7] transition-colors hover:border-[#0ea5e9]/50 hover:text-[#0ea5e9]"
                    aria-label={`${mentor.name} LinkedIn`}
                  >
                    <Linkedin size={13} />
                    LinkedIn
                  </a>
                )}
                {mentor.links.scholar && (
                  <a
                    href={mentor.links.scholar}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/[0.14] bg-white/[0.04] px-2.5 py-1.5 text-xs font-semibold text-[#c9d5e7] transition-colors hover:border-[#f59e0b]/50 hover:text-[#f59e0b]"
                    aria-label={`${mentor.name} profile`}
                  >
                    <BookOpen size={13} />
                    Scholar
                  </a>
                )}
                {mentor.links.website && (
                  <a
                    href={mentor.links.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/[0.14] bg-white/[0.04] px-2.5 py-1.5 text-xs font-semibold text-[#c9d5e7] transition-colors hover:border-[#34d399]/50 hover:text-[#34d399]"
                    aria-label={`${mentor.name} website`}
                  >
                    <Globe size={13} />
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.article>
    );
  };

  return (
    <div className="relative z-[1] min-h-screen pt-[72px]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-40">
        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -45, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[6%] top-[12%] h-[320px] w-[320px] rounded-full bg-sky-400/20 blur-[90px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[8%] right-[8%] h-[360px] w-[360px] rounded-full bg-emerald-400/20 blur-[100px]"
        />
      </div>

      <div className="relative py-16 pb-8">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] border border-white/[0.14] bg-gradient-to-br from-white/[0.11] via-white/[0.06] to-white/[0.03] p-9 text-center shadow-[0_18px_44px_rgba(0,0,0,0.25)]"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.05] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#c9d5e7]">
              Executive Academic Panel
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.3rem)] font-[900] tracking-[-0.04em] text-transparent bg-gradient-to-r from-[#e2e8f0] via-[#bae6fd] to-[#99f6e4] bg-clip-text">
              Mentors
            </h1>
          </motion.div>
        </div>
      </div>

      <section className="py-8 pb-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-7 flex items-center justify-center gap-2 rounded-[16px] border border-white/[0.10] bg-white/[0.03] py-3">
            <Crown className="text-[#cbd5e1]" size={28} />
            <h2 className="text-[2rem] font-[850] tracking-[-0.03em]">Chief Mentor</h2>
          </div>

          <MentorCard mentor={featuredMentor} index={0} featured />

          <div className="mb-7 mt-14 flex items-center justify-center gap-2 rounded-[16px] border border-white/[0.10] bg-white/[0.03] py-3">
            <ShieldCheck className="text-[#7dd3fc]" size={26} />
            <h2 className="text-[2rem] font-[850] tracking-[-0.03em]">Senior Mentors</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {supportingMentors.map((mentor, i) => (
              <MentorCard key={mentor.name} mentor={mentor} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mentors;
