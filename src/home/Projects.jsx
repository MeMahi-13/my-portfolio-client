import { useState } from "react";

const projectData = [
  {
    name: "Festivya",
    image: "https://i.ibb.co/jkXGVdGC/project-1.png",
    techStack: "React, Tailwind CSS, Node.js",
    description:
      "This is a web app to manage tasks efficiently with user authentication and real-time updates.",
    liveLink: "https://festivya-45ee3.web.app/",
    githubLink: "https://github.com/MeMahi-13/Festivya",
    challenges: "Integrating real-time updates and managing state was tricky.",
    improvements: "improvements in UI responsiveness.",
  },
  {
    name: "Root",
    image: "https://i.ibb.co.com/GQWp9VP6/project-2.png",
    techStack: "Tailwind, ReactJS, ExpressJs, MongoDB",
    description:
      "An advanced role-based employee management web application built for tracking employee workflow, managing payroll, verifying employees, and facilitating role-based dashboards for Admin, HR, and Employees.",
    liveLink: "https://root-6a2dc.web.app/",
    githubLink: "https://github.com/MeMahi-13/Root-client",
    challenges: "Handling complex role-based authentication",
    improvements: "Addition of Cors Security method",
  },
  {
    name: "Foodpedia",
    image: "https://i.ibb.co.com/t13SdpC/project-3.png",
    techStack: "Angular, Firebase",
    description:
      "Foodpedia is a modern recipe book web app that allows users to explore, add, update, and manage recipes. Built with React, Firebase Authentication, and Tailwind CSS (with DaisyUI), the app supports dark mode, animations, private routes, and more.",
    liveLink: "https://foodpedia-9599a.web.app/",
    githubLink: "https://github.com/MeMahi-13/Foodpedia-client",
    challenges: "Managing media uploads.",
    improvements: "Implement end-to-end encryption.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
   <div id="projects" className="bg-gray-100">
     <div className="max-w-7xl mx-auto p-8 my-20">
      <h1 className="text-3xl font-semibold text-center mb-12">Projects</h1>

      <div className="flex flex-wrap gap-10 justify-center">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className="animated-border cursor-pointer w-full md:w-1/3 rounded-xl"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-300 p-6 flex flex-col items-center">
              <img
                src={project.image}
                alt={project.name}
                draggable={false}
                className="rounded-lg w-full object-cover"
              />
              <h2 className="mt-4 mb-2 text-2xl font-semibold">{project.name}</h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="mt-4 px-6 py-2 bg-sky-800 hover:bg-cyan-700 text-white rounded-lg"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg mb-4 max-h-64 object-contain mx-auto"
            />
            <p>
              <strong>Main Technology Stack:</strong> {selectedProject.techStack}
            </p>
            <p className="mt-2">
              <strong>Description:</strong> {selectedProject.description}
            </p>
            <p className="mt-2">
              <strong>Live Project Link:</strong>{" "}
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                {selectedProject.liveLink}
              </a>
            </p>
            <p className="mt-2">
              <strong>GitHub Repository (Client):</strong>{" "}
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                {selectedProject.githubLink}
              </a>
            </p>
            <p className="mt-2">
              <strong>Challenges Faced:</strong> {selectedProject.challenges}
            </p>
            <p className="mt-2">
              <strong>Potential Improvements & Future Plans:</strong> {selectedProject.improvements}
            </p>
          </div>
        </div>
      )}

      {/* Animated border style */}
      <style>{`
        .animated-border {
          display: inline-block;
          --c: #076091; /* border color */
          --b: 2px;    /* border thickness */
          --g: 0px;     /* gap on hover */
          padding: calc(var(--g) + var(--b));
          --_g: #0000 25%, var(--c) 0;
          background: 
            conic-gradient(from 180deg at top var(--b) right var(--b), var(--_g)) 
              var(--_i, 200%) 0 / 200% var(--_i, var(--b)) no-repeat,
            conic-gradient(at bottom var(--b) left var(--b), var(--_g))
              0 var(--_i, 200%) / var(--_i, var(--b)) 200% no-repeat;
          transition: 0.3s, background-position 0.3s 0.3s;
          cursor: pointer;
          border-radius: 12px;
        }

        .animated-border:hover {
          --_i: 100%;
          transition: 1s, background-size 0.3s 0.3s;
        }

        .animated-border img {
          display: block;
          border-radius: 8px;
          max-width: 100%;
          height: auto;
          pointer-events: none;
          user-select: none;
        }
      `}</style>
    </div>
   </div>
  );
};

export default Projects;
