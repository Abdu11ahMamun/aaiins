import { motion } from 'framer-motion';
import TypewriterText from '../effects/TypewriterText';
import './Hero.css';

function Hero({ title, subtitle, animated = true }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          {animated ? <TypewriterText text={title} speed={80} /> : title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-subtitle"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
