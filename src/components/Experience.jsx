import { useState, useRef, useEffect } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      role: "WordPress Developer",
      company: "Freelance",
      description: "Created and maintained WordPress websites, implemented custom themes and plugins for various clients."
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      description: "Developing responsive and interactive web applications using React, Tailwind CSS, and modern frontend tools."
    },
    {
      role: "Web Designer",
      company: "Freelance",
      description: "Designed and developed responsive websites using HTML, CSS, and Bootstrap for small businesses."
    },
    {
      role: "MVP Developer",
      compnay: "Freelance",
      description: "Designed and developed the responsive MVP for the construction base company, using React JS and tailwind."
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-4">My Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional journey and key roles I&apos;ve held in my career
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={`relative pl-8 pb-12 border-l-2 border-gray-200 last:border-0 last:pb-0 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{experience.role}</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1 md:mt-0">{experience.period}</p>
                </div>
                <p className="text-gray-600 font-medium mb-2">{experience.company}</p>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
    