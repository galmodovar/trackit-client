import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getJobs, getStages, getStatus, getTypes, submitAppInfo, updateApp } from '../application/ApplicationManager'



const FormAppInfo = ({ handleNext, appData, handleAppData, skills, setChosenSkills }) => {
    const [stages, setStages] = useState([])
    const [status, setStatus] = useState([])
    const [jobs, setJobs] = useState([])
    const [types, setTypes] = useState([])
    const history = useHistory()
    const { applicationId } = useParams()
    
    useEffect(() => {
        getTypes().then(data => setTypes(data))
    }, [])
  
    useEffect(() => {
        getStages().then(data => setStages(data))
    }, [])

    useEffect(() => {
        getStatus().then(data => setStatus(data))
    }, [])

    useEffect(() => {
        getJobs().then(data => {
            setJobs(data)})
    }, [])

    const typeChecker = (e) =>{
        
        if (applicationId) {
            const copy = [...skills]
            if (copy.some(skill => skill === parseInt(e.target.value))){
                document.getElementById(e.target.id).checked=false
                const index = copy.indexOf(parseInt(e.target.value))
                copy.splice(index, 1)
                setChosenSkills(copy)
            }else{
                copy.push(parseInt(e.target.value))
                document.getElementById(e.target.id).checked=true
                setChosenSkills(copy)  
            }
        } else {
            
            const copy = [...skills]
            if (copy.includes(parseInt(e.target.value))){
                document.getElementById(e.target.id).checked=false
                const index = copy.indexOf(parseInt(e.target.value))
                copy.splice(index, 1)
                setChosenSkills(copy)
            }else{
                copy.push(parseInt(e.target.value))
                document.getElementById(e.target.id).checked=true
                setChosenSkills(copy)  
            }
        }

    }
    

    return (
        <form className="jobInfo">
        <h2 className="jobInfo__title">App Info</h2>
        
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Notes: </label>
                <input type="textarea" name="notes" required autoFocus className="form-control"
                    value={appData.notes}
                    onChange={handleAppData('notes')}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Date Applied: </label>
                <input type="date" name="date_applied" required className="form-control"
                    value={appData.date_applied}
                    onChange={handleAppData('date_applied')}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Stage: </label>
                <select name="stage" className="form-control"
                        value={ appData.stageId }
                        onChange={ handleAppData('stageId') }>
                        <option value="0">Stages...</option>
                        {
                            stages.map(stage => (
                                <option value={stage.id}>{stage.stage}</option>
                            ))
                        }
                </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Job: </label>
                <select name="stage" className="form-control"
                        value={ appData.jobId }
                        onChange={ handleAppData('jobId') }>
                        <option value="0">Job...</option>
                        {
                            jobs?.map(job => (
                                <option value={job.id}>{job.role} for {job.company}</option>
                            ))
                        }
                </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Status: </label>
                <select name="status" className="form-control"
                        value={ appData.statusId }
                        onChange={ handleAppData('statusId') }>
                        <option value="0">Status...</option>
                        {
                            status.map(status => (
                                <option value={status.id}>{status.status}</option>
                            ))
                        }
                </select>
            </div>
        </fieldset>
        <fieldset>
            {/* <div className="form-group">
                <label htmlFor="title">What skills are needed for this job?: </label>
                        {
                            types.map(type => (
               
                                <button type="submit" name='skills' className="btn btn-2 btn-sep icon-create"
                                        value={ type.id } key={type.id}
                                        onClick= {e => {
                                            e.preventDefault()
                                            typeChecker(type.id)
                                            }
                                        }>{type.job_type}
                                </button>
                                            
                            ))
                        }
            </div> */}
            <div className="form-group">
                        {
                            types.map(type => (<>
                                <label id="skills" name="skills" value={type.id}> {type.job_type} </label>
                                <input type="checkbox" name="skills" id={type.id} value={type.id}
                               checked={skills?.some(skill => skill === type.id)}
                                   
                                onChange={ (e) => {
                                    //e.preventDefault()
                                    typeChecker(e)
                                }}></input>
                            </>))}
            </div>
        </fieldset>
        <button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()

                if (applicationId) {

                    
                    updateApp(appData, skills)
                    .then(() => history.push("/"))
                } else {
                    appData.skills = skills
                    submitAppInfo(appData)
                    .then(() => handleNext())
                }
            }}
            className="btn btn-2 btn-sep icon-create">Submit App Info</button>
    </form>
    )
}

export default FormAppInfo