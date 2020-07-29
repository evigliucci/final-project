const router = require("express").Router();
const db = require('../../models');
const sequelize = require("sequelize");


router.post('/voter', function(req, res) {
    console.log(req.body)
    
    db.Voter.create({tax_bracket: req.body.taxBracket})
        .then(data => {
            res.send(data)
        })
        .catch (err => {
            res.status(500).send({
                message:
                    err.message || "error"
            })
        })
        res.json(req.body.taxBracket)
    })

// router.get('/voter', (req, res) => {
//     db.connect();
//     db.query('SELECT * FROM voter', (err, results) => {
//         if (err) {
//             db.end();
//             res.sendStatus(500);
//             return console.log(err);
//         }
//         res.json(results);
//         return db.end();
//     })
// })


module.exports = router