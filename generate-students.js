import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const students = [
  {
    id: 'lucas',
    name: 'Lucas Silva',
    age: 26,
    time: '16 semanas',
    category: 'Hipertrofia & Definição',
    antes: {
      weight: '74 kg',
      bf: '22% BF',
      label: 'ANTES - SEMANA 1',
      bgGrad: ['#1f242e', '#11151c'],
      accent: '#ef4444',
      badge: 'Ponto de Partida',
      silhouette: 'bulky-soft'
    },
    depois: {
      weight: '80 kg',
      bf: '12% BF',
      label: 'DEPOIS - SEMANA 16',
      bgGrad: ['#0f2b26', '#061714'],
      accent: '#10b981',
      badge: '+6kg Massa Magra',
      silhouette: 'athletic-v'
    }
  },
  {
    id: 'gabriel',
    name: 'Gabriel Rocha',
    age: 29,
    time: '24 semanas',
    category: 'Recomposição Corporal',
    antes: {
      weight: '92 kg',
      bf: '28% BF',
      label: 'ANTES - SEMANA 1',
      bgGrad: ['#281e1e', '#140c0c'],
      accent: '#f97316',
      badge: 'Sedentarismo',
      silhouette: 'overweight'
    },
    depois: {
      weight: '81 kg',
      bf: '14% BF',
      label: 'DEPOIS - SEMANA 24',
      bgGrad: ['#142533', '#09151e'],
      accent: '#06b6d4',
      badge: '-11kg Gordura',
      silhouette: 'toned-lean'
    }
  },
  {
    id: 'camila',
    name: 'Camila Costa',
    age: 24,
    time: '12 semanas',
    category: 'Definição & Glúteos',
    antes: {
      weight: '59 kg',
      bf: '26% BF',
      label: 'ANTES - SEMANA 1',
      bgGrad: ['#291a26', '#140c13'],
      accent: '#ec4899',
      badge: 'Sem Tonificação',
      silhouette: 'female-soft'
    },
    depois: {
      weight: '62 kg',
      bf: '18% BF',
      label: 'DEPOIS - SEMANA 12',
      bgGrad: ['#1f1d38', '#0c0a1f'],
      accent: '#8b5cf6',
      badge: '+3.5kg Glúteo/Perna',
      silhouette: 'female-fit'
    }
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo Mendes',
    age: 33,
    time: '20 semanas',
    category: 'Condicionamento & Postura',
    antes: {
      weight: '88 kg',
      bf: '25% BF',
      label: 'ANTES - SEMANA 1',
      bgGrad: ['#242018', '#14110b'],
      accent: '#eab308',
      badge: 'Dor lombar crônica',
      silhouette: 'posture-slouched'
    },
    depois: {
      weight: '79 kg',
      bf: '15% BF',
      label: 'DEPOIS - SEMANA 20',
      bgGrad: ['#162a22', '#0a1611'],
      accent: '#22c55e',
      badge: 'Postura Corrigida & Zero Dor',
      silhouette: 'posture-aligned'
    }
  }
];

function generateSvgCard(student, phase, data) {
  const width = 322; // 161 * 2 for high density
  const height = 562; // 281 * 2 for high density

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${data.bgGrad[0]}"/>
        <stop offset="100%" stop-color="${data.bgGrad[1]}"/>
      </linearGradient>
      <linearGradient id="cardOverlay" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(0,0,0,0.2)"/>
        <stop offset="70%" stop-color="rgba(0,0,0,0.4)"/>
        <stop offset="100%" stop-color="rgba(0,0,0,0.85)"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="${data.accent}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${data.accent}" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Background Base -->
    <rect width="${width}" height="${height}" rx="24" fill="url(#bgGrad)"/>
    <circle cx="${width/2}" cy="${height*0.4}" r="${width*0.45}" fill="url(#glow)"/>

    <!-- Gym Mesh Background Pattern -->
    <g opacity="0.08" stroke="#ffffff" stroke-width="1.5">
      <line x1="0" y1="80" x2="${width}" y2="80"/>
      <line x1="0" y1="160" x2="${width}" y2="160"/>
      <line x1="0" y1="240" x2="${width}" y2="240"/>
      <line x1="0" y1="320" x2="${width}" y2="320"/>
      <line x1="0" y1="400" x2="${width}" y2="400"/>
      <line x1="80" y1="0" x2="80" y2="${height}"/>
      <line x1="160" y1="0" x2="160" y2="${height}"/>
      <line x1="240" y1="0" x2="240" y2="${height}"/>
    </g>

    <!-- Athletic Silhouette Icon Graphic -->
    <g transform="translate(${width/2 - 50}, ${height*0.28}) scale(1.2)" filter="url(#shadow)">
      ${phase === 'depois' ? `
        <!-- Fit athletic silhouette -->
        <path d="M40 0 C46 0 51 5 51 11 C51 17 46 22 40 22 C34 22 29 17 29 11 C29 5 34 0 40 0 Z" fill="${data.accent}"/>
        <path d="M15 32 C23 26 57 26 65 32 C73 38 78 58 74 72 C71 82 62 82 58 74 L54 62 L52 110 L44 110 L44 80 L36 80 L36 110 L28 110 L26 62 L22 74 C18 82 9 82 6 72 C2 58 7 38 15 32 Z" fill="#ffffff" opacity="0.95"/>
        <path d="M30 45 L50 45 M33 55 L47 55 M35 65 L45 65" stroke="${data.accent}" stroke-width="2.5" stroke-linecap="round"/>
      ` : `
        <!-- Before silhouette -->
        <path d="M40 4 C45 4 49 8 49 13 C49 18 45 22 40 22 C35 22 31 18 31 13 C31 8 35 4 40 4 Z" fill="#94a3b8"/>
        <path d="M18 34 C25 30 55 30 62 34 C69 39 72 58 68 70 C65 79 58 78 55 70 L52 64 L50 110 L43 110 L43 82 L37 82 L37 110 L30 110 L28 64 L25 70 C22 78 15 79 12 70 C8 58 11 39 18 34 Z" fill="#cbd5e1" opacity="0.8"/>
      `}
    </g>

    <!-- Overlay gradient -->
    <rect width="${width}" height="${height}" rx="24" fill="url(#cardOverlay)"/>

    <!-- Top Badge (Antes / Depois Tag) -->
    <g transform="translate(18, 20)">
      <rect width="${phase === 'depois' ? 140 : 120}" height="32" rx="16" fill="${data.accent}" opacity="0.9"/>
      <text x="${phase === 'depois' ? 70 : 60}" y="20" font-family="'Inter', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="1">
        ${phase === 'depois' ? '✓ DEPOIS' : '• ANTES'}
      </text>
    </g>

    <!-- Top Right Time/Phase Indicator -->
    <g transform="translate(${width - 18}, 28)">
      <text x="0" y="0" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="end" opacity="0.85">
        ${data.label.split(' - ')[1]}
      </text>
    </g>

    <!-- Center Badge Highlight -->
    <g transform="translate(${width/2}, ${height * 0.64})">
      <rect x="-110" y="-16" width="220" height="34" rx="17" fill="rgba(0,0,0,0.65)" stroke="${data.accent}" stroke-width="1.5"/>
      <text x="0" y="6" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="${data.accent}" text-anchor="middle">
        ★ ${data.badge.replace(/&/g, '&amp;')}
      </text>
    </g>

    <!-- Bottom Info Panel -->
    <g transform="translate(20, ${height - 110})">
      <!-- Student Name & Category -->
      <text x="0" y="0" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#ffffff">
        ${student.name.replace(/&/g, '&amp;')}
      </text>
      <text x="0" y="22" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#94a3b8">
        ${student.category.replace(/&/g, '&amp;')} • ${student.time}
      </text>

      <!-- Metric Pills -->
      <g transform="translate(0, 36)">
        <rect width="130" height="36" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
        <text x="65" y="23" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">
          Peso: ${data.weight}
        </text>

        <rect x="142" width="130" height="36" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
        <text x="207" y="23" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="${data.accent}" text-anchor="middle">
          ${data.bf}
        </text>
      </g>
    </g>

    <!-- Card Border -->
    <rect width="${width - 2}" height="${height - 2}" x="1" y="1" rx="23" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
  </svg>
  `;
}

async function generateAll() {
  const dir = './src/assets/students';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const s of students) {
    const svgAntes = generateSvgCard(s, 'antes', s.antes);
    const svgDepois = generateSvgCard(s, 'depois', s.depois);

    await sharp(Buffer.from(svgAntes)).png().toFile(path.join(dir, `${s.id}-antes.png`));
    await sharp(Buffer.from(svgDepois)).png().toFile(path.join(dir, `${s.id}-depois.png`));
  }
  console.log('Successfully generated all student before/after transformation cards!');
}

generateAll().catch(console.error);
