import React from "react"
import { Route } from "react-router-dom"
import { AppDetails } from "./application/ApplicationDetails"
import { ApplicationList } from "./application/ApplicationList"
import  { ApplicationForm } from "./form/ApplicationForm"
import { JobCard } from './jobs/JobList'


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <ApplicationList />
            </Route>
            <Route exact path="/jobs">
                <JobCard />
            </Route>
            <Route exact path="/applications/new">
                <ApplicationForm />
            </Route>
            <Route exact path="/applications/edit/:applicationId">
                <ApplicationForm />
            </Route>
            <Route exact path="/applications/:applicationId(\d+)">
                <AppDetails />
            </Route>
        </main>
    </>
}