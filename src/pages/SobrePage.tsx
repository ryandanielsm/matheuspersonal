import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import iconSobremim from '../assets/icon-sobremim.png';

export const SobrePage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Garante scroll automático para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <PageContainer noPadding className="animate-page-enter">
      <div className="px-4 pt-3 pb-8 flex flex-col flex-1">
        {/* ==================================================================== */}
        {/* 1. HEADER: LOGO CENTRALIZADA E ALTERNADOR DE TEMA NO CANTO           */}
        {/* ==================================================================== */}
        <Header />

        {/* ==================================================================== */}
        {/* 2. BOTÃO VOLTAR (< Voltar)                                           */}
        {/* ==================================================================== */}
        <div className="pt-1 pb-4">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/');
            }}
            type="button"
            className={`inline-flex items-center gap-1 font-inter text-xs font-medium cursor-pointer transition-colors ${
              isDark ? 'text-[#F5F5F5] hover:text-white' : 'text-zinc-700 hover:text-zinc-950'
            }`}
          >
            <span className="text-sm font-semibold">&lt;</span>
            <span>Voltar</span>
          </button>
        </div>

        {/* ==================================================================== */}
        {/* 3. HERO "QUEM É O MATHEUS?": DUAS COLUNAS (TEXTO + AVATAR)          */}
        {/* ==================================================================== */}
        <section className="mt-1 mb-5">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Coluna da Esquerda: Título, Subtítulo e Barras */}
            <div className="flex-1 min-w-0 pr-1 max-w-[285px] sm:max-w-[310px]">
              <h1
                className={`font-nasalization italic font-normal tracking-wide text-[27px] sm:text-[31px] leading-[1.08] transition-colors ${
                  isDark ? 'text-white' : 'text-[#BA1015]'
                }`}
              >
                Quem é o<br />Matheus?
              </h1>

              <p
                className={`font-inter text-xs sm:text-[12.5px] leading-relaxed mt-2.5 text-left transition-colors ${
                  isDark ? 'text-[#D0D0D0]' : 'text-zinc-700'
                }`}
              >
                Conheça minha história, minha base de estudos na Educação Física e como funciona o meu acompanhamento para transformar o seu físico com segurança e constância.
              </p>

              {/* Detalhe Visual das Duas Barrinhas (Divisor Horizontal) */}
              <div className="flex items-center gap-2 mt-3.5">
                {/* Primeira barra: menor, azul escuro no Light e azul claro no Dark */}
                <div
                  className={`h-1 w-14 sm:w-16 rounded-full transition-colors ${
                    isDark ? 'bg-[#4A89B0]' : 'bg-[#082D44]'
                  }`}
                />
                {/* Segunda barra: maior, vermelha em ambos os modos */}
                <div className="h-1 w-24 sm:w-28 rounded-full bg-[#BA1015]" />
              </div>
            </div>

            {/* Coluna da Direita: Ilustração Oficial Matheus (icon-sobremim.png) */}
            <div className="w-[28%] max-w-[105px] min-w-[85px] flex-shrink-0 flex items-center justify-end select-none">
              <img
                src={iconSobremim}
                alt="Matheus Henrique ilustrado piscando"
                className="w-full h-auto object-contain drop-shadow-sm pointer-events-none"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 4. CORPO DE TEXTO: 3 PARÁGRAFOS COM NEGRITOS EXATOS                  */}
        {/* ==================================================================== */}
        <div className="space-y-4 sm:space-y-5 pb-8 sm:pb-12 text-left select-text max-w-[315px] sm:max-w-[330px]">
          {/* Parágrafo 1 */}
          <p
            className={`font-inter text-xs sm:text-[12.5px] leading-[1.65] text-left transition-colors ${
              isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'
            }`}
          >
            Meu nome é{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              Matheus Henrique Mendes
            </strong>
            , tenho{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              28 anos
            </strong>
            , moro atualmente em{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              Fortaleza
            </strong>{' '}
            e sou{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              estudante de Educação Física
            </strong>
            . A musculação e o treinamento físico fazem parte da minha rotina há muitos anos, uma jornada intensa na qual construí meus próprios resultados na prática, errando, acertando e entendendo no dia a dia o que realmente funciona. Hoje, busco unir toda essa vivência de academia com a base científica da minha formação acadêmica.
          </p>

          {/* Parágrafo 2 */}
          <p
            className={`font-inter text-xs sm:text-[12.5px] leading-[1.65] text-left transition-colors ${
              isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'
            }`}
          >
            Para isso, estou em{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              busca de pessoas
            </strong>{' '}
            interessadas em participar dessa iniciativa,{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              contribuindo
            </strong>{' '}
            com informações sobre seus objetivos, hábitos e experiências no ambiente de academia. Quem já faz parte desse plano de estudos comigo tem alcançado resultados excelentes, justamente porque o foco vai muito além do básico: entrego um atendimento de excelência e um acompanhamento próximo, decente e atento à rotina de cada um, promovendo trocas de conhecimento que aceleram a evolução de forma segura e consistente.
          </p>

          {/* Parágrafo 3 */}
          <p
            className={`font-inter text-xs sm:text-[12.5px] leading-[1.65] text-left transition-colors ${
              isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'
            }`}
          >
            Se você gosta de musculação,{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              busca transformar
            </strong>{' '}
            seus{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              resultados
            </strong>{' '}
            e quer fazer{' '}
            <strong className={isDark ? 'text-white font-bold' : 'text-zinc-950 font-bold'}>
              parte de um projeto
            </strong>{' '}
            sério e com suporte dedicado, você será muito bem-vindo! Vamos aprender, compartilhar conhecimento e evoluir juntos.
          </p>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 5. FOOTER OFICIAL COM AUTO-INVERSÃO LIGHT/DARK                       */}
      {/* ==================================================================== */}
      <Footer />
    </PageContainer>
  );
};

export default SobrePage;

