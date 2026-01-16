import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <HashRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
      
    </HashRouter>
  );
}

export default App;