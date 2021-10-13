import styled from "styled-components"
import { JsSquare, Html5, Css3Alt, ReactLogo, Npm, Github } from '@styled-icons/fa-brands'
import { VisualStudio } from "@styled-icons/boxicons-logos"
import { Styledcomponents, Framer, Redux } from "@styled-icons/simple-icons"
import { EmailOutline } from "@styled-icons/evaicons-outline"
import { Linkedin, Facebook, Github as Github2 } from "@styled-icons/bootstrap"
import { motion } from "framer-motion"

export const LayoutStyled = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding:  5rem 10rem;
color: white;
@media ( max-width: 1300px ) {
        flex-direction: column;
        padding: 2rem 2rem;
        text-align: center;
        justify-content: center;
    }
`
export const AnimIconBox = styled(motion.div)`
z-index: 2;
display: inline-flex;
overflow: hidden;
padding: 0.2rem;
`

export const ImageBoxContainer = styled.div`
z-index: 2;
flex: 2;
padding: 1rem;
@media ( max-width: 1300px ) {
        display: flex;
        flex-direction: column;
        justify-content: center;
}
`
export const ImageBoxStyled = styled(motion.div)`
z-index: 2;
width: 100%;
padding: 1rem;
flex-wrap: nowrap;
@media ( max-width: 1300px ) {
    width: 100%;
    justify-content: center;
    }
`
export const DescriptionStyled = styled.div`
z-index: 2;
flex: 3;
padding-right: 5rem;
@media ( max-width: 1300px ) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }
        h2 {
            font-size: 2.5rem;
        }
    }
h2 {
    font-weight: lighter;
}
`

export const ImageStyled = styled.div`
z-index: 2;
flex: 1;
overflow: hidden;
img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`
export const HideStyled = styled.div`
    overflow: hidden;
`
const iconSize = "5.5rem"
const mobileIconSize = "4rem"

export const StyledJsSquare = styled(JsSquare)`
height: ${iconSize};
width: ${iconSize};
color: #FCDC00;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledHtml5 = styled(Html5)`
height: ${iconSize};
width: ${iconSize};
color: #E34F26;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledCss3Alt = styled(Css3Alt)`
height: ${iconSize};
width: ${iconSize};
color: #108FC6;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledReactLogo = styled(ReactLogo)`
height: ${iconSize};
width: ${iconSize};
color: #75D6ED;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledNpm = styled(Npm)`
height: ${iconSize};
width: ${iconSize};
color: #C53635;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledVisualStudio = styled(VisualStudio)`
height: ${iconSize};
width: ${iconSize};
color: #2285C5;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledStyledComponents = styled(Styledcomponents)`
height: ${iconSize};
width: ${iconSize};
color: #D195F7;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledFramer = styled(Framer)`
height: ${iconSize};
width: ${iconSize};
color: #27AAF2;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledGithub = styled(Github)`
height: ${iconSize};
width: ${iconSize};
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledRedux = styled(Redux)`
height: ${iconSize};
width: ${iconSize};
color: #7248B6;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledEmailIcon = styled(EmailOutline)`
height: ${iconSize};
width: ${iconSize};
color: #FFA41B;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledLinkedinSquare = styled(Linkedin)`
height: ${iconSize};
width: ${iconSize};
color: #FFA41B;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledGithubSquare = styled(Github2)`
height: ${iconSize};
width: ${iconSize};
color: #FFA41B;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
export const StyledFacebookSquare = styled(Facebook)`
height: ${iconSize};
width: ${iconSize};
color: #FFA41B;
@media ( max-width: 1300px ) {
    height: ${mobileIconSize};
    width: ${mobileIconSize};
}
`
