import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnim } from "../pageAnimation";
import ScrollTop from "../components/ScrollTop";

const AboutMe = () => {
    return (
        <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    );
}

export default AboutMe;