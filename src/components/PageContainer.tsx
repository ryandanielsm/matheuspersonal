import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  noPadding = false,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-[100dvh] w-full flex justify-center items-start md:py-10 transition-colors duration-300 antialiased selection:bg-red-600 selection:text-white ${
        isDark ? 'bg-[#181818] md:bg-[#0A0A0A]' : 'bg-[#F4F4F0] md:bg-[#DCDCD6]'
      }`}
    >
      {/* 
        Central Floating Card Container (Desktop App Mockup / Mobile Native):
        - 100% full width on mobile devices (< 768px)
        - Floating card with border-radius 32px, box-shadow, and margins on desktop (>= 768px)
      */}
      <main
        className={`app-container relative flex flex-col transition-colors duration-300 ${
          isDark
            ? 'bg-[#181818] text-white md:border md:border-white/10'
            : 'bg-[#F4F4F0] text-zinc-900 md:border md:border-black/5'
        } ${noPadding ? '' : 'px-4 py-6'} ${className}`}
      >
        {children}
      </main>
    </div>
  );
};
