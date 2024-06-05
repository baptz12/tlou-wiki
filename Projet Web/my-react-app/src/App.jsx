import Header from './Header.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './Footer.jsx'
import Accueil from './home/Home.jsx';
import Ennemis from './enemis/Enemies.jsx';
import Contact from './contact/Contact.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/ennemis" element={<Ennemis />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
