import Reveal from '../components/Reveal';
import Footer from '../components/Footer';
import { UNSPLASH, NEWS } from '../data';
import styles from './News.module.css';

const EXTRA_NEWS = [
  { date: 'December 5, 2024', title: 'AAIINS researcher presents at NeurIPS 2024 in Vancouver', excerpt: 'PhD student Layla Hassan presented her work on multimodal transformers for clinical prediction at the main NeurIPS conference, drawing significant attention from leading AI labs.', photo: UNSPLASH.newsB, tag: 'Conference' },
  { date: 'October 22, 2024', title: 'New undergraduate intake: 8 honours students join the lab', excerpt: 'We warmly welcome our 2024 honours cohort. These eight exceptional students will be working across all research domains, from health AI to generative models.', photo: UNSPLASH.newsC, tag: 'People' },
  { date: 'August 14, 2024', title: 'AAIINS Lab officially registered as an international research network', excerpt: 'After two years of growth, AAIINS Lab has formally registered as an international AI research network, with members across 12 countries on 5 continents.', photo: UNSPLASH.newsA, tag: 'Milestone' },
];

const ALL_NEWS = [...NEWS, ...EXTRA_NEWS];

export default function News() {
  return (
    <main id="main-content">
      <div className="page-hero">
        <img src={UNSPLASH.peopleBg} alt="" className="page-hero-img" aria-hidden="true"/>
        <div className="page-hero-overlay" aria-hidden="true"/>
        <div className="page-hero-dots" aria-hidden="true"/>
        <div className="page-hero-content">
          <span className="eyebrow">Stay Updated</span>
          <h1 className="page-hero-title">Lab <em>News</em></h1>
        </div>
      </div>

      <section className="section-wrap" aria-label="Lab news articles">
        <div className="section-inner">
          <Reveal>
            <p className={styles.lead}>The latest milestones, publications, awards, and updates from AAIINS Lab and our global research community.</p>
            <div className="gold-rule"/>
          </Reveal>
          <div className={styles.newsGrid}>
            {ALL_NEWS.map((item, i) => (
              <Reveal key={i} delay={i % 3 + 1}>
                <article className={styles.newsCard}>
                  <div className={styles.newsPhoto}>
                    <img src={item.photo} alt={item.title} loading="lazy"/>
                    <span className={styles.newsTag}>{item.tag}</span>
                  </div>
                  <div className={styles.newsBody}>
                    <p className={styles.newsDate}>{item.date}</p>
                    <h2 className={styles.newsTitle}>{item.title}</h2>
                    <p className={styles.newsExcerpt}>{item.excerpt}</p>
                    <a href="#" className={styles.newsRead} aria-label={`Read more about: ${item.title}`}>Read more →</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
