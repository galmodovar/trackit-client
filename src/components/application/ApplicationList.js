import React from "react"
import { ApplicationCard } from "./ApplicationCard.js"
import { useHistory } from "react-router"

export const ApplicationList = () => {
    const history = useHistory()


    return (
        <section>
        <article className="applications">
            <h1>Researching</h1>
            <ApplicationCard />
        </article>
        <article className="applications">
            <h1>Applied</h1>
     
        </article>
        <article className="applications">
            <h1>Finished</h1>
        
        </article>
        </section>
    )
}
