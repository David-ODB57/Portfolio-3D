import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha"
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const refCaptcha = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target)
    const { target } = e;
    const { name, value } = target;
    
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const token = refCaptcha.current.getValue();
      
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "David",
          from_email: form.email,
          to_email: "contact@davidbroccoli.fr",
          message: form.message,
          'g-recaptcha-response': token
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setLoading(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
            refCaptcha.current.reset();
            alert("Message envoyé avec succès.");
          } else {
            alert("Erreur emailJS, veuillez réessayer plus tard.");
          }
        },
        (error) => {
          setLoading(false);
          alert(`${error}. Veuillez réessayer.`);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Entrons en contact</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={submitForm}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nom</span>
            <input
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="votre nom"
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="votre email"
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              rows={10}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='votre message'
              required
            />
          </label>
          <ReCAPTCHA
            ref={refCaptcha}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            // onChange={sendMail}
          />
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "En cours..." : "Envoyer"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");