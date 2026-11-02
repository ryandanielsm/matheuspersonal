import React from 'react';
import bannerImg from '../assets/banner.png';

interface HeroCardProps {
  className?: string;
}

export const HeroCard: React.FC<HeroCardProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full rounded-[26px] overflow-hidden shadow-xl border border-white/10 select-none ${className}`}
      style={{
        aspectRatio: '1364 / 1816',
      }}
    >
      {/* Background Banner Artwork */}
      <img
        src={bannerImg}
        alt="Personal Matheus Henrique"
        className="w-full h-full object-cover object-top"
        loading="eager"
      />

      {/* Subtle top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none" />

      {/* Overlay with Hero Typography in Nasalization & Inter */}
      <div className="absolute inset-x-0 bottom-0 pt-16 pb-6 px-4 bg-gradient-to-t from-[#820712]/95 via-[#920916]/75 to-transparent flex flex-col items-center text-center">
        <span className="font-inter text-[11px] sm:text-xs font-medium text-white/95 tracking-wide">
          Construa a sua
        </span>

        <h1 className="font-nasalization text-3xl sm:text-4xl font-bold text-white tracking-widest my-1 drop-shadow-md">
          ROTINA
        </h1>

        <p className="font-inter text-[10px] sm:text-[11px] font-normal text-white/90 max-w-[250px] leading-snug">
          de treinos e dieta com o Personal Matheus Henrique
        </p>
      </div>
    </div>
  );
};
