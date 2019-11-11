import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: "#fff"
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
}));

function getSteps() {
  return ['Welcome', 'Business Information', 'Integration', 'Final'];
}

const setStep = (path) => {
  let currentPath;
  switch (path) {
    case "/setup-wizard/welcome":
      currentPath = 0
      break;
    case "/setup-wizard/business-info":
      currentPath = 1
      break;
    case "/setup-wizard/integration":
      currentPath = 2
      break;
    case "/setup-wizard/final":
      currentPath = 3
      break;
    default:
      currentPath = 0
  }
  return currentPath;
}

const Sidebar = (props) => {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = useState(0)
  const [activeStep, setActiveStep] = React.useState(setStep(props.location.pathname));
  const steps = getSteps();

  useEffect(() => {
    console.log('sidebar Loaded');
    props.history.listen((location, action) => {
      // setActiveStep()
      console.log('current path', location.pathname);
      setActiveStep(setStep(location.pathname))
      // setStep(location.pathname)
    });
  });

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    props.history.goBack()
  };

  return (
    <div className="wizard-sidebar">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={require("../../assets/images/levarlogo_white.png")} alt="logo"></img>
          </Link>
        </div>
      </div>
      <div className="menu-content">
        <div className="stepper-container">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel className={classes.labelText}>{label}</StepLabel>
                <StepContent>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                        variant="outlined"
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
