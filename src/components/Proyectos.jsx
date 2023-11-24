import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const Proyectos = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const dark = useSelector((reducer) => reducer.darkSlice);

  return (
    <>
      <section
        ref={ref}
        className=" w-11/12 m-auto flex flex-col gap-10 sm:mb-20  sm:w-1/2 md:max-w-[1025px]   lg:w-10/12 lg:gap-20  "
        id="proyecto"
      >
        <h2
          className={`transition-all duration-1000  ${
            dark && "bg-luz text-white py-4 rounded-2xl font-serif sombra"
          } text-center text-4xl text-title md:text-6xl font-bold mt-6 ss:text-5xl `}
        >
          PROYECTOS
        </h2>

        <article
          className={`transition-all duration-1000 ${
            dark ? "bg-[#000000bd] shadow-caja lg:pr-6" : "bg-[#190917]"
          } w-[290px] m-auto rounded-xl relative flex flex-col sm:w-full lg:bg-transparent lg:flex-row lg:place-content-between xl:gap-[130px] xl:place-content-stretch
          ${inView ? "translate-x-0" : "translate-x-full opacity-0"}
          `}
        >
          <div>
            <h3
              className={`transition-all duration-1000 ${
                dark ? "text-white sombra" : "text-title "
              } text-4xl font-bold text-center my-4 lg:hidden`}
            >
              Rick and morty
            </h3>
            <div
              className={`transition-all duration-1000 hidden w-ancho h-alto border-solid border-[13px] border-title absolute left-7 top-7 lg:block ${
                dark && "lg:hidden"
              }`}
            />
            <div
              className={`transition-all duration-1000 w-full h-[180px] m-auto bg-[url('/rick_morty.png')] bg-cover relative bg-center sm:w-full md:h-[200px] lg:w-[450px] lg:h-[270px] lg:rounded-none card cursor-pointer lg:shadow-caja ${
                dark &&
                "lg:my-6 lg:ml-4 lg:h-[240px] lg:shadow-2xl lg:rounded-2xl"
              }`}
            >
              <div
                className={` transition-all duration-1000 ${
                  dark ? "bg-[#613621ee]" : "bg-[#190917ee]"
                }  description`}
              >
                <h3 className={`description__title`}>Rick and Morty</h3>
                <a
                  className="description__cta"
                  href="https://rick-and-morty-api-william.netlify.app"
                  target="_blank"
                >
                  IR
                </a>
              </div>
            </div>
          </div>

          <section className="flex flex-col justify-center m-auto lg:m-0 sm:w-[340px] md:w-full lg:w-[340px] ">
            <span className="text-proyec text-2xl hidden lg:block sombra">
              PROYECTO 1
            </span>
            <h3
              className={`hidden transition-all duration-1000 text-title text-3xl font-bold ${
                dark && "lg:text-luz sombra "
              } lg:block`}
            >
              Rick and morty
            </h3>
            <p
              className={`text-center text-text m-4 lg:text-left lg:m-0 lg:mt-4 ${
                dark && "lg:text-[#46474E]"
              }`}
            >
              Es una pagina web diseñada con React donde te permitirá ver a tus
              personajes favoritos de la serie de Rick and morty. Podrás ver
              algunas caraterísticas de los personajes como su especie u origen.
            </p>
          </section>
        </article>

        <article
          className={`transition-all duration-1000 ${
            dark ? "bg-[#000000bd] shadow-caja lg:pl-6" : "bg-[#190917]"
          } w-[290px] m-auto rounded-xl flex flex-col relative sm:w-full lg:bg-transparent lg:flex-row-reverse  lg:place-content-between
          ${inView ? "translate-x-0" : "translate-x-[-100%] opacity-0"}
          `}
        >
          <div>
            <h3
              className={`transition-all duration-1000 ${
                dark ? "text-white sombra" : "text-title "
              } text-center lg:text-left text-4xl font-bold my-4 lg:hidden`}
            >
              Pokedex
            </h3>
            <div
              className={`transition-all duration-1000 hidden w-ancho h-alto border-solid border-[13px] border-title right-7 top-7 ${
                dark && "lg:hidden"
              } lg:block lg:absolute `}
            />

            <div
              className={` w-full h-[180px] m-auto relative bg-[url('/pokemons.png')] bg-cover bg-center md:h-[200px] lg:w-[450px] lg:h-[270px] card cursor-pointer lg:shadow-cajados ${
                dark &&
                "lg:my-6 lg:mr-4 lg:h-[240px] lg:shadow-2xl lg:rounded-2xl"
              }`}
            >
              <div
                className={`transition-all duration-1000 ${
                  dark ? "bg-[#613621ee]" : "bg-[#190917ee]"
                } description`}
              >
                <h3 className="description__title">Pokedex</h3>
                <a
                  className="description__cta"
                  href="https://pokedex-api-william.netlify.app"
                  target="_blank"
                >
                  IR
                </a>
              </div>
            </div>
          </div>

          <section className="sm:w-[340px] md:w-full lg:w-[340px] flex flex-col justify-center m-auto lg:m-0">
            <span className="hidden lg:block text-proyec text-2xl sombra">
              PROYECTO 2
            </span>
            <h3
              className={`transition-all duration-1000 hidden lg:block text-title text-3xl font-bold ${
                dark && "lg:text-luz sombra"
              }`}
            >
              Pokedex
            </h3>
            <p
              className={`transition-all duration-1000 text-center  text-text m-4 lg:text-left lg:m-0 lg:mt-4 ${
                dark && "lg:text-[#46474E]"
              }`}
            >
              En esta pagina podrás encontrar a tu pokemon favorito de la serie
              de pokemon, y podrás ver sus características como su poder de
              ataque, defensa, tipo, habilidades y muchas más. Esta pagina esta
              diseñada con React, Redux, React router.
            </p>
          </section>
        </article>

        <article
          className={`transition-all duration-1000 ${
            dark ? "bg-[#000000bd] shadow-caja lg:pr-6" : "bg-[#190917]"
          } w-[290px] m-auto rounded-xl relative flex flex-col sm:w-full lg:bg-transparent lg:flex-row lg:place-content-between xl:gap-[130px] xl:place-content-stretch
           ${inView ? "translate-x-0" : "translate-x-full opacity-0"}
          `}
        >
          <div>
            <h3
              className={`transition-all duration-1000 ${
                dark ? "text-white sombra" : "text-title "
              } text-4xl font-bold text-center my-4 lg:hidden`}
            >
              Blog de mascota
            </h3>
            <div
              className={`transition-all duration-1000 hidden w-ancho h-alto border-solid border-[13px] border-title absolute left-7 top-7 lg:block ${
                dark && "lg:hidden"
              }`}
            />
            <div
              className={`transition-all duration-1000 w-full h-[180px] m-auto bg-[url('/blog.png')] bg-cover relative
            bg-center sm:w-full md:h-[200px] lg:w-[450px] lg:h-[270px]
            lg:rounded-none card cursor-pointer lg:shadow-caja ${
              dark &&
              "lg:my-6 lg:ml-4 lg:h-[240px] lg:shadow-2xl lg:rounded-2xl"
            }`}
            >
              <div
                className={`transition-all duration-1000 ${
                  dark ? "bg-[#613621ee]" : "bg-[#190917ee]"
                } description`}
              >
                <h3 className="description__title">Blog de Mascota</h3>
                <a
                  className="description__cta"
                  href="https://blog-william-sanchez.netlify.app"
                  target="_blank"
                >
                  IR
                </a>
              </div>
            </div>
          </div>

          <section className="sm:w-[340px] md:w-full lg:w-[340px] flex flex-col justify-center m-auto lg:m-0">
            <span className="text-proyec text-2xl hidden lg:block sombra">
              PROYECTO 3
            </span>
            <h3
              className={`transition-all duration-1000 hidden lg:block text-title text-3xl font-bold ${
                dark && "lg:text-luz sombra"
              }`}
            >
              Blog de mascota
            </h3>
            <p
              className={`transition-all duration-1000 text-center  text-text m-4 lg:text-left lg:m-0 lg:mt-4 ${
                dark && "lg:text-[#46474E]"
              }`}
            >
              Blog de mascotas es una pagina web donde podrás exhibir a tus
              mascotas, teniendo una interacción con tus usuarios de una manera
              fácil y eficaz . Realizado con JavaScript Vanilla
            </p>
          </section>
        </article>

        <article
          className={`transition-all duration-1000 ${
            dark ? "bg-[#000000bd] shadow-caja lg:pl-6" : "bg-[#190917]"
          } w-[290px] m-auto rounded-xl flex flex-col relative sm:w-full lg:bg-transparent lg:flex-row-reverse  lg:place-content-between
           ${inView ? "translate-x-0" : "translate-x-[-100%] opacity-0"}
          `}
        >
          <div>
            <h3
              className={`transition-all duration-1000 ${
                dark ? "text-white sombra" : "text-title "
              } text-center lg:text-left text-4xl font-bold my-4 lg:hidden`}
            >
              Galleta de la fortuna
            </h3>
            <div
              className={`transition-all duration-1000 hidden w-ancho h-alto border-solid border-[13px] border-title right-7 top-7 ${
                dark && "lg:hidden"
              } lg:block lg:absolute `}
            />
            <div
              className={`w-full h-[180px] m-auto relative bg-[url('/galleta.png')] bg-cover
            bg-center md:h-[200px] lg:w-[450px] lg:h-[270px] card cursor-pointer lg:shadow-cajados ${
              dark &&
              "lg:my-6 lg:mr-4 lg:h-[240px] lg:shadow-2xl lg:rounded-2xl"
            }`}
            >
              <div
                className={`transition-all duration-1000 ${
                  dark ? "bg-[#613621ee]" : "bg-[#190917ee]"
                } description`}
              >
                <h3 className="description__title">Galleta de la fortuna</h3>
                <a
                  className="description__cta"
                  href="https://galleta-fortuna-william.netlify.app"
                  target="_blank"
                >
                  IR
                </a>
              </div>
            </div>
          </div>

          <section className="sm:w-[340px] md:w-full lg:w-[340px] flex flex-col justify-center m-auto lg:m-0">
            <span className="hidden lg:block text-proyec text-2xl sombra">
              PROYECTO 4
            </span>
            <h3
              className={`transition-all duration-1000 hidden lg:block text-title text-3xl font-bold ${
                dark && "lg:text-luz sombra"
              }`}
            >
              Galleta de la fortuna
            </h3>
            <p
              className={`transition-all duration-1000 text-center  text-text m-4 lg:text-left lg:m-0 lg:mt-4 ${
                dark && "lg:text-[#46474E]"
              }`}
            >
              Prueba tu suerte con esta increíble pagina de la galleta de la
              fortuna. Comparte con tus amigos y diviértete descubriendo los
              diferentes mensajes que te depara el destino.
            </p>
          </section>
        </article>

        {/* <button className="bg-proyec">MAS ⬇️</button> */}
      </section>
      <div className="text-center text-4xl py-12 text-proyec">
        <a
          className="animate-bounce w-full bx bxs-chevron-right-circle "
          href="https://github.com/jwilliam96?tab=repositories"
          target="_blank"
        >
          <span className="ml-4 w-full sombra">Ver mas</span>
        </a>
      </div>
    </>
  );
};

export default Proyectos;
