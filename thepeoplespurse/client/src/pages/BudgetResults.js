import React from "react";
// import "../assets/styles/budgetResults.css";
import UnweightedBudget from "../components/SuggestedBudgets/unweightedBudget.js";
import WeightedBudget from "../components/SuggestedBudgets/weightedBudget.js";
import BudgetSlider from "../components/BudgetSlider/budgetSlider";
// import BudgetBtns from "../components/BudgetBtns/BudgetBtns";

const BudgetResults = () => {
  return (
    <main>
      <h1>BudgetResults Page</h1>

      <section className="suggestedSpending">
        <BudgetSlider />
        <div className="suggestedSpending-charts">
          <UnweightedBudget />
          <WeightedBudget />
        </div>
      </section>
      {/* <BudgetBtns /> */}
    </main>
  );
};

export default BudgetResults;
