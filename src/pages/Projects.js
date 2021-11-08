import styled from "styled-components";
import { Link } from "react-router-dom";
import crypto_hq from "../img/cryptoHQ_big.jpg";
import igdb_app from "../img/igdb_app_big.jpg";
import player_app from "../img/player_app_big2.jpg";
import homepage1 from "../img/homepage_big.jpg";
import { motion } from "framer-motion";
import { pageAnim, fadeAnim, lineAnim, lineAnim2, lineAnim3, photoAnim, frameAnim, frameContainer } from "../pageAnimation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
import { ZoomIn } from "@styled-icons/bootstrap/ZoomIn";


const MyProjects = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();

    return (
        <ProjectContainerStyled variants={pageAnim} initial="hidden" animate="show" exit="exit">
            {/* <motion.div variants={frameContainer}>
                <Frame1 variants={frameAnim}>
                    <motion.img variants={photoAnim} src={igdb_app} alt="igdb_app" />
                </Frame1>
                <Frame2 variants={frameAnim}>
                    <motion.img variants={photoAnim} src={player_app} alt="player_app" />
                </Frame2>
                <Frame3 variants={frameAnim}>
                    <motion.img variants={photoAnim} src={homepage1} alt="homepage" />
                </Frame3>
            </motion.div> */}
            <ProjectStyled>
                <motion.h2 variants={fadeAnim}>Crypto HQ App</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <motion.div variants={lineAnim2} className="line"></motion.div>
                <motion.div variants={lineAnim3} className="line"></motion.div>
                <Link to="/work/crypto_hq">
                    <HideStyled>
                        <motion.img variants={photoAnim} src={crypto_hq} alt="crypto_hq" />
                        <ClickMeStyled>
                            <ZoomInStyled />
                            <h1>PROJECT DETAILS</h1>
                        </ClickMeStyled>
                    </HideStyled>
                </Link>
            </ProjectStyled>
            <ProjectStyled ref={element} variants={fadeAnim} animate={controls} initial="hidden">
                <motion.h2 variants={fadeAnim}>Game Database App</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <motion.div variants={lineAnim2} className="line"></motion.div>
                <motion.div variants={lineAnim3} className="line"></motion.div>
                <Link to="/work/igdb_app">
                    <HideStyled>
                        <motion.img variants={photoAnim} src={igdb_app} alt="igdb_app" />
                        <ClickMeStyled><ZoomInStyled /><h1>PROJECT DETAILS</h1></ClickMeStyled>
                    </HideStyled>
                </Link>
            </ProjectStyled>
            <ProjectStyled ref={element2} variants={fadeAnim} animate={controls2} initial="hidden">
                <h2>Player App</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <motion.div variants={lineAnim2} className="line"></motion.div>
                <motion.div variants={lineAnim3} className="line"></motion.div>
                <Link to="/work/player_app">
                    <HideStyled>
                        <motion.img variants={photoAnim} src={player_app} alt="player_app" />
                        <ClickMeStyled><ZoomInStyled /><h1>PROJECT DETAILS</h1></ClickMeStyled>
                    </HideStyled>
                </Link>
            </ProjectStyled>
            <ProjectStyled ref={element3} variants={fadeAnim} animate={controls3} initial="hidden">
                <h2>My Homepage</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <motion.div variants={lineAnim2} className="line"></motion.div>
                <motion.div variants={lineAnim3} className="line"></motion.div>
                <Link to="/work/homepage">
                    <HideStyled>
                        <motion.img variants={photoAnim} src={homepage1} alt="homepage" />
                        <ClickMeStyled><ZoomInStyled /><h1>PROJECT DETAILS</h1></ClickMeStyled>
                    </HideStyled>
                </Link>
            </ProjectStyled>
            <ScrollTop />
        </ProjectContainerStyled>
    );
}

// Styling

const ProjectContainerStyled = styled(motion.div)`
min-height: 100vh;
background: #fff;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
padding: 5rem 10rem;
h2 {
    font-size: 3rem;
    padding: 0.5rem 0rem;
    }
@media ( max-width: 1300px ) {
        padding: 3rem 1rem;
h2 {
    font-size: 2rem;
    }
}
`

const ProjectStyled = styled(motion.div)`
position: relative;
padding-bottom: 5rem;
width: 80%;
.line {
    height: 0.2rem;
    background: #FFA41B;
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
}
.line2 {
    height: 0.12rem;
    background: #FFA41B;
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
}

img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
    padding-top: 2rem;
}
@media ( max-width: 1300px ) {
    width: 100%;
    height: 70vh;
    padding: 1rem 0rem;
img {
    width: 100%;
    height: 60vh;
    padding-top: 4rem;
}
    }
`

const HideStyled = styled.div`
overflow: hidden;
position: relative;
`

const ClickMeStyled = styled.button`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: transparent !important;
border: none;
opacity: 0;
border-radius: 2%;
transition: all 1s ease;
h1 {
font-size: 4rem;
padding-bottom: 8rem;
color: #FFA41B;
}
&:hover {
    opacity: 0.5;
}
@media ( max-width: 1300px ) {
justify-content: center;
opacity: 0.5;
border: none;
top: 10%;
height: 90%;
h1 {
font-size: 2rem;
padding-bottom: 2rem;
}
}
`

const ZoomInStyled = styled(ZoomIn)`
width: 12rem;
height: 12rem;
color: #FFA41B;
@media ( max-width: 1300px ) {
    width: 8rem;
    height: 8rem;
}
`

const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #000000;
z-index: 2;
`
const Frame2 = styled(Frame1)`
background: #363634;
`
const Frame3 = styled(Frame1)`
background: #4d4b4a;
`
const Frame4 = styled(Frame1)`
background: #797672;
`
const Frame5 = styled(Frame1)`
background: #b3b1ac;
`
const Frame6 = styled(Frame1)`
background: #e9e9e4;
`

export default MyProjects;