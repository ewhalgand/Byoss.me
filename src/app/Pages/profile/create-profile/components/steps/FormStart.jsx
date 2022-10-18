import { useStepperContext } from "../../../../../context/StepperContext";
import styles from "../../styles/form_start.module.scss";
import { Input } from "../../../../../../utils/ui/Inputs";
import { BigTitle } from "../../../../../../utils/ui/Texts";
import { ButtonNext, ButtonPrev } from "../../../../../../utils/ui/Buttons";
import styled from "styled-components";

export default function FormStart({ handleClick, currentStep }) {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <section>
      <BigTitle>Pour Commencer !</BigTitle>
      <div className={styles.container}>
        <Input
          type="text"
          name="pseudo"
          placeholder="Votre Pseudo"
          onChange={handleChange}
          value={userData["pseudo"] || ""}
        />
        <Input
          type="text"
          name="email"
          placeholder="Votre Email"
          onChange={handleChange}
          value={userData["email"] || ""}
        />
      </div>
      <ButtonsContainer>
        <ButtonPrev
          onClick={() => handleClick()}
          className={`${currentStep === 1 ? "cursor" : ""}`}
          disabled
        >
          Back
        </ButtonPrev>

        <ButtonNext onClick={() => handleClick("next")}>Suivant</ButtonNext>
      </ButtonsContainer>
    </section>
  );
};

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;

  .cursor {
    cursor: not-allowed;
    opacity: 0.50;
  }
`
