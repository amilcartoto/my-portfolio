// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick }) => {
  return (
    <button 
      className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
      onClick={onClick}
    >
      {text} 
    </button>
  );
};

export default Button;
