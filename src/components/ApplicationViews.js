import React from "react"
import { Route } from "react-router-dom"
import { ApplicationList } from "./application/ApplicationList"
import  { ApplicationForm } from "./form/ApplicationForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <ApplicationList />
            </Route>
            <Route exact path="/applications/new">
                <ApplicationForm />
            </Route>
        </main>
    </>
}