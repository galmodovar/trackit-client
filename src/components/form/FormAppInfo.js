import React from 'react'



const FormAppInfo = ({ handleNext, handleBack, appData, handleAppData }) => {
    


    return (
        <form className="jobInfo">
        <h2 className="jobInfo__title">Job Info</h2>
        
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
                <input type="text" name="stage" required className="form-control"
                    value={appData.stage}
                    onChange={handleAppData('stage')}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Status: </label>
                <input type="text" name="status" required className="form-control"
                    value={appData.status}
                    onChange={handleAppData('status')}
                />
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