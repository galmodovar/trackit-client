import React, {useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { addType, getTypes, getApplications } from '../application/ApplicationManager'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Confirm = ({ appData, jobData, appTypeData, handleNext, handleAppTypeData }) => {
    const [types, setTypes] = useState([])
    const [application, setApplications] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTypes().then(data => setTypes(data))
    }, [])

    useEffect(() => {
        getApplications().then(data => setApplications(data))
    }, [])

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Company" secondary={jobData.company} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company Site" secondary={jobData.companyUrl} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Role" secondary={jobData.role} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Job Ad" secondary={jobData.roleUrl} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location" secondary={jobData.location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Industry" secondary={jobData.industry} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Notes" secondary={appData.notes} />
              </ListItem>
            </List>
            <br />

            <fieldset>
            <div className="form-group">
                <label htmlFor="title">What skills are needed for this job?: </label>
                        {
                            types.map(type => (
               
                                <button type="submit" name='skills' className="btn btn-2 btn-sep icon-create"
                                        value={ type.id } key={type.id}
                                        onClick= {evt => {
                                            evt.preventDefault()
                                            let currentApp = application.find(e => e.job_post.id === parseInt(appData.jobId))
                                            const newType = {
                                                applicationId: currentApp.id,
                                                typeId: type.id
                                            }
                                            addType(newType)
                                            }
                                        }>{type.job_type}
                                </button>
                                            
                            ))
                        }
            </div>
        </fieldset>

        <Button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()
                {history.push("/")}
            }}
            className="btn btn-2 btn-sep icon-create">Finish</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }

export default Confirm

