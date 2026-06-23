import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";
import "./Navbar.css";


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

        <Navbar.Collapse className="navbar-nav">
          <Form className="d-flex mx-auto my-3 my-lg-0 search-form">
            <Form.Control
            type="search"
            placeholder="Buscar"
            className="me-2 buscar-input"
            aria-label="Search"
            />
            <Button className="buscar-btn">Buscar</Button>

          </Form>

        <Nav className="ms-auto gap-4">

          {usuarioLogueado && usuarioLogueado.role === "admin" && (
              
                <NavLink to={"/administrador"} className="custom-link">
                  Administrador
                </NavLink>
                
            )}

          <Nav.Link to={"/"} className="custom-link">
          Inicio
          </Nav.Link>

          <Nav.Link to={"/planes"} className="custom-link">
          Planes
          </Nav.Link>


          <Nav.Link to={"/contacto"} className="custom-link">
          Contacto
          </Nav.Link>

          <Nav.Link to={"/nosotros"} className="custom-link">
          Nosotros
          </Nav.Link>

          {!usuarioLogueado && (
            <>
          <Nav.Link to={"/login"} className="custom-link">
          Login
          </Nav.Link>

          <Nav.Link to={"/Registrate"} className="custom-link">
          Registrate
          </Nav.Link>
          </>
          )}

          {usuarioLogueado && (
              <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              
            )}

        </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Menu
