import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, ArrowLeft, 
  RotateCcw, Sparkles, 
  Zap, CheckCircle2,
  AlertCircle, Star,
  Map as MapIcon, Compass,
  Box, Key as KeyIcon
} from 'lucide-react';
import { POR_PARA_CHALLENGES } from './vocabData';

export default function PorParaGameView({ onBack }: { onBack: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentChallenge = POR_PARA_CHALLENGES[currentIdx];
  const shuffledOptions = useMemo(() => {
    return [...currentChallenge.options].sort(() => Math.random() - 0.5);
  }, [currentChallenge]);

  const handleAnswer = (option: string) => {
    if (isCorrect !== null) return;
    
    setSelectedOption(option);
    const correct = option === currentChallenge.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if (currentIdx < POR_PARA_CHALLENGES.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, correct ? 1500 : 2500);
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsCorrect(null);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-stone-900 text-amber-50 rounded-[40px] sm:rounded-[64px] p-8 sm:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-4 border-amber-900/40 space-y-10 relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          
          <div className="relative">
             <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-amber-500 mx-auto drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
             <Sparkles className="absolute top-0 right-1/4 text-amber-300 w-6 h-6 animate-pulse" />
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-2xl sm:text-4xl font-black uppercase italic tracking-widest text-amber-200 leading-tight">ԳԱՂՏՆԻՔԸ ԲԱՑԱՀԱՅՏՎԱԾ Է</h2>
            <div className="text-6xl sm:text-8xl font-black text-amber-500 drop-shadow-xl">
              {score}/{POR_PARA_CHALLENGES.length}
            </div>
            <p className="text-lg sm:text-xl font-bold text-amber-100/60 uppercase tracking-[0.3em]">
              {score === POR_PARA_CHALLENGES.length ? 'ԴՈՒ ԳՏԱՐ ՀՈՐԴ ՔԱՐՏԵԶԸ!' : 'ՓՈՐՁԻՐ ԵՎՍ ՄԵԿ ԱՆԳԱՄ'}
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <button 
              onClick={resetGame}
              className="bg-amber-600 text-stone-900 py-6 rounded-3xl font-black italic uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-amber-500 transition-all shadow-xl"
            >
              <RotateCcw className="w-6 h-6" /> ՆՈՐԻՑ ՓՈՐՁԵԼ
            </button>
            <button onClick={onBack} className="text-amber-500/40 font-black uppercase text-[10px] tracking-widest hover:text-amber-500 transition-colors">
               ԳԼԽԱՎՈՐ ՄԵՆՅՈՒ
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 [perspective:1200px]">
      {/* HUD */}
      <div className="flex justify-between items-center text-amber-700 font-black uppercase text-[10px] tracking-[0.4em]">
        <button onClick={onBack} className="flex items-center gap-2 hover:text-amber-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> ԵՏ
        </button>
        <div className="bg-stone-900 px-6 py-2 rounded-full text-amber-500 shadow-xl border border-amber-900/30 flex items-center gap-3">
          <Compass className="w-4 h-4" /> ՔԱՅԼ {currentIdx + 1} / {POR_PARA_CHALLENGES.length}
        </div>
      </div>

      {/* Adventure Progress */}
      <div className="h-6 bg-stone-900 rounded-full overflow-hidden shadow-2xl border-2 border-stone-800 relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-amber-900 via-amber-600 to-amber-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx + 1) / POR_PARA_CHALLENGES.length) * 100}%` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      </div>

      {/* Map/Chest Card 3D */}
      <motion.div
        key={currentIdx}
        initial={{ rotateX: 10, y: 40, opacity: 0 }}
        animate={{ rotateX: 0, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="bg-stone-50 rounded-[40px] sm:rounded-[64px] p-6 sm:p-20 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] border-b-[12px] border-stone-200 text-center space-y-8 sm:space-y-12 relative overflow-hidden group mb-12"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')] opacity-30 pointer-events-none" />
        <KeyIcon className="absolute -top-10 -left-10 w-48 h-48 text-stone-200/50 rotate-45 pointer-events-none" />
        <Box className="absolute -bottom-10 -right-10 w-48 h-48 text-stone-200/50 -rotate-12 pointer-events-none" />

        {/* Feedback Layer */}
        <AnimatePresence>
          {isCorrect !== null && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-50 flex flex-col items-center justify-center text-white space-y-6 shadow-inner ${
                isCorrect ? 'bg-amber-500/90 backdrop-blur-md' : 'bg-stone-900/50 backdrop-blur-md pointer-events-none'
              }`}
              style={{ transform: 'translateZ(100px)' }}
            >
              {isCorrect ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                     <Sparkles className="w-32 h-32 text-white" />
                  </motion.div>
                  <h3 className="text-4xl sm:text-8xl font-black italic uppercase drop-shadow-2xl tracking-tighter">ՃԻՇՏ Է!</h3>
                  <p className="text-lg sm:text-xl font-bold uppercase tracking-widest bg-stone-900/20 px-6 py-2 rounded-full">{currentChallenge.reason}</p>
                </>
              ) : (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-rose-600 p-8 sm:p-12 rounded-[40px] shadow-2xl border-4 border-rose-400 space-y-4 sm:space-y-6 max-w-md mx-4"
                >
                  <div className="flex items-center justify-center gap-4">
                    <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12" />
                    <h3 className="text-2xl sm:text-5xl font-black italic uppercase leading-none">ՍԽԱԼ Է</h3>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80">ԷՌՆԵՍՏՈՆ ՈՒՂՂՈՒՄ Է`</p>
                    <p className="text-4xl sm:text-7xl font-black uppercase text-amber-300 drop-shadow-md">{currentChallenge.correctAnswer}</p>
                    <p className="text-xs sm:text-sm font-bold opacity-80 uppercase tracking-widest pt-4">{currentChallenge.reason}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6 relative" style={{ transform: 'translateZ(50px)' }}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] bg-stone-900 text-amber-500 shadow-xl">
             <MapIcon className="w-4 h-4" /> ՔԱՐՏԵԶԻ ԳԱՂՏՆԱԳԻՐ
          </div>
          <h2 className="text-2xl sm:text-7xl font-black text-stone-900 italic uppercase tracking-tighter leading-tight mb-4 break-words">
             {currentChallenge.sentence}
          </h2>
          <div className="h-1 sm:h-2 w-32 sm:w-48 bg-amber-500/10 mx-auto rounded-full" />
          <p className="text-stone-400 font-black italic text-lg sm:text-2xl uppercase tracking-widest mt-6 leading-tight">
            {currentChallenge.translation}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-10 px-0" style={{ transform: 'translateZ(30px)' }}>
          {shuffledOptions.map((opt, i) => {
             const isSelected = selectedOption === opt;
             const showsError = isCorrect === false && isSelected;

             return (
               <motion.button
                 key={i}
                 whileHover={{ 
                    scale: 1.05,
                    translateZ: 50,
                    boxShadow: "0 40px 80px -10px rgba(0,0,0,0.2)"
                 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => handleAnswer(opt)}
                 className={`p-6 sm:p-12 rounded-[32px] sm:rounded-[56px] text-2xl sm:text-6xl font-black border-4 transition-all uppercase italic tracking-tighter ${
                   showsError 
                    ? 'bg-rose-600 text-white border-rose-400 shadow-[0_12px_0_0_#9f1239]' 
                    : 'bg-stone-900 text-amber-400 border-stone-800 shadow-[0_12px_0_0_#1c1917]'
                 } hover:shadow-[0_6px_0_0_#1c1917] hover:translate-y-[6px]`}
                 style={{ transformStyle: 'preserve-3d' }}
               >
                 {opt}
               </motion.button>
             );
          })}
        </div>
      </motion.div>

      <div className="text-center text-[10px] font-black text-amber-800/40 uppercase tracking-[0.6em] flex items-center justify-center gap-3">
         <Compass className="w-4 h-4" /> ՔԱՐՏԵԶԸ ՏԱՆՈՒՄ Է ԴԵՊԻ ԳԱՆՁ <Compass className="w-4 h-4" />
      </div>
    </div>
  );
}
