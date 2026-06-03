import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="fc">
          <p className="brand-name">AAIINS Lab</p>
          <p>Applied Artificial Intelligence<br />and Intelligent Systems Lab</p>
          <a href="mailto:aaiins.research@gmail.com" style={{ marginTop: '0.9rem' }}>
            aaiins.research@gmail.com
          </a>
        </div>
        <div className="fc">
          <h4>Research Areas</h4>
          <Link to="/research">Health Informatics</Link>
          <Link to="/research">Machine Learning</Link>
          <Link to="/research">Computer Vision</Link>
          <Link to="/research">Generative AI</Link>
          <Link to="/research">Environmental Modelling</Link>
        </div>
        <div className="fc">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/research">Research</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/people">People</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/news">Lab News</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 AAIINS Lab. All rights reserved.</p>
        <p>Applied AI &amp; Intelligent Systems</p>
      </div>
    </footer>
  );
}
