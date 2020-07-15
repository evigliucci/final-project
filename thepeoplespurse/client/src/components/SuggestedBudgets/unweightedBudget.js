// import "../assets/styles/budgetResults.css";
import React from "react";
import {Doughnut} from "react-chartjs-2";

const state = {
          datasets: [{
          data: [7, 10, 20, 20, 30, 30, 10]
        }],
        backgroundColor: [
          '#375a94',
          '#a52fba',
          '#42ba2f',
          '#d1c541',
          '#d141ca',
          '#5aedeb',
          '#b33832'
        ],
        borderColor: [
          '#080808'
        ],
        borderWidth: 1,
        labels: ['USDA', 'DoD', 'DoE', 'DoL', 'DoS', 'DoHS', 'DoT']
      }

export default class UnweightedBudget extends React.Component{
  render () {
  return (
    <div>
      <Doughnut
        data={state}
        options={{
          title:{
            display:true,
            text: 'Unweighted Budget',
            fontSize:20
          },
          legend:{
            display: true,
            position: 'top'
          },
          animation: {
          animateScale: true,
          animateRotate: true
          },
          layout: {
              padding: {
                  left: 50,
                  right: 0,
                  top: 0,
                  bottom: 0
                }
          }
        }} 
        />
      </div>
  );
}
}
