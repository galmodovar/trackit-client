import React from "react"
import { Route } from "react-router-dom"
import { ApplicationList } from "./application/ApplicationList"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <ApplicationList />
            </Route>
        </main>
    </>
}