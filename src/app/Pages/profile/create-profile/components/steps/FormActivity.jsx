import { useStepperContext } from "../../../../../context/StepperContext";
import styles from "../../styles/form_activity.module.scss";
import { BigTitle } from "../../../../../../utils/ui/Texts";
import { ButtonNext, ButtonPrev } from "../../../../../../utils/ui/Buttons";
import styled from "styled-components";

export default function FormActivity({ handleClick, currentStep }) {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <section>
      <BigTitle>Selectionnez votre activité</BigTitle>
      <div className={styles.container}>
        <div className={styles.left}>
          <button style={{ background: "#CBAF71" }}>
            Propriétaire/Fondateur
          </button>
          <button style={{ background: "#6476A6" }}>Modérateur</button>
          <button style={{ background: "#CC6371" }}>Youtubeur/Vidéaste</button>
        </div>
        <div className={styles.middle}>
          <button style={{ background: "#0000004D" }}>Graphiste</button>
          <button style={{ background: "#6181DC" }}>Développeur</button>
          <button style={{ background: "#FF8E87" }}>WebDesigner</button>
        </div>
        <div className={styles.right}>
          <button style={{ background: "#169A4BC2" }}>
            Monteur/Motion Designer
          </button>
          <button style={{ background: "#8F3FF491" }}>
            Musicien/Compositeur
          </button>
          <input
            type="text"
            name="other"
            placeholder="Autres"
            onChange={handleChange}
            value={userData["other"] || ""}
          />
        </div>
      </div>
      <ButtonsContainer>
        <ButtonPrev
          onClick={() => handleClick()}
          className={`${currentStep === 1 ? "cursor" : ""}`}
        >
          Back
        </ButtonPrev>

        <ButtonNext onClick={() => handleClick("next")}>Suivant</ButtonNext>
      </ButtonsContainer>
    </section>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`;
