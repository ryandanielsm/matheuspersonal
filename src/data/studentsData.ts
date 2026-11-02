import type { StudentCase } from '../types';
import lucasAntes from '../assets/students/lucas-antes.png';
import lucasDepois from '../assets/students/lucas-depois.png';
import gabrielAntes from '../assets/students/gabriel-antes.png';
import gabrielDepois from '../assets/students/gabriel-depois.png';
import camilaAntes from '../assets/students/camila-antes.png';
import camilaDepois from '../assets/students/camila-depois.png';
import rodrigoAntes from '../assets/students/rodrigo-antes.png';
import rodrigoDepois from '../assets/students/rodrigo-depois.png';

export const studentsList: StudentCase[] = [
  {
    id: 'lucas',
    name: 'Lucas Silva',
    age: 26,
    time: '16 semanas',
    category: 'Hipertrofia',
    summary: 'Construção muscular acelerada com periodização ondulatória e progressão de tensão mecânica.',
    testimonial: 'O Matheus corrigiu minuciosamente a cadência das minhas repetições e alinhou meu volume de treino. Em 4 meses meu peitoral e dorsais desenvolveram como nunca!',
    beforeWeight: '74 kg',
    afterWeight: '80 kg',
    beforeBf: '22% BF',
    afterBf: '12% BF',
    highlightBadge: '+6kg Massa Magra',
    beforeImage: lucasAntes,
    afterImage: lucasDepois,
    keyAchievements: [
      'Ganho de 6kg de massa magra limpa',
      'Redução de 10% no percentual de gordura',
      'Correção de assimetria nos membros superiores',
      'Aumento significativo de força no supino e agachamento',
    ],
  },
  {
    id: 'gabriel',
    name: 'Gabriel Rocha',
    age: 29,
    time: '24 semanas',
    category: 'Recomposição',
    summary: 'Recomposição física sustentável com treinos densos de 50 minutos adaptados à rotina de escritório.',
    testimonial: 'Eu achava que precisava me matar na esteira e passar fome. Com o acompanhamento do Matheus, aprendi a treinar com intensidade certa e os 11kg de gordura foram embora.',
    beforeWeight: '92 kg',
    afterWeight: '81 kg',
    beforeBf: '28% BF',
    afterBf: '14% BF',
    highlightBadge: '-11kg Gordura',
    keyAchievements: [
      'Eliminação de 11kg de gordura visceral',
      'Preservação total e ganho de densidade muscular',
      'Diminuição de 14cm de circunferência abdominal',
      'Disposição e energia renovadas para o dia todo',
    ],
    beforeImage: gabrielAntes,
    afterImage: gabrielDepois,
  },
  {
    id: 'camila',
    name: 'Camila Costa',
    age: 24,
    time: '12 semanas',
    category: 'Definição',
    summary: 'Foco em membros inferiores e glúteos com seleção biomecânica refinada de exercícios.',
    testimonial: 'Eu treinava há quase dois anos estagnada. Quando o Matheus organizou meu treino com foco em amplitude e sobrecarga progressiva, a mudança nas pernas e glúteos foi impressionante!',
    beforeWeight: '59 kg',
    afterWeight: '62 kg',
    beforeBf: '26% BF',
    afterBf: '18% BF',
    highlightBadge: '+3.5kg Membros Inferiores',
    keyAchievements: [
      'Tonificação e volume visível de glúteos e quadríceps',
      'Definição acentuada na região do abdômen',
      'Aprendeu a executar elevação pélvica e búlgaro com carga alta e sem dor',
      'Criação de constância inabalável na academia',
    ],
    beforeImage: camilaAntes,
    afterImage: camilaDepois,
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo Mendes',
    age: 33,
    time: '20 semanas',
    category: 'Iniciantes',
    summary: 'Reabilitação do padrão de movimento, fortalecimento de core e eliminação de dores crônicas.',
    testimonial: 'Eu vivia com medo de travar a lombar. O Matheus me ensinou a ativar o core, corrigiu meu agachamento e hoje levanto peso sem dor nenhuma. Mudou minha qualidade de vida!',
    beforeWeight: '88 kg',
    afterWeight: '79 kg',
    beforeBf: '25% BF',
    afterBf: '15% BF',
    highlightBadge: 'Zero Dores & Postura Alinhada',
    keyAchievements: [
      'Remissão completa das dores lombares',
      'Evolução postural com correção de ombros protusos',
      'Perda de 9kg com aumento expressivo de mobilidade',
      'Retomada da confiança em treinar pesado com segurança',
    ],
    beforeImage: rodrigoAntes,
    afterImage: rodrigoDepois,
  },
];

