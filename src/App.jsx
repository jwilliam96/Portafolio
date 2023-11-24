import "./App.css";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Home from "./components/Home";
import MenuNav from "./components/MenuNav";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const dark = useSelector((reducer) => reducer.darkSlice);

  return (
    <article
      className={`text-text transition-all duration-1000 overflow-hidden ${
        dark
          ? "bg-[#f0efed] bg-[url('/fondo.svg')]"
          : "bg-fondo lg:bg-[url('/fondo.svg')] "
      } `}
    >
      <MenuNav />
      <Home />
      <SobreMi />
      <Proyectos />
      <Habilidades />
      <Contacto />
      <Footer />
    </article>
  );
}

export default App;
