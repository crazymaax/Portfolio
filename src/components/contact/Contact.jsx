import { ContactContainer, ContactOption, ContactsBox, ContactSection, FormStyled } from "./styled"

import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"

const Contact = () => {

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
                        <a href="mailto:maxmilan10@hotmail.com" target="_blank">Envie uma mensagem</a>
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

                <FormStyled action="">
                    <input type="text" name="name" placeholder="Seu nome" />
                    <input type="email" name="email" placeholder="Seu email" />
                    <textarea name="message" rows="7" placeholder="Sua mensagem"></textarea>
                    <button type="submit">Envie a mensagem</button>
                </FormStyled>
            </ContactContainer>
        </ContactSection>
    )
}

export default Contact