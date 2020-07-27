const router = require("express").Router();
const db = require('../../models');

router.get('/', (req, res) => {
    db.connect();
    db.query('SELECT * FROM vote', (err, results) => {
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