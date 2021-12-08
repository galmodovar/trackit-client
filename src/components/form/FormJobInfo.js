import React from 'react'



const FormJobInfo = ({ handleNext, jobData, handleJobData }) => {
    


    return (
        <form className="jobInfo">
        <h2 className="jobInfo__title">Job Info</h2>
        
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Company: </label>
                <input type="text" name="company" required autoFocus className="form-control"
                    value={jobData.company}
                    onChange={handleJobData('company')}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Company Site: </label>
                <input type="text" name="companyUrl" required className="form-control"
                    value={jobData.companyUrl}
                    onChange={handleJobData('companyUrl')}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Position: </label>
                <input type="text" name="role" required className="form-control"
                    value={jobData.role}
                    onChange={handleJobData('role')}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Job Ad: </label>
                <input type="text" name="roleUrl" required className="form-control"
                    value={jobData.roleUrl}
                    onChange={handleJobData('roleUrl')}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Location: </label>
                <input type="text" name="location" required className="form-control"
                    value={jobData.location}
                    onChange={handleJobData('location')}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Industry: </label>
                <input type="text" name="industry" required className="form-control"
                    value={jobData.industry}
                    onChange={handleJobData('industry')}
                />
            </div>
        </fieldset>
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

export default FormJobInfo
