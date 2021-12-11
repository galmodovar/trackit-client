export const getJobs = () => {
    return fetch("http://localhost:8000/jobposts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteJob = jobId => {
    return fetch(`http://localhost:8000/jobposts/${jobId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        
}