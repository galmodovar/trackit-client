export const getJobs = () => {
    return fetch("https://trackit-server-side.herokuapp.com/jobposts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteJob = jobId => {
    return fetch(`https://trackit-server-side.herokuapp.com/jobposts/${jobId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        
}