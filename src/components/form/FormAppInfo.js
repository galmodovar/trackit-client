import React, { useState, useEffect } from 'react'
import { getStages, getStatus, getTypes } from '../application/ApplicationManager'



const FormAppInfo = ({ handleNext, handleBack, appData, handleAppData }) => {
    const [stages, setStages] = useState([])
    const [status, setStatus] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        getStages().then(data => setStages(data))
    }, [])

    useEffect(() => {
        getStatus().then(data => setStatus(data))
    }, [])
    
    useEffect(() => {
        getTypes().then(data => setTypes(data))
    }, [])

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
                <input type="date" name="dateApplied" required className="form-control"
                    value={appData.dateApplied}
                    onChange={handleAppData('dateApplied')}
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
            <div className="form-group">
                <label htmlFor="title">Job Type: </label>
                        {
                            types.map(type => (
               
                                <button type="submit" name='skills' className="btn btn-2 btn-sep icon-create"
                                        value={ type.id }
                                        onClick={evt => {
                                            evt.preventDefault()
                                            handleAppData(type.id)
                                            console.log(appData.skills)
                                            }}>{type.job_type}
                                </button>
                                            
                            ))
                        }
            </div>
        </fieldset>
        <button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()
                {handleBack()}
            }}
            className="btn btn-2 btn-sep icon-create">Previous</button>
        <button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()
                {handleNext()}
            }}
            className="btn btn-2 btn-sep icon-create">Next</button>
    </form>
    )
}

export default FormAppInfo