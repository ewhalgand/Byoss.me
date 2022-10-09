import React, { Component } from "react";
import styles from "../styles/form_activity.module.scss";
import { ButtonPrev,ButtonNext } from "../../../../../utils/ui/Buttons";
import { Input } from "../../../../../utils/ui/Inputs";
import { BigTitle } from "../../../../../utils/ui/Texts";

class FormActivity extends Component {
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
        <BigTitle>Selectionnez votre activité</BigTitle>
        <div className={styles.container}>
          <div className={styles.left}>...</div>
          <div className={styles.middle}>...</div>
          <div className={styles.right}>...</div>
        </div>
        <div className={styles.btn}>
          <ButtonPrev onClick={this.back}>Retour</ButtonPrev>
          <ButtonNext onClick={this.continue}>Suivant</ButtonNext>
        </div>
      </form>
    );
  }
}

export default FormActivity;
