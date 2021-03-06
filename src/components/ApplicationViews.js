import React from "react"
import { Route } from "react-router-dom"
import { AppDetails } from "./application/ApplicationDetails"
import { ApplicationList } from "./application/ApplicationList"
import { DashboardView } from "./dashboard/DashboardView"
import  { ApplicationForm } from "./form/ApplicationForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "0.5rem 1rem",
            lineHeight: "2.75rem"
        }}>
            <Route exact path="/">
                <ApplicationList />
            </Route>
            <Route exact path="/dashboard">
                <DashboardView />
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