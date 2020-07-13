import React from "react";
import "../assets/styles/budgetResults.css";
import unweightedBudget from "../components/SuggestedBudgets/unweightedBudget.js";

const BudgetResults = () => {
  return (
    <main>
      <h1>BudgetResults Page</h1>
      <unweightedBudget />
    </main>
  );
};

export default BudgetResults;
