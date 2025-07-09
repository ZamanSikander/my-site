import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import hero_section from "../assets/hero_section.svg"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`w-full md:w-1/2 transition-all duration-1000 ease-out 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
                Crafting Modern & Responsive Front-End Experiences
              </h1>
              <p className="text-black/60 mb-6 animate-fade-in w-[15rem] md:w-[25rem]">
                I am <span className='font-semibold'>Zaman Sikander,</span> a Front-End Developer with 3+ years of experience in building user-friendly websites using React, Tailwind CSS, JavaScript, and WordPress. I specialize in transforming ideas into interactive, high-performing digital products.
              </p>
              <div
                className="flex flex-wrap gap-4 mb-8 animate-fade-up"
                style={{ animationDelay: '600ms' }}
              >
                {[
                  { icon: faGithub, href: "https://github.com/zamansikander/", label: "GitHub" },
                  { icon: faLinkedin, href: "https://linkedin.com/in/zamansikander/", label: "LinkedIn" },
                  { icon: faUpwork, href: "https://www.upwork.com/freelancers/~01ef4eb25f55486b6f?mp_source=share", label: "Upwork" }
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 w-12 bg-gray-100 rounded-lg
                    hover:bg-gray-200 transition-all duration-300"
                    aria-label={label}
                  >
                    <FontAwesomeIcon icon={icon} className="text-gray-700" />
                  </a>
                ))}
              </div>
              <div
                className="animate-fade-up"
                style={{ animationDelay: '800ms' }}
              >
                <a
                  href="#contact"
                  className="ml-4 px-5 py-2.5 rounded-lg bg-black text-white font-medium 
              transition-all duration-300 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 mt-16 md:mt-0 relative transition-all duration-1000 ease-out 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gray-100 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
                <img
                  src={hero_section}
                  alt="Zaman Sikander portrait"
                  width={400}
                  height={400}
                  className="w-4/5 object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
