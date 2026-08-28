import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from './i18n/LocaleContext';
import ScrollToTop from './lib/ScrollToTop';
import Home from './pages/Home';
import K4Math from './pages/projects/K4Math';
import WebPlatforms from './pages/projects/WebPlatforms';
import DataAnalysis from './pages/projects/DataAnalysis';
import DatabaseModeling from './pages/projects/DatabaseModeling';
import Badges from './pages/Badges';
import Certifications from './pages/Certifications';

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects/k4math" element={<K4Math />} />
          <Route path="/PROJETOS/projetoIntegrador.html" element={<K4Math />} />

          <Route path="/projects/web-platforms" element={<WebPlatforms />} />
          <Route path="/PROJETOS/plataformasWEB.html" element={<WebPlatforms />} />

          <Route path="/projects/data-analysis" element={<DataAnalysis />} />
          <Route path="/PROJETOS/analiseDados.html" element={<DataAnalysis />} />

          <Route path="/projects/database" element={<DatabaseModeling />} />
          <Route path="/PROJETOS/SQLServer.html" element={<DatabaseModeling />} />

          <Route path="/badges" element={<Badges />} />
          <Route path="/badges.html" element={<Badges />} />

          <Route path="/certifications" element={<Certifications />} />
          <Route path="/certificacoes.html" element={<Certifications />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  );
}
