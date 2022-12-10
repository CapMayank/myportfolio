import {Container, Row, Col} from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'
import logo from "../assets/img/logo.svg";
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm ={6}>
                        <img src={logo} alt ="logo"/>
                    </Col>
                    <Col sm={6} className = "text-center text-sm-end">
                        <div className = "social-icon">
                        <a href="https://www.linkedin.com/in/mayank-vishwakarma2004/" target="_blank"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/CapMayank" target="_blank"><img src={navIcon2} alt="" /></a>
                        <a href="https://www.snapchat.com/add/capmayank?share_id=E_x_6rIEu1A&locale=en-US " target="_blank"><img src={navIcon3} alt="" /></a>
                        <a href="mailto:capmayankv.gmail.com" target="_blank"><img src={navIcon4} alt="" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved. Bye!! Thanks for visiting.</p>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}