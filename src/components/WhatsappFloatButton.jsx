import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappFloatButton = () => {
  return (
    <a
      href="https://wa.me/+92-3046282698" // Replace 'your-number' with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 1000,
        background: "#25D366",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} color="white" size="2x" />
    </a>
  );
};

export default WhatsappFloatButton;
