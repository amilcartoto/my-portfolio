import  { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800">Sobre mí</h1>
        <p className="mt-4 text-gray-600">
          Soy un desarrollador junior especializado en tecnologías web como React, Vite, y Tailwind.
        </p>
        {showMore && (
          <p className="mt-4 text-gray-600">
            Además, tengo experiencia en diseño UI/UX, y estoy aprendiendo continuamente nuevas tecnologías y mejores prácticas.
          </p>
        )}
        <button 
          className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Mostrar Menos' : 'Mostrar Más'}
        </button>
      </div>
    </div>
  );
};

export default About;
