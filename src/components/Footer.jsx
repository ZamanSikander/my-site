import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">Boy</h2>
            <p className="text-white/70 max-w-md">
              Creating elegant, responsive, and user-friendly web experiences through clean code and thoughtful design.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLinks />
            </div>
          </div>
          
          <div className="text-right hidden md:block">
            <div className="flex flex-col items-end">
              <p className="text-white/70 mb-2">contact@zamansikander.com</p>
              <p className="text-white/70">+92-304-6282698</p>
            </div>
            <p className="text-white/50 mt-8">© 2023 Ervin Bash. All rights reserved.</p>
          </div>
          
          <div className="md:hidden">
            <div className="flex flex-col">
              <p className="text-white/70 mb-2">contact@zamansikander.com</p>
              <p className="text-white/70">+92-3046282698</p>
            </div>
            <p className="text-white/50 mt-8">© 2023 Ervin Bash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLinks = () => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];
  
  return (
    <>
      {socialLinks.map(({ Icon, href, label }) => (
        <a 
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg 
          hover:bg-white/20 transition-all duration-300"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </>
  );
};

export default Footer;