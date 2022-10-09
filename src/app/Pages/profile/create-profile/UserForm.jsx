import React, { Component } from "react";
import FormActivity from "./components/FormActivity";
import FormDescription from "./components/FormDescription";
import FormStart from "./components/FormStart";
import FormVisibility from "./components/FormVisibility";

class UserForm extends Component {
  state = {
    step: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return <FormStart nextStep={this.nextStep} />;
      case 2:
        return (
          <FormVisibility nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      case 3:
        return (
          <FormActivity nextStep={this.nextStep} prevStep={this.prevStep} />
        );
      case 4:
        return <FormDescription nextStep={this.nextStep} prevStep={this.prevStep} />;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default UserForm;
