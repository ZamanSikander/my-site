// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 
// import port_1 from '../assets/port_1.png';

// const Projects = () => {
//   const projects = [
//     {
//       id: "01",
//       title: "Digital Business Application",
//       description: "A modern web application for business management with comprehensive features.",
//       image: port_1,
//       link: "#",
//     },
//     {
//       id: "02",
//       title: "Dynamic E-Commerce Platform",
//       description: "A scalable e-commerce solution with advanced product filtering and real-time inventory.",
//       image: "/lovable-uploads/f4562509-d293-4de3-8d5d-8bd1b154d6e6.png",
//       link: "#",
//     },
//     {
//       id: "03",
//       title: "Interactive Portfolio",
//       description: "A creative showcase of work with animated sections and interactive elements.",
//       image: "/lovable-uploads/f4562509-d293-4de3-8d5d-8bd1b154d6e6.png",
//       link: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="py-16 md:py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             A selection of my recent work and projects that showcase my skills and expertise
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-12">
//           {projects.map((project) => (
//             <div 
//               key={project.id}
//               className="group"
//             >
//               <div className="flex flex-col md:flex-row gap-8 items-center">
//                 <div className="w-full md:w-1/2 order-2 md:order-1">
//                   <div className="space-y-4">
//                     <p className="text-xl font-medium text-gray-500">{project.id}</p>
//                     <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
//                     <p className="text-gray-600">{project.description}</p>
//                     <a 
//                       href={project.link}
//                       className="inline-flex items-center gap-2 text-gray-800 font-medium mt-4 
//                       group-hover:underline transition-all duration-300"
//                     >
//                       View Project 
//                       <FontAwesomeIcon 
//                         icon={faExternalLinkAlt} 
//                         className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 order-1 md:order-2">
//                   <div className="overflow-hidden rounded-2xl aspect-square bg-gray-50 transition-all duration-300">
//                     <img 
//                       src={project.image} 
//                       alt={project.title} 
//                       className="w-full h-full object-cover object-center transition-all duration-700 
//                       group-hover:scale-105"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import port_1 from '../assets/port_1.png'
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: port_1,
    description: "A personal portfolio site built with React and Tailwind CSS.",
    link: "https://yourportfolio.com",
    size: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: port_1,
    description: "A fully functional online store with cart and payments.",
    link: "https://yourecommerce.com",
    size: "col-span-1 row-span-3",
  },
  {
    id: 3,
    title: "Dashboard UI",
    image: port_1,
    description: "Analytics dashboard with KPIs, charts, and stats.",
    link: "https://yourdashboard.com",
    size: "col-span-1 row-span-3",
  },
  {
    id: 4,
    title: "Landing Page",
    image: port_1,
    description: "Marketing landing page for product or service promotion.",
    link: "https://landingpage.com",
    size: "col-span-1 row-span-2",
  },
  {
    id: 5,
    title: "Landing Page",
    image: port_1,
    description: "Marketing landing page for product or service promotion.",
    link: "https://landingpage.com",
    size: "col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "Landing Page",
    image: port_1,
    description: "Marketing landing page for product or service promotion.",
    link: "https://landingpage.com",
    size: "col-span-2 row-span-1",
  },
  {
    id: 7,
    title: "Landing Page",
    image: port_1,
    description: "Marketing landing page for product or service promotion.",
    link: "https://landingpage.com",
    size: "col-span-1 row-span-1",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="p-6 bg-[#f9f9f9] min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`bg-white rounded-xl shadow-md p-2 cursor-pointer transition-transform hover:scale-105 ${project.size}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-4">{selectedProject.title}</h2>
            <p className="text-gray-600 mt-2">{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 underline"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
