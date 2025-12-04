import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="https://ik.imagekit.io/rgqle2so1/logo_nuri-removebg-preview.png?updatedAt=1747979813308" 
            alt="Logo" 
            className="w-8 h-8 opacity-80"
          />
          <span className="font-semibold text-gray-400">Nurul Iman</span>
        </div>
        
        <p className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Nurul Iman Media. All rights reserved.<br/>
          <span className="text-xs opacity-50">Designed with ❤️ by Azi & AI</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;