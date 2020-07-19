import React from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div className="homeHero">
      <div className="mission">
        <h1>Our Mission is to give every citizen the ability to voice their opinions on how their tax dollars should be spent.</h1>
        <Link className="button secondary--red" to="/DeptInfo">Learn More</Link>
        <Link className="button primary--red" to="/BudgetVoting">I'm ready to vote</Link>
      </div>
      <div className="govSpending">
        <h2>2020 Fiscal Year Government Spending</h2>
        <p>$4,600,000,000,000</p>
        <span>(Trillion)</span>
      </div>
    </div>
  )
}

export default Jumbotron;