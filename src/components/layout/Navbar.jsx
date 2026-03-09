import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/publications', label: 'Publications' },
    { path: '/people', label: 'People' },
    { path: '/mentors', label: 'Mentors' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] z-50 border-b border-white/[0.08] bg-[rgba(7,13,25,0.60)] backdrop-blur-[18px]">
      <div className="max-w-[1240px] h-full mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-[42px] h-[42px] rounded-[14px] bg-gradient-to-br from-[#36e1c6]/95 to-[#68a8ff]/95 grid place-items-center shadow-[0_10px_26px_rgba(54,225,198,0.25)] transition-transform group-hover:scale-105">
            <Brain className="text-white" size={22} strokeWidth={2.5} />
          </div>
          <div className="text-[1.1rem] font-black tracking-tight">
            <span className="text-[#36e1c6]">AA</span>
            <span className="text-white">IINS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-[14px] py-[10px] rounded-[10px] text-[0.9rem] font-semibold transition-all duration-[280ms] ${
                isActive(path)
                  ? 'text-white bg-white/[0.07] shadow-[inset_0_-2px_0_#36e1c6]'
                  : 'text-[#9fb0c7] hover:text-white hover:bg-white/[0.06]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/join"
            className={`px-[14px] py-[10px] rounded-[10px] text-[0.9rem] font-semibold transition-all duration-[280ms] bg-gradient-to-br ${
              isActive('/join')
                ? 'from-[#36e1c6] to-[#78f1de] text-[#08211e]'
                : 'from-[#36e1c6] to-[#78f1de] text-[#08211e] shadow-[0_8px_24px_rgba(54,225,198,0.22)] hover:shadow-[0_10px_28px_rgba(54,225,198,0.28)]'
            }`}
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/[0.06] rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(7,13,25,0.98)] backdrop-blur-[18px] border-b border-white/[0.08] py-4 px-6">
          <div className="flex flex-col gap-2">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-3 rounded-lg text-[0.9rem] font-semibold transition-all ${
                  isActive(path)
                    ? 'text-white bg-white/[0.07]'
                    : 'text-[#9fb0c7] hover:text-white hover:bg-white/[0.06]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/join"
              className="px-4 py-3 rounded-lg text-[0.9rem] font-semibold bg-gradient-to-br from-[#36e1c6] to-[#78f1de] text-[#08211e] text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
