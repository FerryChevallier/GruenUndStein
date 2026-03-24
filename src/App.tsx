import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="ueber-uns" element={<About />} />
          <Route path="leistungen" element={<ServiceDetail />} />
          <Route path="leistungen/:serviceId" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
