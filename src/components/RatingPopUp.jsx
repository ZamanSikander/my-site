import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RatingPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000); // show after 3.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-2 left-2 md:left-4 z-50 animate-fade-in  rounded-md bg-gradient-to-tr from-green-800 via-green-600 to-green-200 p-0.5">
      <div className="relative bg-white p-4 w-72 rounded-lg shadow-xl border border-transparent group">
        
        {/* Content */}
        <div className="relative z-10 flex items-start gap-3 bg-white rounded-lg">
          <FontAwesomeIcon icon={faUpwork} className="w-6 h-6 mt-1" style={{ color: '#6fda44' }} />
          <div className="flex-1">
            <p className="text-sm font-semibold">⭐ 5.0 / 5.0 on Upwork</p>
            <a
              href="https://www.upwork.com/freelancers/~01ef4eb25f55486b6f"
              target="_blank"
              className="text-green-600 text-xs font-medium mt-2 inline-block underline"
            >
              View my Upwork profile
            </a>
          </div>

          {/* Close Button */}
          <button onClick={() => setShow(false)} className="text-gray-500 hover:text-red-500 transition-colors">
            <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingPopup;
