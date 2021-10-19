import styled from "styled-components";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import logo from "../img/logo01.svg"

const Nav = () => {
    const { pathname } = useLocation()
    return (
        <NavStyled>
            <Link to="/" id="logo">
                <StyledLogo src={logo} alt="MyLogo" />
            </Link>
            <ul>
                <li>
                    <Link to="/">About</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/" ? "40%" : "0%" }} />
                </li>
                <li>
                    <Link to="/work">Projects</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname.startsWith("/work") ? "40%" : "0%" }} />
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/contact" ? "40%" : "0%" }} />
                </li>
            </ul>
        </NavStyled>
    );
}

const StyledLogo = styled.img`
width: 12rem;
`

const NavStyled = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
position: sticky;
top: 0;
z-index: 10;
a {
    color: white;
    text-decoration: none;
}
ul {
    display: flex;
    list-style: none;
}
#logo {
    font-size: 1.6rem;
    font-family: "Lobster", cursive;
    font-weight: lighter
}
li {
    padding-left: 10rem;
    position: relative;
}
@media ( max-width: 1300px ) {
    flex-direction: column;
    padding: 1rem 0 1.5rem 0;
    #logo {
        display: inline-block;
        margin: 0.5rem;
    }
ul {
        padding: 0.5rem;
        justify-content: space-around;
        width: 100%;
}
li {
    padding: 0;
}
    }
`
const Line = styled(motion.div)`
height: 0.3rem;
background: #FFA41B;
width: 0;
position: absolute;
bottom: -80%;
left: 60%;
@media ( max-width: 1300px ) {
    left: 0%;
    }
`

export default Nav;