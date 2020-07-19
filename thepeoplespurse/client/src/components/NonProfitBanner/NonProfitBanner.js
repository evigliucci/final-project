import React from "react";
import "./NonProfitBanner.css";
import { Link } from "react-router-dom";

function Jumbotron() {
    return (
        <div className="NonProfitBanner">
            <h3>The People's Purse is a non profit organization dedicated to collecting data to represent the way THE PEOPLE want to spend their tax dollars.</h3>
            <div className="NonProfitBannerBtns">
                <Link className="button secondary--blue" to="/DeptInfo">I'd like to learn more</Link>
                <Link className="button primary--blue" to="/BudgetVoting">I'm ready to vote</Link>
            </div>
        </div>
    )
}

export default Jumbotron;