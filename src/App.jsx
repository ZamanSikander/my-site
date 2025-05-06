// import ComingSoon from "./components/CominSoon";
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
      {/* <ComingSoon/> */}
      <Navbar />
      <Hero />
      <Skills />
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