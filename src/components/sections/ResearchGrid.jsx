import { motion } from 'framer-motion';
import TiltCard from '../effects/TiltCard';
import { ExternalLink } from 'lucide-react';
import './ResearchGrid.css';

function ResearchGrid({ items }) {
  return (
    <section className="research-grid">
      <div className="research-container">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard>
              <div className="research-card">
                {item.image && (
                  <div className="research-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                <h3 className="research-title">{item.title}</h3>
                <p className="research-description">{item.description}</p>
                {item.link && (
                  <a href={item.link} className="research-link">
                    Learn more <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ResearchGrid;
