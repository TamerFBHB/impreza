
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavHeader.css";

window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").classList.add("move") ;
  } else {
    document.getElementById("header").classList.remove("move")
  }
});

const NavHeader = () => {
  
  // navigation to Home
// const moveHome = () => {
//   Home.current.scrollIntoView({ behavior: "smooth", block:"start" });
// };
  

  return (
    <Navbar expand="lg" id="header" className="navFixed">
      <Container>
        <NavLink to="/" className="logo">
          IMPREZA
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ul">
            <NavLink to="" className=" ">
              Demos
            </NavLink>
            <NavLink to="" className=" ">
              Elements
            </NavLink>
            <NavLink  to="" className=" ">
              Pages
            </NavLink>
            <NavLink  className="">
              Shop
            </NavLink>
            <NavLink to="" className="">
              Portfolio
            </NavLink>
            <NavLink to="" className="">
              Blog
            </NavLink>
            <NavLink to="" className="">
              Support
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
