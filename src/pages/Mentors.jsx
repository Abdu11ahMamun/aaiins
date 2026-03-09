import { motion } from 'framer-motion';
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
    const Icon = mentor.icon;

    return (
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.1 }}
        whileHover={{ y: -4, rotateX: 1.5, rotateY: -1.5 }}
        style={{ transformPerspective: 1200 }}
        className="group relative"
      >
        <div className="absolute inset-0 translate-y-[5px] rounded-[26px] bg-black/30 blur-[2px]" />
        <div className={`absolute -inset-[1px] rounded-[26px] bg-gradient-to-r ${mentor.gradient} opacity-[0.24]`} />

        <div
          className={`relative rounded-[26px] border border-white/[0.12] bg-[#0f1726]/95 p-6 backdrop-blur-[14px] ${
            featured ? 'lg:p-8' : ''
          }`}
        >
          <div className="absolute inset-0 rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))]" />

          <div className={`relative ${featured ? 'lg:flex lg:items-start lg:gap-8' : ''}`}>
            <div className="flex flex-col items-center lg:items-start">
              <div
                className={`overflow-hidden rounded-[16px] border border-white/[0.14] bg-gradient-to-br ${mentor.gradient} shadow-[0_8px_22px_rgba(0,0,0,0.3)] ${
                  featured ? 'h-44 w-44 lg:h-48 lg:w-48' : 'h-32 w-32 lg:h-36 lg:w-36'
                }`}
              >
                {mentor.image ? (
                  <img src={mentor.image} alt={mentor.name} className="h-full w-full object-cover object-top" />
                ) : (
                  <div className="grid h-full w-full place-items-center text-2xl font-black text-white">{mentor.initials}</div>
                )}
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#d6e2f2]">
                <Icon size={13} style={{ color: mentor.accent }} />
                {mentor.tier}
              </div>
            </div>

            <div className={`mt-5 ${featured ? 'lg:mt-0 flex-1' : ''}`}>
              <h3 className={`${featured ? 'text-[1.9rem]' : 'text-[1.35rem]'} text-center font-[850] tracking-[-0.03em] lg:text-left`}>
                {mentor.name}
              </h3>

              <p className="mt-2 text-center text-[0.95rem] font-semibold text-[#c7d3e2] lg:text-left">{mentor.title}</p>
              <p className="mt-1 text-center text-[0.9rem] font-medium text-[#9fb0c7] lg:text-left">{mentor.department}</p>
              <p className="mt-1 text-center text-[0.9rem] text-[#8ea2bb] lg:text-left">{mentor.institution}</p>

              <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
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
        </div>
      </motion.article>
    );
  };

  return (
    <div className="relative z-[1] min-h-screen pt-[72px]">
      <div className="relative py-16 pb-8">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[20px] border border-white/[0.12] bg-gradient-to-b from-white/[0.08] to-white/[0.04] p-8 text-center"
          >
            <h1 className="mb-3 text-[clamp(2rem,4vw,3rem)] font-[850] tracking-[-0.035em] text-white">Mentors</h1>
            <p className="mx-auto max-w-[820px] text-[1.02rem] leading-[1.8] text-[#a8b9ce]">
              Academic leadership and senior researchers guiding the strategic and scholarly direction of AIINS Lab.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-8 pb-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-7 flex items-center justify-center gap-2">
            <Crown className="text-[#cbd5e1]" size={28} />
            <h2 className="text-[2rem] font-[850] tracking-[-0.03em]">Chief Mentor</h2>
          </div>

          <MentorCard mentor={featuredMentor} index={0} featured />

          <div className="mb-7 mt-14 flex items-center justify-center gap-2">
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
