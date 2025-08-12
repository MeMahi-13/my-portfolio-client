import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./home/About";
import Banner from "./home/Banner";
import Contact from "./home/Contact";
import Projects from "./home/Projects";
import Skills from "./home/Skills";

const App = () => {
  return (
    <div>
       <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
  );
};

export default App;