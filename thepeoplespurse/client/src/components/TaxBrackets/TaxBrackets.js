import React, { Component } from 'react';
import "./style.css";

class TaxBrackets extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            tax_bracket_count: '',
        }
    }
    handleClick(event) {
        const id = event.target.id;
        const allBrackets = document.querySelectorAll(".btn");
        const selected = document.getElementById(id);
        for (var i = 0; i < allBrackets.length; i++) {
            allBrackets[i].classList.remove('active')
        }
        selected.classList.add("active");

    }
    render() {
        return (
            <div className="text-center">
                <h1 className="tax-title">Select Your Tax Bracket to Vote!</h1>
                <button type="button" className="btn btn-primary btn-lg tax" onClick={this.handleClick} id="0">Up to $19,750</button>
                <button type="button" className="btn btn-light btn-lg tax" onClick={this.handleClick} id="1">$19,751 to $80,250</button>
                <button type="button" className="btn btn-danger btn-lg tax" onClick={this.handleClick} id="2">$80,251 to $171,050</button>
                <button type="button" className="btn btn-primary btn-lg tax" onClick={this.handleClick} id="3">$171,051 to $326,600</button>
                <button type="button" className="btn btn-light btn-lg tax" onClick={this.handleClick} id="4">$326,601 to $414,700</button>
                <button type="button" className="btn btn-danger btn-lg tax" onClick={this.handleClick} id="5">$414,701 to $622,050</button>
                <button type="button" className="btn btn-primary btn-lg tax" onClick={this.handleClick} id="6">Over $622,050</button>
            </div>
        )
    }
}

export default TaxBrackets;

