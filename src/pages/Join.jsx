import { useState, useRef, useEffect } from 'react';
import React from 'react';
import Footer from '../components/Footer';
import { UNSPLASH } from '../data';
import styles from './Join.module.css';

const BENEFITS = [
  {
    title: 'Cutting-Edge Research',
    desc: 'Work on groundbreaking AI projects spanning computer vision, health informatics, generative models, and environmental AI — research that makes measurable real-world impact.',
    color: '#68a8ff',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('circle', { cx: '20', cy: '20', r: '6' }),
      React.createElement('path', { d: 'M20 4 L20 10 M20 30 L20 36 M4 20 L10 20 M30 20 L36 20' }),
      React.createElement('path', { d: 'M8.7 8.7 L12.9 12.9 M27.1 27.1 L31.3 31.3 M31.3 8.7 L27.1 12.9 M12.9 27.1 L8.7 31.3' })
    ),
  },
  {
    title: 'Global Collaboration',
    desc: 'Join a diverse international team of researchers, mentors, and scholars from leading universities worldwide. Build lifelong academic and professional connections.',
    color: '#36e1c6',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('circle', { cx: '20', cy: '20', r: '14' }),
      React.createElement('path', { d: 'M6 20 Q13 13 20 20 Q27 27 34 20', strokeWidth: '1' }),
      React.createElement('path', { d: 'M6 20 Q13 27 20 20 Q27 13 34 20', strokeWidth: '1' }),
      React.createElement('line', { x1: '20', y1: '6', x2: '20', y2: '34', strokeWidth: '1' })
    ),
  },
  {
    title: 'Career Acceleration',
    desc: 'Gain mentorship from industry-leading researchers, co-author Q1 publications, present at top conferences, and build a portfolio that sets you apart in AI.',
    color: '#8b8cff',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('polyline', { points: '6,30 14,20 22,24 34,10' }),
      React.createElement('polyline', { points: '28,10 34,10 34,16' }),
      React.createElement('line', { x1: '6', y1: '34', x2: '34', y2: '34', strokeWidth: '0.8', strokeDasharray: '2 2' })
    ),
  },
  {
    title: 'High-Impact Publications',
    desc: 'Contribute to Q1 journal papers and top-tier conference proceedings. Our researchers consistently publish in venues like IEEE, Nature, and top AI conferences.',
    color: '#facc15',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('rect', { x: '8', y: '6', width: '18', height: '24', rx: '1' }),
      React.createElement('rect', { x: '14', y: '10', width: '18', height: '24', rx: '1' }),
      React.createElement('line', { x1: '18', y1: '16', x2: '26', y2: '16' }),
      React.createElement('line', { x1: '18', y1: '20', x2: '26', y2: '20' }),
      React.createElement('line', { x1: '18', y1: '24', x2: '24', y2: '24' })
    ),
  },
  {
    title: 'Mentorship Network',
    desc: 'Get direct access to senior researchers, associate directors, and our chief mentor from Charles Darwin University. Your growth is guided at every step.',
    color: '#f43f5e',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('circle', { cx: '20', cy: '12', r: '5' }),
      React.createElement('circle', { cx: '10', cy: '28', r: '4' }),
      React.createElement('circle', { cx: '30', cy: '28', r: '4' }),
      React.createElement('line', { x1: '20', y1: '17', x2: '11', y2: '25' }),
      React.createElement('line', { x1: '20', y1: '17', x2: '29', y2: '25' })
    ),
  },
  {
    title: 'Flexible Participation',
    desc: 'Participate remotely or in-person from anywhere in the world. We welcome undergraduates, graduates, postdocs, and industry professionals at all career stages.',
    color: '#10b981',
    icon: React.createElement('svg', { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: '1.4', 'aria-hidden': true },
      React.createElement('rect', { x: '8', y: '14', width: '24', height: '18', rx: '2' }),
      React.createElement('path', { d: 'M14 14 L14 10 A6 6 0 0 1 26 10 L26 14' }),
      React.createElement('circle', { cx: '20', cy: '23', r: '3' }),
      React.createElement('line', { x1: '20', y1: '26', x2: '20', y2: '29' })
    ),
  },
];

const ELIGIBILITY = [
  'Strong academic background in Computer Science, Engineering, Mathematics, or related fields',
  'Passion for AI research and real-world problem solving',
  'Good programming skills — Python, TensorFlow, PyTorch, or equivalent',
  'Ability to work independently as well as collaboratively in a distributed team',
  'Excellent written and verbal communication skills in English',
];

const LEVELS = ['Undergraduate', 'Honours Student', 'Masters Student', 'PhD Student', 'Postdoctoral Researcher', 'Industry Professional', 'Other'];
const INTERESTS = ['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'Generative AI', 'Health Informatics', 'Environmental Modelling', 'Multiple Areas'];

// ── thank-you animated screen shown after submit ──
function ThankYou({ name }) {
  const [phase, setPhase] = useState(0);

  useEffect(function() {
    const t1 = setTimeout(function() { setPhase(1); }, 300);
    const t2 = setTimeout(function() { setPhase(2); }, 900);
    const t3 = setTimeout(function() { setPhase(3); }, 1500);
    return function() { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    React.createElement('div', { className: styles.thankWrap },
      React.createElement('div', { className: styles.thankContent },

        // animated rings
        React.createElement('div', { className: styles.thankRings, 'aria-hidden': true },
          React.createElement('div', { className: styles.thankRing1 }),
          React.createElement('div', { className: styles.thankRing2 }),
          React.createElement('div', { className: styles.thankRing3 }),
        ),

        // checkmark
        React.createElement('div', { className: styles.thankCheck + ' ' + (phase >= 1 ? styles.thankCheckOn : ''), 'aria-hidden': true },
          React.createElement('svg', { viewBox: '0 0 52 52', fill: 'none' },
            React.createElement('circle', { cx: '26', cy: '26', r: '25', stroke: '#c8a86b', strokeWidth: '1.5', className: styles.checkCircle }),
            React.createElement('polyline', { points: '14,27 22,35 38,18', stroke: '#c8a86b', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round', className: styles.checkMark })
          )
        ),

        // text
        React.createElement('div', { className: styles.thankText + ' ' + (phase >= 2 ? styles.thankTextOn : '') },
          React.createElement('h2', { className: styles.thankTitle },
            'Thank you, ', React.createElement('em', null, name || 'Researcher'), '!'
          ),
          React.createElement('div', { className: styles.thankDivider }),
          React.createElement('p', { className: styles.thankSub },
            'Your application has been received. Our team reviews every submission carefully and will be in touch within 5–7 business days.'
          )
        ),

        // floating particles
        phase >= 3 && React.createElement('div', { className: styles.particles, 'aria-hidden': true },
          [0,1,2,3,4,5,6,7].map(function(i) {
            return React.createElement('div', { key: i, className: styles.particle, style: { '--i': i } });
          })
        )
      )
    )
  );
}

// ── benefit card with tilt ──
function BenefitCard({ benefit, index }) {
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
    setTilt({ x: dy * -7, y: dx * 7 });
  }

  return (
    React.createElement('div', {
      ref: ref,
      className: styles.benefitOuter + ' ' + (visible ? styles.benefitVisible : ''),
      style: { transitionDelay: (index % 3) * 90 + 'ms' },
    },
      React.createElement('div', {
        ref: cardRef,
        className: styles.benefitCard,
        style: {
          transform: hovered
            ? 'perspective(800px) rotateX(' + tilt.x + 'deg) rotateY(' + tilt.y + 'deg) scale3d(1.025,1.025,1.025)'
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
          transition: hovered ? 'transform 0.12s ease' : 'transform 0.55s ease',
          '--b-color': benefit.color,
        },
        onMouseMove: handleMouseMove,
        onMouseEnter: function() { setHovered(true); },
        onMouseLeave: function() { setTilt({ x: 0, y: 0 }); setHovered(false); },
      },
        React.createElement('div', { className: styles.benefitAccent, 'aria-hidden': true }),
        React.createElement('div', { className: styles.bCTL, 'aria-hidden': true }),
        React.createElement('div', { className: styles.bCBR, 'aria-hidden': true }),
        React.createElement('div', {
          className: styles.benefitGlare,
          style: { opacity: hovered ? 0.1 : 0, background: 'radial-gradient(circle at ' + (50 + tilt.y * 4) + '% ' + (50 + tilt.x * 4) + '%, ' + benefit.color + ', transparent 65%)' },
          'aria-hidden': true,
        }),
        React.createElement('div', { className: styles.benefitIcon, style: { color: benefit.color } }, benefit.icon),
        React.createElement('h3', { className: styles.benefitTitle }, benefit.title),
        React.createElement('p', { className: styles.benefitDesc }, benefit.desc),
        React.createElement('div', { className: styles.benefitGlow, style: { background: 'radial-gradient(ellipse at bottom, ' + benefit.color + '22 0%, transparent 70%)' }, 'aria-hidden': true })
      )
    )
  );
}

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState('');
  const formRef = useRef(null);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    institution: '', level: '', interest: '', statement: '',
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm(function(prev) {
      return Object.assign({}, prev, { [name]: value });
    });
    if (name === 'firstName') setFirstName(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(function() {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    React.createElement('main', { id: 'main-content' },

      // HERO
      React.createElement('div', { className: 'page-hero', style: { minHeight: '45vh' } },
        React.createElement('img', { src: UNSPLASH.peopleBg, alt: '', className: 'page-hero-img', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-overlay', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-dots', 'aria-hidden': true }),
        React.createElement('div', { className: 'page-hero-content' },
          React.createElement('span', { className: 'eyebrow' }, 'Open Applications'),
          React.createElement('h1', { className: 'page-hero-title' },
            'Join ', React.createElement('em', null, 'AAIINS Lab')
          )
        )
      ),

      // BENEFITS
      React.createElement('section', { className: styles.benefitsSection, 'aria-label': 'Why join us' },
        React.createElement('div', { className: styles.benefitsInner },
          React.createElement('div', { className: styles.benefitsHeader },
            React.createElement('span', { className: 'eyebrow' }, 'Why Join Us'),
            React.createElement('h2', { className: styles.benefitsTitle }, 'Build the future of ', React.createElement('em', null, 'intelligence')),
            React.createElement('div', { className: 'gold-rule' }),
            React.createElement('p', { className: styles.benefitsSub },
              'AAIINS Lab is more than a research group — it is a global community of thinkers, builders, and innovators committed to advancing AI for humanity.'
            )
          ),
          React.createElement('div', { className: styles.benefitsGrid },
            BENEFITS.map(function(b, i) {
              return React.createElement(BenefitCard, { key: b.title, benefit: b, index: i });
            })
          )
        )
      ),

      // ELIGIBILITY
      React.createElement('section', { className: styles.eligSection, 'aria-label': 'Eligibility criteria' },
        React.createElement('div', { className: styles.eligInner },
          React.createElement('div', { className: styles.eligLeft },
            React.createElement('span', { className: 'eyebrow' }, 'Who Can Apply'),
            React.createElement('h2', { className: styles.eligTitle }, React.createElement('em', null, 'Eligibility'), ' Criteria'),
            React.createElement('div', { className: 'gold-rule' }),
            React.createElement('p', { className: styles.eligSub }, 'We welcome researchers at all stages of their academic journey. If you are driven by curiosity and a desire to build impactful AI systems, we want to hear from you.')
          ),
          React.createElement('div', { className: styles.eligRight },
            ELIGIBILITY.map(function(item, i) {
              return React.createElement('div', { key: i, className: styles.eligItem },
                React.createElement('div', { className: styles.eligNum }, ('0' + (i + 1)).slice(-2)),
                React.createElement('p', { className: styles.eligText }, item)
              );
            })
          )
        )
      ),

      // APPLICATION FORM
      React.createElement('section', { className: styles.formSection, 'aria-label': 'Application form' },
        React.createElement('div', { className: styles.formWrap },

          React.createElement('div', { className: styles.formHeader },
            React.createElement('span', { className: 'eyebrow' }, 'Apply Now'),
            React.createElement('h2', { className: styles.formTitle }, 'Start your ', React.createElement('em', null, 'application')),
            React.createElement('div', { className: 'gold-rule' }),
            React.createElement('p', { className: styles.formSub }, 'Fill in the form below and our team will review your application. We accept rolling applications throughout the year.')
          ),

          // form card — flips to thank you
          React.createElement('div', {
            className: styles.formCard + ' ' + (submitted ? styles.formCardFlipped : ''),
            'aria-live': 'polite',
          },

            // FORM FRONT
            React.createElement('div', { className: styles.formFront },
              React.createElement('div', { className: styles.fCTL, 'aria-hidden': true }),
              React.createElement('div', { className: styles.fCTR, 'aria-hidden': true }),
              React.createElement('div', { className: styles.fCBL, 'aria-hidden': true }),
              React.createElement('div', { className: styles.fCBR, 'aria-hidden': true }),

              React.createElement('form', {
                ref: formRef,
                onSubmit: handleSubmit,
                noValidate: true,
              },
                React.createElement('div', { className: styles.formRow },
                  React.createElement('div', { className: styles.formGroup },
                    React.createElement('label', { htmlFor: 'firstName', className: styles.label }, 'First Name'),
                    React.createElement('input', { id: 'firstName', name: 'firstName', type: 'text', required: true, className: styles.input, placeholder: 'Your first name', value: form.firstName, onChange: handleChange })
                  ),
                  React.createElement('div', { className: styles.formGroup },
                    React.createElement('label', { htmlFor: 'lastName', className: styles.label }, 'Last Name'),
                    React.createElement('input', { id: 'lastName', name: 'lastName', type: 'text', required: true, className: styles.input, placeholder: 'Your last name', value: form.lastName, onChange: handleChange })
                  )
                ),
                React.createElement('div', { className: styles.formRow },
                  React.createElement('div', { className: styles.formGroup },
                    React.createElement('label', { htmlFor: 'email', className: styles.label }, 'Email Address'),
                    React.createElement('input', { id: 'email', name: 'email', type: 'email', required: true, className: styles.input, placeholder: 'your@email.com', value: form.email, onChange: handleChange })
                  ),
                  React.createElement('div', { className: styles.formGroup },
                    React.createElement('label', { htmlFor: 'institution', className: styles.label }, 'Institution / Organization'),
                    React.createElement('input', { id: 'institution', name: 'institution', type: 'text', className: styles.input, placeholder: 'Your university or workplace', value: form.institution, onChange: handleChange })
                  )
                ),
                React.createElement('div', { className: styles.formRow },
                  React.createElement('div', { className: styles.formGroup },
                    React.createElement('label', { htmlFor: 'level', className: styles.label }, 'Academic Level'),
                    React.createElement('select', { id: 'level', name: 'level', required: true, className: styles.select, value: form.level, onChange: handleChange },
                      React.createElement('option', { value: '', disabled: true }, 'Select your level'),
                      LEVELS.map(function(l) { return React.createElement('option', { key: l, value: l }, l); })
                    )
                  ),
                  React.createElement('div', { className: styles.formGroup },
                    React.createElement('label', { htmlFor: 'interest', className: styles.label }, 'Primary Research Interest'),
                    React.createElement('select', { id: 'interest', name: 'interest', required: true, className: styles.select, value: form.interest, onChange: handleChange },
                      React.createElement('option', { value: '', disabled: true }, 'Select research area'),
                      INTERESTS.map(function(a) { return React.createElement('option', { key: a, value: a }, a); })
                    )
                  )
                ),
                React.createElement('div', { className: styles.formGroup, style: { gridColumn: '1 / -1' } },
                  React.createElement('label', { htmlFor: 'statement', className: styles.label }, 'Personal Statement'),
                  React.createElement('textarea', {
                    id: 'statement', name: 'statement', rows: 5,
                    className: styles.textarea, required: true,
                    placeholder: 'Tell us about your research background, what motivates you to join AAIINS Lab, and what you hope to contribute and achieve...',
                    value: form.statement, onChange: handleChange,
                  })
                ),
                React.createElement('button', {
                  type: 'submit',
                  className: styles.submitBtn + ' ' + (submitting ? styles.submitBtnLoading : ''),
                  disabled: submitting,
                },
                  submitting
                    ? React.createElement(React.Fragment, null,
                        React.createElement('span', { className: styles.spinner, 'aria-hidden': true }),
                        'Submitting...'
                      )
                    : React.createElement(React.Fragment, null,
                        'Submit Application',
                        React.createElement('svg', { width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', 'aria-hidden': true },
                          React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
                          React.createElement('polyline', { points: '12,5 19,12 12,19' })
                        )
                      )
                )
              )
            ),

            // FORM BACK — thank you
            React.createElement('div', { className: styles.formBack },
              submitted && React.createElement(ThankYou, { name: firstName })
            )
          )
        )
      ),

      React.createElement(Footer, null)
    )
  );
}