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
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          
          <div className="text-center mb-4">
            <h3 className="mapa-titulo">Nuestra Ubicación</h3>
          </div>

          <div className="mapa-contenedor p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.9054515084337!2d-65.20700496289064!3d-26.836837074287967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e1!3m2!1ses-419!2sar!4v1782496651508!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Logic Gym"
            ></iframe>
          </div>

        </Col>
      </Row>
    </Container>

  )
}

export default Contacto
