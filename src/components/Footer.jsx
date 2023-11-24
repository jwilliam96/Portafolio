import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000bd] " id="footer">
      <article className="md:flex place-content-evenly">
        <section className="py-4 ">
          <h3 className="text-center text-2xl font-bold text-title pb-3">
            CONTACTO
          </h3>
          <div className="max-w-max m-auto">
            <div className="flex items-center">
              <img
                className="w-[30px] inline mx-2"
                src="/ubicacion.svg"
                alt=""
              />
              <span> Medellin - Colombia</span>
            </div>
            <div className="flex items-center">
              <i className="bx bxl-whatsapp text-xl px-3"></i>
              <span>+57 311-510-69-11</span>
            </div>
            <div className="flex items-center">
              <i
                className="bx bxl-linkedin-square text-xl px-3"
                target="_blank"
              ></i>
              <a href="https://linkedin.com/in/john-william-sanchez-atehortua-181aa5288">
                linkedin/john-william-sanchez
              </a>
            </div>
            <div className="flex items-center">
              <i className="bx bxs-envelope text-xl px-3"></i>
              <span>jwsa.web@gmail.com</span>
            </div>
          </div>
        </section>

        <section className="hidden md:block">
          <h3 className="text-center text-2xl font-bold text-title py-3">
            OTROS PROYECTOS
          </h3>
          <ul className="text-center">
            <li>Api del clima</li>
            <li>E-commers</li>
            <li>Blog de notas</li>
            <li></li>
          </ul>
        </section>

        <section className="pb-4 md:py-4">
          <h3 className="text-center text-2xl font-bold text-title pb-3">
            CERTIFICADOS
          </h3>
          <ul className="flex justify-center gap-8 md:block">
            <li className="hidden md:inline">Programacion desde cero</li>
            <li>
              Front-End{" "}
              <span className="hidden md:inline">Web Development</span>
            </li>
            <li>
              Back-End <span className="hidden md:inline">Web Development</span>
            </li>
            <li>
              Full-Stack{" "}
              <span className="hidden md:inline">Web Development</span>
            </li>
          </ul>
        </section>
      </article>

      <section className="text-center text-[#d7d542] p-6">
        <p>
          © 2023 <span>William</span> - Todos los derechos reservados
        </p>
      </section>
    </footer>
  );
};

export default Footer;
