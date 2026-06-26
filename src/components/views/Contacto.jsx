import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import "../../App.css";

const Contacto = () => {
  return (
    <Container className="contacto-wrapper py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          
          <div className="text-center mb-5">
            <h1 className="contacto-titulo">Hablemos</h1>
            <p className="contacto-subtitulo">¿Tenés alguna duda sobre nuestros planes? Escribinos.</p>
          </div>

          <div className="contacto-caja p-4 p-md-5">
            <Form>
              <Form.Group className="mb-4" controlId="formNombre">
                <Form.Label className="contacto-label">Nombre completo</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: Juan Pérez" 
                  className="contacto-input" 
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label className="contacto-label">Correo electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="contacto-input" 
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMensaje">
                <Form.Label className="contacto-label">Tu mensaje</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="¿En qué te podemos ayudar?" 
                  className="contacto-input" 
                />
              </Form.Group>

              <Button type="submit" className="contacto-btn w-100 mt-2">
                ENVIAR MENSAJE
              </Button>
            </Form>
          </div>

        </Col>
      </Row>
    </Container>

  )
}

export default Contacto
