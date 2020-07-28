const router = require("express").Router();
const db = require('../../models');

router.post('/voter', function(req, res) {
    console.log(req.body)
    res.json(req.body)
})

module.exports = router