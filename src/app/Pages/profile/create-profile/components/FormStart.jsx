import React, { Component } from "react";
import styles from "../styles/form_start.module.scss";
import { ButtonNext } from "../../../../../utils/ui/Buttons";
import { Input } from "../../../../../utils/ui/Inputs";
import { BigTitle } from "../../../../../utils/ui/Texts";

class FormStart extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <form className={styles.form}>
        <BigTitle>Pour Commencer !</BigTitle>
        <div className={styles.container}>
          <Input type="text" name="pseudo" placeholder="Votre Pseudo" />
          <Input type="text" name="email" placeholder="Votre Email" />
        </div>
        <ButtonNext onClick={this.continue}>Suivant</ButtonNext>
      </form>
    );
  }
}

export default FormStart;
