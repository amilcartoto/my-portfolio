const Projects = () => {
    const projects = [
      { name: "Proyecto 1", description: "Descripción del proyecto 1", link: "#" },
      { name: "Proyecto 2", description: "Descripción del proyecto 2", link: "#" },
      // Puedes agregar más proyectos aquí
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-800">Proyectos</h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold text-gray-700">{project.name}</h2>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a 
                  href={project.link} 
                  className="mt-4 inline-block text-blue-600 hover:text-blue-500"
                >
                  Ver Proyecto
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;