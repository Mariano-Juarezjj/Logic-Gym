import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";


const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setUsuarioLogueado(false);
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="px-4 px-lg-5">

        <Navbar.Brand as={Link} to={"/"} className="logo-text">
        Logic Gym
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Nav className="ms-auto gap-4">

          <Nav.Link href="/" className="active-link">
          Inicio
          </Nav.Link>

          <Nav.Link href="/planes" className="custom-link">
          Planes
          </Nav.Link>


          <Nav.Link href="/contacto" className="custom-link">
          Contacto
          </Nav.Link>

          <Nav.Link href="/nosotros" className="custom-link">
          Nosotros
          </Nav.Link>

          <Nav.Link href="/login" className="custom-link">
          Login
          </Nav.Link>

          <Nav.Link href="/Registrate" className="custom-link">
          Registrate
          </Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  )
}

export default Menu
