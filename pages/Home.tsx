import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, HeartHandshake } from 'lucide-react';
import { SUBJECTS } from '../constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: "url('https://ik.imagekit.io/rgqle2so1/WhatsApp%20Image%202025-05-23%20at%2010.31.15.jpeg?updatedAt=1747971588711')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-200 drop-shadow-2xl mb-4"
          >
            Nurul Iman
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-emerald-100 text-lg md:text-2xl font-light tracking-wide mb-8"
          >
            Membangun Generasi Islami & Modern
          </motion.p>
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8 }}
             className="inline-block px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-900/30 backdrop-blur-md text-emerald-300 text-sm"
          >
            @Nurulimanofficiall
          </motion.div>
        </div>
      </section>

      {/* Intro Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Tentang <span className="text-emerald-400">Kami</span></h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Pondok Pesantren Nurul Iman berdiri sejak tahun 1973, di atas tanah wakaf seluas +900m2 dari K.H. Moh Hasanudin. 
              Kini dipimpin oleh K.H. Muhammad Toha (Buya). Kami memadukan pendidikan pesantren salafiyah dengan pendidikan formal, 
              mengajarkan santri untuk menyeimbangkan ilmu agama, umum, dan manajemen waktu.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-64 rounded-3xl overflow-hidden relative group"
            >
              <img 
                src="https://ik.imagekit.io/rgqle2so1/DSC01091.JPG?updatedAt=1747982655337" 
                alt="Kegiatan Santri" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="text-white font-medium">Kegiatan Harian Santri</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 bg-gradient-to-r from-emerald-800 to-emerald-600 rounded-3xl p-8 flex items-center justify-center text-center shadow-lg shadow-emerald-900/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                "Ilmu, Amal, & Akhlak"
              </h3>
            </motion.div>
          </div>
        </div>

        {/* Academics Highlights */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Kurikulum</h2>
            <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SUBJECTS.map((sub, idx) => {
              const Icon = sub.icon === 'BookOpen' ? BookOpen : sub.icon === 'GraduationCap' ? GraduationCap : sub.icon === 'Users' ? Users : HeartHandshake;
              return (
                <motion.div 
                  key={idx}
                  variants={item}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{sub.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{sub.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;