import React, { useState, useRef } from 'react';
import type { StudentCase } from '../types';
import { X, CheckCircle, ArrowRight, Dumbbell, Award, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface StudentDetailModalProps {
  student: StudentCase | null;
  onClose: () => void;
}

export const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  student,
  onClose,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  if (!student) return null;

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-page-enter">
      <div
        className="relative w-full max-w-[410px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#14161b] text-white border border-zinc-800 shadow-2xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar"
          className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Title */}
        <div className="mb-3 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/20 text-red-400 font-inter text-[11px] font-semibold mb-1">
            <Flame className="w-3.5 h-3.5" />
            <span>{student.category} • {student.time}</span>
          </div>
          <h2 className="font-nasalization text-xl font-bold tracking-wide">
            {student.name}
          </h2>
          <p className="font-inter text-xs text-zinc-400 mt-0.5">
            {student.summary}
          </p>
        </div>

        {/* Interactive Comparison Split Slider (161x281 Proportional) */}
        <div className="relative my-3 rounded-2xl overflow-hidden select-none border border-zinc-700/80 shadow-lg">
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden cursor-ew-resize"
            style={{ aspectRatio: '161 / 281' }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Background Image: AFTER */}
            <img
              src={student.afterImage}
              alt="Depois"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Clipped Top Image: BEFORE */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={student.beforeImage}
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current?.offsetWidth || '100%' }}
              />
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-zinc-900 shadow-md flex items-center justify-center font-bold text-[10px]">
                ↔
              </div>
            </div>

            {/* Interactive hint badges */}
            <div className="absolute bottom-3 left-3 z-10 px-2 py-0.5 rounded bg-black/60 text-[10px] font-bold text-red-400 border border-red-500/30">
              ANTES
            </div>
            <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded bg-black/60 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
              DEPOIS
            </div>
          </div>
          <p className="text-center font-inter text-[10px] text-zinc-400 py-1 bg-black/40">
            Arraste para comparar Antes e Depois
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 my-3">
          <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-inter uppercase">Peso Corporal</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-semibold text-zinc-400">{student.beforeWeight}</span>
              <span className="text-xs text-zinc-500">→</span>
              <span className="text-base font-bold text-emerald-400">{student.afterWeight}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-inter uppercase">Percentual de Gordura</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-semibold text-zinc-400">{student.beforeBf}</span>
              <span className="text-xs text-zinc-500">→</span>
              <span className="text-base font-bold text-emerald-400">{student.afterBf}</span>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 my-3">
          <p className="font-inter text-xs italic text-zinc-300 leading-relaxed">
            "{student.testimonial}"
          </p>
        </div>

        {/* Key Achievements */}
        <div className="my-3 space-y-1.5">
          <span className="font-inter text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Conquistas durante o acompanhamento:
          </span>
          <div className="space-y-1">
            {student.keyAchievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-300 font-inter">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            onClose();
            window.scrollTo(0, 0);
            navigate('/formulario');
          }}
          type="button"
          className="w-full mt-4 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-inter text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 card-hover-effect shadow-lg shadow-red-900/40"
        >
          <Dumbbell className="w-4 h-4" />
          <span>Quero Minha Evolução Também</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

