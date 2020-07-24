import React from "react";
import "../assets/styles/budgetVoting.css";
import TaxBrackets from "../components/TaxBrackets/TaxBrackets.js";
// import DoA from "../components/RangeSliders/DoA.js";
// import DoC from "../components/RangeSliders/DoC.js";
// import DoD from "../components/RangeSliders/DoD.js";
// import DoE from "../components/RangeSliders/DoE.js";
// import DoEd from "../components/RangeSliders/DoEd.js";
// import DoHS from "../components/RangeSliders/DoHS.js";
// import DoHHS from "../components/RangeSliders/DoHHS.js";
// import DoI from "../components/RangeSliders/DoI.js";
// import DoJ from "../components/RangeSliders/DoJ.js";
// import DoL from "../components/RangeSliders/DoL.js";
// import DoS from "../components/RangeSliders/DoS.js";
// import DoT from "../components/RangeSliders/DoT.js";
// import DoTr from "../components/RangeSliders/DoTr.js";
// import EPA from "../components/RangeSliders/EPA.js";
// import FCC from "../components/RangeSliders/FCC.js";
// import FEC from "../components/RangeSliders/FEC.js";
// import FTC from "../components/RangeSliders/FTC.js";
// import HUD from "../components/RangeSliders/HUD.js";
// import VA from "../components/RangeSliders/VA.js";
import BudgetSliders from "../components/RangeSliders/RangeSliders.js"
import VoteBtn from "../components/VoteBtn/VoteBtn";

const BudgetVoting = () => {
  return (
    <main>
      <h1>BudgetVoting Page</h1>
        <TaxBrackets />
        <BudgetSliders />
        <VoteBtn />
      
    </main>
    
  );
};

export default BudgetVoting;
