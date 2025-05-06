import { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    // Here you would typically send the form data to a backend
    alert('Thanks for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold mb-4">Let&apos;s Talk</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interested in working together? Fill out the form below and I&apos;ll get back to you soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Something Special?</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <p>
                  Whether you need a web application, want to revamp your digital presence, or just want to chat about technology - I&apos;m here to help.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-medium mb-2">Email me at</p>
                <a href="mailto:hello@zamansikander.com" className="text-lg font-medium text-gray-800 hover:underline">
                  hello@zamansikander.com
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2
                  hover:bg-black/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;