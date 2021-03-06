import React, {useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';


export const AppDetails = () => {
    const [ application, setApplications ] = useState({})
    const { applicationId } = useParams()
    const history = useHistory()

    const text = {
      fontFamily: 'Spectral'
    }

    useEffect(
        () => {
            fetch(`https://trackit-server-side.herokuapp.com/applications/${applicationId}`, {
                headers:{
                    "Authorization": `Token ${localStorage.getItem("tr_token")}`
                }
            })
                .then(res => res.json())
                .then((data) => {
                    setApplications(data)
                })
        },
        [ applicationId ]  // Above function runs when the value of applicationId change
    )



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
                <ListItemText primary="Company" 
                secondary={application?.job_post?.company} 
                secondaryTypographyProps={{style: text}}  
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company Site" 
                secondary={application?.job_post?.company_url}
                secondaryTypographyProps={{style: text}}
                 />
                <Link className="Job__link" to={{ pathname: `https://${application?.job_post?.company_url}`, }} target="_blank">Read About the Company</Link>
              </ListItem>
              <ListItem>
                <ListItemText primary="Role" 
                secondary={application?.job_post?.role}
                secondaryTypographyProps={{style: text}}
                 />
              </ListItem>
              <ListItem>
                <ListItemText primary="Job Ad"
                 secondary={application?.job_post?.role_url}
                 secondaryTypographyProps={{style: text}}
                  />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location" 
                secondary={application?.job_post?.location}
                secondaryTypographyProps={{style: text}}
                 />
              </ListItem>
              <ListItem>
                <ListItemText primary="Industry" 
                secondary={application?.job_post?.industry} 
                secondaryTypographyProps={{style: text}}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Notes" 
                secondary={application?.notes}
                secondaryTypographyProps={{style: text}}
                 />
              </ListItem>
              <ListItem>
                <ListItemText primary="Stage" 
                secondary={application?.stage?.stage}
                secondaryTypographyProps={{style: text}}
                 />
              </ListItem>
              <ListItem>
                <ListItemText primary="Status" 
                secondary={application?.status?.status}
                secondaryTypographyProps={{style: text}}
                 />
              </ListItem>
              <ListItem>
                <ListItemText primary="Skills" 
                secondary={
                application?.skills?.map((skill, i) => ` ( ${i+1}. ${skill.job_type} ) `)
                }
                secondaryTypographyProps={{style: text}}
                />
                </ListItem>
            </List>

            <br />
            <Button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()
                history.push("/")
            }}
            className="btn btn-2 btn-sep icon-create">Finish</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }