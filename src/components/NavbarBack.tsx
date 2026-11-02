import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './Logo';

interface NavbarBackProps {
  title?: string;
  fallbackPath?: string;
}

export const NavbarBack: React.FC<NavbarBackProps> = ({
  title,
  fallbackPath = '/',
}) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  const handleBack = () => {
    window.scrollTo(0, 0);
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <nav className="w-full flex items-center justify-between py-3 mb-4 border-b transition-colors duration-300 border-zinc-200/20">
      {/* Back Button */}
      <button
        onClick={handleBack}
        type="button"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-inter text-xs font-semibold card-hover-effect transition-all ${
          isLight
            ? 'bg-zinc-200/80 text-zinc-800 hover:bg-zinc-300'
            : 'bg-zinc-800/80 text-zinc-200 hover:bg-zinc-700'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar</span>
      </button>

      {/* Center Title or Small Logo */}
      <div className="flex-1 flex justify-center px-2">
        {title ? (
          <h1
            className={`font-nasalization text-sm sm:text-base font-bold tracking-wide truncate ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}
          >
            {title}
          </h1>
        ) : (
          <Logo size="sm" showSubtitle={false} />
        )}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        type="button"
        aria-label="Alternar tema"
        className={`w-8 h-8 rounded-full flex items-center justify-center card-hover-effect transition-all border ${
          isLight
            ? 'bg-white border-zinc-300 text-zinc-800'
            : 'bg-zinc-800 border-zinc-700 text-zinc-200'
        }`}
      >
        {isLight ? (
          <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        ) : (
          <Moon className="w-3.5 h-3.5 fill-zinc-200" />
        )}
      </button>
    </nav>
  );
};

