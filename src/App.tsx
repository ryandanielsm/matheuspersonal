import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import { SobrePage } from './pages/SobrePage';
import { AlunosPage } from './pages/AlunosPage';
import { FormularioPage } from './pages/FormularioPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
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
