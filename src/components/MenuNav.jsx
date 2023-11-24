import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkG } from "../store/slices/dark.slice";

const MenuNav = () => {
  const dark = useSelector((reducer) => reducer.darkSlice);

  const [close, setClose] = useState(false);

  const dispatch = useDispatch();

  const handleDark = () => {
    dispatch(setDarkG(!dark));
  };

  const handleClose = () => {
    setClose(!close);
  };

  return (
    <nav>
      <div>
        <i
          className={`scale-100 p-4  ${
            close
              ? "bx bxs-x-circle fixed z-50 right-2 bottom-4 scale-0 text-4xl duration-1000 cursor-pointer  md:top-0"
              : "bx bx-menu max-h-max caja fixed z-50 right-4 scale-0 text-6xl lg:text-7xl bottom-6 text-yellow-300 duration-1000 cursor-pointer md:top-4"
          } `}
          onClick={handleClose}
        ></i>
      </div>

      <div className="max-w-max fixed z-20 bg-[#313030] rounded-full top-8 right-4 md:left-4">
        <div
          onClick={handleDark}
          className={`flex gap-6 border-[3px] rounded-3xl py-1 px-2 relative cursor-pointer ${
            dark ? "bg-black border-black" : "bg-black border-black"
          }`}
        >
          <div
            className={`bg-green-600 w-5 h-5 rounded-full absolute top-2  transition-all duration-1000 lg:w-7 lg:h-7 lg:top-[0.3rem] ${
              dark && " translate-x-11 lg:translate-x-12"
            }`}
          ></div>
          <i className="bx bxs-moon text-xl lg:text-2xl "></i>
          <i className="bx bxs-sun text-xl lg:text-2xl text-yellow-500"></i>
        </div>
      </div>

      <div
        className={`bg-[#34102e] shadow-[0_0_20px_0_#ffffff50]  fixed z-40 h-full right-0 flex flex-col duration-1000 ${
          !close && "translate-x-full duration-1000"
        }`}
      >
        <h3 className="bg-[#000000bd] text-3xl font-bold pt-8 px-6 pb-4 text-center md:text-4xl md:pt-20">
          John Sanchez
        </h3>
        <div className=" bg-[#000000bd] flex justify-center gap-6 py-6">
          <a
            target="_blank"
            href="https://github.com/jwilliam96"
            className={`bx bxl-github text-3xl  md:text-5xl ${
              !dark && "icon-neon"
            }`}
          ></a>
          <a
            target="_blank"
            href="https://linkedin.com/in/john-william-sanchez-atehortua-181aa5288"
            className={`bx bxl-linkedin text-3xl  md:text-5xl ${
              !dark && "icon-neon"
            }`}
          ></a>
          <a
            href="https://api.whatsapp.com/send?phone=3115106911"
            className={`bx bxl-whatsapp text-3xl  md:text-5xl ${
              !dark && "icon-neon"
            }`}
          ></a>
        </div>

        <article className="grid h-full pb-12 place-content-evenly text-xl md:w-[370px] bg-[#000000bd]">
          <section className="flex items-center ">
            <i className="bx bx-home text-2xl pr-4"></i>
            <a className="text-xl" href="#inicio">
              Inicio
            </a>
          </section>
          <section className="flex items-center">
            <i className="bx bx-window-alt text-2xl pr-4"></i>
            <a className="text-xl" href="#proyecto">
              Poyectos
            </a>
          </section>
          <section className="flex items-center">
            <i className="bx bxs-bar-chart-alt-2 text-2xl pr-4 "></i>
            <a className="text-xl" href="#habilidades">
              Habilidades
            </a>
          </section>
          <section className="flex items-center">
            <i className="bx bx-user text-2xl pr-4 "></i>
            <a className="text-xl" href="#sobremi">
              Sobre mí
            </a>
          </section>
          <section className="flex items-center">
            <i className="bx bxs-envelope text-2xl pr-4 "></i>
            <a className="text-xl" href="#contacto">
              Contacto
            </a>
          </section>
        </article>
      </div>
    </nav>
  );
};

export default MenuNav;
