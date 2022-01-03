import React, { useState, useEffect } from 'react'
import 'chart.js/auto';
import { getApplications, getStatus } from "../application/ApplicationManager"
import { Doughnut } from 'react-chartjs-2'

export const DashboardView = () => {
    const [applications, setApplications] = useState([])
    const [status, setStatus] = useState([])

    //['Rejected', 'Applied', 'Applied', 'Applied']

    // const occurrences = ['rejected', 'applied', 'applied', 'rejected', 'preparing'].reduce(function (acc, curr) {
    //     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    //   }, []);
      
    //   console.log(occurrences) 
      
      
    //   let result =  Object.values(occurrences)
      
    //   console.log(result)


    const data = {
        maintainAspectRatio: false,
        responsive: true,
        labels: status?.map(s => s.status),
        datasets: [
          {
            data: ['1', '2', '5', '2', '1', '3'],
            backgroundColor: ["#4a0c07","#0b4a07","#073f4a","#0a074a","#3c074a", "#047d63"],
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
        <div>
      
      <div className="Chart" style={{maxHeight:500, maxWidth: 500}} >
         <Doughnut data={data} options={options} /> 
        
        <div id="legend"  />
      </div>
    </div>

    )
}