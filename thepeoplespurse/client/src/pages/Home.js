import React from "react";
import "../assets/styles/home.css";
import Jumbotron from "../components/Jumbotron/Jumbotron.js";
import PieChart from "../components/PieChart/PieChart";
import NonProfitBanner from '../components/NonProfitBanner/NonProfitBanner';


const Home = () => {
  return (
    <main>
      <NonProfitBanner />
      <h3>Total Federal Spending by Agency 2019</h3>
      <PieChart></PieChart>
      <Jumbotron />
    </main >
  );
};

export default Home;
