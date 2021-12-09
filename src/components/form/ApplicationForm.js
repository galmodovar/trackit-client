
import React, { useState } from "react";
import FormJobInfo from "./FormJobInfo";
import FormAppInfo from "./FormAppInfo";



export const ApplicationForm = () => {
  const [jobData, setJobData] = useState({
    company: "",
    companyUrl: "",
    role: "",
    roleUrl: "",
    location: "",
    industry: ""
  })
  const [appData, setAppData] = useState({
    notes: "",
    response: "False",
    dateApplied: "",
    stageId: "",
    statusId: "",
    JobId: "",
    skills:[]
  })
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
 
  const handleJobData = input => e => {
    const { value } = e.target;

    setJobData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  const handleAppData = input => e => {
    const { value } = e.target;

    if (input !== 'skills') {
      setAppData(prevState => ({
        ...prevState,
        [input]: value
    }));
    } else {
      setAppData(prevState => ({
        ...prevState,
        [input]: [input].push(value)
      }))
    }

  }



  switch (activeStep) {
   
    case 1:
      return (
        <div className="App">
            <FormJobInfo handleNext={handleNext} handleJobData={handleJobData} jobData={jobData} />
        </div>
      );
    case 2:
      return (
        <div className="App">
            <FormAppInfo handleNext={handleNext} handleBack={handleBack} handleAppData={handleAppData} appData={appData} />
        </div>
      );
    case 3:
      return (
        <div className="App">
                <h1>Confirm</h1>
        </div>
      );
    default:
        return <h1>Add an App</h1>
  }
}


                        
                        
                        
                        
                        
                        
                        
                        