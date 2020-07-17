import React from "react";
// import "../assets/styles/budgetResults.css";
import UnweightedBudget from "../components/SuggestedBudgets/UnweightedBudget.js";
import BudgetSlider from "../components/BudgetSlider/BudgetSlider";
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
