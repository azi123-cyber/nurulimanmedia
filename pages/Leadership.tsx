import React from 'react';
import { motion } from 'framer-motion';
import { Phone, User } from 'lucide-react';
import { LEADERS } from '../constants';

const Leadership: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen px-6 pb-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">Struktur Pengurus</h1>
        <p className="text-gray-400">Dedikasi untuk membimbing generasi masa depan</p>
      </div>

      {/* Main Leader / Pimpinan */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-emerald-900/50 to-black/50 border border-emerald-500/20 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold mb-2">
            Pimpinan Pondok
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Drs. KH. Muhamad Toha, M.M.Pd
          </h2>
          <p className="text-xl text-gray-300 italic">
            "Mendidik dengan hati, mengamalkan dengan bukti."
          </p>
          <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent my-6"></div>
          <div className="flex items-center gap-4 text-emerald-200/80">
            <User size={20} />
            <span>Pengasuh & Pimpinan Utama</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://ik.imagekit.io/rgqle2so1/IMG-20230725-WA0014.jpg?updatedAt=1747999997360" 
              alt="Pimpinan" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10"
            />
        </div>
      </motion.div>

      {/* Staff Grid */}
      <h3 className="text-2xl font-bold text-white mb-8 pl-4 border-l-4 border-emerald-500">
        Asatidz & Pengurus
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {LEADERS.map((leader, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
          >
            <img 
              src={leader.image} 
              alt={leader.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 className="text-xl font-bold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {leader.name}
              </h4>
              <div className="flex items-center gap-2 text-emerald-400 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                <Phone size={14} />
                <span>{leader.contact}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;