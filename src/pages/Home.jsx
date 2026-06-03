import { Link } from 'react-router-dom';
import LogoSVG from '../components/LogoSVG';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';
import { UNSPLASH, NEWS, RESEARCH_AREAS } from '../data';
import styles from './Home.module.css';

const MOTIF_ICONS = [
  { label: 'Neural AI', d: <svg viewBox="0 0 52 52" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" aria-hidden="true"><ellipse cx="18" cy="26" rx="9" ry="11"/><ellipse cx="34" cy="26" rx="9" ry="11"/><line x1="21" y1="26" x2="31" y2="26"/><circle cx="14" cy="22" r="1.5" fill="rgba(200,168,107,0.9)" stroke="none"/><circle cx="38" cy="22" r="1.5" fill="rgba(200,168,107,0.9)" stroke="none"/><circle cx="26" cy="17" r="1.5" fill="rgba(200,168,107,0.9)" stroke="none"/></svg> },
  { label: 'DNA', d: <svg viewBox="0 0 52 52" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" aria-hidden="true"><path d="M18 6 Q12 16 18 24 Q24 32 18 40 Q12 48 18 56"/><path d="M34 6 Q28 16 34 24 Q40 32 34 40 Q28 48 34 56"/><line x1="18" y1="10" x2="34" y2="14"/><line x1="16" y1="20" x2="36" y2="24"/><line x1="18" y1="30" x2="34" y2="34"/><line x1="16" y1="40" x2="36" y2="44"/></svg> },
  { label: 'Camera', d: <svg viewBox="0 0 52 52" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" aria-hidden="true"><circle cx="26" cy="26" r="18"/><circle cx="26" cy="26" r="8"/><path d="M16 18 L26 10 L36 18"/><path d="M36 26 L36 36 L26 42"/><path d="M26 42 L16 36 L16 26"/></svg> },
  { label: 'Leaf', d: <svg viewBox="0 0 52 52" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" aria-hidden="true"><path d="M16 44 Q8 34 10 22 Q12 12 24 8 Q36 6 42 16 Q48 28 40 38 Q32 48 16 44Z"/><path d="M16 44 Q28 28 38 10"/><path d="M18 32 Q30 30 40 24" strokeWidth="0.8" opacity="0.6"/><path d="M14 38 Q24 36 34 32" strokeWidth="0.8" opacity="0.5"/></svg> },
  { label: 'Circuit', d: <svg viewBox="0 0 52 52" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" aria-hidden="true"><rect x="18" y="18" width="16" height="16" rx="2"/><path d="M26 8 L26 18"/><path d="M26 34 L26 44"/><path d="M8 26 L18 26"/><path d="M34 26 L44 26"/><circle cx="26" cy="8" r="2" fill="rgba(200,168,107,0.9)" stroke="none"/><circle cx="26" cy="44" r="2" fill="rgba(200,168,107,0.9)" stroke="none"/><circle cx="8" cy="26" r="2" fill="rgba(200,168,107,0.9)" stroke="none"/><circle cx="44" cy="26" r="2" fill="rgba(200,168,107,0.9)" stroke="none"/></svg> },
  { label: 'Cube', d: <svg viewBox="0 0 52 52" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" aria-hidden="true"><path d="M26 8 L42 17 L42 35 L26 44 L10 35 L10 17Z"/><path d="M26 8 L26 26 L42 17"/><path d="M26 26 L10 17"/><path d="M26 26 L26 44"/></svg> },
];

export default function Home() {
  return (
    <main id="main-content">
      {/* ── HERO ── */}
      <section className={styles.hero} aria-label="AAIINS Lab introduction">
        <div className={styles.heroBg} aria-hidden="true">
          <img src={UNSPLASH.hero} alt="" className={styles.heroBgImg}/>
          <div className={styles.heroOverlay}/>
          <div className={styles.heroDots}/>
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Applied Artificial Intelligence &amp; Intelligent Systems</p>
          <LogoSVG size={300} className={styles.heroLogo}/>
          <p className={styles.heroTagline}>Science that inspires the world</p>
          <div className={styles.heroCtas}>
            <Link to="/research" className="btn-primary">Explore Research</Link>
            <Link to="/publications" className="btn-outline">Publications</Link>
          </div>
        </div>
        <div className={styles.scrollIndicator} aria-hidden="true">
          <span className={styles.scrollText}>Scroll</span>
          <span className={styles.scrollLine}/>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className={styles.about} aria-label="About AAIINS Lab">
        <div className={styles.aboutPhotos} aria-hidden="true">
          <div className={styles.photo1}>
            <img src={UNSPLASH.aboutA} alt="Researchers at work in a lab environment" loading="lazy"/>
          </div>
          <div className={styles.photo2}>
            <img src={UNSPLASH.aboutB} alt="Medical imaging and AI research equipment" loading="lazy"/>
          </div>
        </div>
        <div className={styles.aboutText}>
          <Reveal>
            <span className="eyebrow">About Us</span>
            <h2 className="section-title">Where intelligence<br/>meets <em>impact</em></h2>
            <div className="gold-rule"/>
            <p className="body-text">AAIINS Lab connects talented young researchers from around the world, providing a platform to explore their potential and contribute to groundbreaking discoveries at the frontier of applied AI.</p>
            <p className="body-text" style={{ marginTop: '0.85rem' }}>Working at the intersection of Computer Vision, Machine Learning, Generative AI, Health Informatics, and Environmental Modelling — our goal is global outreach through collaboration and innovation.</p>
            <ul className={styles.aboutList}>
              <li>AI cognition, intelligent systems &amp; bio-inspired algorithms</li>
              <li>Impacts of environmental change on data-driven models</li>
              <li>Health informatics &amp; personalised medicine</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── MOTIF ICON BAND ── */}
      <div className={styles.motifBand} aria-hidden="true" role="presentation">
        <div className={styles.motifBandInner}>
          {MOTIF_ICONS.map((icon, i) => (
            <div key={i} className={styles.motifIcon} title={icon.label}>{icon.d}</div>
          ))}
        </div>
      </div>

      {/* ── PHOTO STRIP ── */}
      <div className={styles.photoStrip} aria-hidden="true">
        <img src={UNSPLASH.strip} alt="" loading="lazy"/>
        <div className={styles.photoStripOverlay}/>
      </div>

      {/* ── KEY THEMES ── */}
      <section className={`section-wrap ${styles.themes}`} aria-label="Research themes">
        <div className="section-inner">
          <Reveal>
            <div className={styles.themesHeader}>
              <span className="eyebrow">Key Themes</span>
              <h2 className="section-title">Three pillars of <em>our research</em></h2>
            </div>
          </Reveal>
          <div className={styles.themesGrid}>
            {RESEARCH_AREAS.slice(0,3).map((area, i) => (
              <Reveal key={area.num} delay={i + 1}>
                <div className={styles.themeCard}>
                  <div className={styles.themeNum}>{area.num}</div>
                  <h3 className={styles.themeTitle}>{area.title}</h3>
                  <p className={styles.themeDesc}>{area.desc}</p>
                  <Link to="/research" className={styles.themeMore}>Learn more →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAB NEWS PREVIEW ── */}
      <section className={`section-wrap ${styles.newsSection}`} aria-label="Recent lab news">
        <div className="section-inner">
          <Reveal>
            <div className={styles.newsSectionHeader}>
              <div>
                <span className="eyebrow">Lab News</span>
                <h2 className="section-title">Latest from <em>the lab</em></h2>
              </div>
              <Link to="/news" className="btn-outline">View All News</Link>
            </div>
          </Reveal>
          <div className={styles.newsGrid}>
            {NEWS.map((item, i) => (
              <Reveal key={i} delay={i + 1}>
                <article className={styles.newsCard}>
                  <div className={styles.newsPhoto}>
                    <img src={item.photo} alt={item.title} loading="lazy"/>
                    <span className={styles.newsTag}>{item.tag}</span>
                  </div>
                  <div className={styles.newsInfo}>
                    <p className={styles.newsDate}>{item.date}</p>
                    <h3 className={styles.newsTitle}>{item.title}</h3>
                    <p className={styles.newsExcerpt}>{item.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <div className="collab-cta">
        <h2>Ready to <em>join us?</em></h2>
        <p>We're always looking for curious, driven researchers to shape the future of AI.</p>
        <div className="cta-buttons">
          <Link to="/people" className="btn-primary">Meet the Team</Link>
          <a href="mailto:aaiins.research@gmail.com" className="btn-outline">Get in Touch</a>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
