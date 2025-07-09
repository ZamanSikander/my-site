import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappFloatButton = () => {
  return (
    <a
      href="https://wa.me/+92-3046282698"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-[1000] bg-[#25D366] rounded-full w-10 h-10 shadow-lg "
    >
      <FontAwesomeIcon icon={faWhatsapp} color="white" size="2x" />
    </a>
  );
};

export default WhatsappFloatButton;
