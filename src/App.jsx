import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AgroProducts from './pages/AgroProducts';
import RealEstate from './pages/RealEstate';
import Trading from './pages/Trading';
import Loan from './pages/Loan';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agro" element={<AgroProducts />} />
        <Route path="real-estate" element={<RealEstate />} />
        <Route path="trading" element={<Trading />} />
        <Route path="loan" element={<Loan />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
