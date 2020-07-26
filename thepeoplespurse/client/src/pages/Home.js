import React from "react";
import "../assets/styles/home.css";
import PieChart from "../components/PieChart/PieChart";
import NonProfitBanner from '../components/NonProfitBanner/NonProfitBanner';
import Tile from "../components/Tile/Tile";

const Home = () => {
  return (
    <main>
      <NonProfitBanner />
      <section className="chartArea contentWrap">
        <h3>This spending chart lets you see the top 10 tiers of the federal budget in granularity, illustrating how awards derive from federal accounts. 74% of the budget belongs to just the top 4 agencies. That equates to $3.544 trillion, only leaving $1.25 trillion to be divided among the remaining 133 independent executive agencies. </h3>
        <PieChart></PieChart>
      </section>
      <div className="tiles contentWrap">
        <Tile
          classNames="tile teal"
          icon="icon-about"
          tileTitle="About Us"
          tileText="Come see more about ThePeoplesPurse, how we got started, and ways you can help."
          link="/"
          tileButton="Read More"
        />

        <Tile
          classNames="tile blue"
          icon="icon-education"
          tileTitle="Educational Materials"
          tileText="Take a deeper dive into the different agency departments to learn about what they do."
          link="/DeptInfo"
          tileButton="Learn More"
        />

        <Tile
          classNames="tile yellow"
          icon="icon-vote"
          tileTitle="Vote"
          tileText="Are you ready to decide on your own personal budget breakdown? Go Vote!"
          link="/BudgetVoting"
          tileButton="Vote Now"
        />

        <Tile
          classNames="tile green"
          icon="icon-data"
          tileTitle="Data Results"
          tileText="Looking to view the collected voting results for the current fiscal year?"
          link="/BudgetVoting"
          tileButton="View Data"
        />
      </div>
    </main >
  );
};

export default Home;
