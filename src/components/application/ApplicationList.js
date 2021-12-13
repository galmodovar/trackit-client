import React from "react"
import { ApplicationCard } from "./ApplicationCard.js"
import "./Application.css"


export const ApplicationList = () => {
    


    return (
        <section className="app-board">
        <article className="application">
            <ApplicationCard />
        </article>
        <article className="application">
            <h1>Applied</h1>
     
        </article>
        <article className="application">
            <h1>Finished</h1>
        
        </article>
        </section>
    )
}
