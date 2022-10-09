import React, { Component } from "react";
import styles from "../styles/form_visibility.module.scss";
import { ButtonPrev, ButtonNext } from "../../../../../utils/ui/Buttons";
import { BigTitle } from "../../../../../utils/ui/Texts";
import { Input } from "../../../../../utils/ui/Inputs";

class FormVisibility extends Component {
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
        <BigTitle>Donnez vous de la visibilité !</BigTitle>
        <div className={styles.container}>
          <div className={styles.left}>
            <Input
              type="text"
              name="pseudoDiscord"
              placeholder="Pseudo Discord"
            />
            <Input
              type="text"
              name="pseudoInsta"
              placeholder="Pseudo Instagram"
            />
            <Input
              type="text"
              name="pseudoTwitter"
              placeholder="Pseudo Twitter"
            />
          </div>
          <div className={styles.right}>
            <Input
              type="text"
              name="pseudoYoutube"
              placeholder="Pseudo Youtube"
            />
            <Input type="text" name="pseudogithub" placeholder="Pseudo Gihub" />
            <Input type="text" name="website" placeholder="Site Web" />
          </div>
        </div>
        <div className={styles.btn}>
          <ButtonPrev onClick={this.back}>Retour</ButtonPrev>
          <ButtonNext onClick={this.continue}>Suivant</ButtonNext>
        </div>
      </form>
    );
  }
}

export default FormVisibility;
