import React from 'react';
import "./style.css";

function TaxBrackets() {
    //beginning to build out functions to pull tax bracket information and post it into the tax bracket count
// function populateBrackets(){
//     const bracket = document.getElementById("tax1")
//     bracket.onclick(post(tax_bracket_count,[
//         bracket_1 ++
//     ]))
//     bracket.post(tax_bracket_count,[
//         bracket_1 ++
//     ])
// }

    return(
        <div class="text-center">
            <h1 class="tax-title">Select Your Tax Bracket to Vote!</h1>
            <button type="button" class="btn btn-primary btn-lg" id="tax1">Up to $19,750</button>
            <button type="button" class="btn btn-light btn-lg" id="tax2">$19,751 to $80,250</button>
            <button type="button" class="btn btn-danger btn-lg" id="tax3">$80,251 to $171,050</button>
            <button type="button" class="btn btn-primary btn-lg" id="tax4">$171,051 to $326,600</button>
            <button type="button" class="btn btn-light btn-lg" id="tax5">$326,601 to $414,700</button>
            <button type="button" class="btn btn-danger btn-lg" id="tax6">$414,701 to $622,050</button>
            <button type="button" class="btn btn-primary btn-lg" id="tax7">Over $622,050</button>
        </div>
        
    )
}

export default TaxBrackets;
