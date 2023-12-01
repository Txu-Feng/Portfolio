import { useEffect, useState } from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { TailSpin } from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {
        loading ?
          <div className="bg-neutral-900 h-[100vh] flex justify-center items-center">
            <TailSpin
              height={140}
              width={140}
              color="#f59e0b"
              ariaLabel="tail-spin-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
          :

          <div className="bg-neutral-900 overflow-hidden">
            <Nav />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
      }
    </>
  );
};

export default App;
