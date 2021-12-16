import React, { useState, useEffect } from 'react'
import 'chart.js/auto';
import { getApplications, getStatus } from "../application/ApplicationManager"
import { Doughnut } from 'react-chartjs-2'

export const DashboardView = () => {
    const [applications, setApplications] = useState([])
    const [status, setStatus] = useState([])

    //['Rejected', 'Applied', 'Applied', 'Applied']
    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: status?.map(s => s.status),
        datasets: [
          {
            data: ['1', '2', '3', '2'],
            backgroundColor: 'black',
            hoverBackgroundColor: 'white'
          }
        ]
      }

      const options = {
        legend: {
          display: false,
          position: "right"
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };


    

    useEffect(() => {
        getApplications().then(data => setApplications(data))
    }, [])

    useEffect(() => {
        getStatus().then(data => setStatus(data))
    }, [])
    


    return (
        <div className="App">
      
      <div >
         <Doughnut data={data} options={options} /> 
        
        <div id="legend" />
      </div>
    </div>

    )
}