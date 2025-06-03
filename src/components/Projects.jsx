import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Common alternative


const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Digital Business Application",
      description: "A modern web application for business management with comprehensive features.",
      image: "/lovable-uploads/f4562509-d293-4de3-8d5d-8bd1b154d6e6.png",
      link: "#",
    },
    {
      id: "02",
      title: "Dynamic E-Commerce Platform",
      description: "A scalable e-commerce solution with advanced product filtering and real-time inventory.",
      image: "/lovable-uploads/f4562509-d293-4de3-8d5d-8bd1b154d6e6.png",
      link: "#",
    },
    {
      id: "03",
      title: "Interactive Portfolio",
      description: "A creative showcase of work with animated sections and interactive elements.",
      image: "/lovable-uploads/f4562509-d293-4de3-8d5d-8bd1b154d6e6.png",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="space-y-4">
                    <p className="text-xl font-medium text-gray-500">{project.id}</p>
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-2 text-gray-800 font-medium mt-4 
                      group-hover:underline transition-all duration-300"
                    >
                      View Project 
                      <FontAwesomeIcon 
                        icon={faExternalLinkAlt} 
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
                      />
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50 transition-all duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-all duration-700 
                      group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;