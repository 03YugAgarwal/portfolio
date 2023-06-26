import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills";

// import styles from "./App.module.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <span className={styles.blurOverlay1}></span> */}
      <Navbar />
      <Header />
      {/* <span className={styles.blurOverlay2}></span> */}
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
