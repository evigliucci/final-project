import React, { Component } from "react";
import UnweightedBudget from "../components/SuggestedBudgets/unweightedBudget.js";
import WeightedBudget from "../components/SuggestedBudgets/weightedBudget.js";
import NavTabs from "../components/SuggestedBudgets/SuggestedBudgetTabs";
import "../assets/styles/budgetResults.css";

class BudgetResults extends Component {
  state = {
    currentChart: "UnweightedBudget"
  };

  handleChartChange = chart => {
    this.setState({ currentChart: chart });
  };

  renderChart = () => {
    if (this.state.currentChart === "UnweightedBudget") {
      return <UnweightedBudget />;
    } else {
      return <WeightedBudget />;
    }
  };


  render() {
    return (
      <main className="budgetResults">
        <section className="intro">
          <h1>Data Collection Center</h1>
          <p>How can our government make and informed decision about how to spend our tax dollars when there is no information? This data is available to help educate the general public, members of congress and others in various branches of legislature. The hope is that we can make change by showcasing this data. </p>
        </section>
        <section className="suggestedSpending">
          <div className="suggestedSpending-charts">
            <div>
              <NavTabs
                currentChart={this.state.currentChart}
                handleChartChange={this.handleChartChange}
              />
              {this.renderChart()}
            </div>
          </div>
        </section>
      </main>
    );
  };
};

export default BudgetResults;
