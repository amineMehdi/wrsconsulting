import React, { useState } from "react";
import "./style/Contact.css";
import { useForm } from "react-hook-form";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
// import { Form, Button, InputGroup } from "react-bootstrap";

function Contact() {
  const [cvName, setCvName] = useState(null);
  const [motivationName, setMotivationName] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: registerJob,
    handleSubmit: hanldeSubmitJob,
    formState: { errors: errorsJob },
    setValue,
  } = useForm();
  const contactSubmit = (formData) => {
    console.log(formData);
  };
  const jobSubmit = (formData) => {
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
          <form onSubmit={handleSubmit(contactSubmit)}>
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
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "L'adresse mail que vous saisi est incorrect",
                  },
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
              <LocationOnIcon color="primpary"/>
              <p>4 bis rue cadet de vaux 95130 Franconville</p>
            </li>
            <li>
              <PhoneIcon/>
              <p>+336 34 27 40 69</p>
            </li>

            <li>
              <MailIcon/>
              <p>
                <a href="mailto:contact@wrsconsulting.fr">
                  contact@wrsconsulting.fr
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="job-form-container">
        <div className="job-header">
          <header>Déposez Votre CV</header>
        </div>
        <form onSubmit={hanldeSubmitJob(jobSubmit)}>
          <div className="form-group" id="nom">
            <label>Nom (obligatoire) : </label>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              {...registerJob("nom", {
                required: "Veuillez saisir votre nom",
              })}
            />
            {errorsJob.nom && (
              <p className="input-error">{errorsJob.nom.message}</p>
            )}
          </div>

          <div className="form-group" id="prenom">
            <label>Prenom (obligatoire) : </label>
            <input
              type="text"
              name="prenom"
              placeholder="Prenom"
              {...registerJob("prenom", {
                required: "Veuillez saisir votre prenom",
              })}
            />
            {errorsJob.nom && (
              <p className="input-error">{errorsJob.prenom.message}</p>
            )}
          </div>

          <div className="form-group" id="email">
            <label>E-mail (obligatoire) : </label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              {...registerJob("email", {
                required: "Veuillez saisir votre email",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "L'adresse mail que vous saisi est incorrect",
                },
              })}
            />
            {errorsJob.email && (
              <p className="input-error">{errorsJob.email.message}</p>
            )}
          </div>

          <div className="form-group" id="telephone">
            <label>Telephone (obligatoire) : </label>
            <input
              type="text"
              name="telephone"
              placeholder="Telephone"
              {...registerJob("telephone", {
                required: "Veuillez saisir votre numero de telephone",
              })}
            />
            {errorsJob.nom && (
              <p className="input-error">{errorsJob.telephone.message}</p>
            )}
          </div>
          <div className="form-group" id="adresse">
            <label>Adresse : </label>
            <input
              type="text"
              name="adresse"
              placeholder="Adresse"
              {...registerJob("adresse")}
            />
          </div>

          <div className="form-group" id="postal">
            <label>Code Postal : </label>
            <input
              type="number"
              name="code"
              placeholder="Code Postal"
              {...registerJob("codeP")}
            />
          </div>

          <div className="form-group" id="ville">
            <label>Ville : </label>
            <input
              type="text"
              name="ville"
              placeholder="Ville"
              {...registerJob("ville")}
            />
          </div>

          <div className="form-group" id="pays">
            <label>Pays : </label>
            <input
              type="text"
              name="pays"
              placeholder="Pays"
              {...registerJob("pays")}
            />
          </div>
          <div className="form-group" id="message">
            <label>Message : </label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              {...registerJob("message")}
            />
          </div>
          <div className="form-group" id="cv">
            <label>Votre CV (obligatoire) : </label>
            <input
              type="file"
              name="cv"
              id="fileCV"
              accept=".pdf, .docx"
              {...registerJob("cv", { required: "Veuillez deposer votre cv" })}
              onChange={(e) => {
                setValue("cv", e.target.files);
                setCvName(e.target.files[0].name);
                console.log(e);
              }}
            />
            {errorsJob.cv && (
              <p className="input-error">{errorsJob.cv.message}</p>
            )}
            <label
              onClick={() => {
                document.querySelector("#fileCV").click();
              }}
            >
              Parcourir (max. 5MB)
            </label>
            {<p>{cvName}</p>}
          </div>

          <div className="form-group" id="motivation">
            <label>Lettre de Motivation : </label>
            <input
              type="file"
              id="fileMotivation"
              name="motivation"
              accept=".pdf, .docx"
              {...registerJob("motivation")}
              onChange={(e) => {
                setValue("motivation", e.target.files);
                setMotivationName(e.target.files[0].name);
                console.log(e);
              }}
            />
            <label
              onClick={() => {
                document.querySelector("#fileMotivation").click();
              }}
            >
              Parcourir (max. 5MB)
            </label>
            {motivationName && <p>{motivationName}</p>}
          </div>
          <div className="btn-submit">
            <button type="submit">Envoyer</button>
          </div>
        </form>
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
