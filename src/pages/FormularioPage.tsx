import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { PageContainer } from '../components/PageContainer';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

// ============================================================================
// CONFIGURAÇÃO DO WHATSAPP DO MATHEUS
// Substitua o número abaixo pelo WhatsApp do Matheus com DDI (55) e DDD (85)
// ============================================================================
const WHATSAPP_NUMBER = '558494277261';

// Lista completa dos estados brasileiros para o select
const ESTADOS_BRASIL = [
  'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
  'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
  'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
  'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
  'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins',
];

// Estado tipado em TypeScript
export interface FormularioState {
  nome: string;
  idade: string;
  estado: string;
  genero: string;
  foco: string[];
  meta: string;
  formato: string;
  diasSemana: string;
  turno: string;
  tempoTreino: string;
  experiencia: string;
  pesoAltura: string;
  lesaoOpcao: string;
  lesaoQual: string;
  condicaoMedica: string;
  nutricao: string;
  dificuldades: string[];
  quandoComecar: string;
}

// 1. Estado Inicial Vazio: Nenhuma opção ou campo pré-selecionado
const initialFormState: FormularioState = {
  nome: '',
  idade: '',
  estado: '',
  genero: '',
  foco: [],
  meta: '',
  formato: '',
  diasSemana: '',
  turno: '',
  tempoTreino: '',
  experiencia: '',
  pesoAltura: '',
  lesaoOpcao: '',
  lesaoQual: '',
  condicaoMedica: '',
  nutricao: '',
  dificuldades: [],
  quandoComecar: '',
};

// Componente customizado para as opções circulares (Radio / Checkbox)
interface SelectorOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  isDark: boolean;
}

const SelectorOption: React.FC<SelectorOptionProps> = ({
  label,
  selected,
  onClick,
  isDark,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-2 cursor-pointer group py-0.5 select-none text-left"
  >
    {isDark ? (
      /* Dark Mode: Não selecionado = Círculo Branco (#FFFFFF). Selecionado = Círculo Vermelho (#BA1015) com ponto branco */
      <div
        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${selected
          ? 'border-2 border-[#BA1015] bg-[#BA1015]'
          : 'border border-white bg-white group-hover:scale-105'
          }`}
      >
        {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
      </div>
    ) : (
      /* Light Mode: Não selecionado = Borda cinza/bg branco. Selecionado = Azul Escuro (#082D44) com ponto branco */
      <div
        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${selected
          ? 'border-2 border-[#082D44] bg-[#082D44]'
          : 'border border-[#94A7B8] bg-white group-hover:border-[#082D44]'
          }`}
      >
        {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
      </div>
    )}

    <span
      className={`font-inter text-[11px] sm:text-xs transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-zinc-800'
        }`}
    >
      {label}
    </span>
  </button>
);

export const FormularioPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState<FormularioState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Garante que a página sempre rola para o topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Manipulador para seleção única
  const handleSingleSelect = (field: keyof FormularioState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // 3. Renderização Condicional do Campo "Qual?": limpa ao trocar para outra opção
  const handleLesaoSelect = (opcao: string) => {
    setFormData(prev => ({
      ...prev,
      lesaoOpcao: opcao,
      lesaoQual: opcao === 'Outra' ? prev.lesaoQual : '',
    }));
  };

  // Manipulador para multi-seleção (Foco)
  const handleToggleFoco = (item: string) => {
    setFormData(prev => {
      const exists = prev.foco.includes(item);
      const updated = exists ? prev.foco.filter(f => f !== item) : [...prev.foco, item];
      return { ...prev, foco: updated };
    });
  };

  // Manipulador para multi-seleção (Dificuldades)
  const handleToggleDificuldade = (item: string) => {
    setFormData(prev => {
      const exists = prev.dificuldades.includes(item);
      const updated = exists
        ? prev.dificuldades.filter(d => d !== item)
        : [...prev.dificuldades, item];
      return { ...prev, dificuldades: updated };
    });
  };

  // Envio e redirecionamento dinâmico para a API do WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#082D44', '#C81D25', '#5893B5', '#ffffff'],
      });
    } catch {
      // ignore
    }

    // Preparação dos dados para o novo modelo de mensagem do WhatsApp
    const nome = formData.nome.trim() || 'Não informado';
    const idade = formData.idade.trim() || 'Não informado';
    const estado = formData.estado || 'Não informado';
    const genero = formData.genero || 'Não informado';
    const foco = formData.foco.length > 0 ? formData.foco.join(', ') : 'Não informado';
    const meta = formData.meta.trim();
    const formato = formData.formato || 'Não informado';
    const diasSemana = formData.diasSemana || 'Não informado';
    const turno = formData.turno || 'Não informado';
    const tempoTreino = formData.tempoTreino || 'Não informado';
    const experiencia = formData.experiencia || 'Não informado';
    const pesoAltura = formData.pesoAltura.trim() || 'Não informado';
    const lesaoOpcao = formData.lesaoOpcao || 'Nenhuma';
    const lesaoQual = formData.lesaoOpcao === 'Outra' ? formData.lesaoQual.trim() : '';
    const condicaoMedica = formData.condicaoMedica.trim();
    const nutricao = formData.nutricao || 'Não informado';
    const dificuldades = formData.dificuldades.length > 0 ? formData.dificuldades.join(', ') : 'Não informado';
    const quandoComecar = formData.quandoComecar || 'Não informado';

    const mensagem = `Fala, Matheus! Tudo bem? Acabei de preencher o formulário lá na sua página porque tenho interesse em entrar para o seu acompanhamento e evoluir meus resultados nos treinos.

Segue abaixo o meu formulário preenchido para você avaliar o meu perfil:

RESUMO DO FORMULÁRIO:

• Nome: ${nome}
• Idade: ${idade}
• Estado: ${estado}
• Gênero: ${genero}
• Foco principal: ${foco}
• Meta ou prazo específico: ${meta || 'Não informado'}
• Formato que procuro: ${formato}
• Dias de treino na semana: ${diasSemana}
• Turno de treino: ${turno}
• Tempo disponível por treino: ${tempoTreino}
• Nível de experiência: ${experiencia}
• Peso e Altura: ${pesoAltura}
• Dor articular ou lesão: ${lesaoOpcao}${lesaoQual ? ` (${lesaoQual})` : ''}
• Condição médica/restrição: ${condicaoMedica || 'Nenhuma'}
• Faz dieta/acompanhamento nutricional: ${nutricao}
• Maior dificuldade hoje: ${dificuldades}
• Quando pretende começar: ${quandoComecar}

Fico no aguardo para conversarmos sobre como funciona!`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagemCodificada}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <PageContainer noPadding className="animate-page-enter">
      <div className="px-4 pt-3 pb-8 flex flex-col flex-1">
        {/* ==================================================================== */}
        {/* 1. TOPO: LOGO CENTRALIZADA E ALTERNADOR DE TEMA NO CANTO             */}
        {/* ==================================================================== */}
        <Header />

        {/* ==================================================================== */}
        {/* BOTÃO VOLTAR (< Voltar)                                             */}
        {/* ==================================================================== */}
        <div className="pt-1 pb-4">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/');
            }}
            type="button"
            className={`inline-flex items-center gap-1 font-inter text-xs font-medium cursor-pointer transition-colors ${isDark ? 'text-[#F5F5F5] hover:text-white' : 'text-zinc-700 hover:text-zinc-950'
              }`}
          >
            <span className="text-sm font-semibold">&lt;</span>
            <span>Voltar</span>
          </button>
        </div>

        {/* ==================================================================== */}
        {/* TÍTULO PRINCIPAL E SUBTÍTULO                                         */}
        {/* ==================================================================== */}
        <div className="mb-6">
          <h1
            className={`font-nasalization text-[22px] sm:text-[26px] font-normal leading-tight tracking-tight transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-zinc-900'
              }`}
          >
            Vamos montar o seu<br />perfil de treino!
          </h1>

          <p
            className={`font-inter text-xs leading-relaxed mt-2.5 max-w-[370px] transition-colors ${isDark ? 'text-[#E0E0E0]' : 'text-zinc-700'
              }`}
          >
            Responda as perguntas rápidas abaixo sobre a{' '}
            <strong className={isDark ? 'text-white' : 'text-zinc-900'}>sua rotina</strong> e{' '}
            <strong className={isDark ? 'text-white' : 'text-zinc-900'}>objetivo</strong>. Leva{' '}
            <strong className={isDark ? 'text-white' : 'text-zinc-900'}>menos de 1 minuto</strong> e, no final, seu resumo vai
            direto para o meu WhatsApp para{' '}
            <strong className={isDark ? 'text-white' : 'text-zinc-900'}>conversarmos!</strong>
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 2. FORMULÁRIO COM TODOS OS CAMPOS NA ORDEM EXATA                     */}
        {/* ==================================================================== */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo 1: Nome completo */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Preencha seu nome completo"
              value={formData.nome}
              onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
              className="w-full bg-white border border-[#CFD9E0] rounded-[4px] px-3 py-2 text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#082D44] focus:ring-1 focus:ring-[#082D44] transition-all shadow-2xs"
            />
          </div>

          {/* Campo 2: Idade */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Idade
            </label>
            <input
              type="text"
              placeholder="Preencha sua idade"
              value={formData.idade}
              onChange={(e) => setFormData(prev => ({ ...prev, idade: e.target.value }))}
              className="w-full bg-white border border-[#CFD9E0] rounded-[4px] px-3 py-2 text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#082D44] focus:ring-1 focus:ring-[#082D44] transition-all shadow-2xs"
            />
          </div>

          {/* Campo 3: Qual estado mora */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Qual estado mora
            </label>
            <div className="relative">
              <select
                value={formData.estado}
                onChange={(e) => setFormData(prev => ({ ...prev, estado: e.target.value }))}
                className={`w-full bg-white border border-[#CFD9E0] rounded-[4px] px-3 py-2 text-xs sm:text-sm outline-none focus:border-[#082D44] focus:ring-1 focus:ring-[#082D44] transition-all appearance-none cursor-pointer shadow-2xs pr-8 ${formData.estado === '' ? 'text-zinc-400' : 'text-zinc-800'
                  }`}
              >
                <option value="" disabled>
                  Selecione o estado em que você mora
                </option>
                {ESTADOS_BRASIL.map((uf) => (
                  <option key={uf} value={uf} className="text-zinc-800">
                    {uf}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Campo 4: Gênero */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Gênero
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {['Homem', 'Mulher', 'Não-binário', 'Prefiro não responder'].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.genero === opt}
                  onClick={() => handleSingleSelect('genero', opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 5: Qual seu foco */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Qual seu foco
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {[
                'Emagrecimento',
                'Hipertrofia',
                'Definição',
                'Condicionamento físico',
                'Preparação específica',
                'Reabilitação ou fortalecimento',
              ].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.foco.includes(opt)}
                  onClick={() => handleToggleFoco(opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 6: Tem alguma meta específica ou prazo? */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Tem alguma meta específica ou prazo?
            </label>
            <input
              type="text"
              placeholder="Ex: perder X kg, casamento, viagem"
              value={formData.meta}
              onChange={(e) => setFormData(prev => ({ ...prev, meta: e.target.value }))}
              className="w-full bg-white border border-[#CFD9E0] rounded-[4px] px-3 py-2 text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#082D44] focus:ring-1 focus:ring-[#082D44] transition-all shadow-2xs"
            />
          </div>

          {/* Campo 7: Qual formato você procura? */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Qual formato você procura?
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {['Consultoria online', 'Consultoria presencial', 'Consultoria híbrida'].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.formato === opt}
                  onClick={() => handleSingleSelect('formato', opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 8: Quantos dias na semana você consegue treinar? */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Quantos dias na semana você consegue treinar?
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {['2 a 3 dias', '4 a 5 dias', 'Todos os dias'].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.diasSemana === opt}
                  onClick={() => handleSingleSelect('diasSemana', opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 9: Turno de treino */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Qual turno você treina?
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {['Manhã', 'Tarde', 'Noite'].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.turno === opt}
                  onClick={() => handleSingleSelect('turno', opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 10: Quanto tempo disponível por treino? */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Quanto tempo disponível por treino?
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {['30 minutos', '45 minutos', '1 hora ou mais'].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.tempoTreino === opt}
                  onClick={() => handleSingleSelect('tempoTreino', opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 11: Nível de Experiência */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Nível de Experiência
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {[
                'Sedentário',
                'Parado há meses',
                'Treino às vezes',
                'Já treino firme e quero evoluir',
              ].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.experiencia === opt}
                  onClick={() => handleSingleSelect('experiencia', opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 12: Peso aproximado e Altura */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Peso aproximado e Altura
            </label>
            <input
              type="text"
              placeholder="Ex: 1,78 / 80kg"
              value={formData.pesoAltura}
              onChange={(e) => setFormData(prev => ({ ...prev, pesoAltura: e.target.value }))}
              className="w-full bg-white border border-[#CFD9E0] rounded-[4px] px-3 py-2 text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#082D44] focus:ring-1 focus:ring-[#082D44] transition-all shadow-2xs"
            />
          </div>

          {/* Campo 13: Possui alguma dor articular ou lesão diagnosticada? */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Possui alguma dor articular ou lesão diagnosticada?
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {['Joelho', 'Ombro', 'Coluna', 'Nenhuma', 'Outra'].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.lesaoOpcao === opt}
                  onClick={() => handleLesaoSelect(opt)}
                  isDark={isDark}
                />
              ))}
            </div>

            {/* 3. Renderização Condicional do Campo "Qual?": só renderiza se "Outra" estiver selecionada */}
            {formData.lesaoOpcao === 'Outra' && (
              <div className="mt-2 animate-page-enter">
                <input
                  type="text"
                  placeholder="Qual?"
                  value={formData.lesaoQual}
                  onChange={(e) => setFormData(prev => ({ ...prev, lesaoQual: e.target.value }))}
                  className="w-full bg-white border border-[#CFD9E0] rounded-[4px] px-3 py-2 text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#082D44] focus:ring-1 focus:ring-[#082D44] transition-all shadow-2xs"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Campo 14: Possui alguma condição médica ou restrição? (Opcional) */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Possui alguma condição médica ou restrição? (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ex: Hipertensão, diabetes, problemas cardíacos, etc."
              value={formData.condicaoMedica}
              onChange={(e) => setFormData(prev => ({ ...prev, condicaoMedica: e.target.value }))}
              className="w-full bg-white border border-[#CFD9E0] rounded-[4px] px-3 py-2 text-xs sm:text-sm text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#082D44] focus:ring-1 focus:ring-[#082D44] transition-all shadow-2xs"
            />
          </div>

          {/* Campo 15: Faz acompanhamento nutricional ou dieta atualmente? */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Faz acompanhamento nutricional ou dieta atualmente?
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {['Sim', 'Não', 'Não, mas pretendo'].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.nutricao === opt}
                  onClick={() => handleSingleSelect('nutricao', opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 16: Qual sua maior dificuldade hoje? (Multi-seleção) */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Qual sua maior dificuldade hoje?
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {[
                'Falta de tempo',
                'Falta de motivação',
                'Não sei o que fazer na academia',
                'Faço tudo certo e não vejo resultado',
              ].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.dificuldades.includes(opt)}
                  onClick={() => handleToggleDificuldade(opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* Campo 17: Em quanto tempo pretende começar? */}
          <div>
            <label
              className={`block font-inter text-[11px] sm:text-xs font-medium mb-1.5 transition-colors ${isDark ? 'text-[#F5F5F5]' : 'text-[#5A7184]'
                }`}
            >
              Em quanto tempo pretende começar?
            </label>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {['Imediatamente', 'Na próxima semana', 'Só estou pesquisando preços'].map((opt) => (
                <SelectorOption
                  key={opt}
                  label={opt}
                  selected={formData.quandoComecar === opt}
                  onClick={() => handleSingleSelect('quandoComecar', opt)}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          {/* ==================================================================== */}
          {/* 3. BOTÃO DE ENVIO (Vermelho no Dark Mode, Azul escuro no Light Mode) */}
          {/* ==================================================================== */}
          <div className="pt-3 pb-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 rounded-full active:scale-[0.98] text-white font-inter text-xs sm:text-sm font-semibold flex items-center justify-center transition-all shadow-md cursor-pointer disabled:opacity-75 ${isDark
                ? 'bg-[#BA1015] hover:bg-[#9E0D12]'
                : 'bg-[#082D44] hover:bg-[#051C2C]'
                }`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Gerando perfil...</span>
                </div>
              ) : (
                'Encaminhar formulário no whatsapp'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Footer oficial: Inverte automaticamente para off-white no Dark Mode e azul escuro no Light Mode */}
      <Footer />
    </PageContainer>
  );
};
