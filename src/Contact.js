import React from "react";
import "./style/Contact.css";
import { useForm } from "react-hook-form";
// import { Form, Button, InputGroup } from "react-bootstrap";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dataSubmit = (formData) => {
    console.log(formData);
  };
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
      <div className="contact-form-informations-wrapper">
        <div className="contact-form">
          <header>ENVOYER NOUS UN MESSAGE</header>
          <form onSubmit={handleSubmit(dataSubmit)}>
            <div className="form-group">
              <label>Votre Nom (obligatoire) : </label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                {...register("nom", { required: "Veuillez saisir votre nom" })}
              />
              {errors.nom && (
                <p className="input-error">{errors.nom.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Votre Prenom (obligatoire) : </label>
              <input
                type="text"
                name="prenom"
                placeholder="Prenom"
                {...register("prenom", {
                  required: "Veuillez saisir votre prenom",
                })}
              />
              {errors.prenom && (
                <p className="input-error">{errors.prenom.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Votre adresse de messagerie (obligatoire) : </label>
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                {...register("email", {
                  required: "Veuillez saisir votre adresse mail",
                  pattern:{
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "L'adresse mail que vous saisi est incorrect"
                    
                  }
                })}
              />
              {errors.email && (
                <p className="input-error">{errors.email.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Objet : </label>
              <input
                type="text"
                name="objet"
                placeholder="Objet"
                {...register("objet")}
              />
            </div>

            <div className="form-group">
              <label>Votre Message : </label>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                rows="10"
                {...register("message", {
                  required: "Veuillez saisir votre Message",
                })}
              ></textarea>
              {errors.message && (
                <p className="input-error">{errors.message.message}</p>
              )}
            </div>
            <div className="btn-submit">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
        <div className="contact-informations">
          <header>CONTACT INFORMATION</header>
          <ul>
            <li>
              <div></div>
              <p>4 bis rue cadet de vaux 95130 Franconville</p>
            </li>
            <li>
              <div></div>
              <p>+336 34 27 40 69</p>
            </li>

            <li>
              <div></div>
              <p>
                <a href="mailto:contact@wrsconsulting.fr">
                  contact@wrsconsulting.fr
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/* <Form>
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
</Form> */
