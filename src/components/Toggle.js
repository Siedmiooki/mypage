import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <StyledH4 layout>{title}</StyledH4>
            {toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    );
}

const StyledH4 = styled(motion.h4)`
  @media ( max-width: 1300px ) {
    font-size: 1.5rem;
}
`

export default Toggle;