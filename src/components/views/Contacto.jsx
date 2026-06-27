import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import "../../App.css";

const Contacto = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Datos del formulario validados", data);
    };

    Swal.fire({
      title: "Mensaje enviado",
      icon: "success",
      confirmButtonColor: "#0466c8",
      background: "#1a1a1a",
      color: "#ffffff"
    });

  return (
    <Container className="contacto-wrapper py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          
          <div className="text-center mb-5">
            <h1 className="contacto-titulo">Contactanos</h1>
            <p className="contacto-subtitulo">¿Tenés alguna duda sobre nuestros planes? Escribinos.</p>
          </div>

          <div className="contacto-caja p-4 p-md-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-4" controlId="formNombre">
                <Form.Label className="contacto-label">Nombre completo</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: Juan Pérez" 
                  className="contacto-input"
                  {...register("nombre", {
                    required: "El nombre es un dato obligatorio",
                    
                  })} 
                />
                <Form.Text className="text-danger">
                    {errors.nombre?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label className="contacto-label">Correo electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="contacto-input" 
                  {...register("email", {
                    required: "El email es un dato obligatorio",
                    pattern: {
                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: "El mail debe ser un correo valido por ej: juanperez@mail.com"
                    }
                  })} 
                />
                <Form.Text className="text-danger">
                    {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMensaje">
                <Form.Label className="contacto-label">Tu mensaje</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="¿En qué te podemos ayudar?" 
                  className="contacto-input"
                  {...register("mensaje", {
                    required: "El mensaje es un dato obligatorio",
                    minLength: {
                        value: 20,
                        message: "El mensaje debe tener al menos 20 caracteres",
                    },
                    maxLength: {
                        value: 150,
                        message: "El mensaje debe tener como maximo 150 caracteres"
                    }
                  })} 
                />
                <Form.Text className="text-danger">
                    {errors.mensaje?.message}
                </Form.Text>
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
