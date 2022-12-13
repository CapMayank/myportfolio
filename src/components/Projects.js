import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Rock Paper Scissors",
      description: "opencv-Python Project",
      imgUrl: projImg1,
      projUrl:"https://github.com/CapMayank/RockPaperScissorCV",
    },
    {
      title: "Resume Builder",
      description: "Design & Development",
      imgUrl: projImg2,
      projUrl:"https://main.d37r3aoewg4ng.amplifyapp.com/",
    },
    {
      title: "Online Voting System",
      description: "Javascipt, PHP, Mysql",
      imgUrl: projImg3,
      projUrl:"http://projectovs.capmayank.com/",
    },

  ];

  return (
    <section className="project" id="project">
     <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""} >
                <h2>Projects</h2>
                <p>I have build various types of projects of different domains, Some of the projects are displayed below. You can find these projects in my GitHub Repositories.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Nothing Here.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Nothing Here.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
              </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
