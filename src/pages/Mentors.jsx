import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { UNSPLASH } from '../data';
import styles from './Mentors.module.css';

const imageMap = import.meta.glob('../assets/*', { eager: true, import: 'default' });
const getImage = (fileName) => imageMap[`../assets/${fileName}`] || null;

const CHIEF = {
  name: 'Professor Sami Azam',
  role: 'Chief Mentor',
  org: ['Discipline Chair, Information Technology', 'Faculty of Science and Technology', 'Charles Darwin University, Australia'],
  bio: 'Professor Sami Azam leads the academic panel for AAIINS Lab, providing strategic research direction and mentorship. His expertise spans applied AI, computer vision, and intelligent systems, with over 120 international publications and a deep commitment to nurturing the next generation of AI researchers worldwide.',
  image: getImage('sami-azam_0-removebg-preview-e1757102988261.png'),
  links: {
    email: 'mailto:sami.azam@cdu.edu.au',
    scholar: 'https://www.scopus.com/authid/detail.uri?authorId=54894635100',
    website: 'https://researchers.cdu.edu.au/en/persons/sami-azam',
  },
};

const SENIOR = [
  {
    name: 'Mohaimenul Azam Khan Raiaan',
    role: 'Senior Mentor',
    title: 'PhD Student',
    dept: 'Department of Data Science and AI',
    inst: 'Monash University, Australia',
    image: getImage('mak-raian.jpg'),
    links: {
      email: 'mailto:mohaimenul.raiaan@monash.edu',
      linkedin: 'https://www.linkedin.com/in/makraiaan/',
      scholar: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=Gg4yXLoAAAAJ',
      website: 'https://mak-raiaan.github.io/',
    },
  },
  {
    name: 'Sadia Sultana Chowa',
    role: 'Senior Mentor',
    title: 'PhD Student',
    dept: 'Department of Software Systems & Cybersecurity',
    inst: 'Monash University, Australia',
    image: getImage('Chowa-scaled.jpg'),
    links: {
      email: 'mailto:sadia15-3052@diu.edu.bd',
      linkedin: 'https://www.linkedin.com/in/sadia-sultana-chowa-/',
      scholar: 'https://scholar.google.com/citations?user=JKcqHrMAAAAJ&hl=en',
      website: 'https://sultana-chowa.github.io/',
    },
  },
];

const LINK_ICONS = {
  email: React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', 'aria-hidden': true },
    React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
    React.createElement('polyline', { points: '22,6 12,13 2,6' })
  ),
  linkedin: React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', 'aria-hidden': true },
    React.createElement('path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z' }),
    React.createElement('rect', { x: '2', y: '9', width: '4', height: '12' }),
    React.createElement('circle', { cx: '4', cy: '4', r: '2' })
  ),
  scholar: React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', 'aria-hidden': true },
    React.createElement('path', { d: 'M22 10v6M2 10l10-5 10 5-10 5z' }),
    React.createElement('path', { d: 'M6 12v5c3 3 9 3 12 0v-5' })
  ),
  website: React.createElement('svg', { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', 'aria-hidden': true },
    React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    React.createElement('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
    React.createElement('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
  ),
};

const LINK_LABELS = { email: 'Email', linkedin: 'LinkedIn', scholar: 'Scholar', website: 'Website' };

// ── 3D tilt card for senior mentors ──
function TiltCard({ mentor, index }) {
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const cardRef = useRef(null);

  useEffect(function() {
    const obs = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.unobserve(entries[0].target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return function() { obs.disconnect(); };
  }, []);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  const transform = hovered
    ? 'perspective(800px) rotateX(' + tilt.x + 'deg) rotateY(' + tilt.y + 'deg) scale3d(1.03,1.03,1.03)'
    : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';

  return (
    <div
      ref={ref}
      className={styles.tiltOuter + ' ' + (visible ? styles.tiltVisible : '')}
      style={{ transitionDelay: (index % 2) * 100 + 'ms' }}
    >
      <div
        ref={cardRef}
        className={styles.tiltCard}
        style={{ transform: transform, transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={function() { setHovered(true); }}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glare effect */}
        <div
          className={styles.tiltGlare}
          style={{
            opacity: hovered ? 0.12 : 0,
            background: 'radial-gradient(circle at ' + (50 + tilt.y * 3) + '% ' + (50 + tilt.x * 3) + '%, rgba(200,168,107,0.8), transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className={styles.tiltLeft}>
          <div className={styles.tiltPhotoWrap}>
            {mentor.image
              ? React.createElement('img', { src: mentor.image, alt: 'Photo of ' + mentor.name, loading: 'lazy' })
              : React.createElement('div', { className: styles.tiltInitials }, mentor.name.split(' ').map(function(w) { return w[0]; }).join('').slice(0, 2))
            }
            <div className={styles.tiltPhotoShine} aria-hidden="true" />
          </div>
        </div>

        <div className={styles.tiltRight}>
          <div className={styles.tiltRoleRow}>
            <span className={styles.tiltRole}>{mentor.role}</span>
            <div className={styles.tiltRoleLine} aria-hidden="true" />
          </div>
          <h3 className={styles.tiltName}>{mentor.name}</h3>
          <p className={styles.tiltTitle}>{mentor.title}</p>
          <p className={styles.tiltDept}>{mentor.dept}</p>
          <p className={styles.tiltInst}>{mentor.inst}</p>
          <div className={styles.tiltLinks}>
            {Object.keys(mentor.links).map(function(key) {
              return React.createElement(
                'a',
                {
                  key: key,
                  href: mentor.links[key],
                  className: styles.tiltLink,
                  target: key !== 'email' ? '_blank' : undefined,
                  rel: key !== 'email' ? 'noopener noreferrer' : undefined,
                  'aria-label': LINK_LABELS[key] + ' of ' + mentor.name,
                },
                LINK_ICONS[key],
                LINK_LABELS[key]
              );
            })}
          </div>
        </div>

        {/* 3D depth border glow */}
        <div className={styles.tiltBorderGlow} aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Mentors() {
  const [chiefVisible, setChiefVisible] = useState(false);
  const chiefRef = useRef(null);

  useEffect(function() {
    const obs = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting) {
          setChiefVisible(true);
          obs.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    if (chiefRef.current) obs.observe(chiefRef.current);
    return function() { obs.disconnect(); };
  }, []);

  return (
    React.createElement('main', { id: 'main-content' },

      // PAGE HERO
      React.createElement('div', { className: 'page-hero' },
        React.createElement('img', { src: UNSPLASH.researchBg, alt: '', className: 'page-hero-img', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-overlay', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-dots', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-content' },
          React.createElement('span', { className: 'eyebrow' }, 'Executive Academic Panel'),
          React.createElement('h1', { className: 'page-hero-title' },
            React.createElement('em', null, 'Mentors')
          )
        )
      ),

      // CHIEF MENTOR
      React.createElement('section', { 'aria-label': 'Chief Mentor', className: styles.chiefSection },
        React.createElement('div', { className: styles.chiefSectionHeader },
          React.createElement('h2', { className: styles.chiefSectionTitle }, 'Chief Mentor'),
          React.createElement('span', { className: styles.chiefBadge }, 'Leadership'),
          React.createElement('div', { className: styles.chiefHeaderLine, 'aria-hidden': true })
        ),

        React.createElement('div', {
          ref: chiefRef,
          className: styles.chiefCard + ' ' + (chiefVisible ? styles.chiefVisible : ''),
        },
          // Animated corner accents
          React.createElement('div', { className: styles.cornerTL, 'aria-hidden': true }),
          React.createElement('div', { className: styles.cornerTR, 'aria-hidden': true }),
          React.createElement('div', { className: styles.cornerBL, 'aria-hidden': true }),
          React.createElement('div', { className: styles.cornerBR, 'aria-hidden': true }),

          React.createElement('div', { className: styles.chiefPhotoCol },
            React.createElement('div', { className: styles.chiefPhotoFrame },
              CHIEF.image
                ? React.createElement('img', { src: CHIEF.image, alt: 'Photo of ' + CHIEF.name, loading: 'lazy' })
                : React.createElement('div', { className: styles.chiefInitials }, 'SA'),
              React.createElement('div', { className: styles.chiefPhotoGlow, 'aria-hidden': true }),
              // Floating ring decoration
              React.createElement('div', { className: styles.chiefRing, 'aria-hidden': true },
                React.createElement('svg', { viewBox: '0 0 120 120', fill: 'none' },
                  React.createElement('circle', { cx: '60', cy: '60', r: '55', stroke: 'rgba(200,168,107,0.25)', strokeWidth: '1', strokeDasharray: '4 6' }),
                  React.createElement('circle', { cx: '60', cy: '60', r: '42', stroke: 'rgba(200,168,107,0.15)', strokeWidth: '0.8' })
                )
              )
            )
          ),

          React.createElement('div', { className: styles.chiefInfo },
            React.createElement('div', { className: styles.chiefRoleRow },
              React.createElement('span', { className: styles.chiefRole }, CHIEF.role),
              React.createElement('div', { className: styles.chiefRoleDash, 'aria-hidden': true })
            ),
            React.createElement('h2', { className: styles.chiefName }, CHIEF.name),
            React.createElement('div', { className: styles.chiefOrg },
              CHIEF.org.map(function(line, i) {
                return React.createElement('p', { key: i, className: i === 0 ? styles.chiefOrgPrimary : styles.chiefOrgSecondary }, line);
              })
            ),
            React.createElement('div', { className: styles.chiefDivider, 'aria-hidden': true }),
            React.createElement('p', { className: styles.chiefBio }, CHIEF.bio),
            React.createElement('div', { className: styles.chiefLinks },
              Object.keys(CHIEF.links).map(function(key) {
                return React.createElement(
                  'a',
                  {
                    key: key,
                    href: CHIEF.links[key],
                    className: styles.chiefLink,
                    target: key !== 'email' ? '_blank' : undefined,
                    rel: key !== 'email' ? 'noopener noreferrer' : undefined,
                    'aria-label': LINK_LABELS[key] + ' of ' + CHIEF.name,
                  },
                  LINK_ICONS[key],
                  LINK_LABELS[key]
                );
              })
            )
          )
        )
      ),

      // SENIOR MENTORS
      React.createElement('section', { 'aria-label': 'Senior Mentors', className: styles.seniorSection },
        React.createElement('div', { className: styles.seniorSectionHeader },
          React.createElement('h2', { className: styles.seniorSectionTitle }, 'Senior Mentors'),
          React.createElement('span', { className: styles.seniorBadge }, 'Academic Panel'),
          React.createElement('div', { className: styles.seniorHeaderLine, 'aria-hidden': true })
        ),
        React.createElement('div', { className: styles.seniorGrid },
          SENIOR.map(function(mentor, i) {
            return React.createElement(TiltCard, { key: mentor.name, mentor: mentor, index: i });
          })
        )
      ),

      React.createElement(Footer, null)
    )
  );
}