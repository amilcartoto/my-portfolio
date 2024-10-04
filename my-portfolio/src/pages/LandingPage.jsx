import { useNavigate } from 'react-router-dom'; // Hook para la navegación

const LandingPage = () => {
  const navigate = useNavigate(); // Inicializamos el hook

  const handleClick = () => {
    navigate('/home'); // Redirige a la página principal al hacer clic
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <img 
          src="/assets/your-image.jpg" 
          alt="Portfolio Logo" 
          className="w-40 h-40 mx-auto rounded-full" 
        />
        <h1 className="text-white text-4xl font-bold mt-6">Bienvenidos a Mi Portfolio</h1>
        <button 
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          onClick={handleClick} // Maneja el click para redirigir
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
