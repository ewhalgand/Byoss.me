import { useState } from "react";
import styled from "styled-components";
import { UseContextProvider } from "../../../context/StepperContext";
import FormActivity from "./components/steps/FormActivity";
import FormDescription from "./components/steps/FormDescription";
import FormVisibility from "./components/steps/FormVisibility";
import SuccessCreate from './../../success/SuccessCreate/SuccessCreate';
import FormStart from './components/steps/FormStart';

const UserForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FormStart handleClick={handleClick} currentStep={currentStep} />;
      case 2:
        return <FormVisibility handleClick={handleClick} currentStep={currentStep} />;
      case 3:
        return <FormActivity handleClick={handleClick} currentStep={currentStep} />;
      case 4:
        return <FormDescription handleClick={handleClick} currentStep={currentStep} />;
      case 5: 
        return <SuccessCreate />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= setCurrentStep(newStep);
  };

  return (
    <Form>
      <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
    </Form>
  );
}

const Form = styled.section`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 5%;
  margin-top: 80px;
`

export default UserForm;