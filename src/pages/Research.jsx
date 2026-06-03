import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { UNSPLASH } from '../data';
import styles from './Research.module.css';

const AREAS = [
  {
    num: '01', title: 'Artificial Intelligence', tag: 'Core',
    color: '#36e1c6', glow: 'rgba(54,225,198,0.25)',
    desc: 'At AAIINS, we conduct research across the broad spectrum of Artificial Intelligence to build systems capable of intelligent behavior. This includes developing algorithms for reasoning, planning, natural language understanding, and decision-making that can solve complex real-world challenges.',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('circle', { cx: '20', cy: '12', r: '4' }),
      React.createElement('circle', { cx: '8',  cy: '30', r: '4' }),
      React.createElement('circle', { cx: '32', cy: '30', r: '4' }),
      React.createElement('line',   { x1: '20', y1: '16', x2: '9',  y2: '27' }),
      React.createElement('line',   { x1: '20', y1: '16', x2: '31', y2: '27' }),
      React.createElement('line',   { x1: '12', y1: '30', x2: '28', y2: '30' }),
      React.createElement('circle', { cx: '20', cy: '12', r: '2', fill: 'currentColor', stroke: 'none' }),
      React.createElement('circle', { cx: '8',  cy: '30', r: '2', fill: 'currentColor', stroke: 'none' }),
      React.createElement('circle', { cx: '32', cy: '30', r: '2', fill: 'currentColor', stroke: 'none' })
    ),
  },
  {
    num: '02', title: 'Machine Learning', tag: 'Core',
    color: '#8b8cff', glow: 'rgba(139,140,255,0.25)',
    desc: 'Our Machine Learning research centers on developing algorithms that enable computers to learn from data and improve over time. We explore supervised, unsupervised, and reinforcement learning methods using advanced deep learning architectures for various applications.',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('path', { d: 'M8 28 Q14 8 20 20 Q26 32 32 12' }),
      React.createElement('circle', { cx: '8',  cy: '28', r: '2', fill: 'currentColor', stroke: 'none' }),
      React.createElement('circle', { cx: '20', cy: '20', r: '2', fill: 'currentColor', stroke: 'none' }),
      React.createElement('circle', { cx: '32', cy: '12', r: '2', fill: 'currentColor', stroke: 'none' }),
      React.createElement('line', { x1: '6', y1: '32', x2: '34', y2: '32', strokeWidth: '0.8', strokeDasharray: '2 2' }),
      React.createElement('line', { x1: '6', y1: '8',  x2: '6',  y2: '32', strokeWidth: '0.8', strokeDasharray: '2 2' })
    ),
  },
  {
    num: '03', title: 'Computer Vision', tag: 'Applied',
    color: '#68a8ff', glow: 'rgba(104,168,255,0.25)',
    desc: 'Our research in Computer Vision focuses on enabling machines to interpret and understand visual data from the world. We develop advanced deep learning models for image and video analysis, object detection, recognition, and scene understanding applications.',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('ellipse', { cx: '20', cy: '20', rx: '16', ry: '10' }),
      React.createElement('circle',  { cx: '20', cy: '20', r: '5' }),
      React.createElement('circle',  { cx: '20', cy: '20', r: '2', fill: 'currentColor', stroke: 'none' }),
      React.createElement('line', { x1: '4',  y1: '20', x2: '10', y2: '20', strokeWidth: '0.8' }),
      React.createElement('line', { x1: '30', y1: '20', x2: '36', y2: '20', strokeWidth: '0.8' })
    ),
  },
  {
    num: '04', title: 'Generative AI', tag: 'Emerging',
    color: '#facc15', glow: 'rgba(250,204,21,0.25)',
    desc: 'In Generative AI, we focus on designing models that can create new and realistic content such as images, text, audio, and even video. These models enable creative applications like content generation, data augmentation, and synthetic data creation, unlocking new possibilities in human-computer interaction.',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('path', { d: 'M20 6 L24 16 L34 16 L26 23 L29 33 L20 27 L11 33 L14 23 L6 16 L16 16 Z' }),
      React.createElement('circle', { cx: '20', cy: '20', r: '3', fill: 'currentColor', stroke: 'none', opacity: '0.6' })
    ),
  },
  {
    num: '05', title: 'Health Informatics', tag: 'Applied',
    color: '#f43f5e', glow: 'rgba(244,63,94,0.25)',
    desc: 'Our research in Health Informatics applies AI and machine learning to diverse healthcare data, including medical images, physiological signals, and electronic health records. We design advanced models to extract insights, support diagnosis, and predict outcomes, advancing personalised medicine and interpretable AI tools for clinical applications.',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('path', { d: 'M20 32 C20 32 6 24 6 15 A7 7 0 0 1 20 12 A7 7 0 0 1 34 15 C34 24 20 32 20 32Z' }),
      React.createElement('line', { x1: '15', y1: '19', x2: '25', y2: '19' }),
      React.createElement('line', { x1: '20', y1: '14', x2: '20', y2: '24' })
    ),
  },
  {
    num: '06', title: 'Environmental Modelling', tag: 'Applied',
    color: '#10b981', glow: 'rgba(16,185,129,0.25)',
    desc: 'We use AI and machine learning techniques to create models that simulate and predict environmental systems and changes. This includes climate modeling, pollution tracking, biodiversity monitoring, and ecosystem dynamics, integrating data from satellites, sensors, and simulations to anticipate future environmental impacts.',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('circle', { cx: '20', cy: '20', r: '14' }),
      React.createElement('path', { d: 'M6 20 Q13 14 20 20 Q27 26 34 20', strokeWidth: '0.9' }),
      React.createElement('path', { d: 'M6 20 Q13 26 20 20 Q27 14 34 20', strokeWidth: '0.9' }),
      React.createElement('line', { x1: '20', y1: '6',  x2: '20', y2: '34', strokeWidth: '0.9' })
    ),
  },
];

function ResearchCard({ area, index }) {
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const cardRef = useRef(null);

  useEffect(function() {
    const obs = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting) { setVisible(true); obs.unobserve(entries[0].target); }
      },
      { threshold: 0.1 }
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
    setTilt({ x: dy * -8, y: dx * 8 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  const transform = hovered
    ? 'perspective(900px) rotateX(' + tilt.x + 'deg) rotateY(' + tilt.y + 'deg) scale3d(1.02,1.02,1.02)'
    : 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';

  return (
    <div
      ref={ref}
      className={styles.cardOuter + ' ' + (visible ? styles.cardVisible : '')}
      style={{ transitionDelay: (index % 3) * 100 + 'ms' }}
    >
      <div
        ref={cardRef}
        className={styles.card + ' ' + (expanded ? styles.cardExpanded : '')}
        style={{
          transform: transform,
          transition: hovered ? 'transform 0.12s ease, box-shadow 0.3s' : 'transform 0.55s ease, box-shadow 0.3s',
          '--card-color': area.color,
          '--card-glow': area.glow,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={function() { setHovered(true); }}
        onMouseLeave={handleMouseLeave}
      >
        {/* top color accent line */}
        <div className={styles.cardAccentLine} aria-hidden="true" />

        {/* glare */}
        <div
          className={styles.cardGlare}
          style={{
            opacity: hovered ? 0.1 : 0,
            background: 'radial-gradient(circle at ' + (50 + tilt.y * 4) + '% ' + (50 + tilt.x * 4) + '%, ' + area.color + ', transparent 65%)',
          }}
          aria-hidden="true"
        />

        {/* corner accents */}
        <div className={styles.cTL} aria-hidden="true" />
        <div className={styles.cBR} aria-hidden="true" />

        <div className={styles.cardHead}>
          <div className={styles.cardIconWrap} style={{ color: area.color }}>
            {area.icon}
          </div>
          <span className={styles.cardNum}>{area.num}</span>
        </div>

        <h2 className={styles.cardTitle}>{area.title}</h2>

        <div className={styles.cardTagRow}>
          <span className={styles.cardTag} style={{ borderColor: area.color + '55', color: area.color }}>{area.tag}</span>
          <div className={styles.cardTagLine} aria-hidden="true" />
        </div>

        <p className={styles.cardDesc + ' ' + (expanded ? styles.cardDescExpanded : '')}>
          {area.desc}
        </p>

        <button
          className={styles.cardToggle}
          onClick={function() { setExpanded(function(e) { return !e; }); }}
          aria-expanded={expanded}
          style={{ color: area.color }}
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>

        {/* bottom glow */}
        <div
          className={styles.cardBottomGlow}
          style={{ background: 'linear-gradient(to top, ' + area.glow + ' 0%, transparent 100%)', opacity: hovered ? 1 : 0.4 }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default function Research() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Core', 'Applied', 'Emerging'];

  const filtered = activeFilter === 'All'
    ? AREAS
    : AREAS.filter(function(a) { return a.tag === activeFilter; });

  return (
    React.createElement('main', { id: 'main-content' },

      React.createElement('div', { className: 'page-hero' },
        React.createElement('img', { src: UNSPLASH.researchBg, alt: '', className: 'page-hero-img', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-overlay', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-dots', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-content' },
          React.createElement('span', { className: 'eyebrow' }, 'Research Excellence'),
          React.createElement('h1', { className: 'page-hero-title' },
            'Our Research ', React.createElement('em', null, 'Focus')
          )
        )
      ),

      React.createElement('section', { className: styles.introSection, 'aria-label': 'Research overview' },
        React.createElement('div', { className: styles.introInner },
          React.createElement('div', { className: styles.introLeft },
            React.createElement('span', { className: 'eyebrow' }, 'Six Core Domains'),
            React.createElement('h2', { className: styles.introTitle },
              'Advancing AI through ', React.createElement('em', null, 'interdisciplinary'), ' collaboration'
            ),
            React.createElement('div', { className: 'gold-rule' }),
            React.createElement('p', { className: styles.introText },
              'We work at the intersection of intelligence and impact — building systems that reason, learn, see, create, heal, and protect. Each domain feeds into the others, forming a cohesive research ecosystem.'
            )
          ),
          React.createElement('div', { className: styles.introRight, 'aria-hidden': true },
            React.createElement('svg', { viewBox: '0 0 200 200', fill: 'none', className: styles.introOrb },
              React.createElement('circle', { cx: '100', cy: '100', r: '90', stroke: 'rgba(200,168,107,0.15)', strokeWidth: '1' }),
              React.createElement('circle', { cx: '100', cy: '100', r: '70', stroke: 'rgba(200,168,107,0.1)', strokeWidth: '1', strokeDasharray: '4 6' }),
              React.createElement('circle', { cx: '100', cy: '100', r: '50', stroke: 'rgba(200,168,107,0.08)', strokeWidth: '1' }),
              React.createElement('circle', { cx: '100', cy: '20',  r: '5', fill: 'rgba(54,225,198,0.7)' }),
              React.createElement('circle', { cx: '170', cy: '70',  r: '5', fill: 'rgba(139,140,255,0.7)' }),
              React.createElement('circle', { cx: '155', cy: '155', r: '5', fill: 'rgba(104,168,255,0.7)' }),
              React.createElement('circle', { cx: '60',  cy: '175', r: '5', fill: 'rgba(250,204,21,0.7)' }),
              React.createElement('circle', { cx: '18',  cy: '120', r: '5', fill: 'rgba(244,63,94,0.7)' }),
              React.createElement('circle', { cx: '40',  cy: '50',  r: '5', fill: 'rgba(16,185,129,0.7)' }),
              React.createElement('line', { x1: '100', y1: '20',  x2: '170', y2: '70',  stroke: 'rgba(200,168,107,0.2)', strokeWidth: '0.8' }),
              React.createElement('line', { x1: '170', y1: '70',  x2: '155', y2: '155', stroke: 'rgba(200,168,107,0.2)', strokeWidth: '0.8' }),
              React.createElement('line', { x1: '155', y1: '155', x2: '60',  y2: '175', stroke: 'rgba(200,168,107,0.2)', strokeWidth: '0.8' }),
              React.createElement('line', { x1: '60',  y1: '175', x2: '18',  y2: '120', stroke: 'rgba(200,168,107,0.2)', strokeWidth: '0.8' }),
              React.createElement('line', { x1: '18',  y1: '120', x2: '40',  y2: '50',  stroke: 'rgba(200,168,107,0.2)', strokeWidth: '0.8' }),
              React.createElement('line', { x1: '40',  y1: '50',  x2: '100', y2: '20',  stroke: 'rgba(200,168,107,0.2)', strokeWidth: '0.8' }),
              React.createElement('circle', { cx: '100', cy: '100', r: '8', fill: 'rgba(200,168,107,0.3)' }),
              React.createElement('circle', { cx: '100', cy: '100', r: '4', fill: 'rgba(200,168,107,0.7)' })
            )
          )
        )
      ),

      React.createElement('section', { className: styles.cardsSection, 'aria-label': 'Research areas' },

        React.createElement('div', { className: styles.filterRow, role: 'group', 'aria-label': 'Filter research areas' },
          filters.map(function(f) {
            return React.createElement(
              'button',
              {
                key: f,
                className: styles.filterBtn + ' ' + (activeFilter === f ? styles.filterBtnOn : ''),
                onClick: function() { setActiveFilter(f); },
                'aria-pressed': activeFilter === f,
              },
              f
            );
          })
        ),

        React.createElement('div', { className: styles.grid },
          filtered.map(function(area, i) {
            return React.createElement(ResearchCard, { key: area.num, area: area, index: i });
          })
        )
      ),

      React.createElement('div', { className: 'collab-cta' },
        React.createElement('h2', null, 'Collaborate ', React.createElement('em', null, 'with us')),
        React.createElement('p', null, 'Join our research community and contribute to groundbreaking AI innovations that shape the future.'),
        React.createElement('div', { className: 'cta-buttons' },
          React.createElement('a', { href: 'mailto:aaiins.research@gmail.com', className: 'btn-primary' }, 'Get Involved'),
          React.createElement(Link, { to: '/publications', className: 'btn-outline' }, 'View Publications')
        )
      ),

      React.createElement(Footer, null)
    )
  );
}