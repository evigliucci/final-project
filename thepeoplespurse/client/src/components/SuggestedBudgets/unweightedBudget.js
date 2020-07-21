import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./suggestedBudgets.css";

const state = {
  datasets: [{
    data: [7, 10, 20, 20, 30, 30, 10, 7, 10, 20, 20, 30, 30, 10, 7, 10, 20, 20, 30],
    backgroundColor: [
      "#051B41",
      "#28558D",
      "#5A9EDA",
      "#8A1127",
      "#D72647",
      "#5A9EDA",
      "#ccc",
      "#3B3C40",
      "#A6A6A6",
      "#051B41",
      "#28558D",
      "#5A9EDA",
      "#8A1127",
      "#D72647",
      "#3B3C40",
      "#ccc",
      "#A6A6A6",
      "#051B41",
      "#28558D",
      "#5A9EDA",
      "#8A1127",
    ],
  }],
  borderColor: [
    'rgba(57, 249, 202)'
  ],
  borderWidth: 1,
  labels: ['Dept of State', 'Dept of Defense', 'Dept of Energy', 'Dept of Labor', 'Dept of Agriculture', 'Dept of Homeland Security', 'Dept of Transportation', 'Dept of Commerce', 'Dept of Education', 'Dept of Health & Human Services', 'Dept of Housing & Urban Development', 'Dept of Justice', 'Dept of the Interior', 'Dept of the Treasury', 'Environmental Protection Agency', 'Federal Communication Comission', 'Federal Election Comission', 'Federal Trade Comission', 'Equal Employment Opportunity Comission']
}

export default class UnweightedBudget extends React.Component {
  render() {
    return (
      <div className="suggestedSpending-unweighted">
        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: 'Unweighted Budget',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
            tooltips: {
              intersect: false,
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
