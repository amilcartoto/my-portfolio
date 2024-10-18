import { useState } from 'react';
import Navbar from '../components/Navbar';  
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';



const HomePage = () => {
  const [section, setSection] = useState('about'); // Estado para cambiar entre secciones

  const renderSection = () => {
    switch (section) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center space-x-4 p-4">
        <button 
          className={`px-4 py-2 ${section === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setSection('about')}
        >
          Sobre mí
        </button>
        <button 
          className={`px-4 py-2 ${section === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setSection('projects')}
        >
          Proyectos
        </button>
        <button 
          className={`px-4 py-2 ${section === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
          onClick={() => setSection('contact')}
        >
          Contacto
        </button>
      </div>
      <div className="mt-8">
        {renderSection()} {/* Muestra la sección según el estado */}
      </div>
    </div>
  );
};

export default HomePage;


// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import About from './pages/About';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
