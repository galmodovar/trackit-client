export const getApplications = () => {
    return fetch("http://localhost:8000/applications", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("tr_token")}`
        }
    })
        .then(response => response.json())
}