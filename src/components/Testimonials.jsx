import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const testimonials = [
  {
    quote: "Zaman is very friendly and did a great job",
    author: "Larvi Debiane",
    role: "CEO at Gattaca Fidielty Company",
  },
  {
    quote:
      "Zaman revamped our WordPress site flawlessly — clean, fast, and responsive. Communication was smooth, and everything was delivered on time",
    author: "Engel Rosario",
    role: "CEO at RenServicesNc.com",
  },
  {
    quote:
      "Our WordPress store saw a 40% speed boost after Zaman’s optimization. He also improved the checkout UX, leading to higher conversions",
    author: "Peter O",
    role: "Manager at The Greenhouse",
  },
  {
    quote:
      "Zaman is a very honorable and professional developer, he has helped me with my projects, very responsive and very fast with work",
    author: "Engel Rosario",
    role: "CEO at Ren Services Nc",
  },
  {
    quote: "Zaman went above and beyond and I admired his efforts.",
    author: "Rafeeq Fredericks",
    role: "Owner at Eco Built Nc",
  },
  {
    quote:
      "Zaman's technical expertise and creative approach helped transform our outdated platform into a modern, user-friendly experience.",
    author: "Larvi Debiane",
    role: "CEO at Gattaca Fidielty Company",
  },
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="border-l-4 border-gray-900 bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between">
    <p className="text-gray-700 text-base leading-relaxed mb-4 italic">“{testimonial.quote}”</p>
    <div>
      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
      <p className="text-sm text-gray-500">{testimonial.role}</p>
    </div>
  </div>
);

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

// Main Component
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Fade-in animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // setIsVisible(true); // This line was removed
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation logic
  const groupCount = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);

  const next = () => setCurrent((next) => (next + 1) % groupCount);
  const prev = () => setCurrent((prev) => (prev - 1 + groupCount) % groupCount);

  // Arrow keys navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, );

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What my clients and colleagues have to say about working with me
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100 transition hidden md:block"
            aria-label="Previous"
          >
            <span className="text-xl">&#8592;</span>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100 transition hidden md:block"
            aria-label="Next"
          >
            <span className="text-xl">&#8594;</span>
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: isMobile
                  ? `${testimonials.length * 100}%`
                  : `${Math.ceil(testimonials.length / 3) * 100}%`,
                transform: isMobile
                  ? `translateX(-${current * (100 / testimonials.length)}%)`
                  : `translateX(-${current * 50}%)`,
              }}
            >
              {/* Render items based on screen size */}
              {isMobile
                ? testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full px-2">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))
                : Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, groupIndex) => (
                    <div key={groupIndex} className="w-full flex px-2">
                      {testimonials
                        .slice(groupIndex * 3, groupIndex * 3 + 3)
                        .map((testimonial, idx) => (
                          <div key={idx} className="w-1/3 px-2">
                            <TestimonialCard testimonial={testimonial} />
                          </div>
                        ))}
                    </div>
                  ))}
            </div>
          </div>

          {/* Mobile dots */}
          {isMobile && (
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full ${current === idx ? 'bg-gray-900' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
