import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutStyled, DescriptionStyled, ImageBoxContainer, HideStyled, ImageBoxStyled, StyledJsSquare, StyledHtml5, StyledCss3Alt, StyledReactLogo, StyledNpm, StyledVisualStudio, StyledStyledComponents, StyledFramer, StyledGithub, StyledRedux, AnimIconBox } from "../styles";
import { titleAnim, fadeAnim, photoAnim2, photoAnim3, } from "../pageAnimation";
import Waves from "./Waves";

const AboutSection = () => {
    return (
        <LayoutStyled>
            <DescriptionStyled>
                <motion.div className="title">
                    <HideStyled>
                        <motion.h2 variants={titleAnim}>Hello! I`m self-taught</motion.h2>
                    </HideStyled>
                    <HideStyled>
                        <motion.h2 variants={titleAnim}>aspiring <span>front-end</span></motion.h2>
                    </HideStyled>
                    <HideStyled>
                        <motion.h2 variants={titleAnim}>developer.</motion.h2>
                    </HideStyled>
                </motion.div>
                <motion.p variants={fadeAnim}>Currently looking for my first job as a <span>react</span> developer. Technology I use:</motion.p>
                <Link to="/contact">
                    <motion.button variants={fadeAnim}>Contact me</motion.button>
                </Link>
            </DescriptionStyled>
            <ImageBoxContainer>
                <ImageBoxStyled >
                    <AnimIconBox variants={photoAnim2}>
                        <StyledReactLogo />
                    </AnimIconBox>
                    <AnimIconBox variants={photoAnim2}>
                        <StyledRedux />
                    </AnimIconBox>
                    <AnimIconBox variants={photoAnim2}>
                        <StyledJsSquare />
                    </AnimIconBox>
                    <AnimIconBox variants={photoAnim2}>
                        <StyledHtml5 />
                    </AnimIconBox>
                    <AnimIconBox variants={photoAnim2}>
                        <StyledCss3Alt />
                    </AnimIconBox>
                </ImageBoxStyled>
                <ImageBoxStyled>
                    <AnimIconBox variants={photoAnim3}>
                        <StyledFramer />
                    </AnimIconBox>
                    <AnimIconBox variants={photoAnim3}>
                        <StyledStyledComponents />
                    </AnimIconBox>
                    <AnimIconBox variants={photoAnim3}>
                        <StyledNpm />
                    </AnimIconBox>
                    <AnimIconBox variants={photoAnim3}>
                        <StyledVisualStudio />
                    </AnimIconBox>
                    <AnimIconBox variants={photoAnim3}>
                        <StyledGithub />
                    </AnimIconBox>
                </ImageBoxStyled>

            </ImageBoxContainer>
            <Waves />
        </LayoutStyled>
    );
}



export default AboutSection;