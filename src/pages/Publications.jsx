import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, HourglassIcon, Search, Filter, X, Calendar, BookOpen, Sparkles, ExternalLink } from 'lucide-react';
import { useState, useMemo } from 'react';

function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all'); // all, published, under-review
  const [selectedYear, setSelectedYear] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const publishedPapers = [
    {
      title: 'HANS-Net: Hyperbolic convolution and adaptive temporal attention for accurate and generalizable liver and tumor segmentation in CT imaging',
      authors: 'Abian, A. I., Debnath, R. K., Rahman, M. A., et al.',
      year: '2025',
      journal: 'IEEE Transactions on Radiation and Plasma Medical Sciences',
      status: 'published',
      tags: ['Healthcare', 'Segmentation', 'CT Imaging'],
      url: 'https://ieeexplore.ieee.org/abstract/document/11355697'
    },
    {
      title: 'Atrous spatial pyramid pooling with Swin Transformer model for classification of gastrointestinal tract diseases from videos with enhanced explainability',
      authors: 'Abian, A. I., Raiaan, M. A. K., Jonkman, M., Islam, S. M. S., & Azam, S.',
      year: '2025',
      journal: 'Engineering Applications of Artificial Intelligence',
      status: 'published',
      tags: ['Computer Vision', 'Deep Learning', 'Healthcare'],
      url: 'https://doi.org/10.1016/j.engappai.2025.110656'
    },
    {
      title: 'Diffusion-based knowledge distillation for effective multi-organ segmentation with reduced computational time',
      authors: 'Raiaan, M. A. K., Rahman, M. A., Azam, S., Yeo, K. C., Sebastian, Y., and Jonkman, M.',
      year: '2025',
      journal: 'Computers in Biology and Medicine',
      status: 'published',
      tags: ['Healthcare', 'Segmentation', 'Knowledge Distillation'],
      url: 'https://doi.org/10.1016/j.compbiomed.2025.111265'
    },
    {
      title: 'Hallucination to Truth: A Review of Fact-Checking and Factuality Evaluation in Large Language Models',
      authors: 'Rahman, S. S., Islam, M. A., Alam, M. M., et al.',
      year: '2025',
      journal: 'Artificial Intelligence Review',
      status: 'published',
      tags: ['LLMs', 'Factuality', 'Review'],
      url: 'https://link.springer.com/article/10.1007/s10462-025-11454-w'
    },
    {
      title: 'From language to action: A review of large language models as autonomous agents and tool users',
      authors: 'Chowa, S. S., Alvi, R., Rahman, S. S., et al.',
      year: '2025',
      journal: 'Artificial Intelligence Review',
      status: 'published',
      tags: ['LLMs', 'Agents', 'Review'],
      url: 'https://link.springer.com/article/10.1007/s10462-025-11471-9'
    },
    {
      title: 'Advancing skin cancer detection integrating a novel unsupervised classification and enhanced imaging techniques',
      authors: 'Rahman, M. A., Fahad, N. M., Raiaan, M. A. K., Jonkman, M., De Boer, F., & Azam, S.',
      year: '2025',
      journal: 'CAAI Transactions on Intelligence Technology, 10(2), 474-493',
      status: 'published',
      tags: ['Machine Learning', 'Healthcare', 'Image Processing'],
      url: 'https://doi.org/10.1049/cit2.12410'
    },
    {
      title: 'Comprehensive review of the material life cycle and sustainability of solar photovoltaic panels',
      authors: 'Abian, A. I., Azam, S., Ompong, D., & Mathur, D.',
      year: '2025',
      journal: 'Solar Energy',
      status: 'published',
      tags: ['Environmental Modelling', 'Sustainability'],
      url: 'https://doi.org/10.1016/j.solener.2025.113927'
    },
    {
      title: 'A lightweight robust deep learning model gained high accuracy in classifying a wide range of diabetic retinopathy images',
      authors: 'Raiaan, M. A. K., Fatema, K., Khan, I. U., Azam, S., Rashid, M. R. U., Mukta, M. S. H., ... & De Boer, F.',
      year: '2023',
      journal: 'IEEE Access, 11, 42361-42388',
      status: 'published',
      tags: ['Deep Learning', 'Healthcare', 'Computer Vision'],
      url: 'https://doi.org/10.1109/ACCESS.2023.3272228'
    },
    {
      title: 'Predicting Postresection Colorectal Liver Metastases Recurrence Using Advanced Graph Neural Networks with Explainability and Causal Inference',
      authors: 'Ahmed, J., Rahman, M. A., Raiaan, M. A. K., and Azam, S.',
      year: '2025',
      journal: 'Advanced Intelligent Systems',
      status: 'published',
      tags: ['Healthcare', 'Graph Neural Networks', 'Causal Inference'],
      url: 'https://doi.org/10.1002/aisy.202500596'
    },
    {
      title: 'FSS-ULivR: a clinically inspired few-shot segmentation framework for liver imaging using unified representations and attention mechanisms',
      authors: 'Debnath, R. K., Rahman, M. A., Azam, S., Zhang, Y., & Jonkman, M.',
      year: '2025',
      journal: 'Journal of Cancer Research and Clinical Oncology, 151(7), 1-23',
      status: 'published',
      tags: ['Healthcare', 'Segmentation', 'Deep Learning'],
      url: 'https://doi.org/10.1007/s00432-025-06256-0'
    },
    {
      title: 'Cervical spine fracture detection utilizing YOLOv8 and deep attention-based vertebrae classification ensuring XAI',
      authors: 'Sutradhar, D., Fahad, N. M., Raiaan, M. A. K., Jonkman, M., & Azam, S.',
      year: '2025',
      journal: 'Biomedical Signal Processing and Control, 101, 107228',
      status: 'published',
      tags: ['Computer Vision', 'Healthcare', 'XAI'],
      url: 'https://doi.org/10.1016/j.bspc.2024.107228'
    },
    {
      title: 'A computer-aided diagnostic system to identify diabetic retinopathy, utilizing a modified compact convolutional transformer and low-resolution images to reduce computation time',
      authors: 'Khan, I. U., Raiaan, M. A. K., Fatema, K., Azam, S., Rashid, R. U., Mukta, S. H., ... & De Boer, F.',
      year: '2023',
      journal: 'Biomedicines, 11(6), 1566',
      status: 'published',
      tags: ['Healthcare', 'Deep Learning', 'Transformers'],
      url: 'https://doi.org/10.3390/biomedicines11061566'
    },
    {
      title: 'An Innovative Coverage Path Planning Approach for UAVs to Boost Precision Agriculture and Rescue Operations',
      authors: 'Fahad, N. M., Thuseethan, S., Azid, S. I., & Azam, S.',
      year: '2025',
      journal: 'International Journal of Intelligent Systems, 2025(1), 4700518',
      status: 'published',
      tags: ['Optimization', 'UAV', 'Agriculture'],
      url: 'https://doi.org/10.1155/int/4700518'
    },
    {
      title: 'Advanced Biomedical Imaging for Identifying Blood Cell Type: Integrating Segmentation, Feature Extraction, and GraphSage Model',
      authors: 'Fahad, N. M., Raiaan, M. A. K., Abian, A. I., Debnath, R. K., Montaha, S., Jonkman, M., & Azam, S.',
      year: '2025',
      journal: 'Biomedical Engineering Advances, 100174',
      status: 'published',
      tags: ['Healthcare', 'Graph Neural Networks', 'Computer Vision'],
      url: 'https://doi.org/10.1016/j.bea.2025.100174'
    },
    {
      title: 'A review on large language models: Architectures, applications, taxonomies, open issues, and challenges',
      authors: 'Raiaan, M. A. K., Mukta, M. S. H., Fatema, K., Fahad, N. M., Sakib, S., Mim, M. M. J., Ahmed, J., Ali, M.E., & Azam, S.',
      year: '2024',
      journal: 'IEEE Access',
      status: 'published',
      tags: ['LLMs', 'NLP', 'Review'],
      url: 'https://doi.org/10.1016/j.bspc.2024.106279'
    },
    {
      title: 'Automated diagnosis of respiratory diseases from lung ultrasound videos ensuring XAI: An innovative hybrid model approach',
      authors: 'Abian, A. I., Raiaan, M. A. K., Karim, A., Azam, S., Fahad, N. M., Shafiabady, N., Yeo, K. C., & De Boer, F.',
      year: '2024',
      journal: 'Frontiers in Computer Science',
      status: 'published',
      tags: ['Healthcare', 'XAI', 'Deep Learning'],
      url: 'https://doi.org/10.3389/fcomp.2024.1438126'
    },
    {
      title: 'Enhancing cervical cancer diagnosis with graph convolution network: AI-powered segmentation, feature analysis, and classification for early detection',
      authors: 'Fahad, N. M., Azam, S., Montaha, S., & Mukta, M. S. H.',
      year: '2024',
      journal: 'Multimedia Tools and Applications, 83(30), 75343-75367',
      status: 'published',
      tags: ['Healthcare', 'Graph Neural Networks', 'Cancer Detection'],
      url: 'https://doi.org/10.1007/s11042-024-18608-y'
    },
    {
      title: 'A Dual-Stage Framework for Cardiovascular Abnormalities Diagnosis from ECG Signals Using CA-GNN and Semi-Supervised Autoencoders',
      authors: 'Fahad, N. M., Rahman, M. A., Jakarea, Md., Jonkman, M., & Azam, S.',
      year: '2025',
      journal: 'Signal, Image, and Video Processing',
      status: 'published',
      tags: ['Healthcare', 'Graph Neural Networks', 'ECG'],
      url: 'https://link.springer.com/article/10.1007/s11760-025-05042-2'
    }
  ];

  const underReviewPapers = [
    {
      title: 'BioAutoML-NAS: An End-to-End AutoML Framework for Multimodal Insect Classification via Neural Architecture Search on Large-Scale Biodiversity Data',
      authors: 'Abian, A. I., Sutradhar, D., Rashid, M. R. U. et al.',
      year: '2025',
      journal: 'IEEE Transactions on Big Data, Manuscript ID: TBD-2025-10-0603',
      status: 'under-review',
      tags: ['AutoML', 'NAS', 'Biodiversity'],
      url: 'https://arxiv.org/abs/2510.05888'
    },
    {
      title: 'Quantitative Measurement of Parkinson Disease Progression Using DaTscan Radiomics and Clinical Features with a Machine Learning Based Approach',
      authors: 'Alam, M. M., Rahman, S. S., Chowa, S. S., et al.',
      year: '2025',
      journal: 'International Journal of Intelligent Systems',
      status: 'under-review',
      tags: ['Healthcare', 'Radiomics', 'Machine Learning']
    },
    {
      title: 'ReFRM3D: A radiomics-enhanced fused residual multiparametric 3D network with multi-scale feature fusion for glioma characterization',
      authors: 'Rahman, M. A., Raiaan, M. A. K., Abian, A. I., et al.',
      year: '2025',
      journal: 'Knowledge-Based Systems (Submission ID: KNOSYS-D-25-03102)',
      status: 'under-review',
      tags: ['Healthcare', 'Radiomics', 'Deep Learning']
    },
    {
      title: 'A Fine-Grained Attention and Geometric Correspondence Model for Musculoskeletal Risk Classification in Athletes Using Multimodal Visual and Skeletal Features',
      authors: 'Rahman, M. A., Raiaan, M. A. K., Shermin, T., et al.',
      year: '2025',
      journal: 'Expert Systems With Applications (Submission ID: ESWAD-25-24228)',
      status: 'under-review',
      tags: ['Computer Vision', 'Healthcare', 'Attention'],
      url: 'https://doi.org/10.48550/arXiv.2509.05913'
    },
    {
      title: 'ARIONet: An Advanced Self-supervised Contrastive Representation Network for Birdsong Classification and Future Frame Prediction',
      authors: 'Rahman, M. A., Thuseethan, S., Yeo, K. C., et al.',
      year: '2025',
      journal: 'Applied Acoustics (Submission ID: APAC-D-25-02248)',
      status: 'under-review',
      tags: ['Self-supervised', 'Audio', 'Biodiversity'],
      url: 'https://doi.org/10.48550/arXiv.2510.00522'
    },
    {
      title: 'A source-free approach for domain adaptation via multiview image transformation and latent space consistency',
      authors: 'Sutradhar, D.*, Rahman, M. A.*, Raiaan, M. A. K., et al.',
      year: '2025',
      journal: 'IEEE Transactions on Image Processing (Submission ID: TIP-34966-2025)',
      status: 'under-review',
      tags: ['Domain Adaptation', 'Computer Vision']
    },
    {
      title: 'CADE: A lightweight change-adaptive dual-path encoder framework for predicting and generating future changes in satellite imagery using semi-supervised learning',
      authors: 'Sutradhar, D., Rahman, M. A., Mannan, Z. I., et al.',
      year: '2025',
      journal: 'Neural Computing and Applications (Submission ID: NCAA-D-25-03901)',
      status: 'under-review',
      tags: ['Remote Sensing', 'Semi-supervised', 'Change Detection']
    },
    {
      title: 'SSMT-ConED: A semi-supervised student–teacher framework with contrastive learning and generative adversarial network-based augmentation for robust multi-organ segmentation across CT and MRI modalities',
      authors: 'Debnath, R. K., Raiaan, M. A. K., Rahman, M. A., et al.',
      year: '2025',
      journal: 'Biomedical Signal Processing and Control (Submission ID: BSPC-D-25-06356)',
      status: 'under-review',
      tags: ['Healthcare', 'Segmentation', 'Multi-modal']
    },
    {
      title: 'A systematic review on diagnosing mental health disorders with artificial intelligence: The role of explainable AI and clinician involvement',
      authors: 'Abian, A. I., Sayeedi, M. F. A., Jonkman, M., et al.',
      year: '2025',
      journal: 'Neural Computing and Applications. Manuscript ID: NCAA-D-25-01826',
      status: 'under-review',
      tags: ['Healthcare', 'XAI', 'Review']
    },
    {
      title: 'CLAIRE: A dual encoder network with RIFT loss and Phi-3 small language model based interpretability for cross-modality synthetic aperture radar and optical land cover segmentation',
      authors: 'Sutradhar, D., Abian, A. I., Raiaan, M. A. K., et al.',
      year: '2025',
      journal: 'ISPRS Journal of Photogrammetry and Remote Sensing. Manuscript ID: PHOTO-D-25-02551',
      status: 'under-review',
      tags: ['Remote Sensing', 'Multi-modal', 'LLMs'],
      url: 'https://doi.org/10.48550/arXiv.2509.11952'
    },
    {
      title: 'MO-SA: An Optimized Multi Objective Simulated Annealing Approach for Efficient Drone-Based Products Delivery',
      authors: 'Fahad, N. M., Raiaan, M. A. K., Azam, S., et al.',
      year: '2025',
      journal: 'Journal of Scheduling. Manuscript ID: JOSH-D-24-00080',
      status: 'under-review',
      tags: ['Optimization', 'UAV', 'Scheduling']
    },
    {
      title: 'Renewable Energy Forecasting from multiple sources utilizing Quantization Aware Trained Transformer with Encrypted-Decrypted Federated Learning',
      authors: 'Fahad, N. M., Siddique, A. H., et al.',
      year: '2025',
      journal: 'Applied Energy. Manuscript ID: APEN-D-25-08777',
      status: 'under-review',
      tags: ['Energy', 'Federated Learning', 'Transformers']
    },
    {
      title: 'Optimizing performance and privacy in anomaly classification of smart grids: A deep gated residual network with robust feature selection and the integration of Federated learning',
      authors: 'Fahad, N. M., Siddique, A. H., et al.',
      year: '2025',
      journal: 'International Journal of Critical Infrastructure Protection. Manuscript ID: IJCIP-D-24-00111',
      status: 'under-review',
      tags: ['Smart Grid', 'Federated Learning', 'Security']
    },
    {
      title: 'A Dual-Stage Framework for Cardiovascular Abnormalities Diagnosis from ECG Signals Using CA-GNN and Semi-Supervised Autoencoders',
      authors: 'Fahad, N. M., Rahman, A., Jakarea, Md., et al.',
      year: '2025',
      journal: 'Signal, Image, and Video Processing, 2025 Submission ID: 2a60a30f-8ca9-45c0-af3e-4d60c7fff414',
      status: 'under-review',
      tags: ['Healthcare', 'Graph Neural Networks', 'ECG']
    },
    {
      title: 'FracART for accurate 3D MRI brain tumor segmentation with subsequent reconstruction, radiomic feature extraction, and graph-based classification',
      authors: 'Debnath, R. K., Mim, M. M. J., Karim, A., et al.',
      year: '2025',
      journal: 'Neural Computing and Applications. Manuscript ID: NCAA-D-25-01569',
      status: 'under-review',
      tags: ['Healthcare', 'Segmentation', 'Graph Neural Networks']
    },
    {
      title: 'PPORLD-EDNetLDCT: A Proximal Policy Optimization-Based Reinforcement Learning Framework for Adaptive Low-Dose CT Denoising',
      authors: 'Sutradhar, D., Debnath, R. K., Raiaan, M. A. K., et al.',
      year: '2025',
      journal: 'International Journal of Intelligent Systems, Wiley. Manuscript ID: 3676394',
      status: 'under-review',
      tags: ['Healthcare', 'Reinforcement Learning', 'Imaging'],
      url: 'https://doi.org/10.48550/arXiv.2509.03185'
    }
  ];

  const allPapers = [...publishedPapers, ...underReviewPapers];

  // Get unique years
  const years = useMemo(() => {
    const yearSet = new Set(allPapers.map(p => p.year));
    return ['all', ...Array.from(yearSet).sort((a, b) => b.localeCompare(a))];
  }, []);

  // Filter papers based on search and filters
  const filteredPapers = useMemo(() => {
    return allPapers.filter(paper => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery || 
        paper.title.toLowerCase().includes(searchLower) ||
        paper.authors.toLowerCase().includes(searchLower) ||
        paper.journal.toLowerCase().includes(searchLower) ||
        paper.tags.some(tag => tag.toLowerCase().includes(searchLower));

      // Status filter
      const matchesStatus = selectedFilter === 'all' || paper.status === selectedFilter;

      // Year filter
      const matchesYear = selectedYear === 'all' || paper.year === selectedYear;

      return matchesSearch && matchesStatus && matchesYear;
    });
  }, [searchQuery, selectedFilter, selectedYear, allPapers]);

  const publishedCount = filteredPapers.filter(p => p.status === 'published').length;
  const underReviewCount = filteredPapers.filter(p => p.status === 'under-review').length;

  const PaperCard = ({ paper, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative p-6 rounded-[22px] bg-gradient-to-br from-white/[0.10] via-white/[0.06] to-white/[0.03] border border-white/[0.12] overflow-hidden transition-all duration-500 hover:border-white/[0.20] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
    >
      {/* Animated background gradient */}
      <motion.div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          paper.status === 'published' 
            ? 'bg-gradient-to-br from-[rgba(34,197,94,0.08)] via-transparent to-transparent'
            : 'bg-gradient-to-br from-[rgba(250,204,21,0.08)] via-transparent to-transparent'
        }`}
      />

      {/* Status indicator bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${
        paper.status === 'published'
          ? 'bg-gradient-to-b from-[#10b981] to-[#22c55e]'
          : 'bg-gradient-to-b from-[#f59e0b] to-[#facc15]'
      }`} />

      {/* Glow effect on hover */}
      <div className="absolute inset-[-100px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-[shimmer_2s_ease-in-out]" />

      <div className="relative z-10">
        {/* Header with status badge and year */}
        <div className="flex items-start justify-between mb-4 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.75rem] font-bold uppercase tracking-[0.08em] border ${
              paper.status === 'published'
                ? 'bg-[rgba(34,197,94,0.12)] text-[#7bf2ac] border-[rgba(34,197,94,0.25)]'
                : 'bg-[rgba(250,204,21,0.12)] text-[#ffe27e] border-[rgba(250,204,21,0.25)]'
            }`}
          >
            {paper.status === 'published' ? (
              <><CheckCircle2 size={14} /> Published</>
            ) : (
              <><HourglassIcon size={14} /> Under Review</>
            )}
          </motion.div>

          <div className="flex items-center gap-2 text-[0.8rem] text-[#9fb0c7] font-semibold">
            <Calendar size={14} />
            {paper.year}
          </div>
        </div>

        {/* Title */}
        {paper.url ? (
          <a href={paper.url} target="_blank" rel="noreferrer" className="group/title inline-block mb-3">
            <h3 className="text-[1.1rem] font-[760] leading-[1.5] text-white transition-colors duration-300 group-hover/title:text-[#9cc2ff]">
              {paper.title}
            </h3>
          </a>
        ) : (
          <h3 className="text-[1.1rem] font-[760] leading-[1.5] mb-3 text-white group-hover:text-[#e8eef8] transition-colors duration-300">
            {paper.title}
          </h3>
        )}

        {/* Authors */}
        <p className="text-[0.9rem] text-[#9fb0c7] mb-2 leading-[1.6]">
          {paper.authors}
        </p>

        {/* Journal */}
        <div className="flex items-start gap-2 mb-4">
          <BookOpen size={16} className="text-[#68a8ff] shrink-0 mt-0.5" />
          <p className="text-[0.88rem] text-[#9cc2ff] font-semibold leading-[1.5]">
            {paper.journal}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {paper.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg text-[0.72rem] font-bold bg-white/[0.06] text-[#b8c5d6] border border-white/[0.10] transition-colors duration-300 hover:bg-white/[0.10] hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2.5 flex-wrap pt-3 border-t border-white/[0.08]">
          {paper.url ? (
            <motion.a
              href={paper.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[12px] border border-[#68a8ff]/[0.25] bg-[#68a8ff]/[0.08] text-[#9cc2ff] text-[0.85rem] font-bold transition-all duration-300 hover:bg-[#68a8ff]/[0.15] hover:border-[#68a8ff]/[0.35] hover:shadow-[0_4px_16px_rgba(104,168,255,0.2)]"
            >
              <ExternalLink size={15} />
              View Paper
            </motion.a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[12px] border border-white/[0.12] bg-white/[0.05] text-[#9fb0c7] text-[0.85rem] font-bold">
              Link Not Public Yet
            </span>
          )}
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.02] to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );

  return (
    <div className="relative z-[1] pt-[72px] min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#68a8ff] blur-[140px]"
        />
      </div>

      {/* Page Hero */}
      <div className="py-16 pb-10 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#68a8ff]/[0.15] to-[#36e1c6]/[0.15] border border-[#68a8ff]/[0.3] mb-6 backdrop-blur-sm"
            >
              <span className="text-[0.85rem] font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-[#68a8ff] to-[#36e1c6] bg-clip-text text-transparent">
                Research Output
              </span>
            </motion.div>
            
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-[900] tracking-[-0.04em] mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-white to-[#b8c5d6] bg-clip-text text-transparent">
                Publications
              </span>
            </h1>
            
            <p className="max-w-[820px] mx-auto text-[1.1rem] text-[#b8c5d6] leading-[1.7] font-light mb-8">
              Explore our contributions to AI research across journals and conferences, advancing machine learning, computer vision, and health informatics.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-3 rounded-[16px] bg-gradient-to-br from-[rgba(34,197,94,0.12)] to-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.25)]"
              >
                <CheckCircle2 size={20} className="text-[#7bf2ac]" />
                <span className="text-[1.6rem] font-[900] text-white">{publishedPapers.length}</span>
                <span className="text-[0.9rem] font-semibold text-[#9fb0c7]">Published</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-3 rounded-[16px] bg-gradient-to-br from-[rgba(250,204,21,0.12)] to-[rgba(250,204,21,0.06)] border border-[rgba(250,204,21,0.25)]"
              >
                <HourglassIcon size={20} className="text-[#ffe27e]" />
                <span className="text-[1.6rem] font-[900] text-white">{underReviewPapers.length}</span>
                <span className="text-[0.9rem] font-semibold text-[#9fb0c7]">Under Review</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="pb-8 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-[24px] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent border border-white/[0.12] backdrop-blur-xl"
          >
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9fb0c7]" size={20} />
              <input
                type="text"
                placeholder="Search by title, authors, journal, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-[16px] bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-[#7f90a8] focus:outline-none focus:border-[#68a8ff]/[0.4] focus:bg-white/[0.08] transition-all duration-300 text-[0.95rem]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9fb0c7] hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Filter Row */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[12px] border text-[0.9rem] font-bold transition-all duration-300 ${
                  showFilters
                    ? 'bg-[#68a8ff]/[0.15] border-[#68a8ff]/[0.35] text-[#9cc2ff]'
                    : 'bg-white/[0.06] border-white/[0.12] text-[#b8c5d6] hover:bg-white/[0.10]'
                }`}
              >
                <Filter size={16} />
                Filters
                {(selectedFilter !== 'all' || selectedYear !== 'all') && (
                  <span className="w-2 h-2 rounded-full bg-[#36e1c6]" />
                )}
              </button>

              {/* Quick filter buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                {['all', 'published', 'under-review'].map((filter) => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2.5 rounded-[12px] text-[0.85rem] font-bold transition-all duration-300 ${
                      selectedFilter === filter
                        ? 'bg-gradient-to-r from-[#68a8ff] to-[#36e1c6] text-white shadow-[0_4px_16px_rgba(104,168,255,0.3)]'
                        : 'bg-white/[0.06] border border-white/[0.10] text-[#b8c5d6] hover:bg-white/[0.10]'
                    }`}
                  >
                    {filter === 'all' ? 'All Papers' : filter === 'published' ? 'Published' : 'Under Review'}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Expanded Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/[0.10]">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-[0.85rem] font-bold text-[#9fb0c7]">Year:</span>
                      {years.map((year) => (
                        <motion.button
                          key={year}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedYear(year)}
                          className={`px-3 py-2 rounded-[10px] text-[0.8rem] font-bold transition-all duration-300 ${
                            selectedYear === year
                              ? 'bg-[#36e1c6]/[0.15] border border-[#36e1c6]/[0.35] text-[#36e1c6]'
                              : 'bg-white/[0.04] border border-white/[0.08] text-[#b8c5d6] hover:bg-white/[0.08]'
                          }`}
                        >
                          {year === 'all' ? 'All Years' : year}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results count */}
            <div className="mt-4 pt-4 border-t border-white/[0.08] text-[0.9rem] text-[#9fb0c7] font-semibold">
              Showing <span className="text-white font-bold">{filteredPapers.length}</span> of <span className="text-white font-bold">{allPapers.length}</span> papers
              {selectedFilter !== 'all' && ` · ${selectedFilter === 'published' ? 'Published' : 'Under Review'}`}
              {selectedYear !== 'all' && ` · ${selectedYear}`}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-8 pb-24 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          {filteredPapers.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredPapers.map((paper, index) => (
                  <PaperCard key={`${paper.title}-${index}`} paper={paper} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/[0.06] border border-white/[0.10] mb-6">
                <Search size={36} className="text-[#9fb0c7]" />
              </div>
              <h3 className="text-[1.5rem] font-bold text-white mb-3">No papers found</h3>
              <p className="text-[#9fb0c7] mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                  setSelectedYear('all');
                }}
                className="px-6 py-3 rounded-[14px] bg-gradient-to-r from-[#68a8ff] to-[#36e1c6] text-white font-bold text-[0.95rem] hover:shadow-[0_8px_24px_rgba(104,168,255,0.3)] transition-shadow duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 pb-24 relative">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-[32px] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent border border-white/[0.15] text-center overflow-hidden group"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#68a8ff]/[0.1] via-[#36e1c6]/[0.1] to-[#68a8ff]/[0.1]"
            />
            
            <div className="relative z-10">
              <Sparkles className="inline-block text-[#36e1c6] mb-4" size={32} />
              <h2 className="text-[2rem] font-[850] mb-4 tracking-[-0.02em]">
                <span className="bg-gradient-to-r from-white to-[#b8c5d6] bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h2>
              <p className="text-[1.05rem] text-[#b8c5d6] mb-6 leading-[1.7] max-w-[600px] mx-auto">
                Follow our latest research and be the first to know when new papers are published.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Publications;
