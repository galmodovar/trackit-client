
import React, { useState, useEffect } from "react";
import FormJobInfo from "./FormJobInfo";
import FormAppInfo from "./FormAppInfo";
import Confirm from "./Confirm";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getAppById } from "../application/ApplicationManager";



export const ApplicationForm = () => {
  const { applicationId } = useParams()
  const [activeStep, setActiveStep] = useState()
  const [skills, setChosenSkills] = useState([])
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
    date_applied: "",
    stageId: "",
    statusId: "",
    jobId: "",
    skills: []
  })
  ;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

      setAppData(prevState => ({
        ...prevState,
        [input]: value
    }));
    }

    useEffect(() => {
      if (applicationId) {
        setActiveStep(2)
        getAppById(applicationId)
        .then(data => {
          setChosenSkills(data.skills.map(s => s.id))
          setAppData({
          id: data.id,
          response: "False",
          notes: data.notes,
          stageId: data.stage.id,
          statusId: data.status.id,
          jobId: data.job_post.id,
          date_applied: data.date_applied,
          skills: data.skills
      })})
      } else {
        setActiveStep(1)
      }
  }, [applicationId])

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
            <FormAppInfo handleNext={handleNext} skills={skills} handleAppData={handleAppData} appData={appData} setChosenSkills={setChosenSkills} />
        </div>
      );
    case 3:
      return (
        <div className="App">
            <Confirm handleNext={handleNext} appData={appData} jobData={jobData} />
        </div>
      );
    default:
        return <h1>Add an App</h1>
  }
}


                        
                        
                        
                        
                        
                        
                        
                        