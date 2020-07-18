import React from "react";
import "../assets/styles/budgetVoting.css";
import TaxBrackets from "../components/TaxBrackets/TaxBrackets.js";
import DoA from "../components/RangeSliders/DoA.js";
import DoC from "../components/RangeSliders/DoC.js";
import DoD from "../components/RangeSliders/DoD.js";
import DoE from "../components/RangeSliders/DoE.js";
import DoEd from "../components/RangeSliders/DoEd.js";
import DoHS from "../components/RangeSliders/DoHS.js";
import DoHHS from "../components/RangeSliders/DoHHS.js";
import DoI from "../components/RangeSliders/DoI.js";
import DoJ from "../components/RangeSliders/DoJ.js";
import DoL from "../components/RangeSliders/DoL.js";
import DoS from "../components/RangeSliders/DoS.js";
import DoT from "../components/RangeSliders/DoT.js";
import DoTr from "../components/RangeSliders/DoTr.js";
import EPA from "../components/RangeSliders/EPA.js";
import FCC from "../components/RangeSliders/FCC.js";
import FEC from "../components/RangeSliders/FEC.js";
import FTC from "../components/RangeSliders/FTC.js";
import HUD from "../components/RangeSliders/HUD.js";
import VA from "../components/RangeSliders/VA.js";

const BudgetVoting = () => {
  return (
    <main>
      <h1>BudgetVoting Page</h1>
      <TaxBrackets />
      <DoA />
      <DoC />
      <DoD />
      <DoE />
      <DoEd />
      <DoHHS />
      <DoHS />
      <DoI />
      <DoJ />
      <DoL />
      <DoS />
      <DoT />
      <DoTr />
      <EPA />
      <FCC />
      <FEC />
      <FTC />
      <HUD />
      <VA />
      <form>
        <textarea>
          Use the bar chart below to vote. Slide the gray bar from left to right
          to vote more or less money toward the department of your choice.
        </textarea>
      </form>
      <p>Military</p>
      <div class="container">
        <div class="military spending">90%</div>
      </div>

      <p>Goverment</p>
      <div class="container">
        <div class="goverment spending">80%</div>
      </div>

      <p>Education</p>
      <div class="container">
        <div class="education spending">65%</div>
      </div>

      <p>Medicare & Healthcare</p>
      <div class="container">
        <div class="healthcare spending">60%</div>
      </div>

      <p>Veterans Benefits</p>
      <div class="container">
        <div class="veterans spending">60%</div>
      </div>

      <p>Housing & Community</p>
      <div class="container">
        <div class="community spending">60%</div>
      </div>

      <p>International Affairs</p>
      <div class="container">
        <div class="international spending">60%</div>
      </div>

      <p>Energy and Enviroment</p>
      <div class="container">
        <div class="energy spending">60%</div>
      </div>

      <p>Science</p>
      <div class="container">
        <div class="science spending">60%</div>
      </div>

      <p>Transportation</p>
      <div class="container">
        <div class="transportation spending">60%</div>
      </div>

      <p>Food & Agriculture</p>
      <div class="container">
        <div class="Food & Agriculture spending">60%</div>
      </div>
      
      
    </main>
    
  );
};

export default BudgetVoting;
