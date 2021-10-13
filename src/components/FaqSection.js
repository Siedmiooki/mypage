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
                <Toggle title="My career so far ?">
                <div className="answer">
                        <p>2016-2020 <span>Purchasing Department Manager + ERP Admin</span> Agapit Sp. z o.o. Sp. k. / Olsztyn</p>
                        <p>2014-2016 <span>SCM Senior Specialist</span>MAKRO Cash & Carry Polska S.A. / Warszawa</p>
                        <p>2011-2014 <span>ERP / Business Systems Specialist</span>Real Sp. z o.o./ Metro Group Logistic / Warszawa</p>
                        <p>2010-2011 <span>SCM Department Assistant</span>Real Sp. z o.o./ Metro Group Logistic / Warszawa</p>
                </div>
                </Toggle>
                <Toggle title="My goals as a developer ?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur quo laborum eos. Expedita vitae facere culpa officia laborum voluptatum.</p>
                </div>
                </Toggle>
                <Toggle title="My education ?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur quo laborum eos. Expedita vitae facere culpa officia laborum voluptatum.</p>
                </div>
                </Toggle>
                <Toggle title="How do I spend my free time ?">
                <div className="answer">
                        <p>Gravel bike - love to ride my bike through beautiful places...</p>
                        <p>SUP board - there is no better way to relax on the water...</p>
                        <p>Video games - are best for cold evenings...</p>
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
    padding-bottom: 2rem;
    font-weight: lighter;
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