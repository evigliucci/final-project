import React, { Component } from "react";
import UnweightedBudget from "../components/SuggestedBudgets/unweightedBudget.js";
import WeightedBudget from "../components/SuggestedBudgets/weightedBudget.js";
import NavTabs from "../components/SuggestedBudgets/SuggestedBudgetTabs";

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
      <main>
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
