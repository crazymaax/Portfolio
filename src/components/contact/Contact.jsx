import { ContactContainer, ContactOption, ContactsBox, ContactSection, FormStyled } from "./styled"

import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_iyezwbx", "template_bh3m111", form.current, "0UVudnl16MP0X2jib")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

    return (
        <ContactSection id="contact">
            <h5>Entre em</h5>
            <h2>Contato</h2>

            <ContactContainer>
                <ContactsBox>
                    <ContactOption>
                        <div>
                            <span><MdOutlineEmail /></span>
                            <h4>Email</h4>
                        </div>
                        <h5>maxmilan10@hotmail.com</h5>
                        <a href="mailto:maxmilan10@hotmail.com" target="_blank">Envie um email</a>
                    </ContactOption>

                    <ContactOption>
                        <div>
                            <span><BsWhatsapp /></span>
                            <h4>WhatsApp</h4>
                        </div>
                        <h5>+55 (12) 98898-8035</h5>
                        <a href="https://wa.me/5512988988035" target="_blank">Envie uma mensagem</a>
                    </ContactOption>

                </ContactsBox>

                <FormStyled ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Seu nome" />
                    <input type="email" name="email" placeholder="Seu email" />
                    <textarea name="message" rows="7" placeholder="Sua mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </FormStyled>
            </ContactContainer>
        </ContactSection>
    )
}

export default Contact