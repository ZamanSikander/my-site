import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [status, setStatus] = useState(null); // success | error | null
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const res = await fetch('https://my-site-backend-one.vercel.app/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      await res.json();

      if (res.status === 200) {
        setStatus('success');
        e.target.reset(); // clear form
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
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
                  I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <p>
                  Whether you need a web application, want to revamp your digital presence, or just want to chat about technology - I&apos;m here to help.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-medium mb-2">Email me at</p>
                <a href="mailto:contact@zamansikander.com" className="text-lg font-medium text-blue-600 hover:underline hover:text-blue-700">
                zamansikander8577@gmail.com
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
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>

                {status === "success" && (
                  <p className="text-green-600 font-medium">Thank you for contacting me. Your message has been delivered! ✅</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-medium">Oops! Something went wrong. Please try again later. ❌</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-black text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2
                  ${submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-black/80"} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2`}
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {!submitting && <FontAwesomeIcon icon={faPaperPlane} />}
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