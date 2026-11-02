import React, { useState } from 'react';
import type { StudentCase } from '../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface StudentCardProps {
  student: StudentCase;
  onSelect: (student: StudentCase) => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, onSelect }) => {
  const [viewMode, setViewMode] = useState<'antes' | 'depois'>('depois');
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden card-hover-effect shadow-md border transition-all ${
        isLight
          ? 'bg-white border-zinc-200'
          : 'bg-[#181a1f] border-zinc-800'
      }`}
    >
      {/* 161x281 Proportion Container */}
      <div
        className="relative w-full overflow-hidden cursor-pointer"
        style={{ aspectRatio: '161 / 281' }}
        onClick={() => onSelect(student)}
      >
        <img
          src={viewMode === 'depois' ? student.afterImage : student.beforeImage}
          alt={`${student.name} - ${viewMode}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />

        {/* Floating Quick Toggle Pill (Antes / Depois) */}
        <div
          className="absolute top-2.5 right-2.5 z-20 flex p-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setViewMode('antes')}
            className={`px-2 py-0.5 rounded-full font-inter text-[10px] font-bold transition-all ${
              viewMode === 'antes'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            Antes
          </button>
          <button
            type="button"
            onClick={() => setViewMode('depois')}
            className={`px-2 py-0.5 rounded-full font-inter text-[10px] font-bold transition-all ${
              viewMode === 'depois'
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            Depois
          </button>
        </div>

        {/* Hover inspect hint overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-sm text-white font-inter text-xs font-semibold flex items-center gap-1 shadow-lg">
            Ver detalhes <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="p-3">
        <div className="flex items-center justify-between gap-1 mb-1">
          <h3
            className={`font-nasalization text-sm font-bold truncate ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}
          >
            {student.name}
          </h3>
          <span className="font-inter text-[10px] font-semibold text-emerald-500 flex items-center gap-0.5">
            <Sparkles className="w-2.5 h-2.5" />
            {student.time}
          </span>
        </div>

        <p className="font-inter text-[11px] text-zinc-400 line-clamp-2 mb-2 leading-tight">
          "{student.testimonial}"
        </p>

        <button
          onClick={() => onSelect(student)}
          type="button"
          className="w-full py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-white font-inter text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
        >
          <span>Análise Completa</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

