import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="portfolioSections">
        <section id="home" className="portfolioSection">
          <Home />
        </section>
        <section id="about" className="portfolioSection">
          <About />
        </section>
        <section id="skills" className="portfolioSection">
          <Skills />
        </section>
        <section id="projects" className="portfolioSection">
          <Projects />
        </section>
        <section id="contact" className="portfolioSection">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
