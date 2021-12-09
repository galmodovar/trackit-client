export const getApplications = () => {
    return fetch("http://localhost:8000/applications", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getAppById = (applicationId) => {
    return fetch(`http://localhost:8000/applications/${applicationId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteApp = applicationId => {
    return fetch(`http://localhost:8000/applications/${applicationId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        
}

export const updateApp = (app) => {
    return fetch(`http://localhost:8000/applications/${app.id}`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(app)
    })
}

export const getJobs = () => {
    return fetch("http://localhost:8000/jobposts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getStages = () => {
    return fetch("http://localhost:8000/stages", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getStatus = () => {
    return fetch("http://localhost:8000/status", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getTypes = () => {
    return fetch("http://localhost:8000/jobtypes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const addType = typeId => {
    return fetch(`http://localhost:8000/applications/${ typeId }/type`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })      
}

export const removeType = typeId => {
    return fetch(`http://localhost:8000/applications/${ typeId }/type`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })      
}

export const submitJobInfo = (job) => {
    return fetch("http://localhost:8000/jobposts", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
}

export const submitAppInfo = (app) => {
    return fetch("http://localhost:8000/applications", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(app)
    })
}