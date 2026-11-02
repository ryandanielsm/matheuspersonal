import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './Logo';

interface HeaderProps {
  showThemeToggle?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showThemeToggle = true }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="relative w-full pt-1 pb-3 flex items-center justify-between">
      {/* Espaçador à esquerda para manter a logo rigorosamente centralizada */}
      <div className="w-9" />

      {/* Logo Centralizada (Branca no Dark Mode, Vermelha no Light Mode) */}
      <div className="flex-1 flex justify-center">
        <Logo size="header" variant={isDark ? 'white' : 'red'} />
      </div>

      {/* Botão de Alternância de Tema no Canto Superior Direito */}
      <div className="w-9 flex justify-end">
        {showThemeToggle && (
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm cursor-pointer ${
              isDark
                ? 'bg-white text-[#082D44] hover:bg-zinc-100'
                : 'bg-[#082D44] text-white hover:bg-[#051c2c]'
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-500 fill-amber-500" />
            ) : (
              <Moon className="w-3.5 h-3.5 fill-white text-white" />
            )}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
