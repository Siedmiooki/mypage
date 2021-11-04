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
                        <h3>{project.title}</h3>
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
                    <InfoContainerStyled>
                        {project.info.map((info) => (
                            <Info title={info.title} description={info.description} key={info.title} />
                        ))}
                    </InfoContainerStyled>
                    <ImageDisplayStyled>
                        <img src={project.secondaryImg} alt="secondaryImg" />
                    </ImageDisplayStyled>
                    {project.thirdImg && <ImageDisplayStyled>
                        <img src={project.thirdImg} alt="thirdImg" />
                    </ImageDisplayStyled>}
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

// Styling

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
h3 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    font-size: 3rem;
    padding: 1rem;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
}
img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    margin-top: 2rem;
}
@media ( max-width: 1300px ) {
    padding-top: 10vh;
    min-height: 50vh;
    h3 {
        font-size: 1.5rem;
    }
    img {
    object-fit: contain;
    width: 100%;
    height: 45vh;
    padding-top: 3rem;
    }
}
`

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
@media ( max-width: 1300px ) {
    margin-top: 0;
    gap: 1rem;
button {
    min-width: 10rem;
    font-size: 1rem;
    padding: 1rem 2rem;
}
}
`

const InfoContainerStyled = styled.div`
min-height: 60vh;
width: 60%;
display: flex;
align-items: flex-start;
flex-direction: column;
margin: 1rem 5rem;
@media ( max-width: 1300px ) {
    justify-content: center;
    width: 95%;
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
@media ( max-width: 1300px ) {
    padding: 1rem;
h3 {
    font-size: 1.5rem;
}
.line {
    height: 0.4rem;
}
    }
`

const ImageDisplayStyled = styled.div`
min-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2rem;
img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
};
@media ( max-width: 1300px ) {
    img {
    object-fit: contain;
    width: 100%;
    height: 60vh;
    padding: 1rem 0rem;
    }
    }
`

export default ProjectDetail;