import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
  {
    quote:
      "He has helped me in creating the website and I output was really good everything worked. Definitely i will hire him for my next project and I will refer other business owner too. Thank you zaman",
      author: "Aamir Ahmed Mohammad",
    role: "Founder and CEO at electricalestimate.com",
  },
];

// Testimonial Card
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

const Testimonials = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What my clients and colleagues have to say about working with me
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            ref={navigationPrevRef}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100 transition ${
              isBeginning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Previous"
            type="button"
            disabled={isBeginning}
          >
            <span className="text-xl">&#8592;</span>
          </button>

          <button
            ref={navigationNextRef}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100 transition ${
              isEnd ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Next"
            type="button"
            disabled={isEnd}
          >
            <span className="text-xl">&#8594;</span>
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              updateNavState(swiper);
            }}
            onSlideChange={(swiper) => updateNavState(swiper)}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            className="!pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
