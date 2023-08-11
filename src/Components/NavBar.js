import {Navbar, Container, Nav, NavLink} from 'react-bootstrap';
import { useEffect, useState } from 'react';


// images
import logo from '../images/logo.png';
import navIcon1 from '../images/facebook.svg';
import navIcon2 from '../images/linkedin.svg';
import navIcon3 from '../images/github.svg';

export const NavBar = () => {
    const[activeLink, setActiveLink] = useState("home");
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <NavLink href='#home'><img src={logo} alt='logo'/></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="#Home" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink>
            <NavLink href="#skills" className={activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skills')}>Skills</NavLink>
            <NavLink href="#project" className={activeLink === 'Project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Project')}>Project</NavLink> 
            <NavLink href="#contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</NavLink>
          </Nav>
          <span className='navbar-text'>
                <div className='social-icon'>
                    <NavLink href="https://www.facebook.com/profile.php?id=100093679211654"><img src={navIcon1} alt='' /></NavLink>
                    <NavLink href="https://www.linkedin.com/in/sirkew-chakma-b400851b8/"><img src={navIcon2} alt='' /></NavLink>
                    <NavLink href="https://github.com/Sirkew"><img src={navIcon3} alt='' /></NavLink>
                </div>
                <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


