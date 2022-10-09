import React, { Component } from "react";
import styles from "../styles/form_description.module.scss";
import { ButtonPrev, ButtonNext } from "../../../../../utils/ui/Buttons";
import { Bio, Input } from "../../../../../utils/ui/Inputs";
import { BigTitle } from "../../../../../utils/ui/Texts";

class FormDescription extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <form className={styles.form}>
        <BigTitle>Décrivez vous !</BigTitle>
        <div className={styles.container}>
          <Input
            type="text"
            name="favorite"
            placeholder="Jeu ou communauté préférée"
          />
          <Bio
            type="text"
            name="description"
            placeholder="Description du profil"
          ></Bio>
        </div>
        <div className={styles.btn}>
          <ButtonPrev onClick={this.back}>Retour</ButtonPrev>
          <ButtonNext onClick={this.continue}>Terminer</ButtonNext>
        </div>
      </form>
    );
  }
}

export default FormDescription;
