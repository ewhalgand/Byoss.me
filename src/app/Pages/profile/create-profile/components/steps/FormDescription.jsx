import axios from "axios";
import { useStepperContext } from "../../../../../context/StepperContext";
import styles from "../../styles/form_description.module.scss";
import { Bio, Input } from "../../../../../../utils/ui/Inputs";
import { BigTitle } from "../../../../../../utils/ui/Texts";
import { ButtonNext, ButtonPrev } from "../../../../../../utils/ui/Buttons";
import styled from "styled-components";

export default function FormDescription({ handleClick, currentStep }) {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    axios.post("http://localhost:3000/products", userData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <section>
      <BigTitle>Décrivez vous !</BigTitle>
      <div className={styles.container}>
        <Input
          type="text"
          name="favorite"
          placeholder="Jeu ou communauté préférée"
          onChange={handleChange}
          value={userData["favorite"] || ""}
        />
        <Bio
          type="text"
          name="description"
          placeholder="Description du profil"
          onChange={handleChange}
          value={userData["description"] || ""}
        ></Bio>
      </div>
      <ButtonsContainer>
        <ButtonPrev
          onClick={() => handleClick()}
          className={`${currentStep === 1 ? "cursor" : ""}`}
        >
          Back
        </ButtonPrev>

        <ButtonNext onClick={handleSubmit}>Terminer</ButtonNext>
      </ButtonsContainer>
    </section>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`;