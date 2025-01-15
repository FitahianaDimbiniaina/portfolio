import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/bt.png";
import paperTrail from "../assets/PaperTrail.png"

const projects = [
  {
    id: 1,
    name: "PaperTrail",
    technologies: "React Js, Express JS, MySQL",
    description:
      "PaperTrail is an intuitive letter management app built with React, Node.js, and MySQL. It allows users to easily organize, store, and retrieve letters, ensuring fast access and efficient management. With a seamless interface and reliable backend, LetterSync is the perfect solution for businesses and professionals looking to streamline their correspondence",
    image: paperTrail,
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 2,
    name: "Business Training",
    technologies: "React Native",
    description:
      "Business Training is an E-learning platform designed for mobile devices, built with React Native. It allows users to access training modules, track their progress, and interact with various learning resources on their smartphones.",
    image: bookMSImage,
    github: "https://github.com/YouafKhan1",
  },
 
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105 relative group"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div
                className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              >
                <p className="text-center text-gray-200 px-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
