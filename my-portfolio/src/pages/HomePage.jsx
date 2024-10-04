import  { useRef } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const HomePage = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 p-4">
        <button className="px-4 py-2 bg-gray-200" onClick={() => handleScroll(aboutRef)}>
          Sobre mí
        </button>
        <button className="px-4 py-2 bg-gray-200" onClick={() => handleScroll(projectsRef)}>
          Proyectos
        </button>
        <button className="px-4 py-2 bg-gray-200" onClick={() => handleScroll(contactRef)}>
          Contacto
        </button>
      </div>

      {/* Secciones */}
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
};

export default HomePage;
