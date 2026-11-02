import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

// Imagens de Antes e Depois (Transformações)
import aluno1 from '../assets/aluno1.png';
import aluno2 from '../assets/aluno2.png';
import aluno3 from '../assets/aluno3.png';

// Avatares ilustrados para os depoimentos
import dep1 from '../assets/dep1.png';
import dep2 from '../assets/dep2.png';
import dep3 from '../assets/dep3.png';
import dep4 from '../assets/dep4.png';

interface TransformationCard {
  id: string;
  image: string;
  alt: string;
  time: string;
  type: string;
  gradient: string;
}

const TRANSFORMATIONS: TransformationCard[] = [
  {
    id: 't1',
    image: aluno1,
    alt: 'Transformação 30 dias - Consultoria Presencial',
    time: '30 dias',
    type: 'Consultoria Presencial',
    gradient: 'linear-gradient(to top, #082D44 0%, rgba(8, 45, 68, 0.88) 35%, transparent 68%)',
  },
  {
    id: 't2',
    image: aluno2,
    alt: 'Transformação 30 dias - Consultoria Online',
    time: '30 dias',
    type: 'Consultoria Online',
    gradient: 'linear-gradient(to top, #BA1015 0%, rgba(186, 16, 21, 0.88) 35%, transparent 68%)',
  },
  {
    id: 't3',
    image: aluno3,
    alt: 'Transformação 45 dias - Consultoria Online',
    time: '45 dias',
    type: 'Consultoria Online',
    gradient: 'linear-gradient(to top, #082D44 0%, rgba(8, 45, 68, 0.88) 35%, transparent 68%)',
  },
];

interface TestimonialCard {
  id: string;
  name: string;
  subtitle: string;
  tags: string[];
  avatar: string;
  cardBg: string;
  avatarBg: string;
  tagBg: string;
  content: React.ReactNode;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    id: 'dep-1',
    name: 'Ryan Daniel',
    subtitle: 'Consultoria online',
    tags: ['Hipertrofia', 'Definição'],
    avatar: dep1,
    cardBg: '#082D44',
    avatarBg: '#BA1015',
    tagBg: '#BA1015',
    content: (
      <>
        "Eu sempre pagava academia e desistia no primeiro mês porque me sentia perdido.
        Depois que comecei o acompanhamento com o Matheus, o treino passou a fazer sentido
        para a minha rotina. Já se foram 6kg e hoje não falto mais!"
      </>
    ),
  },
  {
    id: 'dep-2',
    name: 'Luan Oliveira',
    subtitle: 'Consultoria presencial',
    tags: ['Hipertrofia', 'Definição'],
    avatar: dep2,
    cardBg: '#BA1015',
    avatarBg: '#082D44',
    tagBg: '#082D44',
    content: (
      <>
        "Treinava há quase <strong className="text-white font-semibold">2 anos sozinho</strong> e
        meu físico <strong className="text-white font-semibold">estava estagnado</strong>. Logo
        nos primeiros <strong className="text-white font-semibold">30 dias</strong> ajustando a
        execução dos exercícios e a divisão de treino com o Matheus,{' '}
        <strong className="text-white font-semibold">tive uma mudança absurda</strong> de volume
        muscular e densidade que nunca consegui antes."
      </>
    ),
  },
  {
    id: 'dep-3',
    name: 'Gabriel Costa',
    subtitle: 'Consultoria online',
    tags: ['Condicionamento'],
    avatar: dep3,
    cardBg: '#082D44',
    avatarBg: '#BA1015',
    tagBg: '#BA1015',
    content: (
      <>
        "Trabalho o dia todo e achava que precisava morar na academia para ter resultado.
        O Matheus montou um treino de 45 minutos super intenso e direto ao ponto. Consegui secar
        e ganhar massa mesmo com a rotina puxada."
      </>
    ),
  },
  {
    id: 'dep-4',
    name: 'Felipe Mendes',
    subtitle: 'Consultoria online',
    tags: ['Fortalecimento'],
    avatar: dep4,
    cardBg: '#BA1015',
    avatarBg: '#082D44',
    tagBg: '#082D44',
    content: (
      <>
        "Tinha muito medo de pegar peso por causa de dores antigas no joelho e na lombar.
        O cuidado dele em adaptar cada exercício me devolveu a confiança. Hoje treino pesado,
        sem sentir nenhuma dor e com o corpo muito mais firme."
      </>
    ),
  },
];

export const AlunosPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Garante que a página sempre role automaticamente para o topo ao carregar
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
        {/* 3. TÍTULO PRINCIPAL E SUBTÍTULO                                       */}
        {/* ==================================================================== */}
        <div className="mb-7">
          <h1
            className={`font-nasalization text-[22px] sm:text-[26px] font-normal leading-tight tracking-tight transition-colors ${
              isDark ? 'text-[#F5F5F5]' : 'text-zinc-900'
            }`}
          >
            Transformações reais de<br />quem decidiu começar
          </h1>

          <p
            className={`font-inter text-xs leading-relaxed mt-2.5 max-w-[370px] transition-colors ${
              isDark ? 'text-[#D0D0D0]' : 'text-zinc-600'
            }`}
          >
            Resultados construídos com constância, metodologia individualizada e acompanhamento próximo diário.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 4. SEÇÃO "ANTES E DEPOIS" (GALERIA DE EVOLUÇÃO)                      */}
        {/* ==================================================================== */}
        <section className="mb-9">
          <div className="mb-4">
            <h2
              className={`font-nasalization text-xl sm:text-[22px] font-normal tracking-wide transition-colors ${
                isDark ? 'text-white' : 'text-[#BA1015]'
              }`}
            >
              Antes e Depois
            </h2>
            <p
              className={`font-inter text-xs leading-relaxed mt-1 transition-colors ${
                isDark ? 'text-[#D0D0D0]' : 'text-zinc-600'
              }`}
            >
              Evoluções reais de quem colocou o plano em prática.
            </p>
          </div>

          {/* 3 Cards Verticais de Transformação */}
          <div className="flex flex-col gap-5">
            {TRANSFORMATIONS.map((card) => (
              <div
                key={card.id}
                className="relative w-full rounded-[20px] overflow-hidden shadow-lg select-none group"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />

                {/* Overlay degradê na base com texto */}
                <div
                  className="absolute inset-x-0 bottom-0 pt-20 pb-5 px-4 flex flex-col items-center justify-end text-center pointer-events-none"
                  style={{
                    background: card.gradient,
                  }}
                >
                  <span className="font-nasalization text-[22px] sm:text-2xl text-white tracking-wide leading-tight">
                    {card.time}
                  </span>
                  <span className="font-inter text-xs text-white/90 font-medium mt-0.5">
                    {card.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 5. SEÇÃO "DEPOIMENTOS" (CARDS DE AVALIAÇÕES)                         */}
        {/* ==================================================================== */}
        <section className="mb-6">
          <div className="mb-4">
            <h2
              className={`font-nasalization text-xl sm:text-[22px] font-normal tracking-wide transition-colors ${
                isDark ? 'text-white' : 'text-[#BA1015]'
              }`}
            >
              Depoimentos
            </h2>
            <p
              className={`font-inter text-xs leading-relaxed mt-1 transition-colors ${
                isDark ? 'text-[#D0D0D0]' : 'text-zinc-600'
              }`}
            >
              O que dizem os alunos que treinam comigo todos os dias.
            </p>
          </div>

          {/* Lista de 4 Cards de Depoimentos Alternando Cores */}
          <div className="flex flex-col gap-3.5">
            {TESTIMONIALS.map((dep) => (
              <div
                key={dep.id}
                className="rounded-[14px] p-4 text-white shadow-md relative flex flex-col justify-between"
                style={{ backgroundColor: dep.cardBg }}
              >
                <div className="flex items-start gap-3">
                  {/* Círculo do Avatar Ilustrado */}
                  <div
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex-shrink-0 flex items-center justify-center p-1 overflow-hidden shadow-inner"
                    style={{ backgroundColor: dep.avatarBg }}
                  >
                    <img
                      src={dep.avatar}
                      alt={dep.name}
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </div>

                  {/* Informações do Aluno e Tags */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-nasalization text-sm sm:text-base font-normal tracking-wide text-white leading-tight">
                      {dep.name}
                    </h3>
                    <p className="font-inter text-[11px] text-white/80 mt-0.5">
                      {dep.subtitle}
                    </p>

                    {/* Tags / Pílulas */}
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {dep.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-inter text-[10px] font-medium px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: dep.tagBg }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Texto do Depoimento */}
                <p className="font-inter text-[11px] sm:text-xs leading-relaxed text-white/95 mt-3">
                  {dep.content}
                </p>

                {/* 5 Estrelas Brancas na Parte Inferior Direita */}
                <div className="flex justify-end items-center mt-2.5 pt-0.5 text-white text-xs sm:text-sm tracking-widest select-none font-bold">
                  ★★★★★
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 6. BLOCO FINAL DE CHAMADA PARA AÇÃO (CTA)                            */}
        {/* ==================================================================== */}
        <section className="my-10 sm:my-12 flex flex-col items-start select-none">
          <h2
            className={`font-nasalization text-xl sm:text-[23px] font-normal tracking-wide leading-tight transition-colors ${
              isDark ? 'text-white' : 'text-[#BA1015]'
            }`}
          >
            Se inspirou?<br />O próximo resultado pode ser o seu!
          </h2>

          <p
            className={`font-inter text-xs leading-relaxed mt-2.5 max-w-[340px] transition-colors ${
              isDark ? 'text-[#D0D0D0]' : 'text-zinc-600'
            }`}
          >
            Preencha o formulário rápido de avaliação e venha transformar a sua rotina com o meu acompanhamento diário.
          </p>

          <div className="mt-5">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/formulario');
              }}
              type="button"
              className={`px-8 py-3 rounded-full font-inter text-xs sm:text-sm font-semibold shadow-md active:scale-95 cursor-pointer transition-all ${
                isDark
                  ? 'bg-white text-[#BA1015] hover:bg-zinc-100 font-bold shadow-black/40'
                  : 'bg-[#082D44] text-white hover:bg-[#051C2C]'
              }`}
            >
              Quero ser aluno
            </button>
          </div>
        </section>
      </div>

      {/* Footer Padrão com Suporte Completo ao Dark/Light Mode */}
      <Footer />
    </PageContainer>
  );
};

export default AlunosPage;
