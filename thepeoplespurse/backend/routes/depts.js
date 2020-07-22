const router = require('express').Router();
let depts = require('../models/voteModel');

router.route('/').get((req, res) =>{
    depts.find()
        .then(depts => res.json(depts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) =>{
    const agriculture = req.body.agriculture;

    agriculture.save()
        .then(() => res.json('agriculture vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const commerce = req.body.commerce;

    commerce.save()
        .then(() => res.json('commerce vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const defense = req.body.defense;

    defense.save()
        .then(() => res.json('defense vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const education = req.body.education;

    education.save()
        .then(() => res.json('education vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const energy = req.body.energy;

    energy.save()
        .then(() => res.json('energy vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const health_human_services = req.body.health_human_services;

    health_human_services.save()
        .then(() => res.json('health_human_services vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const homeland_security = req.body.homeland_security;

    homeland_security.save()
        .then(() => res.json('homeland_security vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const housing_urban_development = req.body.housing_urban_development;

    housing_urban_development.save()
        .then(() => res.json('housing_urban_development vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const justice = req.body.justice;

    justice.save()
        .then(() => res.json('justice vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const labor = req.body.labor;

    labor.save()
        .then(() => res.json('labor vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const state = req.body.state;

    state.save()
        .then(() => res.json('state vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const transportation = req.body.transportation;

    transportation.save()
        .then(() => res.json('transportation vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const veterans_affairs = req.body.veterans_affairs;

    veterans_affairs.save()
        .then(() => res.json('veterans_affairs vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const interior = req.body.interior;

    interior.save()
        .then(() => res.json('interior vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const treasury = req.body.treasury;

    treasury.save()
        .then(() => res.json('treasury vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const environmental_protection = req.body.environmental_protection;

    environmental_protection.save()
        .then(() => res.json('environmental_protection vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const equal_employment = req.body.equal_employment;

    equal_employment.save()
        .then(() => res.json('equal_employment vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const communcation = req.body.communcation;

    communcation.save()
        .then(() => res.json('communcation vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const election = req.body.election;

    election.save()
        .then(() => res.json('election vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
router.route('/add').post((req,res) =>{
    const trade = req.body.trade;

    trade.save()
        .then(() => res.json('trade vote saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});
module.exports = router;