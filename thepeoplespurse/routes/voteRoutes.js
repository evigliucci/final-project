let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let db = require('../backend/models/voteSchema');
const { response } = require('express');


router.post('/taxBracket', (req, res) => {
    vote.create({
        data: req.body,
     }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    });
});

router.route('/update/:dept').put((req, res, next) => {
    vote.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('vote tallied successfully')
        }
    })
})

router.route('/').get((req, res) => {
    vote.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;