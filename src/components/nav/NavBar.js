import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export const NavBar = () => {
    const history = useHistory()
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ background: "#004d40" }} enableColorOnDark>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Spectral', fontSize: '2rem' }}>
          TrackIt
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className="navbar__link" to="/">Applications</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className="navbar__link" to="/dashboard">Dashboard</Link>
          </Typography>
            <Button style={{ color: "darkblue", fontFamily: 'Spectral' }} onClick={() => {
                    history.push({ pathname: "/applications/new" })
                    }}>Add New Application
            </Button>
            {
                (localStorage.getItem("tr_token") !== null) ?
                        <Button style={{ color: "darkblue", fontFamily: 'Spectral', marginLeft: 20}}
                            onClick={() => {
                                localStorage.removeItem("tr_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</Button>
                     :
                    <>
                        <li className="navbar__item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

