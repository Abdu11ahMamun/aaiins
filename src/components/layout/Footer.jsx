import { Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 pb-8 relative">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Footer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: About */}
          <div className="p-6 rounded-[18px] bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/[0.10] shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:border-white/[0.14]">
            <p className="text-[0.94rem] text-[#d4dce8] leading-[1.7] font-medium">
              Applied Artificial Intelligence and Intelligent Systems (AAIINS) Lab
            </p>
          </div>

          {/* Card 2: Research Areas */}
          <div className="p-6 rounded-[18px] bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/[0.10] shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:border-white/[0.14]">
            <h5 className="text-[0.78rem] uppercase tracking-[0.14em] text-[#68a8ff] mb-4 font-extrabold">
              Research Areas
            </h5>
            <div className="space-y-2">
              <p className="text-[0.88rem] text-[#b8c5d6] transition-colors duration-200 hover:text-white">Health Informatics</p>
              <p className="text-[0.88rem] text-[#b8c5d6] transition-colors duration-200 hover:text-white">Machine Learning</p>
              <p className="text-[0.88rem] text-[#b8c5d6] transition-colors duration-200 hover:text-white">Computer Vision</p>
              <p className="text-[0.88rem] text-[#b8c5d6] transition-colors duration-200 hover:text-white">Generative AI</p>
              <p className="text-[0.88rem] text-[#b8c5d6] transition-colors duration-200 hover:text-white">Environmental Modelling</p>
            </div>
          </div>

          {/* Card 3: Contact Information */}
          <div className="p-6 rounded-[18px] bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/[0.10] shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:border-white/[0.14]">
            <h5 className="text-[0.78rem] uppercase tracking-[0.14em] text-[#36e1c6] mb-4 font-extrabold">
              Contact
            </h5>
            <a 
              href="mailto:aaiins.research@gmail.com"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-[12px] bg-gradient-to-r from-[#36e1c6]/[0.10] to-[#68a8ff]/[0.08] border border-[#36e1c6]/[0.20] text-[#36e1c6] text-[0.88rem] font-bold shadow-[0_2px_8px_rgba(54,225,198,0.12)] transition-all duration-250 hover:translate-y-[-2px] hover:shadow-[0_4px_16px_rgba(54,225,198,0.20)] hover:border-[#36e1c6]/[0.30]"
            >
              <Mail size={16} />
              aaiins.research@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/[0.08] text-center">
          <p className="text-[0.84rem] text-[#7f90a8] font-medium">
            © {currentYear} AAIINS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
