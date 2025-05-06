import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faHtml5, 
  faCss3Alt, 
  faBootstrap, 
  faWordpress, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPalette, 
  faCode, 
  faRobot 
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} className="w-8 h-8 mb-3 text-orange-500" /> },
    { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} className="w-8 h-8 mb-3 text-blue-500" /> },
    { name: 'React.js', icon: <FontAwesomeIcon icon={faReact} className="w-8 h-8 mb-3 text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <FontAwesomeIcon icon={faPalette} className="w-8 h-8 mb-3 text-teal-500" /> },
    { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} className="w-8 h-8 mb-3 text-purple-600" /> },
    { name: 'WordPress', icon: <FontAwesomeIcon icon={faWordpress} className="w-8 h-8 mb-3 text-blue-600" /> },
    { name: 'Cursor AI', icon: <FontAwesomeIcon icon={faRobot} className="w-8 h-8 mb-3 text-blue-600" /> },
    { name: 'Motion.dev', icon: <FontAwesomeIcon icon={faCode} className="w-8 h-8 mb-3 text-purple-500" /> },
    { name: 'Git & GitHub', icon: <FontAwesomeIcon icon={faGithub} className="w-8 h-8 mb-3 text-gray-800" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my technical abilities and design expertise that I&apos;ve honed over the years
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center p-6 border  rounded-lg hover:shadow-md cursor-pointer transition-all duration-300
                ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill.icon}
              <span className="font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
