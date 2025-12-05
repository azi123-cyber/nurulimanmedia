import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, ExternalLink } from 'lucide-react';
import { FAQS, REQUIREMENTS } from '../constants';

const Admissions: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24 px-6 pb-20 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Penerimaan Santri Baru</h1>
        <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
          Bergabunglah dengan keluarga besar Pondok Pesantren Nurul Iman. Siapkan masa depan yang cerah dengan bekal agama dan ilmu pengetahuan.
        </p>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 mb-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3">
            <img 
              src="https://ik.imagekit.io/rgqle2so1/1.jpg?updatedAt=1748004393184" 
              alt="Santri Baru" 
              className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/20"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">Daftar Sekarang!</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Pilih jalur pendaftaran yang sesuai. Pastikan data yang diisi benar dan lengkap. Kuota terbatas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScPbKTkX1OPSpMtKZ_RWX_O0J6ywXAp9eYlV2AfuHOoeqfmtQ/viewform" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Formulir Putra <ExternalLink size={18} />
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeNFG_G10gea-bxuztzutaZejBYMTNnMbYt85DmSkU7wyuTcg/viewform" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3 bg-transparent border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-full transition-all flex items-center justify-center gap-2"
              >
                Formulir Putri <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Requirements */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-md rounded-3xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            Persyaratan Berkas
          </h3>
          <ul className="space-y-4">
            {REQUIREMENTS.map((req, idx) => {
              const variants = {
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { delay: idx * 0.1 } }
              };
              return (
                <motion.li key={idx} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span>{req}</span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* FAQ */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
           <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-yellow-500 rounded-full"></div>
            Tanya Jawab (FAQ)
          </h3>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 shadow-lg shadow-black/20 hover:border-emerald-500/50 transition-all duration-300">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center text-white font-medium hover:bg-white/5 transition-colors"
                  >
                    {faq.question}
                    <ChevronDown 
                      className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-emerald-400' : 'text-gray-400'}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;