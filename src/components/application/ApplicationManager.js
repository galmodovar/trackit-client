export const getApplications = () => {
    return fetch("http://localhost:8000/applications", {
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
    return fetch(`http://localhost:8000/events/${ typeId }/signup`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        
}