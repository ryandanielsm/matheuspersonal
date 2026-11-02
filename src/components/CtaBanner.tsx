import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const CtaBanner: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isLight = theme === 'light';

  return (
    <section className="relative w-full mt-12 sm:mt-16 mb-14 sm:mb-16 px-1 sm:px-2 select-none">
      <div className="flex items-stretch justify-between gap-5 sm:gap-7">
        {/* Left Text Block */}
        <div className="flex-1 pr-1">
          <h2
            className={`font-nasalization text-2xl sm:text-[30px] font-normal tracking-wide leading-tight transition-colors duration-300 ${
              isLight ? 'text-[#BA1015]' : 'text-white'
            }`}
          >
            Vem pro time!
          </h2>

          <p
            className={`font-inter text-xs sm:text-[13px] font-normal leading-relaxed mt-2.5 mb-4 max-w-[270px] transition-colors duration-300 ${
              isLight ? 'text-zinc-700' : 'text-zinc-300'
            }`}
          >
            Dê o primeiro passo e transforme a sua rotina com o meu acompanhamento diário.
          </p>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/formulario');
            }}
            type="button"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full font-inter text-xs sm:text-sm font-semibold text-white bg-[#0A2738] hover:bg-[#061B27] card-hover-effect shadow-md shadow-black/20 cursor-pointer transition-all"
          >
            Quero ser aluno
          </button>
        </div>

        {/* Right Vertical Accent Divider (Tall, elegant, stretched) */}
        <div className="flex items-center justify-center pl-1 sm:pl-2">
          <div className="w-[3px] rounded-full h-full min-h-[110px] sm:min-h-[125px] transition-colors duration-300 bg-[#BA1015]" />
        </div>
      </div>
    </section>
  );
};
