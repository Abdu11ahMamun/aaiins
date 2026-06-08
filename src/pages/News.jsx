import React from 'react';
import Footer from '../components/Footer';
import { UNSPLASH } from '../data';
import styles from './News.module.css';

const imageMap = import.meta.glob('../assets/*', { eager: true, import: 'default' });
const getImage = (fn) => imageMap[`../assets/${fn}`] || null;

const ALL_NEWS = [
  {
    date: 'June 2025',
    title: 'HANS-Net Published in IEEE Transactions on Radiation and Plasma Medical Sciences',
    excerpt: 'HANS-Net combines hyperbolic convolution and adaptive temporal attention for liver and tumor segmentation in CT imaging, achieving a mean Dice score of 93.26% on the LiTS dataset.',
    photo: UNSPLASH.researchBg,
    tag: 'Publication',
    authors: 'A. I. Abian, R. K. Debnath, M. A. Rahman, et al.',
    journal: 'IEEE Transactions on Radiation and Plasma Medical Sciences',
  },
  {
    date: 'May 2025',
    title: 'Gastrointestinal Disease Classification Research Published in Engineering Applications of AI',
    excerpt: 'The ASPPST model combines Atrous Spatial Pyramid Pooling with Swin Transformer to classify 30 gastrointestinal disease categories from endoscopic videos, achieving 97.49% accuracy with Grad-CAM explainability.',
    photo: UNSPLASH.aboutA,
    tag: 'Publication',
    authors: 'A. I. Abian, M. A. K. Raiaan, M. Jonkman, S. M. S. Islam, S. Azam',
    journal: 'Engineering Applications of Artificial Intelligence',
  },
  {
    date: 'April 2025',
    title: 'New Review on Fact-Checking and Factuality in Large Language Models',
    excerpt: 'A comprehensive review of hallucination and factuality evaluation in LLMs, covering retrieval-augmented generation, instruction tuning, and multi-agent reasoning across research published 2020–2025.',
    photo: UNSPLASH.strip,
    tag: 'Publication',
    authors: 'S. S. Rahman, M. A. Islam, M. M. Alam, et al.',
    journal: 'Artificial Intelligence Review',
  },
  {
    date: 'March 2025',
    title: 'Multimodal Framework for Musculoskeletal Risk Classification in Athletes Submitted',
    excerpt: 'The ViSK-GAT framework combines visual and skeletal-coordinate data with fine-grained attention to assess musculoskeletal risk, achieving over 93% across classification measures on the MusDis-Sports dataset.',
    photo: UNSPLASH.peopleBg,
    tag: 'Research',
    authors: 'M. A. Rahman, M. A. K. Raiaan, T. Shermin, et al.',
    journal: 'Expert Systems with Applications (Under Review)',
  },
  {
    date: 'January 6, 2026',
    title: 'Review on LLMs as Autonomous Agents Published in Artificial Intelligence Review',
    excerpt: 'A detailed review of LLMs as autonomous agents and tool users, examining 68 datasets, single and multi-agent systems, and ten future research directions for reliable and accountable AI.',
    photo: UNSPLASH.heroBg,
    tag: 'Publication',
    authors: 'Sadia Sultana Chowa, Riasad Alvi, Subhey Sadi Rahman, Md Abdur Rahman, M. A. K. Raiaan, et al.',
    journal: 'Artificial Intelligence Review',
  },
  {
    date: '2025',
    title: 'Mohaimenul Azam Khan Raiaan Begins PhD at Monash University',
    excerpt: 'Senior Mentor Khan Raiaan has commenced his PhD in Data Science and Artificial Intelligence at Monash University, supported by the Monash Graduate Scholarship and the Monash International Tuition Scholarship',
    photo: getImage('mak-raian.jpg'),
    tag: 'People',
    authors: 'Mohaimenul Azam Khan Raiaan',
    journal: 'Monash University, Melbourne, Australia',
  },
  {
    date: '2025',
    title: 'Nur Mohammad Fahad Receives Fully Funded PhD Scholarship at Murdoch University',
    excerpt: 'Lab Director Nur Mohammad Fahad has been awarded a fully funded PhD scholarship at Murdoch University, Australia, to research intelligent and adaptive UAV systems using computer vision, optimisation, and AI.',
    photo: getImage('IMG_20251020_030347.png'),
    tag: 'Award',
    authors: 'Nur Mohammad Fahad',
    journal: 'Murdoch University, Australia',
  },
];

const TAG_COLORS = {
  Publication: '#10b981',
  Research: '#68a8ff',
  People: '#8b8cff',
  Award: '#facc15',
  Conference: '#f43f5e',
  Milestone: '#36e1c6',
};

function NewsCard({ item, index }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(function() {
    const obs = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) { setVisible(true); obs.unobserve(entries[0].target); }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return function() { obs.disconnect(); };
  }, []);

  const color = TAG_COLORS[item.tag] || '#c8a86b';

  return (
    React.createElement('article', {
      ref: ref,
      className: styles.card + ' ' + (visible ? styles.cardVisible : ''),
      style: { transitionDelay: (index % 3) * 90 + 'ms', '--n-color': color },
    },
      React.createElement('div', { className: styles.photoWrap },
        item.photo
          ? React.createElement('img', { src: item.photo, alt: item.title, loading: 'lazy', className: styles.photo })
          : React.createElement('div', { className: styles.photoFallback }),
        React.createElement('div', { className: styles.photoOverlay, 'aria-hidden': true }),
        React.createElement('span', {
          className: styles.tag,
          style: { background: color, color: '#131e28' },
        }, item.tag)
      ),
      React.createElement('div', { className: styles.body },
        React.createElement('p', { className: styles.date }, item.date),
        React.createElement('h2', { className: styles.title }, item.title),
        React.createElement('p', { className: styles.excerpt }, item.excerpt),
        React.createElement('div', { className: styles.meta },
          React.createElement('p', { className: styles.authors }, item.authors),
          item.journal && React.createElement('p', { className: styles.journal }, item.journal)
        ),
        React.createElement('div', { className: styles.footer },
          React.createElement('div', { className: styles.footerLine, style: { background: color }, 'aria-hidden': true }),
        )
      )
    )
  );
}

export default function News() {
  return (
    React.createElement('main', { id: 'main-content' },

      React.createElement('div', { className: 'page-hero' },
        React.createElement('img', { src: UNSPLASH.peopleBg, alt: '', className: 'page-hero-img', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-overlay', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-dots', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-content' },
          React.createElement('span', { className: 'eyebrow' }, 'Stay Updated'),
          React.createElement('h1', { className: 'page-hero-title' }, 'Lab ', React.createElement('em', null, 'News'))
        )
      ),

      React.createElement('section', { className: styles.section, 'aria-label': 'Lab news articles' },
        React.createElement('div', { className: styles.sectionInner },
          React.createElement('div', { className: styles.sectionHead },
            React.createElement('span', { className: 'eyebrow' }, 'Latest Updates'),
            React.createElement('h2', { className: styles.sectionTitle },
              'News from ', React.createElement('em', null, 'the lab')
            ),
            React.createElement('div', { className: 'gold-rule' }),
            React.createElement('p', { className: styles.lead },
              'The latest milestones, publications, awards, and updates from AAIINS Lab and our global research community.'
            )
          ),
          React.createElement('div', { className: styles.grid },
            ALL_NEWS.map(function(item, i) {
              return React.createElement(NewsCard, { key: i, item: item, index: i });
            })
          )
        )
      ),

      React.createElement(Footer, null)
    )
  );
}