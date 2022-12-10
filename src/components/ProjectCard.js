import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br/>
          <span> <a class="btn btn-dark" href={projUrl} role="button">Gaze</a> </span>
        </div>
      </div>
    </Col>
  )
}
