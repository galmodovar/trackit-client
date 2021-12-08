import React, { useEffect, useState } from "react"
import { getApplications } from "./ApplicationManager.js"
import { ApplicationCard } from "./ApplicationCard.js"
import { useHistory } from "react-router"

export const ApplicationList = () => {
    const history = useHistory()


    return (
        <section>
        <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/applications/new" })
                    }}>Add New Application
        </button>
        <article className="applications">
            <ApplicationCard />
        </article>
        <article className="applications">
     
        </article>
        <article className="applications">
        
        </article>
        </section>
    )
}
