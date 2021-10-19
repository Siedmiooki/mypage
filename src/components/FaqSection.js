import styled from "styled-components";
import { LayoutStyled } from "../styles"
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollFadeAnim } from "../pageAnimation"

const FaqSection = () => {

    const [element, controls] = useScroll();

    return (
        <FaqStyled variants={scrollFadeAnim} ref={element} animate={controls} initial="hidden">
            <h2><span>About me ?</span></h2>
            <AnimateSharedLayout>
                <Toggle title="My goals as a developer.">
                    <div className="answer">
                        <p>My main goal as a junior software developer is to become JS/React expert in a team of creative, open-minded and willing to share people.</p>
                        <p>After that I`d like to learn Node.js and Python to move towards full-stack skill set.</p>
                    </div>
                </Toggle>
                <Toggle title="My career so far.">
                <div className="answer">
                        <p>2016-2020 <span>Purchasing Department Manager + ERP Admin</span> Agapit Sp. z o.o. Sp. k. / Olsztyn</p>
                        <p>2014-2016 <span>SCM Senior Specialist</span>MAKRO Cash & Carry Polska S.A. / Warszawa</p>
                        <p>2011-2014 <span>ERP / Business Systems Specialist</span>Real Sp. z o.o./ Metro Group Logistic / Warszawa</p>
                        <p>2010-2011 <span>SCM Department Assistant</span>Real Sp. z o.o./ Metro Group Logistic / Warszawa</p>
                </div>
                </Toggle>
                <Toggle title="My education.">
                <div className="answer">
                        <p>2004-2007 <span>Media education with graphics designing - Bachelor degree</span> Higher School of Pedagogy in Warsaw / Faculty of humanities and social
                            science Olsztyn</p>
                        <p>2002-2004 <span>Network and computer systems administration</span> Higher School of Information Technology and Economy / Olsztyn</p>
                </div>
                </Toggle>
                <Toggle title="How do I spend my free time.">
                <div className="answer">
                        <p><span>Gravel bike</span>Love to ride my bike through beautiful places.</p>
                        <p><span>SUP board</span>There is no better way to relax on the water.</p>
                        <p><span>Video games</span>Are one of most complex aplications. Im hooked since i was 7 years old.</p>
                </div>
                </Toggle>
            </AnimateSharedLayout>
        </FaqStyled>
    );
}

const FaqStyled = styled(LayoutStyled)`
display: block;
span {
    display: block;
}
h2 {
    padding-bottom: 4rem;
    font-size: 3rem;
    @media ( max-width: 1300px ) {
    font-size: 2.5rem;
}
}
.faq-line {
    background: #cccccc;
    height: 0.01rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question {
    padding: 3rem 0rem;
    cursor: pointer
}
.answer {
    padding: 2rem 0rem;
    p {
        padding: 1rem 0rem;
    @media ( max-width: 1300px ) {
    font-size: 1rem;
    }
}}
`


export default FaqSection;