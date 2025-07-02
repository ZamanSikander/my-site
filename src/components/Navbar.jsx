import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out 
      ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/"
          className="font-display text-xl font-bold tracking-tight transition-all hover:opacity-70"
        >
          Zaman Sikander
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <SocialLinks />
          <a 
            href="#contact" 
            className="ml-4 px-5 py-2.5 rounded-full bg-black text-white font-medium 
            transition-all duration-300 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Contact
          </a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>
          
          <div className={`flex flex-col items-center justify-center space-y-8 h-full ${isScrolled ? 'py-52 bg-white backdrop-blur-md shadow-sm min-h-screen' : 'py-6 bg-transparent'}`}>
            <NavLinks closeMenu={() => setIsMenuOpen(false)} />
            <div className="flex space-x-6 mt-12">
              <SocialLinks />
            </div>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="px-8 py-3 rounded-full bg-black text-white font-medium 
              transition-all duration-300 hover:bg-black/80"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ closeMenu = () => {} }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];
  
  return links.map(link => (
    <a 
      key={link.name}
      href={link.href}
      onClick={closeMenu}
      className="text-foreground/90 hover:text-foreground transition-colors duration-300 font-medium"
    >
      {link.name}
    </a>
  ));
};

const SocialLinks = () => {
  const socialLinks = [
    { icon: faGithub, href: "https://github.com/zamansikander/", label: "GitHub" },
    { icon: faLinkedin, href: "https://linkedin.com/in/zamansikander/", label: "LinkedIn" },
  ];
  
  return (
    <>
      {socialLinks.map(({ icon, href, label }) => (
        <a 
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button"
          aria-label={label}
        >
          <FontAwesomeIcon icon={icon} size="lg" />
        </a>
      ))}
    </>
  );
};

export default Navbar;
