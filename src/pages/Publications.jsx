import { motion } from 'framer-motion';
import { CheckCircle2, HourglassIcon, FileText, Github, Quote } from 'lucide-react';

function Publications() {
  const publishedPapers = [
    {
      title: 'Atrous spatial pyramid pooling with Swin Transformer model for classification of gastrointestinal tract diseases from videos with enhanced explainability',
      authors: 'Abian, A. I., Raiaan, M. A. K., Jonkman, M., Islam, S. M. S., & Azam, S. (2025)',
      journal: 'Engineering Applications of Artificial Intelligence'
    },
    {
      title: 'Advancing skin cancer detection integrating a novel unsupervised classification and enhanced imaging techniques',
      authors: 'Rahman, M. A., Fahad, N. M., Raiaan, M. A. K., Jonkman, M., De Boer, F., & Azam, S. (2025)',
      journal: 'CAAI Transactions on Intelligence Technology, 10(2), 474–493'
    },
    {
      title: 'Comprehensive review of the material life cycle and sustainability of solar photovoltaic panels',
      authors: 'Abian, A. I., Azam, S., Ompong, D., & Mathur, D. (2025)',
      journal: 'Solar Energy'
    },
    {
      title: 'A lightweight robust deep learning model gained high accuracy in classifying a wide range of diabetic retinopathy images',
      authors: 'Raiaan, M. A. K., Fatema, K., Khan, I. U., Azam, S., Rashid, M. R. U., Mukta, M. S. H., ... & De Boer, F. (2023)',
      journal: 'IEEE Access, 11, 42361–42388'
    }
  ];

  const underReviewPapers = [
    {
      title: 'BioAutoML-NAS: An End-to-End AutoML Framework for Multimodal Insect Classification via Neural Architecture Search on Large-Scale Biodiversity Data',
      authors: 'Abian, A. I., Sutradhar, D., Rashid, M. R. U. et al. (2025)',
      journal: 'IEEE Transactions on Big Data'
    },
    {
      title: 'Hallucination to Truth: A Review of Fact-Checking and Factuality Evaluation in Large Language Models',
      authors: 'Rahman, S. S., Islam, M. A., Alam, M. M., et al. (2025)',
      journal: 'Artificial Intelligence Review'
    },
    {
      title: 'From language to action: A review of large language models as autonomous agents and tool users',
      authors: 'Chowa, S. S., Alvi, R., Rahman, S. S., et al. (2025)',
      journal: 'Artificial Intelligence Review'
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
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-[850] tracking-[-0.04em] mb-2.5">Publications</h1>
            <p className="max-w-[760px] mx-auto text-[#9fb0c7]">Selected contributions to journals and conferences in AI, machine learning, computer vision, and health informatics.</p>
          </motion.div>
        </div>
      </div>

      {/* Publications */}
      <section className="py-22">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Published Papers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-2.5 flex-wrap text-base font-extrabold mb-4 pb-3 border-b border-white/[0.10]">
              <CheckCircle2 size={20} className="text-[#7bf2ac]" />
              Published Papers
              <span className="px-2.5 py-1.5 rounded-full text-[0.72rem] font-extrabold tracking-[0.04em] bg-[rgba(34,197,94,0.14)] text-[#7bf2ac] border border-[rgba(34,197,94,0.22)]">
                12 Papers
              </span>
            </div>

            <div className="space-y-3">
              {publishedPapers.map((paper, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 px-6 rounded-[18px] bg-gradient-to-b from-white/[0.08] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#68a8ff] to-[#36e1c6]" />
                  <h3 className="text-base font-[760] leading-[1.55] mb-1.5">{paper.title}</h3>
                  <p className="text-[0.86rem] text-[#9fb0c7] mb-1">{paper.authors}</p>
                  <p className="text-[0.86rem] text-[#9cc2ff] font-bold mb-3.5">{paper.journal}</p>
                  <div className="flex gap-2.5 flex-wrap">
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] border border-white/[0.12] bg-white/[0.04] text-[#e8eef8] text-[0.82rem] font-bold transition-all duration-[280ms] hover:translate-y-[-2px] hover:border-[rgba(104,168,255,0.28)] hover:bg-[rgba(104,168,255,0.10)]">
                      <FileText size={14} />
                      PDF
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] border border-white/[0.12] bg-white/[0.04] text-[#e8eef8] text-[0.82rem] font-bold transition-all duration-[280ms] hover:translate-y-[-2px] hover:border-[rgba(104,168,255,0.28)] hover:bg-[rgba(104,168,255,0.10)]">
                      <Github size={14} />
                      Code
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] border border-white/[0.12] bg-white/[0.04] text-[#e8eef8] text-[0.82rem] font-bold transition-all duration-[280ms] hover:translate-y-[-2px] hover:border-[rgba(104,168,255,0.28)] hover:bg-[rgba(104,168,255,0.10)]">
                      <Quote size={14} />
                      Cite
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Under Review */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-center gap-2.5 flex-wrap text-base font-extrabold mb-4 pb-3 border-b border-white/[0.10]">
              <HourglassIcon size={20} className="text-[#ffe27e]" />
              Under Review
              <span className="px-2.5 py-1.5 rounded-full text-[0.72rem] font-extrabold tracking-[0.04em] bg-[rgba(250,204,21,0.14)] text-[#ffe27e] border border-[rgba(250,204,21,0.24)]">
                19 Papers
              </span>
            </div>

            <div className="space-y-3">
              {underReviewPapers.map((paper, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 px-6 rounded-[18px] bg-gradient-to-b from-white/[0.08] to-white/[0.05] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.24)] relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#68a8ff] to-[#36e1c6]" />
                  <h3 className="text-base font-[760] leading-[1.55] mb-1.5">{paper.title}</h3>
                  <p className="text-[0.86rem] text-[#9fb0c7] mb-1">{paper.authors}</p>
                  <p className="text-[0.86rem] text-[#9cc2ff] font-bold mb-3.5">{paper.journal}</p>
                  <div className="flex gap-2.5 flex-wrap">
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] border border-white/[0.12] bg-white/[0.04] text-[#e8eef8] text-[0.82rem] font-bold transition-all duration-[280ms] hover:translate-y-[-2px] hover:border-[rgba(104,168,255,0.28)] hover:bg-[rgba(104,168,255,0.10)]">
                      <FileText size={14} />
                      PDF
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] border border-white/[0.12] bg-white/[0.04] text-[#e8eef8] text-[0.82rem] font-bold transition-all duration-[280ms] hover:translate-y-[-2px] hover:border-[rgba(104,168,255,0.28)] hover:bg-[rgba(104,168,255,0.10)]">
                      <Quote size={14} />
                      Cite
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Publications;
