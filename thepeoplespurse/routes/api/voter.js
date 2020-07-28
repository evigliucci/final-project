const router = require("express").Router();
const db = require('../../models');
var sequelize = require('sequelize');

router.post('/voter', function(req, res) {
    console.log(req.body)
    const voter = {
        tax_bracket: req.body.taxBracket
    }
    console.log(voter);
    db.Voter.create(voter)
    console.log("a")
        .then(data => {
            res.send(data);
        })
        .catch (err => {
            res.status(500).send({
                message:
                    err.message || "error occurred"
            })
        })
    });

router.get('/voter', (req, res) => {
    db.connect();
    db.query('SELECT * FROM voter', (err, results) => {
        if (err) {
            db.end();
            res.sendStatus(500);
            return console.log(err);
        }
        res.json(results);
        return db.end();
    })
})


module.exports = router