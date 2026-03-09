import { motion } from 'framer-motion';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import './StatsStrip.css';

function StatsStrip() {
  const stats = [
    { icon: Users, value: '50+', label: 'Researchers' },
    { icon: BookOpen, value: '200+', label: 'Publications' },
    { icon: Award, value: '15+', label: 'Awards' },
    { icon: TrendingUp, value: '100+', label: 'Projects' }
  ];

  return (
    <section className="stats-strip">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="stat-item"
          >
            <stat.icon className="stat-icon" size={32} />
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip;
