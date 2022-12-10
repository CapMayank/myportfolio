import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mldev from "../assets/img/mldev.png";
import webdev from "../assets/img/webdev.png";
import design from "../assets/img/design.png";
import gamedev from "../assets/img/gamedev.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skill-Set
                            </h2>
                            <p2>I am in the ay to develop these skills.</p2>
                            <Carousel responsive={responsive} infinite={true} className = "skill-slider">
                                <div className="item">
                                    <img src={mldev} alt ="Image"/>
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src={webdev} alt ="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={gamedev} alt ="Image"/>
                                    <h5>Game Development</h5>
                                </div>
                                <div className="item">
                                    <img src={design} alt ="Image"/>
                                    <h5>Designing</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src ={colorSharp} />
        </section>
      )
}