import React from 'react';
import { PageContainer } from '../components/PageContainer';
import { Header } from '../components/Header';
import { HeroCard } from '../components/HeroCard';
import { SocialButton } from '../components/SocialButton';
import { CardLink } from '../components/CardLink';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';

// Official user assets exported from Figma
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';

export const Home: React.FC = () => {
  // Matheus's direct contact links
  const instagramUrl = 'https://www.instagram.com/mat3us__mendes/';
  const whatsappUrl = 'https://wa.me/558494277261?text=Ol%C3%A1%20Matheus!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20acompanhamento.';

  return (
    <PageContainer noPadding className="animate-page-enter">
      <div className="px-4 pt-3 flex flex-col flex-1">
        {/* Top Header with Official Figma Logo and Theme Toggle */}
        <Header />

        {/* Hero Banner with official banner.png */}
        <div className="mt-1">
          <HeroCard />
        </div>

        {/* Social Icons Bar (Positioned directly below Hero, aligned to right as in reference) */}
        <div className="flex justify-end items-center gap-2 mt-3 mb-4">
          <SocialButton
            type="instagram"
            href={instagramUrl}
            label="Instagram do Matheus Henrique"
          />
          <SocialButton
            type="whatsapp"
            href={whatsappUrl}
            label="WhatsApp do Matheus Henrique"
          />
        </div>

        {/* Navigation Cards Stack with Full-Bleed images and exact HEX color fusion */}
        <div className="flex flex-col gap-3.5">
          {/* Card 1: Formulário (Vermelho: #BA1015) */}
          <CardLink
            title="Formulário"
            subtitle="Planejamento de treino individualizado e estratégico para destravar seus resultados, respeitando sua rotina e seus objetivos."
            actionText="Preencher formulário"
            path="/formulario"
            bgColor="#BA1015"
            imageSrc={card1}
            imageAlt="Mockup Formulário de Treino"
          />

          {/* Card 2: Sobre mim (Azul Escuro: #082D44) */}
          <CardLink
            title="Sobre mim"
            subtitle="Conheça minha trajetória, formação e a metodologia de trabalho que utilizo para guiar você até a sua melhor versão física."
            actionText="Conhecer Minha História"
            path="/sobre"
            bgColor="#082D44"
            imageSrc={card2}
            imageAlt="Foto Matheus Henrique"
          />

          {/* Card 3: Alunos (Azul Claro: #5893B5) */}
          <CardLink
            title="Alunos"
            subtitle="Veja a evolução de quem transformou o corpo e a rotina com o método."
            actionText="Ver Transformações"
            path="/alunos"
            bgColor="#5893B5"
            imageSrc={card3}
            imageAlt="Alunos Resultados"
          />
        </div>

        {/* Call to action section ("Vem pro time!") */}
        <CtaBanner />
      </div>

      {/* Styled Footer with contrasting card shape and official logo */}
      <Footer />
    </PageContainer>
  );
};
