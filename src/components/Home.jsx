import { useSelector } from "react-redux";
import { SvgSeparador } from "./SvgComponents";

const Home = () => {
  const dark = useSelector((reducer) => reducer.darkSlice);
  const gmailwilliam = "jwsa.web@gmail.com";

  return (
    <section
      className={`relative transition-all duration-1000 text-text pb-28 md:mb-10 md:h-screen md:bg-cover md:bg-fixed md:bg-center ${
        dark ? "md:bg-[url('/pc.jpg')] " : "md:bg-[url('/home.jpg')]"
      } `}
      id="inicio"
    >
      <figure className="hidden md:block">
        <SvgSeparador dark={dark} />
      </figure>
      <figure className="md:hidden">
        <img src={` ${dark ? "/pc.jpg" : "/home.jpg"}`} alt="" />
      </figure>
      <div className="bg-[#000000bd] h-[30vh] grid place-content-center md:bg-transparent md:block">
        <h1 className=" px-8 pt-4 text-center font-bold  text-3xl md:text-6xl  header__title ">
          JOHN WILLIAM SANCHEZ
        </h1>
        <p className="text-center text-xl p-3 text-title md:text-4xl header__title">
          Desarrollador web Front-End
        </p>
        <div className=" flex justify-center gap-6 pt-4 md:hidden">
          <a
            href="https://github.com/jwilliam96"
            className={`bx bxl-github text-4xl transition-all duration-1000 ${
              dark ? "" : "icon-neon"
            }`}
          ></a>
          <a
            href="http://linkedin.com/in/john-william-sanchez-atehortua-181aa5288"
            className={`bx bxl-linkedin text-4xl transition-all duration-1000 ${
              dark ? "" : "icon-neon"
            }`}
          ></a>
          <a
            href="https://api.whatsapp.com/send?phone=3115106911"
            className={`bx bxl-whatsapp text-4xl transition-all duration-1000 ${
              dark ? "" : "icon-neon"
            }`}
          ></a>
          <a
            target="_blank"
            href={`mailto:${gmailwilliam}`}
            className={`bx bx-envelope text-4xl transition-all duration-1000 ${
              dark ? "" : "icon-neon"
            }`}
          ></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
