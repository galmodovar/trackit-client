export const getApplications = () => {
    return fetch("https://trackit-server-side.herokuapp.com/applications", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getSearchedApps = (search) => {
    return fetch(`https://trackit-server-side.herokuapp.com/applications?q=${search}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getAppById = (applicationId) => {
    return fetch(`https://trackit-server-side.herokuapp.com/applications/${applicationId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteApp = applicationId => {
    return fetch(`https://trackit-server-side.herokuapp.com/applications/${applicationId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        
}

export const updateApp = (app, skills) => {
    app.skills = skills
    return fetch(`https://trackit-server-side.herokuapp.com/applications/${app.id}`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(app)
    })
}

export const getJobs = () => {
    return fetch("https://trackit-server-side.herokuapp.com/jobposts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getStages = () => {
    return fetch("https://trackit-server-side.herokuapp.com/stages", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getStatus = () => {
    return fetch("https://trackit-server-side.herokuapp.com/status", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const getTypes = () => {
    return fetch("https://trackit-server-side.herokuapp.com/jobtypes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const addType = typeId => {
    return fetch(`https://trackit-server-side.herokuapp.com/applications/${ typeId }/type`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })      
}

export const removeType = typeId => {
    return fetch(`https://trackit-server-side.herokuapp.com/applications/${ typeId }/type`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })      
}

export const submitJobInfo = (job) => {
    return fetch("https://trackit-server-side.herokuapp.com/jobposts", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
}

export const submitAppInfo = (app) => {
    return fetch("https://trackit-server-side.herokuapp.com/applications", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(app)
    })
}