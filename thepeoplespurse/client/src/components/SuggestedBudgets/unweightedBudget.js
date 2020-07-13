import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import PieClass from "./PieClass";
import PieHooks from "./PieHooks";
import PieSVG from "./PieSVG";

import './style.css';

function unweightedBudget() {
    const generateData = (value, length = 5) =>
        d3.range(length).map((item, index) => ({
            date: index,
            value: value === null || value === undefined ? Math.random() * 100 : value
        }));

    const [data, setData] = (generateData());
    const changeData = () => {
        setData(generateData());
    };

    return (
        <div className="unweightedBudget">
            <div>
                <button onClick={changeData}>Transform</button>
            </div>
            <div>
                <span className="label">React Class</span>
                <PieClass
                    data={data}
                    width={200}
                    height={200}
                    innerRadius={60}
                    outerRadius={100}
                />
            </div>
            <div>
                <span className="label">Hooks</span>
                <PieHooks
                    data={data}
                    width={200}
                    height={200}
                    innerRadius={60}
                    outerRadius={100}
                />
            </div>
            <div>
                <span className="label">SVG Elements</span>
                <PieSVG
                    data={data}
                    width={200}
                    height={200}
                    innerRadius={60}
                    outerRadius={100}
                />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<unweightedBudget />, rootElement);