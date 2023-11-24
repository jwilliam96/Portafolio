import { useInView } from "react-intersection-observer";
import { SvgHombre } from "./SvgComponents";
import { useSelector } from "react-redux";

const SobreMi = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const dark = useSelector((reducer) => reducer.darkSlice);

  return (
    <>
      <section
        className="w-10/12  max-w-[1025px] m-auto pb-32 pt-8"
        id="sobremi"
      >
        <h2
          className={`transition-all duration-1000 ${
            dark &&
            "bg-luz text-white py-4 rounded-2xl font-serif md:w-3/5 m-auto"
          } text-center text-4xl text-title font-bold mt-6  md:text-5xl mb-20 lg:text-6xl`}
        >
          SOBRE MÍ
        </h2>
        <div ref={ref} className="flex flex-col md:flex-row ">
          <SvgHombre dark={dark} />

          <p
            className={`text-center grid place-content-center relative transition-all duration-1000 ${
              inView
                ? "translate-x-0 opacity-100"
                : "translate-x-[100%]  opacity-0"
            } ${dark && "text-[#46474e]"} md:w-1/2 `}
          >
            Hola! Soy John William Sanchez. Me desempeño como desarrollador full
            stack, manejando diferentes tecnologías que me permita crear una
            página web con interfaz de usuario que sea interactiva, dinámica,
            rápida y eficaz utilizando: React, Vite, JavaScript, node.Js, Html,
            Css. <br /> <br /> Además de manejar gestión de bases de datos como:
            Postgres.SQL, Node.js, Sequelize, Firebase entre otras con el fin de
            obtener robustez, flexibilidad y capacidad para manejar una amplia
            gama de necesidades de almacenamiento y recuperación de datos.
            <br />
            <br /> Soy una persona dedicada y apasionada en el tema de la
            programación, me gustan los retos y puestos desafiantes donde me
            exige aprender y mejorar cada día. Me considero una persona
            proactiva, con capacidad de escucha y muy enfocada en lo que me
            propongo.
          </p>
        </div>
      </section>
    </>
  );
};

export default SobreMi;
