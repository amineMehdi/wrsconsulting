import React from "react";
import "./style/EntrepriseContact.css";
import { useForm } from "react-hook-form";

import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
function EntrepriseContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm();

  const contactSubmit = (formData) => {
    if (formData.nom === "") {
      if (formData.prenom === "") {
        if (formData.entreprise === "") {
          setError("entreprise", {
            message:
              "Veuillez saisir le nom d'entreprise ou votre nom et prénom",
          });
          setError("nom", {
            message:
              "Veuillez saisir votre nom et prenom ou le nom d'entreprise",
          });
        }
      }
    }
    console.log(formData);
    // reset();
  };
  return (
    <div className="contact-form-informations-wrapper">
      <div className="contact-form">
        <header>ENVOYER NOUS UN MESSAGE</header>
        <form onSubmit={handleSubmit(contactSubmit)}>
          <div className="form-group">
            <label>
              Nom d'entreprise <span style={{ color: `red` }}>*</span> :
            </label>
            <input
              type="text"
              name="entreprise"
              placeholder="Nom d'entreprise"
              {...register("entreprise")}
            />
            {errors.entreprise && (
              <p className="input-error">{errors.entreprise.message}</p>
            )}
          </div>
          <div className="or-container">
            <p>Ou</p>
          </div>
          <div className="form-group-wrapper">
            <div className="form-group">
              <label>
                Votre Nom <span style={{ color: `red` }}>*</span> :
              </label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                {...register("nom")}
                // , { required: "Veuillez saisir votre nom" }
              />
              {errors.nom && (
                <p className="input-error">{errors.nom.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>
                Votre Prenom <span style={{ color: `red` }}>*</span> :
              </label>
              <input
                type="text"
                name="prenom"
                placeholder="Prenom"
                {...register("prenom")}
                // , {required: "Veuillez saisir votre prenom"}
              />
              {errors.prenom && (
                <p className="input-error">{errors.prenom.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>
              Votre adresse de messagerie{" "}
              <span style={{ color: `red` }}>*</span> :
            </label>
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
              {...register("message")}
            ></textarea>
          </div>
          <div className="contact-result"></div>
          <div>
            <span style={{ color: `red` }}> * : Champ obligatoire</span>
          </div>
          <div className="btn btn-submit">
            <button type="submit">
              <span>Envoyer</span>
            </button>
          </div>
        </form>
      </div>
      <div className="contact-informations">
        <header>CONTACT INFORMATION</header>
        <ul>
          <li>
            <LocationOnIcon style={{ color: `#1a668c` }} />
            <p>4 bis rue cadet de vaux 95130 Franconville</p>
          </li>
          <li>
            <PhoneIcon style={{ color: `#1a668c` }} />
            <p>+336 34 27 40 69</p>
          </li>

          <li>
            <MailIcon style={{ color: `#1a668c` }} />
            <p>
              <a href="mailto:contact@wrsconsulting.fr">
                contact@wrsconsulting.fr
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EntrepriseContact;
