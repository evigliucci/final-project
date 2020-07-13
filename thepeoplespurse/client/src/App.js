import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import BudgetResults from "./pages/BudgetResults";
import BudgetVoting from "./pages/BudgetVoting";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/BudgetResults" component={BudgetResults} />
      <Route exact path="/BudgetVoting" component={BudgetVoting} />
    </Router>
  );
}

export default App;
