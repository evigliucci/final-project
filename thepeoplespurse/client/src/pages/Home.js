import React from "react";
import "../assets/styles/home.css";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
import VoteBtn from "../components/VoteBtn/VoteBtn.js";
import DeptBtn from "../components/DeptBtn/DeptBtn.js";
import BudgetVoting from "./BudgetVoting";
import DeptInfo from "./DeptInfo";
import { BrowserRouter as Router, Route } from "react-router-dom";


const Home = () => {
  return (
    <main>
      <h1>HOMEPAGE</h1>
      <Jumbotron />
      <Router>
      <VoteBtn />
      <DeptBtn />
      <Route exact path="/BudgetVoting" component={BudgetVoting} />
      <Route exact path="/DeptInfo" component={DeptInfo} />
      </Router>
      <div className="barChartRace"> </div>
    </main>
  );
};

export default Home;
