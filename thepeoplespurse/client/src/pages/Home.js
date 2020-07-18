import React from "react";
import "../assets/styles/home.css";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
import VoteBtn from "../components/VoteBtn/VoteBtn.js";
import DeptBtn from "../components/DeptBtn/DeptBtn.js";
import BarChart from "../components/BarChartRace/BarChart.js";
import BudgetVoting from "./BudgetVoting";
import DeptInfo from "./DeptInfo";
import data from '../components/BarChartRace/Data';
import { BrowserRouter as Router, Route } from "react-router-dom";


const Colors = () => {
  const colorOptions = ["#8c1127", "#d92546", "#071a40", "#2a558c", "#5b9ed9"];
  const colorChoice = Math.floor(Math.random() * 4) + 1;
  return colorOptions[colorChoice];
}

const len = data[Object.keys(data)[0]].length;
const keys = Object.keys(data);

const colors = keys.reduce((res, item) => ({
  ...res,
  ...{ [item]: Colors() }
}), {});

const labels = keys.reduce((res, item, idx) => {
  return {
    ...res,
    ...{
      [item]: (
        <div className="itemLabel">
          <div>{item}</div>
        </div>
      )
    }
  }
}, {});

const time = Array(20).fill(0).map((itm, idx) => idx + 1);

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
      <div className="barChartRace">
        <BarChart
          start={true}
          data={data}
          timeline={time}
          labels={labels}
          colors={colors}
          len={len}
          timeout={400}
          delay={100}
          timelineStyle={{
            textAlign: "center",
            fontSize: "50px",
            color: "rgb(148, 148, 148)"
          }}
          textBoxStyle={{
            textAlign: "right",
            color: "rgb(133, 131, 131)",
            fontSize: "30px",
          }}
          barStyle={{
            height: "25px",
            marginTop: "2px",
            borderRadius: "10px",
          }}
          width={[15, 75, 10, 45, 60]}
          maxItems={10}
        />
      </div>

    </main>
  );
};

export default Home;
