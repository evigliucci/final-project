// import "../assets/styles/budgetResults.css";
import React from "react";
import {Doughnut} from "react-chartjs-2";

const state = {
          datasets: [{
          data: [7, 10, 20, 20, 30, 30, 10]
        }],
        backgroundColor: [
          'rgba(97, 134, 146)',
          'rgba(142, 93, 165)',
          'rgba(249, 141, 109)',
          'rgba(34, 40, 169)',
          'rgba(224, 230, 144)',
          'rgba(229, 168, 247)',
          'rgba(59, 31, 230)'
        ],
        borderColor: [
          'rgba(57, 249, 202)'
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
            position: 'right'
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
