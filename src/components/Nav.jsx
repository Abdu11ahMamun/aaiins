import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LOGO } from '../data';
import styles from './Nav.module.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/people', label: 'People' },
  { to: '/mentors', label: 'Mentors' },
  { to: '/news', label: 'Lab News' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
        <img src={LOGO} alt="AAIINS Lab" className={styles.brandLogo}/>
        <span className={styles.brandText}>AA<span className={styles.accent}>II</span>NS</span>
      </Link>

      {/* Desktop links */}
      <div className={styles.desktop}>
        {LINKS.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >{l.label}</NavLink>
        ))}
        <Link to="/join" className={styles.join}>Join Us</Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className={styles.burger} onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.bar1open : ''}`}/>
        <span className={`${styles.bar} ${open ? styles.bar2open : ''}`}/>
        <span className={`${styles.bar} ${open ? styles.bar3open : ''}`}/>
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.drawer} role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`}
              onClick={() => setOpen(false)}
            >{l.label}</NavLink>
          ))}
          <Link to="/join" className={styles.drawerJoin} onClick={() => setOpen(false)}>Join Us</Link>
        </div>
      )}
    </nav>
  );
}
