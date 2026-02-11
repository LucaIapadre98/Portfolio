import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Strumenti from './pages/Strumenti';
import Contatti from './pages/Contatti';
import Details from './project/Details';

export default function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/strumenti" element={<Strumenti />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}
