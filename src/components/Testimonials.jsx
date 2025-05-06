import { useState, useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "Zaman is a talented developer who delivers exceptional results. His attention to detail and problem-solving skills are outstanding.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp"
    },
    {
      quote: "Working with Zaman was a pleasure. He understood our requirements quickly and delivered a beautiful, functional website ahead of schedule.",
      author: "Michael Chen",
      role: "CEO at StartupX"
    },
    {
      quote: "Zaman's technical expertise and creative approach helped transform our outdated platform into a modern, user-friendly experience.",
      author: "Emily Rodriguez",
      role: "Design Director at CreativeLabs"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What my clients and colleagues have to say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="w-10 h-10 text-gray-300 mb-4" />
              <p className="text-gray-600 text-lg mb-6">{testimonial.quote}</p>
              <div className="mt-auto">
                <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;