import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
    return (
        <footer>
            <p>&copy; Copyright 2020 | Developed by <a className="portfolioLink" href="https://emvig-portfolio.herokuapp.com/" target="_blank">Erika Vigliucci</a>, Sam Thompson, Sarah Wise and Erich Allen</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/DeptInfo">Educational Information</Link></li>
                <li><Link to="/BudgetVoting">Voting</Link></li>
                <li><Link to="/BudgetResults">Proposed Budget</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;