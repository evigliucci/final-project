import React from "react";
import "../assets/styles/home.css";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
import VoteBtn from "../components/VoteBtn/VoteBtn.js";
import DeptBtn from "../components/DeptBtn/DeptBtn.js";


const Home = () => {
  return (
    <main>
      <h1>HOMEPAGE</h1>
      <Jumbotron />
      <VoteBtn />
      <DeptBtn />
      <div classname="barChartRace"> </div>
    </main>
  );
};

export default Home;
