import React, { useState } from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/bt.png";
import paperTrail from "../assets/PaperTrail.png";

const projects = [
  {
    id: 1,
    name: "PaperTrail",
    technologies: "React Js, Express JS, MySQL",
    description:
      "PaperTrail is an intuitive letter management app built with React, Node.js, and MySQL. It allows users to easily organize, store, and retrieve letters, ensuring fast access and efficient management. With a seamless interface and reliable backend, PaperTrail is the perfect solution for businesses and professionals looking to streamline their correspondence",
    image: paperTrail,
    github: "https://github.com/YouafKhan1",
    liveDemo: "",
  },
  {
    id: 2,
    name: "Business Training",
    technologies: "React Native",
    description:
      "Business Training is an E-learning platform designed for mobile devices, built with React Native. It allows users to access training modules, track their progress, and interact with various learning resources on their smartphones.",
    image: bookMSImage,
    github: "https://github.com/YouafKhan1",
    liveDemo: "",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Latest Works</h2>

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  {projects.map((project) => (
    <div key={project.id} className="relative group">
   
      <h3 className="text-2xl font-bold mb-4 text-center z-10 relative">{project.name}</h3>
      
      <div className="w-full relative rounded-lg" style={{ paddingTop: "50%" }}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover absolute top-0 left-0 rounded-lg"
        />

        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <p className="text-center text-gray-200 px-4">{project.description}</p>
        </div>

        <div
          onClick={() => openProjectModal(project)}
          className="absolute inset-0 cursor-pointer"
        ></div>

        {/* Live Demo or No Live Demo */}
        {project.liveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gradient-to-r from-blue-500 to-green-800 px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Live Demo Available
          </a>
        ) : (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gray-600 px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            No Live Demo
          </div>
        )}
      </div>
    </div>
  ))}
</div>
      </div>

      {selectedProject && (
       <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-8">
       <div
         className="bg-gray-900 text-white rounded-lg w-full max-w-4xl p-8 relative"
         onClick={(e) => e.stopPropagation()} 
       >
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 text-2xl text-gray-500"
            >
              &times;
            </button>


            <h3 className="text-3xl font-bold mb-4">{selectedProject.name}</h3>
            <p className="text-lg text-gray-200 mb-6">{selectedProject.description}</p>

            <div className="relative w-full rounded-lg" style={{ paddingTop: "56.25%" }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover absolute top-0 left-0 rounded-lg"
              />
            </div>

       
            {selectedProject.liveDemo ? (
  <a
    href={selectedProject.liveDemo}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 text-white bg-gradient-to-r from-blue-500 to-green-800 px-4 py-2 rounded-md block text-center"
  >
    Live Demo Available
  </a>
) : (
  <div className="mt-4 text-white bg-gray-600 px-4 py-2 rounded-md block text-center">
    No Live Demo
  </div>
)}

          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
