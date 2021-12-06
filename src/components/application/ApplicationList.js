import React, { useEffect, useState } from "react"
import { getApplications } from "./ApplicationManager.js"

export const ApplicationList = () => {
    const [ applications, setApplications ] = useState([])

    useEffect(() => {
        getApplications().then(data => setApplications(data))
    }, [])

    return (
        <article className="applications">
            {
                applications.map(application => {
                    return <section key={`application--${application.id}`} className="application">
                        <div className="application__role">{application.job_post.role} by {application.job_post.company}</div>
                        <div className="application__date">Date Applied: {application.date_applied}</div>
                        <div className="application__status">Currently in {application.status.status}</div>
                    </section>
                })
            }
        </article>
    )
}
