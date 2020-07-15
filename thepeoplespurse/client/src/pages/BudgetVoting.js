import React from "react";
import "../assets/styles/budgetVoting.css";
import TaxBrackets from "../components/TaxBrackets/TaxBrackets.js";
import RangeSlider from "../components/RangeSlider/RangeSlider.js";

const BudgetVoting = () => {
  return (
    <main>
      <h1>BudgetVoting Page</h1>
      <RangeSlider />
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
      <TaxBrackets />
      
    </main>
    
  );
};

export default BudgetVoting;
