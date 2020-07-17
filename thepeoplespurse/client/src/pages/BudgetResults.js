import React from "react";
// import "../assets/styles/budgetResults.css";
import UnweightedBudget from "../components/SuggestedBudgets/unweightedBudget.js";
import BudgetSlider from "../components/BudgetSlider/budgetSlider";
// import BudgetBtns from "../components/BudgetBtns/BudgetBtns";

const BudgetResults = () => {
  return (
    <main>
      <h1>BudgetResults Page</h1>
      <UnweightedBudget />
      <BudgetSlider />
      {/* <BudgetBtns /> */}
    </main>
  );
};

export default BudgetResults;
