import { useInView } from "react-intersection-observer";
import {
  SvgHtml,
  SvgCss,
  SvgJs,
  SvgNode,
  SvgReact,
  SvgPostgres,
} from "./SvgComponents";
import { useSelector } from "react-redux";

const Habilidades = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const dark = useSelector((reducer) => reducer.darkSlice);

  return (
    <section
      ref={ref}
      className="w-11/12 m-auto text-text pt-10  sm:w-1/2 sm:max-w-[1025px] lg:w-7/12"
      id="habilidades"
    >
      <h2
        className={`transition-all duration-1000 ${
          dark && "bg-luz sombra text-white py-4 rounded-2xl font-serif"
        } text-center text-4xl text-title font-bold mt-6  md:text-5xl lg:text-6xl`}
      >
        HABILIDADES
      </h2>
      <article className=" mt-20 ss:w-1/2 ss:m-auto ss:mt-14 lg:flex lg:flex-wrap lg:gap-8 lg:place-content-between ">
        <div
          ref={ref}
          className={`mb-8 lg:w-[260px] opacity-0 transition-opacity duration-1000 ${
            inView && "opacity-100 "
          }`}
        >
          <h3
            className={`text-proyec text-3xl text-center font-bold ${
              dark ? "" : "neon-azul"
            }`}
          >
            HTML
          </h3>
          <figure className="w-[150px] h-[150px] m-auto ">
            <SvgHtml dark={dark} />
          </figure>
          <p className={`${dark && "text-[#46474E]"} mt-4 text-center`}>
            Es fundamental en el desarrollo web y sirve como base para la
            creación de sitios y aplicaciones en línea.
          </p>
        </div>

        <div
          className={`mb-8 lg:w-[260px] opacity-0 transition-opacity duration-1000 ${
            inView && "opacity-100 "
          }`}
        >
          <h3
            className={`text-proyec text-3xl text-center font-bold ${
              !dark && "neon-azul"
            }`}
          >
            JAVASCRIPT
          </h3>
          <figure className="w-[150px] h-[150px] m-auto ">
            <SvgJs dark={dark} />
          </figure>
          <p className={`${dark && "text-[#46474E]"} mt-4 text-center`}>
            Permite a los desarrolladores controlar el comportamiento de los
            elementos de una página. Es esencial para la creación de
            aplicaciones web interactivas.
          </p>
        </div>

        <div
          className={`mb-8 lg:w-[260px] opacity-0 transition-opacity duration-1000 ${
            inView && "opacity-100 "
          }`}
        >
          <h3
            className={`text-proyec text-3xl text-center font-bold ${
              !dark && "neon-azul"
            }`}
          >
            CSS
          </h3>
          <figure className="w-[150px] h-[150px] m-auto ">
            <SvgCss dark={dark} />
          </figure>
          <p className={`${dark && "text-[#46474E]"} mt-4 text-center`}>
            Permite separar la estructura del contenido (definida en HTML), lo
            que facilita el diseño y la personalización de páginas web.
          </p>
        </div>

        <div
          className={`mb-8 lg:w-[260px] opacity-0 transition-opacity duration-1000 ${
            inView && "opacity-100 "
          }`}
        >
          <h3
            className={`text-proyec text-3xl text-center font-bold ${
              !dark && "neon-azul"
            }`}
          >
            NODE.JS
          </h3>
          <figure className="w-[150px] h-[150px] m-auto ">
            <SvgNode dark={dark} />
          </figure>
          <p className={`${dark && "text-[#46474E]"} mt-4 text-center`}>
            Es especialmente útil para aplicaciones en tiempo real y aquellas
            que requieren una alta concurrencia, como aplicaciones de chat,
            juegos en línea y servicios web.
          </p>
        </div>

        <div
          className={`mb-8 lg:w-[260px] opacity-0 transition-opacity duration-1000 ${
            inView && "opacity-100 "
          }`}
        >
          <h3
            className={`text-proyec text-3xl text-center font-bold ${
              !dark && "neon-azul"
            }`}
          >
            REACT
          </h3>
          <figure className="w-[150px] h-[150px] m-auto ">
            <SvgReact dark={dark} />
          </figure>
          <p className={`${dark && "text-[#46474E]"} mt-4 text-center`}>
            Se utiliza para crear interfaces de usuario interactivas y dinámicas
            en aplicaciones web, facilita la actualización y renderización
            eficiente de componentes en respuesta a cambios de datos
          </p>
        </div>

        <div
          className={`pb-8 lg:w-[260px] opacity-0 transition-opacity duration-1000 ${
            inView && "opacity-100 "
          }`}
        >
          <h3
            className={`text-proyec text-3xl text-center font-bold ${
              !dark && "neon-azul"
            }`}
          >
            POSTGRES SQL
          </h3>
          <figure className="w-[150px] h-[150px] m-auto ">
            <SvgPostgres dark={dark} />
          </figure>
          <p className={`${dark && "text-[#46474E]"} mt-4 text-center`}>
            Se utiliza para almacenar, organizar y gestionar datos de manera
            eficiente y segura. Es una opción popular para aplicaciones web y
            empresariales que requieren una base de datos confiable y de alto
            rendimiento.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Habilidades;
