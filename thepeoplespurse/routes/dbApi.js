const router = require("express").Router();
const Vote = require("../model/thepeoplespurseDB");

router.post("/api/vote", ({ body }, res) => {
    Vote.create(body)
        .then(dbVote => {
            res.json(dbVote);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.post("/api/vote", ({ body }, res) => {
    Vote.insertMany(body)
        .then(dbVote => {
            res.json(dbVote);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/vote", ({ body }, res) => {
    Vote.find({})
        .sort({ id })
        .then(dbVote => {
            res.json(dbVote);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
