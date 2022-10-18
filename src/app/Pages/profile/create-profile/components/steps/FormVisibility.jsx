import { useStepperContext } from "../../../../../context/StepperContext";
import styles from "../../styles/form_visibility.module.scss";
import { BigTitle } from "../../../../../../utils/ui/Texts";
import { Input } from "../../../../../../utils/ui/Inputs";
import { ButtonNext, ButtonPrev } from "../../../../../../utils/ui/Buttons";
import styled from "styled-components";

export default function FormVisibility({ handleClick, currentStep }) {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <section>
      <BigTitle>Donnez vous de la visibilité !</BigTitle>
      <div className={styles.container}>
        <div className={styles.left}>
          <Input
            type="text"
            name="discordLink"
            placeholder="Pseudo Discord"
            onChange={handleChange}
            value={userData["discordLink"] || ""}
          />
          <Input
            type="text"
            name="instaLink"
            placeholder="Pseudo Instagram"
            onChange={handleChange}
            value={userData["instaLink"] || ""}
          />
          <Input
            type="text"
            name="twitterLink"
            placeholder="Pseudo Twitter"
            onChange={handleChange}
            value={userData["twitterLink"] || ""}
          />
        </div>
        <div className={styles.right}>
          <Input
            type="text"
            name="youtubeLink"
            placeholder="Pseudo Youtube"
            onChange={handleChange}
            value={userData["youtubeLink"] || ""}
          />
          <Input
            type="text"
            name="githubLink"
            placeholder="Pseudo Gihub"
            onChange={handleChange}
            value={userData["githubLink"] || ""}
          />
          <Input
            type="text"
            name="website"
            placeholder="Site Web"
            onChange={handleChange}
            value={userData["website"] || ""}
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
};

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`