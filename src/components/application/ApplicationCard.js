import { useEffect, useState } from "react"
import { getApplications } from "./ApplicationManager.js"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



export const ApplicationCard = () => {
    const [ applications, setApplications ] = useState([])

    useEffect(() => {
        getApplications().then(data => setApplications(data))
    }, [])

    return (
        <article className="applications">
            {
                applications.map(application => {
                    // return <section key={`application--${application.id}`} className="application">
                    //     <div className="application__role">{application.job_post.role} by {application.job_post.company}</div>
                    //     <div className="application__date">Date Applied: {application.date_applied}</div>
                    //     <div className="application__status">Currently in {application.status.status}</div>
                    // </section>
                    return (
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <div className="application__role">{application.job_post.role} by {application.job_post.company}</div>
                            <div className="application__date">Date Applied: {application.date_applied}</div>
                            <div className="application__status">Currently in {application.status.status}</div>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    );
                })
            }
        </article>
    )
}


