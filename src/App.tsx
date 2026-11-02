import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import { SobrePage } from './pages/SobrePage';
import { AlunosPage } from './pages/AlunosPage';
import { FormularioPage } from './pages/FormularioPage';

// Instant scroll to top on route change without animation fighting mobile touch gestures
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/alunos" element={<AlunosPage />} />
          <Route path="/formulario" element={<FormularioPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
