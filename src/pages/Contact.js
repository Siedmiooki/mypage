import { motion } from "framer-motion";
import { pageAnim, photoAnim2, fadeAnim2, pAnim } from "../pageAnimation";
// import { HideStyled } from "../styles"
import styled from "styled-components"
import ScrollTop from "../components/ScrollTop";
import { StyledEmailIcon, StyledLinkedinSquare, StyledGithubSquare, StyledFacebookSquare } from "../styles";
import { useForm } from "react-hook-form"
import axios from "axios"


const Contact = () => {

    const { register, handleSubmit, reset } = useForm();
    const sendMessage = async data => {
        await axios.get('https://us-central1-myhomepagemailsender.cloudfunctions.net/sendMail', {
            params: {
                name: data.name,
                email: data.email,
                message: data.message
            }
        }).then(res => { console.log(res); reset() }).catch(err => console.log(err))
    };

    return (
        <ContactStyled variants={pageAnim} initial="hidden" animate="show" exit="exit">
            <SocialContainerStyled>
                <SocialStyled variants={photoAnim2} onHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}>
                    <a href="mailto:karpowicz.jan@gmail.com">
                        <StyledEmailIcon />
                    </a>
                    <motion.p variants={fadeAnim2}>Send me an email</motion.p>
                </SocialStyled>
                <SocialStyled variants={photoAnim2}>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <StyledLinkedinSquare />
                    </a>
                    <motion.p variants={fadeAnim2}>Contact me on LinkedIn</motion.p>
                </SocialStyled>
                <SocialStyled variants={photoAnim2}>
                    <a href="https://github.com/Siedmiooki" target="_blank" rel="noreferrer">
                        <StyledGithubSquare />
                    </a>
                    <motion.p variants={fadeAnim2}>Check out my GitHub repositories</motion.p>
                </SocialStyled>
                <SocialStyled variants={photoAnim2}>
                    <a href="http://m.me/filip.karp.777" target="_blank" rel="noreferrer">
                        <StyledFacebookSquare />
                    </a>
                    <motion.p variants={fadeAnim2}>Text me on FB Messenger</motion.p>
                </SocialStyled>
            </SocialContainerStyled>
            <FormContainerStyled onSubmit={handleSubmit(sendMessage)}>
                <FormBoxStyled>
                    <InputStyled variants={pAnim} type="name" minLength="3" required {...register("name")} placeholder="name" />

                    <InputStyled variants={pAnim} type="email" required {...register("email")} placeholder="e-mail"></InputStyled>

                    <TextareaStyled variants={pAnim} rows="11" placeholder="message" required minLength="40" {...register("message")}></TextareaStyled>

                    <ButtonStyled variants={fadeAnim2}>Send</ButtonStyled>
                </FormBoxStyled>
            </FormContainerStyled>
            <ScrollTop />
        </ContactStyled>
    );
}

const ButtonStyled = styled(motion.button)`
    background: #FFA41B;
    color: black;
    margin-top: 1rem;
:hover{
        background: transparent;
        color: white;
}

`

const TextareaStyled = styled(motion.textarea)`
    padding: 1rem 1rem;
    color: #ccc;
    background: black;
    font-size: 1.2rem;
    line-height: 150%;
    border: 3px solid #FFA41B;
::placeholder {
        font-size: 1.1rem;
}
:focus::-webkit-input-placeholder {
    color: white;
}
::-webkit-scrollbar {
    width: 0.5rem;
}
::-webkit-scrollbar-thumb {
    background-color: darkgrey
}
::-webkit-scrollbar-track {
    background-color: black
}
:invalid {
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
}
:valid {
    box-shadow: rgba(3, 253, 3, 0.418) 5px 5px, rgba(101, 240, 46, 0.3) 10px 10px, rgba(69, 236, 47, 0.2) 15px 15px, rgba(46, 240, 78, 0.1) 20px 20px, rgba(122, 207, 25, 0.05) 25px 25px;
}
`

const InputStyled = styled(motion.input)`
    padding: 1rem 1rem;
    color: #ccc;
    background: black;
    font-size: 1.2rem;
    line-height: 150%;
    border: 3px solid #FFA41B;
    /* position: relative; */
::placeholder {
        font-size: 1rem;
}
:focus::-webkit-input-placeholder {
    color: #2e2c2c;
}
:invalid {
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
}
:valid {
    box-shadow: rgba(3, 253, 3, 0.418) 5px 5px, rgba(101, 240, 46, 0.3) 10px 10px, rgba(69, 236, 47, 0.2) 15px 15px, rgba(46, 240, 78, 0.1) 20px 20px, rgba(122, 207, 25, 0.05) 25px 25px;
}

`

const FormBoxStyled = styled(motion.form)`
display: flex;
flex-direction: column;
width: 60%;
gap: 1rem;
background: black;
padding: 3rem 2rem;
border-radius: 2%;
min-width: 25rem;
max-width: 30rem;
@media ( max-width: 1300px ) {
    padding: 0rem;
}
`

const FormContainerStyled = styled(motion.div)`
background: black;
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media ( max-width: 1300px ) {
    padding: 2rem 0rem 4rem 0rem;
}
`

const ContactStyled = styled(motion.div)`
display: flex;
padding: 5rem 10rem;
background: black;
min-height: 90vh;
@media ( max-width: 1300px ) {
    flex-direction: column-reverse;
    padding: 2rem;
    align-items: center;
    }
`

const SocialContainerStyled = styled(motion.div)`
flex: 2;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
@media ( max-width: 1300px ) {
    padding: 0rem 1rem;
}
`
const SocialStyled = styled(motion.div)`
/* background: #282828; */
padding: 1rem;
display: flex;
justify-content: flex-start;
align-items: center;
p {
    padding: 0rem 1rem;
@media ( max-width: 1300px ) {
    font-size: 1rem;
 }
}
`




// const Hide = styled.div`
// overflow: hidden;
// `


export default Contact;