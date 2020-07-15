import React from 'react';
import "./style.css";

function TaxBrackets() {
    return(
        <div>
            <button type="button" class="btn btn-primary btn-lg">Up to $19,750</button>
            <button type="button" class="btn btn-light btn-lg">$19,751 to $80,250</button>
            <button type="button" class="btn btn-danger btn-lg">$80,251 to $171,050</button>
            <button type="button" class="btn btn-primary btn-lg">$171,051 to $326,600</button>
            <button type="button" class="btn btn-light btn-lg">$326,601 to $414,700</button>
            <button type="button" class="btn btn-danger btn-lg">$414,701 to $622,050</button>
            <button type="button" class="btn btn-primary btn-lg">Over $622,050</button>
        </div>
    )
}

export default TaxBrackets;
