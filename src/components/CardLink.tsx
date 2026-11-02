import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CardLinkProps {
  title: string;
  subtitle: string;
  actionText: string;
  path: string;
  bgColor: string;
  accentShadow?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export const CardLink: React.FC<CardLinkProps> = ({
  title,
  subtitle,
  actionText,
  path,
  bgColor,
  accentShadow = '',
  imageSrc,
  imageAlt,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      className={`relative w-full rounded-[22px] cursor-pointer card-hover-effect select-none overflow-hidden text-white shadow-lg transition-transform ${accentShadow} ${className}`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {/* 
        Full-Bleed Image on the Right:
        Glued to top: 0, bottom: 0, right: 0 (height: 100%).
      */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute right-0 top-0 bottom-0 h-full w-auto object-cover object-right pointer-events-none select-none z-0"
        loading="lazy"
      />

      {/* 
        Ajuste Fino 1: Sombra de Transição Suave (Efeito Imagem "Surgindo"):
        Overlay de linear-gradient sobre a borda esquerda da imagem que vai de 100% da cor
        sólida do card para transparente em direção à direita, eliminando qualquer linha dura.
      */}
      <div
        className="absolute inset-y-0 right-0 w-[60%] sm:w-[56%] pointer-events-none z-[1]"
        style={{
          background: `linear-gradient(to right, ${bgColor} 0%, ${bgColor} 20%, ${bgColor}b3 42%, transparent 100%)`,
        }}
      />

      {/* 
        Left Text Column:
        60% to 65% width with natural line breaks (no truncation), z-10 above the gradient.
      */}
      <div className="relative z-10 w-[60%] sm:w-[65%] flex flex-col justify-between py-4 pl-4 sm:pl-5 pr-1 min-h-[128px] sm:min-h-[136px]">
        <div>
          {/* Title in Nasalization without forced uppercase */}
          <h2 className="font-nasalization text-lg sm:text-[20px] font-normal tracking-wide text-white drop-shadow-sm leading-snug">
            {title}
          </h2>

          {/* Subtitle with natural line break without truncation */}
          <p className="font-inter text-[11px] sm:text-xs text-white/90 font-normal leading-relaxed mt-1.5 mb-2.5">
            {subtitle}
          </p>
        </div>

        {/* Action link in gentle italic as in reference design */}
        <div className="pt-0.5">
          <span className="inline-flex items-center gap-1 font-inter italic text-[11px] sm:text-xs font-medium text-white/95 group">
            <span>{actionText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 not-italic" />
          </span>
        </div>
      </div>
    </div>
  );
};
