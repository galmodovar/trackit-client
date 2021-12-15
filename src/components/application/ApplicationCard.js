import { useEffect, useState } from "react"
import { getApplications, deleteApp, getSearchedApps } from "./ApplicationManager.js"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./Application.css"



export const ApplicationCard = () => {
    const [ applications, setApplications ] = useState([])
    const [query, setQuery] = useState('')
    const history = useHistory()

    const fetchApplications = () => {
        getApplications().then(data => setApplications(data))
    }

    useEffect(() => {
        if (query) {
            getSearchedApps(query).then(data => setApplications(data))
        } else {
            fetchApplications()
        }
    }, [query])

    return (
        <>
        <form>
            <input
                type="text"
                id="header-search"
                placeholder="Search"
                onChange={(event)=>                            
                    setQuery(event.target.value)}                         
                    />
                
            </form>
        
        
        <section className="app-board">
        <article className="application">
            <h1>Researching</h1>
            {
                applications?.map(application => {
                    
                    return (
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <div className="application__role">{application.job_post.role} by {application.job_post.company}</div>
                            <div className="application__date">Date Applied: {application.date_applied}</div>
                            <div className="application__status">Currently in {application.status.status}</div>
                        </CardContent>
                        <CardActions>
                            <Button type="submit" size="small"
                                onClick={() => {
                                    history.push({ pathname: `/applications/${application.id}`})
                                    }}><MoreHorizOutlinedIcon/></Button>
                            <Button type="submit" size="small"
                                onClick={() => {
                                    history.push({ pathname: `/applications/edit/${application.id}`})
                                    }}><EditOutlinedIcon/></Button>
                            <Button type="submit" size="small"
                                onClick={evt => {
                                    // Prevent form from being submitted
                                    evt.preventDefault()
                                    deleteApp(application.id)
                                    .then(() => fetchApplications())
                                }}><DeleteForeverOutlinedIcon/></Button>
                        </CardActions>
                      </Card>
                    );
                })
            }
        </article>
        <article className="application">
            <h1>Applied</h1>
     
        </article>
        <article className="application">
            <h1>Finished</h1>
        
        </article>
        </section>

        </>
    )
}


