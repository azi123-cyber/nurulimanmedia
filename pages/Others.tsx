import React from 'react';
import { motion } from 'framer-motion';
import { Star, Mail, ArrowRight } from 'lucide-react';

const Others: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen px-6 pb-20 max-w-6xl mx-auto flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">Informasi Tambahan</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        {/* Quote Card */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-emerald-600 rounded-3xl p-10 text-white flex flex-col justify-center items-center text-center shadow-lg shadow-emerald-900/40"
        >
          <Star size={60} className="text-emerald-300 mb-6 animate-pulse" />
          <p className="text-2xl font-bold leading-relaxed">
            "Jangan pernah menyerah dalam menuntut ilmu."
          </p>
        </motion.div>

        {/* Highlights Card */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Keunggulan Kami</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Pondok Pesantren Nurul Iman berkomitmen mencetak generasi Qur'an. Kami menawarkan program 
            <span className="text-emerald-400 font-semibold"> Penguasaan Nahwu & Shorof (Metode Tabulas)</span>, 
            pemahaman <span className="text-emerald-400 font-semibold">Ahlussunnah Wal Jama'ah</span>, 
            serta pengembangan bakat melalui <span className="text-emerald-400 font-semibold">Marawis, Silat, & Komputer</span>.
          </p>
        </motion.div>
      </div>

      <motion.a 
        href="https://nuruliman123.vercel.app/" 
        target="_blank" 
        rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-emerald-500 rounded-full text-white font-medium flex items-center gap-3 transition-all mb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <span className="relative z-10">Kunjungi Website Lama / Arsip</span>
        <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
      </motion.a>

      <div className="border-t border-white/10 w-full pt-10 text-center">
        <p className="flex items-center justify-center gap-2 text-gray-400">
          <Mail size={16} />
          <span>Bug report / Contact Developer:</span>
          <a href="mailto:aziarsyirazeim@gmail.com" className="text-emerald-400 hover:underline">
            aziarsyirazeim@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Others;