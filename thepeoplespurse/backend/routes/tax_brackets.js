const router = require('express').Router();
const tax_brackets = require('../models/voteModel');




//beginning to build out functions to pull tax bracket information and post it into the tax bracket count
function populateBrackets(){
    const bracket = document.getElementById("tax1")
    bracket.onclick(post(tax_bracket_count,[
        bracket_1 ++
    ]))
    bracket.post(tax_bracket_count,[
        bracket_1 ++
    ])
}

//assigns a bracket number to the user which is then used to identify and add respective number in array
function assignBracket(){
    const bracket = document.getElementById("tax1");
    bracket.onclick(setAttribute(bracket_1));
    bracket.setAttribute(bracket_1);
    console.log(bracket_1)
}

//takes the vote value and populates the appropiate value (from the hidden input type) into the proper tax bracket
function populateDepts(){
    assignBracket();
    const agriculture = document.getElementById("DoA").value
    const submit = document.getElementsByClassName("submit")
    submit.onclick()
    agriculture.post(bracket.value)
    console.log(bracket.value)
}

//increments the department value based off of the bracket value
db.budgetVotes.update({
    $inc: {bracket_1: value}
})

populateBrackets();
populateDepts();


module.exports = router;