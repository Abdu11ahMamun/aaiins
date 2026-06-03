import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { LOGO, UNSPLASH } from '../data';
import styles from './Home.module.css';

// ── Intersection observer hook ──
function useReveal(threshold) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(function() {
    const obs = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting) { setVisible(true); obs.unobserve(entries[0].target); }
      },
      { threshold: threshold || 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return function() { obs.disconnect(); };
  }, []);
  return [ref, visible];
}

// ── Motif icons ──
const MOTIF_ICONS = [
  { label: 'Neural AI', svg: React.createElement('svg', { viewBox: '0 0 52 52', fill: 'none', stroke: 'rgba(255,255,255,0.65)', strokeWidth: '1.2', 'aria-hidden': true }, React.createElement('ellipse', { cx: '18', cy: '26', rx: '9', ry: '11' }), React.createElement('ellipse', { cx: '34', cy: '26', rx: '9', ry: '11' }), React.createElement('line', { x1: '21', y1: '26', x2: '31', y2: '26' }), React.createElement('circle', { cx: '14', cy: '22', r: '1.5', fill: 'rgba(200,168,107,0.9)', stroke: 'none' }), React.createElement('circle', { cx: '38', cy: '22', r: '1.5', fill: 'rgba(200,168,107,0.9)', stroke: 'none' }), React.createElement('circle', { cx: '26', cy: '17', r: '1.5', fill: 'rgba(200,168,107,0.9)', stroke: 'none' })) },
  { label: 'DNA', svg: React.createElement('svg', { viewBox: '0 0 52 52', fill: 'none', stroke: 'rgba(255,255,255,0.65)', strokeWidth: '1.2', 'aria-hidden': true }, React.createElement('path', { d: 'M18 6 Q12 16 18 24 Q24 32 18 40 Q12 48 18 56' }), React.createElement('path', { d: 'M34 6 Q28 16 34 24 Q40 32 34 40 Q28 48 34 56' }), React.createElement('line', { x1: '18', y1: '10', x2: '34', y2: '14' }), React.createElement('line', { x1: '16', y1: '20', x2: '36', y2: '24' }), React.createElement('line', { x1: '18', y1: '30', x2: '34', y2: '34' }), React.createElement('line', { x1: '16', y1: '40', x2: '36', y2: '44' })) },
  { label: 'Camera', svg: React.createElement('svg', { viewBox: '0 0 52 52', fill: 'none', stroke: 'rgba(255,255,255,0.65)', strokeWidth: '1.2', 'aria-hidden': true }, React.createElement('circle', { cx: '26', cy: '26', r: '18' }), React.createElement('circle', { cx: '26', cy: '26', r: '8' }), React.createElement('path', { d: 'M16 18 L26 10 L36 18' }), React.createElement('path', { d: 'M36 26 L36 36 L26 42' }), React.createElement('path', { d: 'M26 42 L16 36 L16 26' })) },
  { label: 'Leaf', svg: React.createElement('svg', { viewBox: '0 0 52 52', fill: 'none', stroke: 'rgba(255,255,255,0.65)', strokeWidth: '1.2', 'aria-hidden': true }, React.createElement('path', { d: 'M16 44 Q8 34 10 22 Q12 12 24 8 Q36 6 42 16 Q48 28 40 38 Q32 48 16 44Z' }), React.createElement('path', { d: 'M16 44 Q28 28 38 10' })) },
  { label: 'Circuit', svg: React.createElement('svg', { viewBox: '0 0 52 52', fill: 'none', stroke: 'rgba(255,255,255,0.65)', strokeWidth: '1.2', 'aria-hidden': true }, React.createElement('rect', { x: '18', y: '18', width: '16', height: '16', rx: '2' }), React.createElement('path', { d: 'M26 8 L26 18' }), React.createElement('path', { d: 'M26 34 L26 44' }), React.createElement('path', { d: 'M8 26 L18 26' }), React.createElement('path', { d: 'M34 26 L44 26' }), React.createElement('circle', { cx: '26', cy: '8', r: '2', fill: 'rgba(200,168,107,0.9)', stroke: 'none' }), React.createElement('circle', { cx: '26', cy: '44', r: '2', fill: 'rgba(200,168,107,0.9)', stroke: 'none' }), React.createElement('circle', { cx: '8', cy: '26', r: '2', fill: 'rgba(200,168,107,0.9)', stroke: 'none' }), React.createElement('circle', { cx: '44', cy: '26', r: '2', fill: 'rgba(200,168,107,0.9)', stroke: 'none' })) },
  { label: 'Cube', svg: React.createElement('svg', { viewBox: '0 0 52 52', fill: 'none', stroke: 'rgba(255,255,255,0.65)', strokeWidth: '1.2', 'aria-hidden': true }, React.createElement('path', { d: 'M26 8 L42 17 L42 35 L26 44 L10 35 L10 17Z' }), React.createElement('path', { d: 'M26 8 L26 26 L42 17' }), React.createElement('path', { d: 'M26 26 L10 17' }), React.createElement('path', { d: 'M26 26 L26 44' })) },
];

// ── Stats counter ──
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal(0.3);
  useEffect(function() {
    if (!visible) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(function() {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, duration / steps);
    return function() { clearInterval(timer); };
  }, [visible, target]);
  return React.createElement('span', { ref: ref }, count + (suffix || ''));
}

// ── 3D tilt theme card ──
function ThemeCard({ area, index }) {
  const [ref, visible] = useReveal(0.1);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const COLORS = ['#36e1c6', '#8b8cff', '#68a8ff'];
  const color = COLORS[index % 3];

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  }

  return (
    React.createElement('div', {
      ref: ref,
      className: styles.themeOuter + ' ' + (visible ? styles.themeVisible : ''),
      style: { transitionDelay: index * 120 + 'ms' },
    },
      React.createElement('div', {
        ref: cardRef,
        className: styles.themeCard,
        style: {
          transform: hovered
            ? 'perspective(900px) rotateX(' + tilt.x + 'deg) rotateY(' + tilt.y + 'deg) scale3d(1.03,1.03,1.03)'
            : 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
          transition: hovered ? 'transform 0.12s ease, box-shadow 0.3s' : 'transform 0.55s ease, box-shadow 0.3s',
          '--t-color': color,
        },
        onMouseMove: handleMouseMove,
        onMouseEnter: function() { setHovered(true); },
        onMouseLeave: function() { setTilt({ x: 0, y: 0 }); setHovered(false); },
      },
        React.createElement('div', { className: styles.themeAccent, 'aria-hidden': true }),
        React.createElement('div', { className: styles.themeCTL, 'aria-hidden': true }),
        React.createElement('div', { className: styles.themeCBR, 'aria-hidden': true }),
        React.createElement('div', {
          className: styles.themeGlare,
          style: { opacity: hovered ? 0.1 : 0, background: 'radial-gradient(circle at ' + (50 + tilt.y * 4) + '% ' + (50 + tilt.x * 4) + '%, ' + color + ', transparent 65%)' },
          'aria-hidden': true,
        }),
        React.createElement('div', { className: styles.themeNum }, area.num),
        React.createElement('h3', { className: styles.themeTitle, style: { color: color } }, area.title),
        React.createElement('div', { className: styles.themeRule, style: { background: color }, 'aria-hidden': true }),
        React.createElement('p', { className: styles.themeDesc }, area.desc),
        React.createElement(Link, { to: '/research', className: styles.themeMore, style: { color: color } }, 'Learn more →'),
        React.createElement('div', {
          className: styles.themeGlow,
          style: { background: 'radial-gradient(ellipse at bottom center, ' + color + '22, transparent 70%)', opacity: hovered ? 1 : 0.4 },
          'aria-hidden': true,
        })
      )
    )
  );
}

// ── News card ──
function NewsCard({ item, index }) {
  const [ref, visible] = useReveal(0.1);
  const TAG_COLORS = { Funding: '#10b981', Award: '#facc15', Partnership: '#68a8ff', Conference: '#8b8cff', People: '#f43f5e', Milestone: '#36e1c6' };
  const color = TAG_COLORS[item.tag] || '#c8a86b';

  return (
    React.createElement('article', {
      ref: ref,
      className: styles.newsCard + ' ' + (visible ? styles.newsCardVisible : ''),
      style: { transitionDelay: index * 100 + 'ms', '--n-color': color },
    },
      React.createElement('div', { className: styles.newsPhotoWrap },
        React.createElement('img', { src: item.photo, alt: item.title, loading: 'lazy', className: styles.newsPhoto }),
        React.createElement('div', { className: styles.newsPhotoOverlay, 'aria-hidden': true }),
        React.createElement('span', { className: styles.newsTagBadge, style: { background: color, color: '#131e28' } }, item.tag)
      ),
      React.createElement('div', { className: styles.newsBody },
        React.createElement('p', { className: styles.newsDate }, item.date),
        React.createElement('h3', { className: styles.newsTitle }, item.title),
        React.createElement('p', { className: styles.newsExcerpt }, item.excerpt),
        React.createElement('div', { className: styles.newsFooter },
          React.createElement('div', { className: styles.newsLine, style: { background: color }, 'aria-hidden': true }),
          React.createElement(Link, { to: '/news', className: styles.newsRead, style: { color: color } }, 'Read more →')
        )
      )
    )
  );
}

const THEMES = [
  { num: '01', title: 'Artificial Intelligence', desc: 'Building systems capable of reasoning, planning, and natural language understanding to solve complex real-world challenges at scale and across domains.' },
  { num: '02', title: 'Machine Learning', desc: 'Supervised, unsupervised, and reinforcement learning using advanced deep learning architectures and novel training paradigms for diverse applications.' },
  { num: '03', title: 'Computer Vision', desc: 'Enabling machines to interpret visual data — from image classification and object detection to complex scene understanding and 3D reconstruction.' },
];

const NEWS = [
  { date: 'April 14, 2025', title: 'AAIINS Lab receives $2.4M ARC Discovery Grant for health AI research', excerpt: 'The lab has been awarded a competitive ARC Discovery grant to develop privacy-preserving federated learning systems for cross-institutional clinical data analysis.', photo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&fit=crop', tag: 'Funding' },
  { date: 'February 28, 2025', title: 'Khan Raiaan wins Best Paper at ICCV 2025 for climate modelling work', excerpt: 'Congratulations to Senior Mentor Khan Raiaan, whose paper on generative satellite imagery synthesis was awarded Best Student Paper at ICCV.', photo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&fit=crop', tag: 'Award' },
  { date: 'January 10, 2025', title: 'New partnership with Monash University School of Medicine announced', excerpt: 'AAIINS Lab and Monash Medicine have signed a formal research collaboration agreement to develop AI-assisted diagnostic tools for early cancer detection.', photo: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80&fit=crop', tag: 'Partnership' },
];

export default function Home() {
  const [aboutRef, aboutVisible] = useReveal(0.1);
  const [statsRef, statsVisible] = useReveal(0.2);

  return (
    React.createElement('main', { id: 'main-content' },

      // ── HERO ──
      React.createElement('section', { className: styles.hero, 'aria-label': 'AAIINS Lab introduction' },
        React.createElement('div', { className: styles.heroBg, 'aria-hidden': true },
          React.createElement('img', { src: UNSPLASH.heroBg, alt: '', className: styles.heroBgImg }),
          React.createElement('div', { className: styles.heroOverlay }),
          React.createElement('div', { className: styles.heroDots })
        ),
        React.createElement('div', { className: styles.heroContent },
          React.createElement('p', { className: styles.heroEyebrow }, 'Applied Artificial Intelligence & Intelligent Systems'),
        React.createElement('div', { className: styles.logoWrap },
          React.createElement('svg', {
            className: styles.logoImg,
            viewBox: '0 0 300 300',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            'aria-label': 'AAIINS Lab logo',
            role: 'img',
          },
            // Outer rings
            React.createElement('circle', { cx: '150', cy: '150', r: '138', stroke: 'rgba(255,255,255,0.22)', strokeWidth: '0.8' }),
            React.createElement('circle', { cx: '150', cy: '150', r: '124', stroke: 'rgba(255,255,255,0.14)', strokeWidth: '0.5' }),
            // Inner center ring
            React.createElement('circle', { cx: '150', cy: '150', r: '84', stroke: 'white', strokeWidth: '1.5' }),
            // Neural Brain top
            React.createElement('ellipse', { cx: '134', cy: '40', rx: '17', ry: '13', stroke: 'white', strokeWidth: '1.3', fill: 'none' }),
            React.createElement('ellipse', { cx: '166', cy: '40', rx: '17', ry: '13', stroke: 'white', strokeWidth: '1.3', fill: 'none' }),
            React.createElement('line', { x1: '147', y1: '40', x2: '153', y2: '40', stroke: 'white', strokeWidth: '1.2' }),
            React.createElement('path', { d: 'M126 40 Q131 33 134 31 Q137 29 141 32', stroke: 'white', strokeWidth: '0.9', fill: 'none' }),
            React.createElement('path', { d: 'M174 40 Q169 33 166 31 Q163 29 159 32', stroke: 'white', strokeWidth: '0.9', fill: 'none' }),
            React.createElement('path', { d: 'M126 42 Q124 48 126 53', stroke: 'white', strokeWidth: '0.9', fill: 'none' }),
            React.createElement('path', { d: 'M174 42 Q176 48 174 53', stroke: 'white', strokeWidth: '0.9', fill: 'none' }),
            React.createElement('circle', { cx: '130', cy: '36', r: '1.8', fill: 'white', opacity: '0.9' }),
            React.createElement('circle', { cx: '140', cy: '30', r: '1.8', fill: 'white', opacity: '0.9' }),
            React.createElement('circle', { cx: '150', cy: '28', r: '1.8', fill: 'white', opacity: '0.9' }),
            React.createElement('circle', { cx: '160', cy: '30', r: '1.8', fill: 'white', opacity: '0.9' }),
            React.createElement('circle', { cx: '170', cy: '36', r: '1.8', fill: 'white', opacity: '0.9' }),
            React.createElement('line', { x1: '130', y1: '36', x2: '140', y2: '30', stroke: 'white', strokeWidth: '0.75', opacity: '0.7' }),
            React.createElement('line', { x1: '140', y1: '30', x2: '150', y2: '28', stroke: 'white', strokeWidth: '0.75', opacity: '0.7' }),
            React.createElement('line', { x1: '150', y1: '28', x2: '160', y2: '30', stroke: 'white', strokeWidth: '0.75', opacity: '0.7' }),
            React.createElement('line', { x1: '160', y1: '30', x2: '170', y2: '36', stroke: 'white', strokeWidth: '0.75', opacity: '0.7' }),
            // Circuit traces top-right
            React.createElement('path', { d: 'M204 68 L220 68 L220 80 L232 80', stroke: 'white', strokeWidth: '0.95', fill: 'none', opacity: '0.6' }),
            React.createElement('path', { d: 'M220 68 L228 60', stroke: 'white', strokeWidth: '0.8', fill: 'none', opacity: '0.5' }),
            React.createElement('circle', { cx: '232', cy: '80', r: '2.5', stroke: 'white', strokeWidth: '1', fill: 'none', opacity: '0.6' }),
            React.createElement('circle', { cx: '228', cy: '60', r: '1.8', fill: 'white', opacity: '0.5' }),
            React.createElement('path', { d: 'M226 90 L240 90 L240 100', stroke: 'white', strokeWidth: '0.8', fill: 'none', opacity: '0.4' }),
            React.createElement('circle', { cx: '240', cy: '100', r: '1.8', fill: 'white', opacity: '0.5' }),
            // Camera aperture top-right
            React.createElement('circle', { cx: '244', cy: '82', r: '16', stroke: 'white', strokeWidth: '1.2', fill: 'none', opacity: '0.72' }),
            React.createElement('circle', { cx: '244', cy: '82', r: '7', stroke: 'white', strokeWidth: '0.9', fill: 'none', opacity: '0.5' }),
            React.createElement('path', { d: 'M235 74 L244 67 L253 74', stroke: 'white', strokeWidth: '0.95', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M253 82 L253 91 L244 97', stroke: 'white', strokeWidth: '0.95', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M244 97 L235 91 L235 82', stroke: 'white', strokeWidth: '0.95', fill: 'none', opacity: '0.62' }),
            // DNA double helix right
            React.createElement('path', { d: 'M250 132 Q241 145 250 158 Q259 171 250 184 Q241 197 250 210 Q259 223 250 236 Q241 249 250 262', stroke: 'white', strokeWidth: '1.3', fill: 'none', opacity: '0.68' }),
            React.createElement('path', { d: 'M263 128 Q254 145 263 158 Q272 171 263 184 Q254 197 263 210 Q254 223 263 236 Q254 249 263 262', stroke: 'white', strokeWidth: '1.1', fill: 'none', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '136', x2: '263', y2: '140', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '148', x2: '263', y2: '152', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '160', x2: '263', y2: '164', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '172', x2: '263', y2: '176', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '184', x2: '263', y2: '188', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '196', x2: '263', y2: '200', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '208', x2: '263', y2: '212', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '220', x2: '263', y2: '224', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '232', x2: '263', y2: '236', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            React.createElement('line', { x1: '250', y1: '244', x2: '263', y2: '248', stroke: 'white', strokeWidth: '0.85', opacity: '0.52' }),
            // Scattered dots top-left
            React.createElement('circle', { cx: '56', cy: '76', r: '2.2', fill: 'white', opacity: '0.52' }),
            React.createElement('circle', { cx: '68', cy: '64', r: '2.8', fill: 'white', opacity: '0.42' }),
            React.createElement('circle', { cx: '82', cy: '56', r: '1.8', fill: 'white', opacity: '0.48' }),
            React.createElement('circle', { cx: '64', cy: '86', r: '1.4', fill: 'white', opacity: '0.32' }),
            React.createElement('circle', { cx: '50', cy: '92', r: '1.8', fill: 'white', opacity: '0.38' }),
            React.createElement('circle', { cx: '76', cy: '44', r: '3.2', fill: 'white', opacity: '0.32' }),
            React.createElement('circle', { cx: '60', cy: '52', r: '1.4', fill: 'white', opacity: '0.28' }),
            React.createElement('circle', { cx: '88', cy: '68', r: '0.9', fill: 'white', opacity: '0.38' }),
            React.createElement('path', { d: 'M52 74 Q64 54 86 50', stroke: 'white', strokeWidth: '0.75', fill: 'none', opacity: '0.28' }),
            // Contour leaf left-top
            React.createElement('path', { d: 'M34 104 Q20 122 26 146 Q30 162 46 160 Q62 158 66 142 Q70 124 56 104 Q46 94 34 104Z', stroke: 'white', strokeWidth: '1.2', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M34 104 Q50 128 40 160', stroke: 'white', strokeWidth: '0.75', fill: 'none', opacity: '0.42' }),
            React.createElement('path', { d: 'M38 116 Q52 118 62 126', stroke: 'white', strokeWidth: '0.6', fill: 'none', opacity: '0.32' }),
            React.createElement('path', { d: 'M36 128 Q50 130 64 136', stroke: 'white', strokeWidth: '0.6', fill: 'none', opacity: '0.3' }),
            React.createElement('path', { d: 'M36 140 Q50 142 62 148', stroke: 'white', strokeWidth: '0.55', fill: 'none', opacity: '0.26' }),
            // Camera aperture left
            React.createElement('circle', { cx: '24', cy: '186', r: '16', stroke: 'white', strokeWidth: '1.2', fill: 'none', opacity: '0.72' }),
            React.createElement('circle', { cx: '24', cy: '186', r: '7', stroke: 'white', strokeWidth: '0.9', fill: 'none', opacity: '0.5' }),
            React.createElement('path', { d: 'M15 178 L24 171 L33 178', stroke: 'white', strokeWidth: '0.95', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M33 186 L33 195 L24 201', stroke: 'white', strokeWidth: '0.95', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M24 201 L15 195 L15 186', stroke: 'white', strokeWidth: '0.95', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M48 170 L58 154 L68 170Z', stroke: 'white', strokeWidth: '1.05', fill: 'none', opacity: '0.48' }),
            // Contour leaf 2 bottom-left
            React.createElement('path', { d: 'M40 218 Q26 234 32 256 Q38 274 56 270 Q72 266 74 248 Q76 230 60 216 Q50 208 40 218Z', stroke: 'white', strokeWidth: '1.1', fill: 'none', opacity: '0.58' }),
            React.createElement('path', { d: 'M40 218 Q58 240 48 270', stroke: 'white', strokeWidth: '0.75', fill: 'none', opacity: '0.38' }),
            React.createElement('path', { d: 'M46 228 Q62 232 70 242', stroke: 'white', strokeWidth: '0.55', fill: 'none', opacity: '0.28' }),
            React.createElement('path', { d: 'M44 240 Q60 244 70 254', stroke: 'white', strokeWidth: '0.55', fill: 'none', opacity: '0.26' }),
            // 3D Cube bottom
            React.createElement('path', { d: 'M100 264 L114 255 L128 264 L128 284 L114 293 L100 284Z', stroke: 'white', strokeWidth: '1.1', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M114 255 L114 275 L100 284', stroke: 'white', strokeWidth: '0.85', fill: 'none', opacity: '0.42' }),
            React.createElement('path', { d: 'M114 275 L128 264', stroke: 'white', strokeWidth: '0.85', fill: 'none', opacity: '0.42' }),
            React.createElement('path', { d: 'M86 280 L94 275 L102 280 L102 292 L94 297 L86 292Z', stroke: 'white', strokeWidth: '0.85', fill: 'none', opacity: '0.38' }),
            // Handshake bottom center
            React.createElement('path', { d: 'M134 282 Q140 274 150 277 Q158 279 156 287 Q154 294 146 292', stroke: 'white', strokeWidth: '1.1', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M170 282 Q164 274 154 277', stroke: 'white', strokeWidth: '1.1', fill: 'none', opacity: '0.62' }),
            React.createElement('path', { d: 'M170 282 Q176 289 172 296 Q168 302 160 300 Q152 298 150 292', stroke: 'white', strokeWidth: '1', fill: 'none', opacity: '0.58' }),
            React.createElement('circle', { cx: '184', cy: '268', r: '6.5', stroke: 'white', strokeWidth: '0.9', fill: 'none', opacity: '0.42' }),
            React.createElement('path', { d: 'M180 275 Q180 286 188 286 Q196 286 196 275', stroke: 'white', strokeWidth: '0.85', fill: 'none', opacity: '0.38' }),
            React.createElement('path', { d: 'M202 272 Q208 266 210 276 Q212 286 204 288 Q198 286 202 272Z', stroke: 'white', strokeWidth: '0.95', fill: 'none', opacity: '0.42' }),
            React.createElement('path', { d: 'M206 288 Q210 300 208 308', stroke: 'white', strokeWidth: '0.75', fill: 'none', opacity: '0.32' }),
            // Center wordmark
            React.createElement('text', { x: '150', y: '143', textAnchor: 'middle', fontFamily: 'Cinzel, serif', fontSize: '30', fontWeight: '600', fill: 'white', letterSpacing: '4' }, 'AAIINS'),
            React.createElement('text', { x: '150', y: '173', textAnchor: 'middle', fontFamily: 'Cinzel, serif', fontSize: '20', fontWeight: '400', fill: 'white', letterSpacing: '6' }, 'LAB')
          )
        ),
          React.createElement('p', { className: styles.heroTagline }, 'Science that inspires the world'),
          React.createElement('div', { className: styles.heroCtas },
            React.createElement(Link, { to: '/research', className: 'btn-primary' }, 'Explore Research'),
            React.createElement(Link, { to: '/publications', className: 'btn-outline' }, 'Publications')
          )
        ),
        React.createElement('div', { className: styles.scrollIndicator, 'aria-hidden': true },
          React.createElement('span', { className: styles.scrollText }, 'Scroll'),
          React.createElement('span', { className: styles.scrollLine })
        )
      ),

      // ── WELCOME / MISSION ──
      React.createElement('section', { className: styles.welcomeSection, 'aria-label': 'Welcome' },
        React.createElement('div', { className: styles.welcomeInner },
          React.createElement('div', {
            ref: aboutRef,
            className: styles.welcomeLeft + ' ' + (aboutVisible ? styles.welcomeLeftVisible : ''),
          },
            React.createElement('span', { className: 'eyebrow' }, 'Welcome'),
            React.createElement('h2', { className: styles.welcomeTitle },
              'Applied Artificial Intelligence ', React.createElement('br', null),
              'and ', React.createElement('em', null, 'Intelligent Systems Lab')
            ),
            React.createElement('div', { className: 'gold-rule' })
          ),
          React.createElement('div', {
            className: styles.welcomeRight + ' ' + (aboutVisible ? styles.welcomeRightVisible : ''),
          },
            React.createElement('p', { className: styles.welcomeText },
              'Welcome to Applied Artificial Intelligence and Intelligent Systems (AAIINS) Lab. At AAIINS Lab, we believe in science that inspires. Our mission is to connect talented young researchers from around the world, providing them with a platform to explore their potential and contribute to groundbreaking discoveries.'
            ),
            React.createElement('p', { className: styles.welcomeText },
              'We work at the intersection of Computer Vision, Artificial Intelligence, Machine Learning, Generative AI, Health Informatics, and Environmental Modelling, with a shared focus on building intelligent systems that enhance human interaction and improve lives. Our ultimate goal is global outreach, fostering collaboration, sharing knowledge, and turning innovative ideas into impactful solutions.'
            ),
            React.createElement('div', { className: styles.welcomeTags },
              ['Computer Vision', 'Artificial Intelligence', 'Machine Learning', 'Generative AI', 'Health Informatics', 'Environmental Modelling'].map(function(tag) {
                return React.createElement('span', { key: tag, className: styles.welcomeTag }, tag);
              })
            )
          )
        )
      ),

      // ── STATS ROW ──
      React.createElement('div', { ref: statsRef, className: styles.statsRow },
        React.createElement('div', { className: styles.statsInner },
          React.createElement('div', { className: styles.statItem },
            React.createElement('div', { className: styles.statNum },
              statsVisible ? React.createElement(Counter, { target: 33, suffix: '+' }) : '0+'
            ),
            React.createElement('div', { className: styles.statLabel }, 'Publications')
          ),
          React.createElement('div', { className: styles.statDiv }),
          React.createElement('div', { className: styles.statItem },
            React.createElement('div', { className: styles.statNum },
              statsVisible ? React.createElement(Counter, { target: 25, suffix: '+' }) : '0+'
            ),
            React.createElement('div', { className: styles.statLabel }, 'Researchers')
          ),
          React.createElement('div', { className: styles.statDiv }),
          React.createElement('div', { className: styles.statItem },
            React.createElement('div', { className: styles.statNum },
              statsVisible ? React.createElement(Counter, { target: 6, suffix: '' }) : '0'
            ),
            React.createElement('div', { className: styles.statLabel }, 'Research Domains')
          ),
          React.createElement('div', { className: styles.statDiv }),
          React.createElement('div', { className: styles.statItem },
            React.createElement('div', { className: styles.statNum },
              statsVisible ? React.createElement(Counter, { target: 10, suffix: '+' }) : '0+'
            ),
            React.createElement('div', { className: styles.statLabel }, 'Countries')
          )
        )
      ),

      // ── ABOUT SPLIT ──
      React.createElement('section', { className: styles.aboutSection, 'aria-label': 'About AAIINS Lab' },
        React.createElement('div', { className: styles.aboutPhotos, 'aria-hidden': true },
          React.createElement('div', { className: styles.photo1 },
            React.createElement('img', { src: UNSPLASH.aboutA, alt: '', loading: 'lazy' })
          ),
          React.createElement('div', { className: styles.photo2 },
            React.createElement('img', { src: UNSPLASH.aboutB, alt: '', loading: 'lazy' })
          )
        ),
        React.createElement('div', { className: styles.aboutText },
          React.createElement('span', { className: 'eyebrow' }, 'About Us'),
          React.createElement('h2', { className: styles.aboutTitle },
            'Where intelligence', React.createElement('br', null), 'meets ', React.createElement('em', null, 'impact')
          ),
          React.createElement('div', { className: 'gold-rule' }),
          React.createElement('p', { className: styles.aboutP },
            'AAIINS Lab connects talented young researchers from around the world, providing a platform to explore their potential and contribute to groundbreaking discoveries at the frontier of applied AI.'
          ),
          React.createElement('p', { className: styles.aboutP },
            'Working at the intersection of multiple disciplines — our goal is global outreach through collaboration and innovation. Three major themes define our work:'
          ),
          React.createElement('ul', { className: styles.aboutList },
            React.createElement('li', null, 'AI cognition, intelligent systems & bio-inspired algorithms'),
            React.createElement('li', null, 'Impacts of environmental change on data-driven models'),
            React.createElement('li', null, 'Health informatics & personalised medicine')
          ),
          React.createElement('div', { className: styles.aboutCtas },
            React.createElement(Link, { to: '/people', className: 'btn-primary' }, 'Meet the Team'),
            React.createElement(Link, { to: '/research', className: 'btn-outline' }, 'Our Research')
          )
        )
      ),

      // ── MOTIF BAND ──
      React.createElement('div', { className: styles.motifBand, 'aria-hidden': true, role: 'presentation' },
        React.createElement('div', { className: styles.motifInner },
          MOTIF_ICONS.map(function(icon, i) {
            return React.createElement('div', { key: i, className: styles.motifIcon }, icon.svg);
          })
        )
      ),

      // ── PHOTO STRIP ──
      React.createElement('div', { className: styles.photoStrip, 'aria-hidden': true },
        React.createElement('img', { src: UNSPLASH.strip, alt: '', loading: 'lazy' }),
        React.createElement('div', { className: styles.photoStripOverlay }),
        React.createElement('div', { className: styles.stripText },
          React.createElement('p', { className: styles.stripQuote }, '"Science that inspires the world"'),
          React.createElement('p', { className: styles.stripSub }, 'AAIINS Lab · Global Research Network')
        )
      ),

      // ── KEY THEMES ──
      React.createElement('section', { className: styles.themesSection, 'aria-label': 'Key research themes' },
        React.createElement('div', { className: styles.themesInner },
          React.createElement('div', { className: styles.themesHeader },
            React.createElement('span', { className: 'eyebrow' }, 'Key Themes'),
            React.createElement('h2', { className: styles.themesTitle },
              'Three pillars of ', React.createElement('em', null, 'our research')
            ),
            React.createElement('p', { className: styles.themesSub },
              'Each theme reflects a major axis of our research — interconnected domains that feed into one another to build AI that is intelligent, responsible, and impactful.'
            )
          ),
          React.createElement('div', { className: styles.themesGrid },
            THEMES.map(function(area, i) {
              return React.createElement(ThemeCard, { key: area.num, area: area, index: i });
            })
          ),
          React.createElement('div', { className: styles.themesFooter },
            React.createElement(Link, { to: '/research', className: 'btn-outline' }, 'Explore all 6 research domains →')
          )
        )
      ),

      // ── LAB NEWS ──
      React.createElement('section', { className: styles.newsSection, 'aria-label': 'Lab news' },
        React.createElement('div', { className: styles.newsInner },
          React.createElement('div', { className: styles.newsHeader },
            React.createElement('div', null,
              React.createElement('span', { className: 'eyebrow' }, 'Lab News'),
              React.createElement('h2', { className: styles.newsTitle2 },
                'Latest from ', React.createElement('em', null, 'the lab')
              )
            ),
            React.createElement(Link, { to: '/news', className: 'btn-outline' }, 'View All News')
          ),
          React.createElement('div', { className: styles.newsGrid },
            NEWS.map(function(item, i) {
              return React.createElement(NewsCard, { key: i, item: item, index: i });
            })
          )
        )
      ),

      // ── JOIN CTA ──
      React.createElement('div', { className: styles.ctaBand },
        React.createElement('div', { className: styles.ctaDots, 'aria-hidden': true }),
        React.createElement('div', { className: styles.ctaContent },
          React.createElement('div', { className: styles.ctaDeco, 'aria-hidden': true },
            React.createElement('svg', { viewBox: '0 0 60 60', fill: 'none' },
              React.createElement('circle', { cx: '30', cy: '30', r: '28', stroke: 'rgba(200,168,107,0.2)', strokeWidth: '1' }),
              React.createElement('circle', { cx: '30', cy: '12', r: '3', fill: 'rgba(200,168,107,0.5)' }),
              React.createElement('circle', { cx: '46', cy: '40', r: '3', fill: 'rgba(200,168,107,0.5)' }),
              React.createElement('circle', { cx: '14', cy: '40', r: '3', fill: 'rgba(200,168,107,0.5)' }),
              React.createElement('line', { x1: '30', y1: '15', x2: '44', y2: '38', stroke: 'rgba(200,168,107,0.25)', strokeWidth: '0.8' }),
              React.createElement('line', { x1: '30', y1: '15', x2: '16', y2: '38', stroke: 'rgba(200,168,107,0.25)', strokeWidth: '0.8' }),
              React.createElement('line', { x1: '16', y1: '40', x2: '44', y2: '40', stroke: 'rgba(200,168,107,0.25)', strokeWidth: '0.8' })
            )
          ),
          React.createElement('div', null,
            React.createElement('h2', { className: styles.ctaTitle },
              'Ready to ', React.createElement('em', null, 'join us?')
            ),
            React.createElement('p', { className: styles.ctaSub },
              "We're always looking for curious, driven researchers to shape the future of AI."
            ),
            React.createElement('div', { className: styles.ctaButtons },
              React.createElement(Link, { to: '/people', className: 'btn-primary' }, 'Meet the Team'),
              React.createElement('a', { href: 'mailto:aaiins.research@gmail.com', className: 'btn-outline' }, 'Get in Touch')
            )
          )
        )
      ),

      React.createElement(Footer, null)
    )
  );
}