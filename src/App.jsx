import Navbar from "./component/Navbar";
import About from "./section/About";
import Ads from "./section/Ads";
import Comapanie from "./section/Companie";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Learning from "./section/Learning";
import Testi from "./section/Testi";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Learning />
      <About />
      <Comapanie />
      <Testi />
      <Ads />
      <Footer />
    </>
  );
}

export default App;
