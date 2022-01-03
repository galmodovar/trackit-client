import * as React from 'react';
import { useEffect, useState } from "react"
import { getJobs, deleteJob } from "./JobManager.js"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Link } from "react-router-dom"
import "./Jobs.css"




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

                    return (
                      <Card sx={{ maxWidth: 375 }}>
                        <CardContent style={{background: '#00897b'}}>
                            <div className="Job__role">{Job.role} by {Job.company}</div>
                            <Link className="Job__link" to={{ pathname: `${Job.company_url}`, }} target="_blank"><p>Read About the Company</p></Link>
                            <Link className="Job__link" to={{ pathname: `${Job.role_url}`, }} target="_blank"><p>See the Job Post</p></Link>
                        </CardContent>
                        <CardActions style={{background: '#004d40'}}>
                            <Button type="submit" size="small" style={{ color: "darkblue" }}
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
        </article>
    )
}