import styles from "./success_create.module.scss";
import { Button } from "../../../../utils/ui/Buttons";

const SuccessCreate = () => {
  return (
    <section className={styles.section}>
      <h1>
        Votre profil Byoss.me <br /> a bien été crée !
      </h1>
      <Button href="/">Visiter mon profil</Button>
    </section>
  );
};

export default SuccessCreate;