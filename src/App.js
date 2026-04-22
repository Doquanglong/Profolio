import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;