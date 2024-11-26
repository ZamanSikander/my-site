import { motion } from "framer-motion";
import { useState } from "react";

const ComingSoon = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a852d688-4a7b-4a52-967a-01dee26a20d0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("You are registerd!");
        event.target.reset();
      } else {
        console.log("Error:", data);
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.log("Network Error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 text-white">
      {/* Animated Title with Continuous Bouncing */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        animate={{
          y: ["0%", "-10%", "0%"], // Bounce effect: moves up and down
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity, // Repeat indefinitely
          repeatType: "loop", // Seamless looping
        }}
      >
        Coming Soon
      </motion.h1>

      {/* Animated Subtext with Continuous Bouncing */}
      <motion.p
        className="text-lg md:text-xl mb-8 text-center"
        animate={{
          y: ["0%", "-5%", "0%"], // Subtle bounce effect
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        we are working hard to bring something amazing to you. Stay tuned!
      </motion.p>

      {/* Notify Button with Form */}
      <form
        action=""
        className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full max-w-lg"
        onSubmit={onSubmit}
      >
        {/* Animated Email Input */}
        <motion.input
          type="email"
          name="email" // Add name for FormData to capture the email
          placeholder="Enter your email"
          className="px-4 py-3 rounded-full text-gray-800 outline-none focus:ring-2 focus:ring-purple-400 shadow-md w-full sm:w-auto bg-white"
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated Notify Button */}
        <motion.button
          type="submit" // Use submit button to trigger form submission
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-100 transition w-full sm:w-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Notify Me
        </motion.button>

        {/* Display Result (Submission Feedback) */}
      </form>
        <span className="mt-4 text-center text-gray-200">{result}</span>
    </div>
  );
};

export default ComingSoon;
