import React, { useState } from 'react';

// Fiiro gaar ah: Halkaan geli link-ga saxda ah ee logo-gaaga 'ClickBoost'
import logo from '../assets/image.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#f7f4ed] border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* 1. Dhanka Bidix: Logo-ga la hagaajiyay (Transparent & Weyn) */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="block">
              <img 
                className="h-34 w-auto object-contain mix-blend-multiply contrast-125" 
                src={logo} 
                alt="ClickBoost Logo" 
              />
            </a>
          </div>

          {/* 2. Dhanka Midig: Menu-da (Wixii ka weyn Mobile) */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Service
            </a>
            <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Portofolio
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#case-study" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Case study
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              About
            </a>
            
            {/* Contact Button-ka */}
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-7 py-3 border border-[#212942] rounded-full text-sm font-medium text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Hamburger Menu (Kaliya marka mobile lagu jiro) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-[#212942] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f7f4ed] border-b border-gray-200 px-6 pt-2 pb-4 space-y-3 shadow-lg">
          <a href="#services" className="block text-base font-medium text-gray-700 hover:text-black py-2">Service</a>
          <a href="#portfolio" className="block text-base font-medium text-gray-700 hover:text-black py-2">Portofolio</a>
          <a href="#pricing" className="block text-base font-medium text-gray-700 hover:text-black py-2">Pricing</a>
          <a href="#case-study" className="block text-base font-medium text-gray-700 hover:text-black py-2">Case study</a>
          <a href="#about" className="block text-base font-medium text-gray-700 hover:text-black py-2">About</a>
          <a 
            href="#contact" 
            className="block text-center px-6 py-2.5 border border-gray-400 rounded-full text-base font-medium text-black hover:bg-black hover:text-white transition-all"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;