import React, {useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Confirm = ({ appData, jobData }) => {
    const history = useHistory()



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

