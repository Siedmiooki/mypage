import styled from "styled-components";
import { motion } from "framer-motion";



const Waves = () => {
    return (
        <>
            <WavesStyled viewBox="0 0 1432 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial={{
                        pathLength: 0,
                        pathOffset: 1
                    }}
                    animate={{
                        pathLength: 1,
                        pathOffset: 0
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "linear"
                    }}
                    d="M1.5 156.5C1148 -335 1062.23 546.295 1429 194" stroke="#EA46C6" strokeWidth="10" strokeOpacity="0.2"
                />
            </WavesStyled>
            <WavesStyled viewBox="0 0 1431 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial={{
                        pathLength: 0,
                        pathOffset: 1,
                    }}
                    animate={{
                        pathLength: 1,
                        pathOffset: 0,
                    }}
                    transition={{
                        duration: 3.5,
                        ease: "linear",
                    }}
                    d="M0.5 23.4999C0.5 23.4999 718 -64.0001 658 131C598 326 1030 12.5 1220.5 202.5C1411 392.5 1428.5 214 1428.5 214" stroke="#AC5599" strokeWidth="10" strokeOpacity="0.2"
                />
            </WavesStyled>
            <WavesStyled viewBox="0 0 1429 326" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial={{
                        pathLength: 0,
                        pathOffset: 1
                    }}
                    animate={{
                        pathLength: 1,
                        pathOffset: 0
                    }}
                    transition={{
                        duration: 2.5,
                        ease: "linear"
                    }}
                    d="M1.5 118C1.5 118 663.5 -150 785.5 136.5C907.5 423 1082 313.5 1250 227.5C1418 141.5 1425 212 1425 212" stroke="#C150DD" strokeWidth="10" strokeOpacity="0.2"
                />
            </WavesStyled>
        </>
    );
}

const WavesStyled = styled.svg`
position: absolute;
left: 0;
z-index: 1;
@media ( max-width: 1300px ) {
        top: 200;
    }
`

export default Waves;