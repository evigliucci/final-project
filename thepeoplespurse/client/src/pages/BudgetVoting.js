import React from "react";
import "../assets/styles/budgetVoting.css";

const BudgetVoting = () => {
  return (
    <main>
      <h1>BudgetVoting Page</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="voting.html">
                Voting
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                More Info
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
