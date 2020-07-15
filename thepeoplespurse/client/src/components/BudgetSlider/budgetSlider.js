import React from 'react';
import "./style.css";

function BudgetSlider() {
    return (
        <div>
            <label class="switch">
                <input type="checkbox"></input>
                    <span class="slider round"></span>
            </label>
        </div>
    );
}

export default BudgetSlider;