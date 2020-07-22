const router = require('express').Router();
let tax_brackets = require('../models/voteModel');

router.route('/').get((req, res) =>{
    tax_brackets.find()
        .then(tax_bracket => res.json(tax_bracket))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) =>{
    const tax_bracket = req.body.tax_bracket;
    tax_brackets.save()
        .then(() => res.json('tax bracket saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});

module.exports = router;