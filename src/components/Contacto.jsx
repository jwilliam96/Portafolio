import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Contacto = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const dark = useSelector((reducer) => reducer.darkSlice);
  const refForm = useRef();
  const { register, handleSubmit, reset } = useForm();

  const submit = () => {
    const serviceId = "service_hh1pv59";
    const templateId = "template_7a9ladt";
    // 3 parametro
    const apikey = "EwAAbsfghVPxUH1jV";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then(
        (res) => (
          console.log(res.text),
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Mensaje enviado",
            showConfirmButton: false,
            timer: 1500,
          })
        )
      )
      .catch((err) => console.log(err));

    reset({
      username: "",
      lastname: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      ref={ref}
      className=" w-10/12  max-w-[1025px] m-auto pt-14 pb-20 "
      id="contacto"
    >
      <h2
        className={`transition-all duration-1000 ${
          dark &&
          "bg-luz sombra text-white py-4 rounded-2xl font-serif md:w-3/5 m-auto"
        } text-center text-4xl text-title font-bold mt-6  md:text-5xl mb-20 lg:text-6xl`}
      >
        CONTACTO
      </h2>
      <section
        className={`flex mt-20 justify-center  ${dark && "text-[#46474e]"}`}
      >
        <form
          ref={refForm}
          onSubmit={handleSubmit(submit)}
          className={`w-4/5 md:w-2/5 flex flex-col relative transition-all duration-1000 translate-x-[-100%] opacity-0 ${
            inView && "translate-x-[0] opacity-100"
          }`}
        >
          <h3 className="text-5xl mb-8">Escribeme</h3>

          <label className="pl-4 py-2" htmlFor="">
            Nombre
          </label>
          <input
            name="username"
            {...register("username")}
            className={`rounded-full  pl-4 text-gray-600 p-2 ${
              dark && "bg-[#46474e]  text-white"
            }`}
            type="text"
            required
          />

          <label className="pl-4 py-2" htmlFor="">
            Apellido
          </label>
          <input
            name="lastname"
            {...register("lastname")}
            className={`rounded-full  pl-4 text-gray-600 p-2 ${
              dark && "bg-[#46474e]  text-white"
            }`}
            type="text"
          />

          <label className="pl-4 py-2" htmlFor="">
            Correo electronico
          </label>
          <input
            name="email"
            {...register("email")}
            className={`rounded-full  pl-4 text-gray-600 p-2 ${
              dark && "bg-[#46474e]  text-white"
            }`}
            type="email"
            required
          />

          <label className="pl-4 py-2" htmlFor="">
            Mensaje
          </label>
          <textarea
            name="message"
            {...register("message")}
            className={`rounded-2xl pl-4 resize-none text-gray-600 p-2 h-[110px] lg:h-[150px] ${
              dark && "bg-[#46474e]  text-white"
            }`}
            id=""
          ></textarea>

          <button
            className={`py-2 px-8 rounded-full max-w-max m-auto my-6 bg-[#326EB0] ${
              dark && "bg-luz text-white font-bold sombra"
            }`}
          >
            Enviar ahora
          </button>
        </form>
        <figure
          ref={ref}
          className={`hidden w-2/3 p-8 md:grid place-content-center transition-all duration-1000  ${
            !inView && "translate-x-full opacity-0"
          }`}
        >
          <img src="/contact.svg" alt="" />
        </figure>
      </section>
    </section>
  );
};

export default Contacto;
