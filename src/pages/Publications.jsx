import { useState, useMemo, useRef, useEffect } from 'react';
import React from 'react';
import Footer from '../components/Footer';
import { UNSPLASH } from '../data';
import styles from './Publications.module.css';

// ── ALL PAPERS DATA ──
const publishedPapers = [
  { title: 'HANS-Net: Hyperbolic convolution and adaptive temporal attention for accurate and generalizable liver and tumor segmentation in CT imaging', authors: 'Abian, A. I., Debnath, R. K., Rahman, M. A., et al.', year: '2025', journal: 'IEEE Transactions on Radiation and Plasma Medical Sciences', status: 'published', tags: ['Healthcare', 'Segmentation', 'CT Imaging'], url: 'https://ieeexplore.ieee.org/abstract/document/11355697' },
  { title: 'Atrous spatial pyramid pooling with Swin Transformer model for classification of gastrointestinal tract diseases from videos with enhanced explainability', authors: 'Abian, A. I., Raiaan, M. A. K., Jonkman, M., Islam, S. M. S., & Azam, S.', year: '2025', journal: 'Engineering Applications of Artificial Intelligence', status: 'published', tags: ['Computer Vision', 'Deep Learning', 'Healthcare'], url: 'https://doi.org/10.1016/j.engappai.2025.110656' },
  { title: 'Diffusion-based knowledge distillation for effective multi-organ segmentation with reduced computational time', authors: 'Raiaan, M. A. K., Rahman, M. A., Azam, S., Yeo, K. C., Sebastian, Y., and Jonkman, M.', year: '2025', journal: 'Computers in Biology and Medicine', status: 'published', tags: ['Healthcare', 'Segmentation', 'Knowledge Distillation'], url: 'https://doi.org/10.1016/j.compbiomed.2025.111265' },
  { title: 'Hallucination to Truth: A Review of Fact-Checking and Factuality Evaluation in Large Language Models', authors: 'Rahman, S. S., Islam, M. A., Alam, M. M., et al.', year: '2025', journal: 'Artificial Intelligence Review', status: 'published', tags: ['LLMs', 'Factuality', 'Review'], url: 'https://link.springer.com/article/10.1007/s10462-025-11454-w' },
  { title: 'From language to action: A review of large language models as autonomous agents and tool users', authors: 'Chowa, S. S., Alvi, R., Rahman, S. S., et al.', year: '2025', journal: 'Artificial Intelligence Review', status: 'published', tags: ['LLMs', 'Agents', 'Review'], url: 'https://link.springer.com/article/10.1007/s10462-025-11471-9' },
  { title: 'Advancing skin cancer detection integrating a novel unsupervised classification and enhanced imaging techniques', authors: 'Rahman, M. A., Fahad, N. M., Raiaan, M. A. K., Jonkman, M., De Boer, F., & Azam, S.', year: '2025', journal: 'CAAI Transactions on Intelligence Technology, 10(2), 474-493', status: 'published', tags: ['Machine Learning', 'Healthcare', 'Image Processing'], url: 'https://doi.org/10.1049/cit2.12410' },
  { title: 'Comprehensive review of the material life cycle and sustainability of solar photovoltaic panels', authors: 'Abian, A. I., Azam, S., Ompong, D., & Mathur, D.', year: '2025', journal: 'Solar Energy', status: 'published', tags: ['Environmental Modelling', 'Sustainability'], url: 'https://doi.org/10.1016/j.solener.2025.113927' },
  { title: 'Predicting Postresection Colorectal Liver Metastases Recurrence Using Advanced Graph Neural Networks with Explainability and Causal Inference', authors: 'Ahmed, J., Rahman, M. A., Raiaan, M. A. K., and Azam, S.', year: '2025', journal: 'Advanced Intelligent Systems', status: 'published', tags: ['Healthcare', 'Graph Neural Networks', 'Causal Inference'], url: 'https://doi.org/10.1002/aisy.202500596' },
  { title: 'FSS-ULivR: a clinically inspired few-shot segmentation framework for liver imaging using unified representations and attention mechanisms', authors: 'Debnath, R. K., Rahman, M. A., Azam, S., Zhang, Y., & Jonkman, M.', year: '2025', journal: 'Journal of Cancer Research and Clinical Oncology, 151(7), 1-23', status: 'published', tags: ['Healthcare', 'Segmentation', 'Deep Learning'], url: 'https://doi.org/10.1007/s00432-025-06256-0' },
  { title: 'Cervical spine fracture detection utilizing YOLOv8 and deep attention-based vertebrae classification ensuring XAI', authors: 'Sutradhar, D., Fahad, N. M., Raiaan, M. A. K., Jonkman, M., & Azam, S.', year: '2025', journal: 'Biomedical Signal Processing and Control, 101, 107228', status: 'published', tags: ['Computer Vision', 'Healthcare', 'XAI'], url: 'https://doi.org/10.1016/j.bspc.2024.107228' },
  { title: 'An Innovative Coverage Path Planning Approach for UAVs to Boost Precision Agriculture and Rescue Operations', authors: 'Fahad, N. M., Thuseethan, S., Azid, S. I., & Azam, S.', year: '2025', journal: 'International Journal of Intelligent Systems, 2025(1), 4700518', status: 'published', tags: ['Optimization', 'UAV', 'Agriculture'], url: 'https://doi.org/10.1155/int/4700518' },
  { title: 'Advanced Biomedical Imaging for Identifying Blood Cell Type: Integrating Segmentation, Feature Extraction, and GraphSage Model', authors: 'Fahad, N. M., Raiaan, M. A. K., Abian, A. I., Debnath, R. K., Montaha, S., Jonkman, M., & Azam, S.', year: '2025', journal: 'Biomedical Engineering Advances, 100174', status: 'published', tags: ['Healthcare', 'Graph Neural Networks', 'Computer Vision'], url: 'https://doi.org/10.1016/j.bea.2025.100174' },
  { title: 'Enhancing cervical cancer diagnosis with graph convolution network: AI-powered segmentation, feature analysis, and classification for early detection', authors: 'Fahad, N. M., Azam, S., Montaha, S., & Mukta, M. S. H.', year: '2024', journal: 'Multimedia Tools and Applications, 83(30), 75343-75367', status: 'published', tags: ['Healthcare', 'Graph Neural Networks', 'Cancer Detection'], url: 'https://doi.org/10.1007/s11042-024-18608-y' },
  { title: 'Automated diagnosis of respiratory diseases from lung ultrasound videos ensuring XAI: An innovative hybrid model approach', authors: 'Abian, A. I., Raiaan, M. A. K., Karim, A., Azam, S., Fahad, N. M., Shafiabady, N., Yeo, K. C., & De Boer, F.', year: '2024', journal: 'Frontiers in Computer Science', status: 'published', tags: ['Healthcare', 'XAI', 'Deep Learning'], url: 'https://doi.org/10.3389/fcomp.2024.1438126' },
  { title: 'A review on large language models: Architectures, applications, taxonomies, open issues, and challenges', authors: 'Raiaan, M. A. K., Mukta, M. S. H., Fatema, K., Fahad, N. M., Sakib, S., Mim, M. M. J., Ahmed, J., Ali, M.E., & Azam, S.', year: '2024', journal: 'IEEE Access', status: 'published', tags: ['LLMs', 'NLP', 'Review'], url: 'https://doi.org/10.1016/j.bspc.2024.106279' },
  { title: 'A lightweight robust deep learning model gained high accuracy in classifying a wide range of diabetic retinopathy images', authors: 'Raiaan, M. A. K., Fatema, K., Khan, I. U., Azam, S., Rashid, M. R. U., Mukta, M. S. H., ... & De Boer, F.', year: '2023', journal: 'IEEE Access, 11, 42361-42388', status: 'published', tags: ['Deep Learning', 'Healthcare', 'Computer Vision'], url: 'https://doi.org/10.1109/ACCESS.2023.3272228' },
  { title: 'A computer-aided diagnostic system to identify diabetic retinopathy, utilizing a modified compact convolutional transformer and low-resolution images to reduce computation time', authors: 'Khan, I. U., Raiaan, M. A. K., Fatema, K., Azam, S., Rashid, R. U., Mukta, S. H., ... & De Boer, F.', year: '2023', journal: 'Biomedicines, 11(6), 1566', status: 'published', tags: ['Healthcare', 'Deep Learning', 'Transformers'], url: 'https://doi.org/10.3390/biomedicines11061566' },
  { title: 'A Dual-Stage Framework for Cardiovascular Abnormalities Diagnosis from ECG Signals Using CA-GNN and Semi-Supervised Autoencoders', authors: 'Fahad, N. M., Rahman, M. A., Jakarea, Md., Jonkman, M., & Azam, S.', year: '2025', journal: 'Signal, Image, and Video Processing', status: 'published', tags: ['Healthcare', 'Graph Neural Networks', 'ECG'], url: 'https://link.springer.com/article/10.1007/s11760-025-05042-2' },
];

const underReviewPapers = [
  { title: 'BioAutoML-NAS: An End-to-End AutoML Framework for Multimodal Insect Classification via Neural Architecture Search on Large-Scale Biodiversity Data', authors: 'Abian, A. I., Sutradhar, D., Rashid, M. R. U. et al.', year: '2025', journal: 'IEEE Transactions on Big Data, Manuscript ID: TBD-2025-10-0603', status: 'under-review', tags: ['AutoML', 'NAS', 'Biodiversity'], url: 'https://arxiv.org/abs/2510.05888' },
  { title: 'Quantitative Measurement of Parkinson Disease Progression Using DaTscan Radiomics and Clinical Features with a Machine Learning Based Approach', authors: 'Alam, M. M., Rahman, S. S., Chowa, S. S., et al.', year: '2025', journal: 'International Journal of Intelligent Systems', status: 'under-review', tags: ['Healthcare', 'Radiomics', 'Machine Learning'] },
  { title: 'ReFRM3D: A radiomics-enhanced fused residual multiparametric 3D network with multi-scale feature fusion for glioma characterization', authors: 'Rahman, M. A., Raiaan, M. A. K., Abian, A. I., et al.', year: '2025', journal: 'Knowledge-Based Systems (Submission ID: KNOSYS-D-25-03102)', status: 'under-review', tags: ['Healthcare', 'Radiomics', 'Deep Learning'] },
  { title: 'A Fine-Grained Attention and Geometric Correspondence Model for Musculoskeletal Risk Classification in Athletes Using Multimodal Visual and Skeletal Features', authors: 'Rahman, M. A., Raiaan, M. A. K., Shermin, T., et al.', year: '2025', journal: 'Expert Systems With Applications (Submission ID: ESWAD-25-24228)', status: 'under-review', tags: ['Computer Vision', 'Healthcare', 'Attention'], url: 'https://doi.org/10.48550/arXiv.2509.05913' },
  { title: 'ARIONet: An Advanced Self-supervised Contrastive Representation Network for Birdsong Classification and Future Frame Prediction', authors: 'Rahman, M. A., Thuseethan, S., Yeo, K. C., et al.', year: '2025', journal: 'Applied Acoustics (Submission ID: APAC-D-25-02248)', status: 'under-review', tags: ['Self-supervised', 'Audio', 'Biodiversity'], url: 'https://doi.org/10.48550/arXiv.2510.00522' },
  { title: 'A source-free approach for domain adaptation via multiview image transformation and latent space consistency', authors: 'Sutradhar, D.*, Rahman, M. A.*, Raiaan, M. A. K., et al.', year: '2025', journal: 'IEEE Transactions on Image Processing (Submission ID: TIP-34966-2025)', status: 'under-review', tags: ['Domain Adaptation', 'Computer Vision'] },
  { title: 'CADE: A lightweight change-adaptive dual-path encoder framework for predicting and generating future changes in satellite imagery using semi-supervised learning', authors: 'Sutradhar, D., Rahman, M. A., Mannan, Z. I., et al.', year: '2025', journal: 'Neural Computing and Applications (Submission ID: NCAA-D-25-03901)', status: 'under-review', tags: ['Remote Sensing', 'Semi-supervised', 'Change Detection'] },
  { title: 'SSMT-ConED: A semi-supervised student-teacher framework with contrastive learning and GAN-based augmentation for robust multi-organ segmentation across CT and MRI modalities', authors: 'Debnath, R. K., Raiaan, M. A. K., Rahman, M. A., et al.', year: '2025', journal: 'Biomedical Signal Processing and Control (Submission ID: BSPC-D-25-06356)', status: 'under-review', tags: ['Healthcare', 'Segmentation', 'Multi-modal'] },
  { title: 'A systematic review on diagnosing mental health disorders with artificial intelligence: The role of explainable AI and clinician involvement', authors: 'Abian, A. I., Sayeedi, M. F. A., Jonkman, M., et al.', year: '2025', journal: 'Neural Computing and Applications. Manuscript ID: NCAA-D-25-01826', status: 'under-review', tags: ['Healthcare', 'XAI', 'Review'] },
  { title: 'CLAIRE: A dual encoder network with RIFT loss and Phi-3 small language model based interpretability for cross-modality SAR and optical land cover segmentation', authors: 'Sutradhar, D., Abian, A. I., Raiaan, M. A. K., et al.', year: '2025', journal: 'ISPRS Journal of Photogrammetry and Remote Sensing. Manuscript ID: PHOTO-D-25-02551', status: 'under-review', tags: ['Remote Sensing', 'Multi-modal', 'LLMs'], url: 'https://doi.org/10.48550/arXiv.2509.11952' },
  { title: 'MO-SA: An Optimized Multi Objective Simulated Annealing Approach for Efficient Drone-Based Products Delivery', authors: 'Fahad, N. M., Raiaan, M. A. K., Azam, S., et al.', year: '2025', journal: 'Journal of Scheduling. Manuscript ID: JOSH-D-24-00080', status: 'under-review', tags: ['Optimization', 'UAV', 'Scheduling'] },
  { title: 'Renewable Energy Forecasting from multiple sources utilizing Quantization Aware Trained Transformer with Encrypted-Decrypted Federated Learning', authors: 'Fahad, N. M., Siddique, A. H., et al.', year: '2025', journal: 'Applied Energy. Manuscript ID: APEN-D-25-08777', status: 'under-review', tags: ['Energy', 'Federated Learning', 'Transformers'] },
  { title: 'Optimizing performance and privacy in anomaly classification of smart grids: A deep gated residual network with robust feature selection and the integration of Federated learning', authors: 'Fahad, N. M., Siddique, A. H., et al.', year: '2025', journal: 'International Journal of Critical Infrastructure Protection. Manuscript ID: IJCIP-D-24-00111', status: 'under-review', tags: ['Smart Grid', 'Federated Learning', 'Security'] },
  { title: 'FracART for accurate 3D MRI brain tumor segmentation with subsequent reconstruction, radiomic feature extraction, and graph-based classification', authors: 'Debnath, R. K., Mim, M. M. J., Karim, A., et al.', year: '2025', journal: 'Neural Computing and Applications. Manuscript ID: NCAA-D-25-01569', status: 'under-review', tags: ['Healthcare', 'Segmentation', 'Graph Neural Networks'] },
  { title: 'PPORLD-EDNetLDCT: A Proximal Policy Optimization-Based Reinforcement Learning Framework for Adaptive Low-Dose CT Denoising', authors: 'Sutradhar, D., Debnath, R. K., Raiaan, M. A. K., et al.', year: '2025', journal: 'International Journal of Intelligent Systems, Wiley. Manuscript ID: 3676394', status: 'under-review', tags: ['Healthcare', 'Reinforcement Learning', 'Imaging'], url: 'https://doi.org/10.48550/arXiv.2509.03185' },
];

const ALL_PAPERS = [...publishedPapers, ...underReviewPapers];

const ALL_TAGS = ['All', 'Healthcare', 'Computer Vision', 'Deep Learning', 'LLMs', 'Segmentation', 'XAI', 'Graph Neural Networks', 'Remote Sensing', 'Environmental Modelling', 'Optimization', 'UAV', 'Review', 'Federated Learning'];

const PER_PAGE = 8;

// ── 3D hover card ──
function PubCard({ pub, index }) {
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const cardRef = useRef(null);

  useEffect(function() {
    const obs = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting) { setVisible(true); obs.unobserve(entries[0].target); }
      },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return function() { obs.disconnect(); };
  }, []);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: dy * -5, y: dx * 5 });
  }

  const isPublished = pub.status === 'published';
  const statusColor = isPublished ? '#10b981' : '#facc15';

  return (
    React.createElement('div', {
      ref: ref,
      className: styles.cardOuter + ' ' + (visible ? styles.cardVisible : ''),
      style: { transitionDelay: (index % PER_PAGE) * 40 + 'ms' },
    },
      React.createElement('article', {
        ref: cardRef,
        className: styles.card,
        style: {
          transform: hovered
            ? 'perspective(1000px) rotateX(' + tilt.x + 'deg) rotateY(' + tilt.y + 'deg) translateZ(4px)'
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: hovered ? 'transform 0.1s ease, box-shadow 0.3s' : 'transform 0.5s ease, box-shadow 0.3s',
          '--s-color': statusColor,
        },
        onMouseMove: handleMouseMove,
        onMouseEnter: function() { setHovered(true); },
        onMouseLeave: function() { setTilt({ x: 0, y: 0 }); setHovered(false); },
      },

        // left status bar
        React.createElement('div', { className: styles.cardBar, style: { background: statusColor }, 'aria-hidden': true }),

        // corner accents
        React.createElement('div', { className: styles.cTL, 'aria-hidden': true }),
        React.createElement('div', { className: styles.cBR, 'aria-hidden': true }),

        // glare
        React.createElement('div', {
          className: styles.cardGlare,
          style: {
            opacity: hovered ? 0.07 : 0,
            background: 'radial-gradient(circle at ' + (50 + tilt.y * 5) + '% ' + (50 + tilt.x * 5) + '%, ' + statusColor + ', transparent 65%)',
          },
          'aria-hidden': true,
        }),

        React.createElement('div', { className: styles.cardBody },
          // status badge + year
          React.createElement('div', { className: styles.cardMeta },
            React.createElement('span', {
              className: styles.statusBadge + ' ' + (isPublished ? styles.statusPublished : styles.statusReview),
            }, isPublished ? '✓ Published' : '⏳ Under Review'),
            React.createElement('span', { className: styles.cardYear }, pub.year)
          ),

          // title
          React.createElement('h2', { className: styles.cardTitle }, pub.title),

          // authors
          React.createElement('p', { className: styles.cardAuthors }, pub.authors),

          // journal
          React.createElement('p', { className: styles.cardJournal }, pub.journal),

          // tags + link
          React.createElement('div', { className: styles.cardFooter },
            React.createElement('div', { className: styles.tagRow },
              pub.tags.slice(0, 3).map(function(t) {
                return React.createElement('span', { key: t, className: styles.tag }, t);
              })
            ),
            pub.url && React.createElement('a', {
              href: pub.url,
              className: styles.cardLink,
              target: '_blank',
              rel: 'noopener noreferrer',
              'aria-label': 'Open paper: ' + pub.title,
              onClick: function(e) { e.stopPropagation(); },
            },
              React.createElement('svg', { width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', 'aria-hidden': true },
                React.createElement('path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }),
                React.createElement('polyline', { points: '15,3 21,3 21,9' }),
                React.createElement('line', { x1: '10', y1: '14', x2: '21', y2: '3' })
              ),
              'View Paper'
            )
          )
        )
      )
    )
  );
}

export default function Publications() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(function() {
    return ALL_PAPERS.filter(function(p) {
      const matchTag = activeTag === 'All' || p.tags.some(function(t) { return t === activeTag; });
      const matchStatus = statusFilter === 'All' || p.status === statusFilter;
      const q = search.toLowerCase();
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.authors.toLowerCase().includes(q) || p.journal.toLowerCase().includes(q) || p.tags.some(function(t) { return t.toLowerCase().includes(q); });
      return matchTag && matchStatus && matchSearch;
    });
  }, [search, activeTag, statusFilter]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function resetPage() { setPage(1); }

  const publishedCount = ALL_PAPERS.filter(function(p) { return p.status === 'published'; }).length;
  const reviewCount = ALL_PAPERS.filter(function(p) { return p.status === 'under-review'; }).length;

  return (
    React.createElement('main', { id: 'main-content' },

      // HERO
      React.createElement('div', { className: 'page-hero' },
        React.createElement('img', { src: UNSPLASH.strip, alt: '', className: 'page-hero-img', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-overlay', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-dots', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-content' },
          React.createElement('span', { className: 'eyebrow' }, 'Scholarly Work'),
          React.createElement('h1', { className: 'page-hero-title' }, React.createElement('em', null, 'Publications'))
        )
      ),

      // STATS BAR
      React.createElement('div', { className: styles.statsBar },
        React.createElement('div', { className: styles.statsInner },
          React.createElement('div', { className: styles.stat },
            React.createElement('span', { className: styles.statNum }, ALL_PAPERS.length),
            React.createElement('span', { className: styles.statLabel }, 'Total Papers')
          ),
          React.createElement('div', { className: styles.statDivider, 'aria-hidden': true }),
          React.createElement('div', { className: styles.stat },
            React.createElement('span', { className: styles.statNum + ' ' + styles.statGreen }, publishedCount),
            React.createElement('span', { className: styles.statLabel }, 'Published')
          ),
          React.createElement('div', { className: styles.statDivider, 'aria-hidden': true }),
          React.createElement('div', { className: styles.stat },
            React.createElement('span', { className: styles.statNum + ' ' + styles.statAmber }, reviewCount),
            React.createElement('span', { className: styles.statLabel }, 'Under Review')
          ),
          React.createElement('div', { className: styles.statDivider, 'aria-hidden': true }),
          React.createElement('div', { className: styles.stat },
            React.createElement('span', { className: styles.statNum + ' ' + styles.statBlue }, filtered.length),
            React.createElement('span', { className: styles.statLabel }, 'Matching')
          )
        )
      ),

      // SEARCH + FILTERS
      React.createElement('section', { className: styles.controlsSection, 'aria-label': 'Search and filter publications' },
        React.createElement('div', { className: styles.controlsInner },

          // Search
          React.createElement('div', { className: styles.searchWrap },
            React.createElement('svg', { className: styles.searchIcon, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', 'aria-hidden': true },
              React.createElement('circle', { cx: '11', cy: '11', r: '8' }),
              React.createElement('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
            ),
            React.createElement('input', {
              type: 'search', placeholder: 'Search by title, author, or journal…',
              className: styles.searchInput, value: search,
              onChange: function(e) { setSearch(e.target.value); resetPage(); },
              'aria-label': 'Search publications',
            }),
            search && React.createElement('button', {
              className: styles.searchClear,
              onClick: function() { setSearch(''); resetPage(); },
              'aria-label': 'Clear search',
            }, '×')
          ),

          // Status toggle
          React.createElement('div', { className: styles.statusToggle, role: 'group', 'aria-label': 'Filter by status' },
            ['All', 'published', 'under-review'].map(function(s) {
              return React.createElement('button', {
                key: s,
                className: styles.statusBtn + ' ' + (statusFilter === s ? styles.statusBtnOn : ''),
                onClick: function() { setStatusFilter(s); resetPage(); },
                'aria-pressed': statusFilter === s,
              }, s === 'published' ? '✓ Published' : s === 'under-review' ? '⏳ Under Review' : 'All');
            })
          )
        ),

        // Tag filters
        React.createElement('div', { className: styles.tagFilters, role: 'group', 'aria-label': 'Filter by topic' },
          ALL_TAGS.map(function(t) {
            return React.createElement('button', {
              key: t,
              className: styles.tagBtn + ' ' + (activeTag === t ? styles.tagBtnOn : ''),
              onClick: function() { setActiveTag(t); resetPage(); },
              'aria-pressed': activeTag === t,
            }, t);
          })
        )
      ),

      // RESULTS
      React.createElement('section', { className: styles.resultsSection, 'aria-label': 'Publications list' },
        filtered.length === 0
          ? React.createElement('div', { className: styles.empty },
              React.createElement('p', null, 'No publications match your search.'),
              React.createElement('button', { className: styles.resetBtn, onClick: function() { setSearch(''); setActiveTag('All'); setStatusFilter('All'); setPage(1); } }, 'Clear all filters')
            )
          : React.createElement(React.Fragment, null,
              React.createElement('div', { className: styles.resultsHeader },
                React.createElement('p', { className: styles.resultsCount },
                  'Showing ', React.createElement('strong', null, ((page - 1) * PER_PAGE + 1) + '–' + Math.min(page * PER_PAGE, filtered.length)),
                  ' of ', React.createElement('strong', null, filtered.length), ' papers'
                )
              ),

              React.createElement('div', { className: styles.grid },
                paginated.map(function(pub, i) {
                  return React.createElement(PubCard, { key: pub.title, pub: pub, index: i });
                })
              ),

              // PAGINATION
              totalPages > 1 && React.createElement('div', { className: styles.pagination, 'aria-label': 'Pagination' },
                React.createElement('button', {
                  className: styles.pageBtn,
                  onClick: function() { setPage(function(p) { return Math.max(1, p - 1); }); window.scrollTo({ top: 500, behavior: 'smooth' }); },
                  disabled: page === 1,
                  'aria-label': 'Previous page',
                },
                  React.createElement('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', 'aria-hidden': true },
                    React.createElement('polyline', { points: '15,18 9,12 15,6' })
                  )
                ),

                React.createElement('div', { className: styles.pageNums },
                  Array.from({ length: totalPages }, function(_, i) { return i + 1; }).map(function(n) {
                    const show = n === 1 || n === totalPages || Math.abs(n - page) <= 1;
                    const ellipsisBefore = n === page - 2 && page > 3;
                    const ellipsisAfter = n === page + 2 && page < totalPages - 2;
                    if (ellipsisBefore || ellipsisAfter) {
                      return React.createElement('span', { key: 'e' + n, className: styles.pageEllipsis }, '…');
                    }
                    if (!show) return null;
                    return React.createElement('button', {
                      key: n,
                      className: styles.pageNum + ' ' + (n === page ? styles.pageNumOn : ''),
                      onClick: function() { setPage(n); window.scrollTo({ top: 500, behavior: 'smooth' }); },
                      'aria-label': 'Page ' + n,
                      'aria-current': n === page ? 'page' : undefined,
                    }, n);
                  })
                ),

                React.createElement('button', {
                  className: styles.pageBtn,
                  onClick: function() { setPage(function(p) { return Math.min(totalPages, p + 1); }); window.scrollTo({ top: 500, behavior: 'smooth' }); },
                  disabled: page === totalPages,
                  'aria-label': 'Next page',
                },
                  React.createElement('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', 'aria-hidden': true },
                    React.createElement('polyline', { points: '9,18 15,12 9,6' })
                  )
                )
              )
            )
      ),

      React.createElement(Footer, null)
    )
  );
}