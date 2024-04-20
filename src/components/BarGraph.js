import React, { useState } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function BarGraph() {
  // for assets
  const [realEstateInput, setRealEstateInput] = useState(100)
  const [personalPropertyInput, setPersonalPropertyInput] = useState(120)
  // for liabilities
  const [mortagageBalInput, setMortagageBalInput] = useState(100)
  const [loanBalInput, setLoanBalInput] = useState(100)

  const labels = ["Total Assets", "Total Liabilities"]
  const data = {
    labels,
    datasets: [
      {
        data: [realEstateInput + personalPropertyInput, mortagageBalInput + loanBalInput],
        backgroundColor: [
          'rgb(56, 125, 241)',
          'rgb(255, 88, 45)'
        ],
        borderColor: [
          'rgb(56, 125, 241)',
          'rgb(255, 88, 45)'
        ],
        borderWidth: 1,
        barThickness: 140,
        categoryPercentage: 10,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        onClick: (event, legendItem, legend) => {
          const index = legend.chart.data.labels.indexOf(legendItem.text)
          legend.chart.toggleDataVisibility(index)
          // fillStyle:none
          legend.chart.update()
        },
        labels: {
          generateLabels: (chart) => {
            let visibility = [];
            for (let i = 0; i < chart.data.labels.length; i++) {
              if (chart.getDataVisibility(i) === true) {
                visibility.push(false)
              }
              else {
                visibility.push(true)
              }
            }
            return chart.data.labels.map((label, index) => ({
              text: label,
              strokeStyle: chart.data.datasets[0].borderColor[index],
              fillStyle: chart.data.datasets[0].backgroundColor[index],
              hidden: visibility[index]
            }))
          }
        },
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Assets and Liabilities',
        font: {
          weight: 'bolder',
          size: 20
        },
        color: '#011c46',
      },
    },
    
    scales: {
      // indexAxis: 'y',
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
       // Adjust category spacing here
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  const [isAccordionActive, setIsAccordionActive] = useState(false)
  return (
    <div >
      {/* <div className='accordion'>
        <div className='accordion-title' onClick={() => setIsAccordionActive(!isAccordionActive)} >
          <h2 >Your Assets  {isAccordionActive ? "-" : "+"}</h2>
         
        </div>
        {isAccordionActive && <div style={{ transition: " width 20s, height 20s, transform 20s" }}>
          <div>
            <h4>Real estate</h4>
            <input type='text' value={realEstateInput} />
            <input type='range' min={0} max={1000} onChange={(e) => setRealEstateInput(e.target.value)} />
          </div>
          <div>
            <h4>Personal property</h4>
            <input type='text' value={personalPropertyInput} />
            <input type='range' min={0} max={1000} onChange={(e) => setPersonalPropertyInput(e.target.value)} />
          </div>
        </div>}
      </div> */}
      {/* <div>
        <h2>Your Liabilities</h2>
        <div>
          <h4>Mortgage balance</h4>
          <input type='text' value={mortagageBalInput} />
          <input type='range' min={0} max={1000} onChange={(e) => setMortagageBalInput(e.target.value)} />
        </div>
        <div>
          <h4>Loan balances</h4>
          <input type='text' value={loanBalInput} />
          <input type='range' min={0} max={1000} onChange={(e) => setLoanBalInput(e.target.value)} />
        </div>
      </div> */}
      <div >
        <Bar options={options} data={data} />
      </div>
    </div>

  )
}

export default BarGraph
