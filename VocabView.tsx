import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, ArrowLeft,
  Sparkles, Zap, Map as MapIcon,
  Compass, Key, ScrollText
} from 'lucide-react';
import { POR_PARA_GRAMMAR } from './vocabData';

export default function VocabView({ onBack, onPlay }: { onBack: () => void, onPlay: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 pt-8 space-y-12">
      {/* Adventure Header */}
      <section className="text-center space-y-6 relative">
        <motion.div 
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 10, scale: 1 }}
            transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
            className="inline-flex p-4 bg-amber-100 rounded-3xl shadow-xl text-amber-700 border-2 border-amber-200"
        >
           <Compass className="w-12 h-12" />
        </motion.div>
        
        <div className="space-y-2">
            <h2 className="text-3xl sm:text-7xl font-black text-stone-900 uppercase italic tracking-tighter leading-none">
              ԷՌՆԵՍՏՈՅԻ <br/> ԳԱՂՏՆԻՔԸ
            </h2>
            <p className="text-amber-600 font-black italic uppercase tracking-[0.3em] text-[10px] sm:text-sm">
              POR vs PARA: ՔԱՐՏԵԶԻ ՈՐՈՆՈՒՄ
            </p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* POR Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-stone-50 rounded-[40px] sm:rounded-[48px] p-6 sm:p-10 border border-stone-200 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5">
             <ScrollText className="w-24 h-24 sm:w-32 sm:h-32 rotate-12" />
          </div>
          
          <div className="flex items-center gap-4 border-b border-stone-200 pb-4 sm:pb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-stone-900 font-black shadow-lg">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 italic uppercase">POR</h3>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {POR_PARA_GRAMMAR.por.map((item, i) => (
              <div key={i} className="p-4 sm:p-5 bg-white rounded-2xl sm:rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all group">
                <p className="text-[9px] sm:text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-lg sm:text-xl font-bold text-stone-800 italic leading-tight">{item.example}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PARA Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-stone-900 rounded-[40px] sm:rounded-[48px] p-6 sm:p-10 border border-stone-800 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5">
             <MapIcon className="w-24 h-24 sm:w-32 sm:h-32 -rotate-12 text-white" />
          </div>

          <div className="flex items-center gap-4 border-b border-stone-800 pb-4 sm:pb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black shadow-lg">
              <Key className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white italic uppercase">PARA</h3>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {POR_PARA_GRAMMAR.para.map((item, i) => (
              <div key={i} className="p-4 sm:p-5 bg-stone-800 rounded-2xl sm:rounded-3xl border border-stone-700 shadow-sm hover:border-indigo-500/50 transition-all group">
                <p className="text-[9px] sm:text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-lg sm:text-xl font-bold text-stone-200 italic leading-tight">{item.example}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Narrative Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-500 text-stone-900 rounded-[40px] sm:rounded-[48px] p-6 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden border-b-[8px] sm:border-b-[12px] border-amber-600"
      >
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-stone-900 text-white rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
           <MapIcon className="w-4 h-4" /> ԳԱՂՏՆԻՔԻ ՇԵՄԻՆ
        </div>
        <p className="text-xl sm:text-4xl font-black italic uppercase leading-tight max-w-2xl mx-auto">
          ԷՌՆԵՍՏՈՆ <span className="text-white">ԲԱՑՈՒՄ Է</span> ՍՆԴՈՒԿԸ ԵՎ <span className="text-white">ԳՏՆՈՒՄ</span> ԻՐ ՀՈՐ <span className="text-white">ԳԱՂՏՆԻ ՔԱՐՏԵԶԸ</span>
        </p>
        <p className="text-amber-950 font-bold opacity-80 italic text-xs sm:text-lg">
          Օգնիր նրան հասկանալ քարտեզի գաղտնագիրը` ճիշտ օգտագործելով <span className="underline decoration-stone-900">POR</span> և <span className="underline decoration-stone-900">PARA</span> մասնիկները:
        </p>
      </motion.div>

      {/* CTA section */}
      <section className="bg-stone-900 rounded-[40px] sm:rounded-[48px] p-6 sm:p-12 text-white text-center space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden border-t-4 border-amber-500/30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">ՊԱՏՐԱ՞ՍՏ ԵՍ ՃԱՄՓՈՐԴՈՒԹՅԱՆ</h3>
          <p className="text-stone-400 font-bold italic uppercase tracking-widest text-[9px] sm:text-xs">Բացիր հաջորդ գաղտնիքը խաղի միջոցով:</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button 
            onClick={onPlay}
            className="bg-amber-500 text-stone-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-amber-400"
          >
            ՍԿՍԵԼ ԽԱՂԸ
          </button>
          <button 
            onClick={onBack}
            className="bg-stone-800 text-white border border-stone-700 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black italic uppercase tracking-widest hover:bg-stone-700 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> ՀԵՏ
          </button>
        </div>
      </section>
    </div>
  );
}
