import { useState, useRef, useEffect } from 'react';

const About = () => {
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

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-0">
              <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/e9c138bd-b8d1-4dbd-a455-19ce614666f8.png" 
                  alt="Zaman Sikander portrait" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hi there! I&apos;m Zaman, a passionate frontend developer with over 3 years of experience
                creating elegant, responsive, and user-friendly web applications.
              </p>
              <p>
                I specialize in modern JavaScript frameworks like React, with a strong
                focus on creating pixel-perfect implementations that follow design systems and
                accessibility standards.
              </p>
              <p>
                My approach combines technical expertise with an eye for design, allowing me to
                bridge the gap between designers and developers effectively. I believe that great
                digital products are born from attention to detail and thoughtful user experience.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new design trends, contributing to
                open-source projects, or enjoying outdoor activities around Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;