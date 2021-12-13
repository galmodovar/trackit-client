import * as React from 'react';
import { useEffect, useState } from "react"
import { getJobs, deleteJob } from "./JobManager.js"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';




export const JobCard = () => {
    const [ Jobs, setJobs ] = useState([])

    const fetchJobs = () => {
        getJobs().then(data => setJobs(data))
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <article className="Jobs">
            {
                Jobs.map(Job => {
                    // return <section key={`Job--${Job.id}`} className="Job">
                    //     <div className="Job__role">{Job.job_post.role} by {Job.job_post.company}</div>
                    //     <div className="Job__date">Date Applied: {Job.date_applied}</div>
                    //     <div className="Job__status">Currently in {Job.status.status}</div>
                    // </section>
                    return (
                      <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <div className="Job__role">{Job.role} by {Job.company}</div>
                            <div className="Job__date">Read About the company: {Job.company_url}</div>
                            <div className="Job__status">Job advertisement: {Job.role_url}</div>
                        </CardContent>
                        <CardActions>
                            <Button type="submit" size="small"
                                onClick={evt => {
                                    // Prevent form from being submitted
                                    evt.preventDefault()
                                    deleteJob(Job.id)
                                    .then(() => fetchJobs())
                                }}><DeleteForeverOutlinedIcon/></Button>
                        </CardActions>
                      </Card>
                    );
                })
            }
            <Button type="submit" size="small"
                                onClick={evt => {
                                    // Prevent form from being submitted
                                    evt.preventDefault()
                                    .then(() => fetchJobs())
                                }}><DeleteForeverOutlinedIcon/></Button>
        </article>
    )
}