import React from 'react';
import { useTheme } from '../context/ThemeContext';
import logoBranca from '../assets/logo-branca.png';
import logoPreta from '../assets/logo-preta.png';
import logoVermelha from '../assets/logo-vermelha.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'header' | 'footer';
  variant?: 'auto' | 'white' | 'black' | 'red' | 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'auto',
  className = '',
}) => {
  const { theme } = useTheme();

  let logoSrc = logoBranca;
  if (variant === 'white') {
    logoSrc = logoBranca;
  } else if (variant === 'black') {
    logoSrc = logoPreta;
  } else if (variant === 'red') {
    logoSrc = logoVermelha;
  } else if (variant === 'dark') {
    // on a dark background, use white logo
    logoSrc = logoBranca;
  } else if (variant === 'light') {
    // on a light background, use red/black logo
    logoSrc = logoVermelha;
  } else {
    // auto based on current active theme
    logoSrc = theme === 'light' ? logoVermelha : logoBranca;
  }

  // Sizing tuned for strong visual prominence (Figma fidelity)
  let heightClass = 'h-14 sm:h-16';
  if (size === 'sm') {
    heightClass = 'h-9 sm:h-10';
  } else if (size === 'header') {
    heightClass = 'h-16 sm:h-20'; // Prominent header logo
  } else if (size === 'footer' || size === 'lg') {
    heightClass = 'h-20 sm:h-24'; // Bold, visible footer logo
  } else if (size === 'md') {
    heightClass = 'h-14 sm:h-16';
  }

  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Matheus Henrique"
        className={`${heightClass} w-auto object-contain transition-all duration-300 hover:scale-105 drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
};
