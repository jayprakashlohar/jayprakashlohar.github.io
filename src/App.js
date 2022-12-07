import "./App.css";
import Zoom from "react-reveal/Zoom";
import { About } from "./Routes/About";
import { Stats } from "./Routes/Stats";
import { Skills } from "./Routes/Skills";
import { Footer } from "./Routes/Footer";
import { Navbar } from "./Routes/Navbar";
import { LottieAnimation } from "./Routes/LottieAnimation";
import { Projects } from "./Routes/Projects";
import { useState, useEffect } from "react";
import { Calender } from "./Routes/Calender";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return loading ? (
    <LottieAnimation />
  ) : (
    <>
      <Navbar />
      <Zoom>
        <About />
      </Zoom>
      <Zoom>
        <Skills />
      </Zoom>
      <Zoom>
        <Projects />
      </Zoom>
      <Zoom>
        <Stats />
      </Zoom>
      <Zoom>
        <Calender />
      </Zoom>
      <Footer />
    </>
  );
}
