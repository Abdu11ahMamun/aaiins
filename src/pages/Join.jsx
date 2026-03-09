import { useState } from 'react';
import { motion } from 'framer-motion';
import { Microscope, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

function Join() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    academicLevel: '',
    researchInterest: '',
    statement: ''
  });

  const benefits = [
    {
      icon: Microscope,
      title: 'Cutting-Edge Research',
      description: 'Work on groundbreaking AI projects that make a real-world impact.',
      color: 'from-[#68a8ff] to-[#36e1c6]'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Join a diverse team of researchers and scholars from around the world.',
      color: 'from-[#8b8cff] to-[#68a8ff]'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Develop your skills and advance your career in AI and machine learning.',
      color: 'from-[#36e1c6] to-[#68a8ff]'
    }
  ];

  const eligibilityCriteria = [
    'Strong academic background in Computer Science, Engineering, or related fields',
    'Passion for AI research and real-world problem solving',
    'Good programming skills (Python, TensorFlow, PyTorch, etc.)',
    'Ability to work independently and collaboratively',
    'Excellent communication skills'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Add form submission logic here
  };

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
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-[850] tracking-[-0.04em] mb-2.5">Join Us</h1>
            <p className="max-w-[760px] mx-auto text-[#9fb0c7]">Become part of a research community driving innovation in artificial intelligence.</p>
          </motion.div>
        </div>
      </div>

      {/* Why AAIINS */}
      <section className="py-8">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[1.7rem] font-[820] tracking-[-0.024em] mb-6">Why AAIINS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-[20px] bg-gradient-to-b from-white/[0.08] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] relative overflow-hidden transition-all duration-[280ms] hover:translate-y-[-4px]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-[0.04]`} />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-[14px] bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                      <benefit.icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-[1.2rem] font-[820] tracking-[-0.020em] mb-2">{benefit.title}</h3>
                    <p className="text-[#c2cfdf] text-[0.92rem] leading-[1.6]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-8 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">
            {/* Left: Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-7 rounded-[24px] bg-gradient-to-br from-white/[0.09] to-white/[0.06] border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.24)] h-fit"
            >
              <h2 className="text-[1.5rem] font-[820] tracking-[-0.024em] mb-5">Eligibility Criteria</h2>
              <ul className="space-y-3.5">
                {eligibilityCriteria.map((criterion, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={20} className="text-[#36e1c6] shrink-0 mt-0.5" />
                    <span className="text-[#c2cfdf] leading-[1.6]">{criterion}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-7 rounded-[24px] bg-gradient-to-br from-white/[0.09] to-white/[0.06] border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.24)]"
            >
              <h2 className="text-[1.5rem] font-[820] tracking-[-0.024em] mb-5">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.88rem] font-bold text-[#c2cfdf] mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-[12px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] outline-none transition-all duration-[280ms] focus:border-[rgba(54,225,198,0.32)] focus:bg-white/[0.06]"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.88rem] font-bold text-[#c2cfdf] mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-[12px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] outline-none transition-all duration-[280ms] focus:border-[rgba(54,225,198,0.32)] focus:bg-white/[0.06]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.88rem] font-bold text-[#c2cfdf] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-[12px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] outline-none transition-all duration-[280ms] focus:border-[rgba(54,225,198,0.32)] focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label className="block text-[0.88rem] font-bold text-[#c2cfdf] mb-2">Institution/University</label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-[12px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] outline-none transition-all duration-[280ms] focus:border-[rgba(54,225,198,0.32)] focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label className="block text-[0.88rem] font-bold text-[#c2cfdf] mb-2">Academic Level</label>
                  <select
                    name="academicLevel"
                    value={formData.academicLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-[12px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] outline-none transition-all duration-[280ms] focus:border-[rgba(54,225,198,0.32)] focus:bg-white/[0.06]"
                  >
                    <option value="">Select Level</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate (Masters)</option>
                    <option value="phd">PhD Student</option>
                    <option value="postdoc">Postdoctoral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.88rem] font-bold text-[#c2cfdf] mb-2">Primary Research Interest</label>
                  <select
                    name="researchInterest"
                    value={formData.researchInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-[12px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] outline-none transition-all duration-[280ms] focus:border-[rgba(54,225,198,0.32)] focus:bg-white/[0.06]"
                  >
                    <option value="">Select Area</option>
                    <option value="computer-vision">Computer Vision</option>
                    <option value="nlp">Natural Language Processing</option>
                    <option value="generative-ai">Generative AI</option>
                    <option value="medical-ai">Medical AI</option>
                    <option value="reinforcement-learning">Reinforcement Learning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.88rem] font-bold text-[#c2cfdf] mb-2">Statement of Interest</label>
                  <textarea
                    name="statement"
                    value={formData.statement}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your research interests and why you want to join AAIINS..."
                    className="w-full px-4 py-2.5 rounded-[12px] bg-white/[0.04] border border-white/[0.12] text-[#e8eef8] outline-none transition-all duration-[280ms] focus:border-[rgba(54,225,198,0.32)] focus:bg-white/[0.06] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-[14px] bg-gradient-to-r from-[#36e1c6] to-[#68a8ff] text-white font-bold text-[1.02rem] transition-all duration-[280ms] hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(54,225,198,0.32)]"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Join;
