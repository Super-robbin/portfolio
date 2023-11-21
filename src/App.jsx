import "./App.css";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
