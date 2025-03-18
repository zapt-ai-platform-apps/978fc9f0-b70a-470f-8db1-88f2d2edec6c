import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-padding mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
            alt="ProSaver Logo" 
            className="h-10 w-10 mr-2"
          />
          <h1 className="text-xl font-bold text-blue-700">
            <span className="hidden sm:inline">ProSaver</span> HandyMan
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-primary"
          >
            Contact Us
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-gray-700 cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container-padding mx-auto py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left py-2 font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left py-2 font-medium text-gray-700 hover:text-blue-600"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-2 font-medium text-gray-700 hover:text-blue-600"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full btn btn-primary"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}