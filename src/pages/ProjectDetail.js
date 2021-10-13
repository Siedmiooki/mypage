import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ProjectState } from "../projectState";
import { pageAnim } from "../pageAnimation";
import ScrollTop from "../components/ScrollTop";

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject] = useState(null)

    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url)
        setProject(currentProject[0])
    }, [projects, url])

    return (
        <>
            {project && (
                <DetailsStyled variants={pageAnim} initial="hidden" animate="show" exit="exit">
                    <HeadLineStyled>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="projectImg" />
                    </HeadLineStyled>
                    <StyledButtonContainer>
                        <a href={project.git} target="_blank" rel="noreferrer">
                            <motion.button>Git repo</motion.button>
                        </a>
                        <a href={project.live} target="_blank" rel="noreferrer">
                            <motion.button>Live demo</motion.button>
                        </a>
                    </StyledButtonContainer>
                    <InfosStyled>
                        {project.info.map((info) => (
                            <Info title={info.title} description={info.description} key={info.title} />
                        ))}
                    </InfosStyled>
                    <ImageDisplayStyled>
                        <img src={project.secondaryImg} alt="secondaryImg" />
                    </ImageDisplayStyled>
                    <ScrollTop />
                </DetailsStyled>
            )}
        </>
    );
}

const Info = ({ title, description }) => {
    return (
        <InfoStyled>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </InfoStyled>
    )
}

const StyledButtonContainer = styled(motion.div)`
display: flex;
width: 30%;
justify-content: space-around;
align-items: center;
padding: 2rem;
margin-top: 4rem;
button {
    padding: 1rem 2rem;
}
`

const DetailsStyled = styled(motion.div)`
color:  white;
display: flex;
flex-direction: column;
align-items: center;
`

const HeadLineStyled = styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}
img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`

const InfosStyled = styled.div`
min-height: 60vh;
width: 60%;
display: flex;
align-items: flex-start;
flex-direction: column;
margin: 1rem 5rem;
@media ( max-width: 1300px ) {
    display: block;
    margin: 1rem 2rem;
    }
`

const InfoStyled = styled.div`
padding: 5rem;
h3 {
    font-size: 2rem;
}
.line {
    width: 50%;
    background: #8e1d92;
    height: 0.5rem;
    margin: 1rem 0rem;
}
p {
    padding: 1.5rem 0rem;
}
`

const ImageDisplayStyled = styled.div`
min-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
};
`

export default ProjectDetail;