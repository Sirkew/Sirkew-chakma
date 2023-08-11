import {Col, Container, Tab, Row, Nav} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../images/color-sharp2.png';
import projImg1 from "../images/proj-1.png";
import projImg2 from "../images/proj-2.png";
import projImg3 from "../images/proj-3.png";
import projImg4 from "../images/proj-4.png";
import projImg5 from "../images/proj-5.png";
import projImg6 from "../images/proj-6.png";


export const Projects = () => {

    const projects =[
        {
            title: "Tech Webbing",
            description: "Tech-Agency Company",
            imgUrl: projImg1,
          },
          {
            title: "Stogie Zone",
            description: "Ciggar Company",
            imgUrl: projImg2,
          },
          {
            title: "Interiar",
            description: "Interior Design Company",
            imgUrl: projImg3,
          },
          {
            title: "Bohemian",
            description: "Gents & Ladies Fashion",
            imgUrl: projImg4,
          },
          {
            title: "Rowadoh",
            description: "Multi-Vendor E-Commerce",
            imgUrl: projImg5,
          },
          {
            title: "NexBlend",
            description: "TechAgency Company",
            imgUrl: projImg6,
          },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p></p>
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
                  <Tab.Content>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} />
        </section>
    )
}