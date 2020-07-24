import React, { Component } from 'react';
import "./style.css";

class TaxBrackets extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
        handleClick(event) {
            const id = event.target.id;
            console.log(id);

        }
    render(){
    return(
        <div class="text-center">
            <h1 class="tax-title">Select Your Tax Bracket to Vote!</h1>
            <button type="button" class="btn btn-primary btn-lg" onClick={this.handleClick} id="tax1">Up to $19,750</button>
            <button type="button" class="btn btn-light btn-lg" onClick={this.handleClick} id="tax2">$19,751 to $80,250</button>
            <button type="button" class="btn btn-danger btn-lg" onClick={this.handleClick} id="tax3">$80,251 to $171,050</button>
            <button type="button" class="btn btn-primary btn-lg" onClick={this.handleClick} id="tax4">$171,051 to $326,600</button>
            <button type="button" class="btn btn-light btn-lg" onClick={this.handleClick} id="tax5">$326,601 to $414,700</button>
            <button type="button" class="btn btn-danger btn-lg" onClick={this.handleClick} id="tax6">$414,701 to $622,050</button>
            <button type="button" class="btn btn-primary btn-lg" onClick={this.handleClick} id="tax7">Over $622,050</button>
        </div>
        
    )
}
}

export default TaxBrackets;
