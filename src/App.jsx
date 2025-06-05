import ReactGA from 'react-ga4';

ReactGA.initialize("G-B88F4P2GE9"); // ✅ Use the current Measurement ID

ReactGA.send({ hitType: "pageview", page: window.location.pathname });


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (

    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default App