import React from 'react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  variant?: 'auto' | 'dark-bg' | 'light-bg';
}

export const Footer: React.FC<FooterProps> = ({ variant = 'auto' }) => {
  const { theme } = useTheme();

  // No modo escuro: rodapé claro (#F4F4F0) com logo escura
  // No modo claro: rodapé azul escuro (#0B2335) com logo branca
  const isLightFooter = variant === 'light-bg' || (variant === 'auto' && theme === 'dark');

  return (
    <footer
      className={`w-full mt-auto pt-10 pb-10 sm:pb-8 px-4 rounded-t-[44px] rounded-b-none flex flex-col items-center justify-center text-center transition-colors duration-300 relative z-10 -mb-[1px] ${
        isLightFooter
          ? 'bg-[#F4F4F0] text-[#082D44]'
          : 'bg-[#0B2335] text-zinc-300'
      }`}
    >
      {/* Brand Monogram */}
      <Logo
        size="footer"
        variant={isLightFooter ? 'black' : 'white'}
        className="mb-4"
      />

      {/* Copyright text matching Figma prototype */}
      <div
        className={`font-inter text-[11px] leading-relaxed space-y-1 mt-1 ${
          isLightFooter ? 'text-zinc-700/80' : 'text-zinc-300/80'
        }`}
      >
        <p>© 2025 Matheus Henrique. Todos os direitos reservados.</p>
        <p className="opacity-70 text-[10px]">Desenvolvido por Ryan Daniel ®</p>
      </div>
    </footer>
  );
};
