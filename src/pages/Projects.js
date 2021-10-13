import styled from "styled-components";
import { Link } from "react-router-dom";
import igdb_app from "../img/igdb_app_big.jpg";
import player_app from "../img/player_app_big2.jpg";
import homepage1 from "../img/homepage_big.jpg";
import { motion } from "framer-motion";
import { pageAnim, fadeAnim, lineAnim, lineAnim2, lineAnim3, photoAnim, frameAnim, frameContainer } from "../pageAnimation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";


const OurWork = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <WorkStyled variants={pageAnim} initial="hidden" animate="show" exit="exit" style={{ background: "#fff" }}>
            <motion.div variants={frameContainer}>
                <Frame1 variants={frameAnim}></Frame1>
                <Frame2 variants={frameAnim}></Frame2>
                <Frame3 variants={frameAnim}></Frame3>
                <Frame4 variants={frameAnim}></Frame4>
                <Frame5 variants={frameAnim}></Frame5>
            </motion.div>
            <MovieStyled>
                <motion.h2 variants={fadeAnim}>IGDB App</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <motion.div variants={lineAnim2} className="line"></motion.div>
                <motion.div variants={lineAnim3} className="line"></motion.div>
                <Link to="/work/igdb_app">
                    <HideStyled>
                        <motion.img variants={photoAnim} src={igdb_app} alt="igdb_app" />
                    </HideStyled>
                </Link>
            </MovieStyled>
            <MovieStyled ref={element} variants={fadeAnim} animate={controls} initial="hidden">
                <h2>Player App</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <motion.div variants={lineAnim2} className="line"></motion.div>
                <motion.div variants={lineAnim3} className="line"></motion.div>
                <Link to="/work/player_app">
                    <img src={player_app} alt="player_app" />
                </Link>
            </MovieStyled>
            <MovieStyled ref={element2} variants={fadeAnim} animate={controls2} initial="hidden">
                <h2>My Homepage</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <motion.div variants={lineAnim2} className="line"></motion.div>
                <motion.div variants={lineAnim3} className="line"></motion.div>
                <Link to="/work/homepage">
                    <img src={homepage1} alt="homepage" />
                </Link>
            </MovieStyled>
            <ScrollTop />
        </WorkStyled>
    );
}

const HideStyled = styled.div`
overflow: hidden;
`

const WorkStyled = styled(motion.div)`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
padding: 5rem 10rem;
@media ( max-width: 1300px ) {
        padding: 2rem 1rem;
    }
h2 {
    font-size: 3rem;
    padding: 0.5rem 0rem;
@media ( max-width: 1300px ) {
        font-size: 2rem;
    }
    }
`
const MovieStyled = styled(motion.div)`
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
@media ( max-width: 1300px ) {
    width: 100%;
    height: 45vh;
    padding: 6rem 0rem;
    }
}
`
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #e60606;
z-index: 2;
`
const Frame2 = styled(Frame1)`
background: #e2500c;
`
const Frame3 = styled(Frame1)`
background: #e07d0c;
`
const Frame4 = styled(Frame1)`
background: #ecb10c;
`
const Frame5 = styled(Frame1)`
background: #e4e707;
`

export default OurWork;