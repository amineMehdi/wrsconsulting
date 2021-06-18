import React from "react";
import "./style/Contact.css";
import { useForm } from "react-hook-form";
import { Form, Button, InputGroup } from "react-bootstrap";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="contact-container">
      <div className="contact-header">
        <header>Contact</header>
        <p>
          Merci pour l'intérêt que vous portez à WRS CONSULTING et à nos
          services. Pour qu'on puisse répondre à votre demande, veuillez remplir
          le formulaire ci-dessous.
        </p>
      </div>
      <div className="contact-form">
        <header>ENVOYER NOUS UN MESSAGE</header>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom (obligatoire) : </Form.Label>
            <Form.Control
              type="text"
              {...register("nom", { required: "Veuillez saisir votre nom" })}
            ></Form.Control>
            {errors.nom && <p style={{ color: `red` }}>{errors.nom.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Prenom (obligatoire) : </Form.Label>
            <Form.Control
              type="text"
              {...register("prenom", {
                required: "Veuillez saisir votre prenom",
              })}
            ></Form.Control>
            {errors.prenom && (
              <p style={{ color: `red` }}>{errors.prenom.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Votre adresse de messagerie (obligatoire) :{" "}
            </Form.Label>
            <Form.Control
              type="email"
              {...register("email", {
                required: "Veuillez saisir votre adresse de messagerie",
              })}
            ></Form.Control>
            {errors.email && (
              <p style={{ color: `red` }}>{errors.email.message}</p>
            )}
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Votre Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
