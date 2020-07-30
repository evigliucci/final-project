const router = require("express").Router();
const db = require('../../models');
const sequelize = require('sequelize')

  router.get('/vote', async (req, res, next) => {
     sequelize.query("SELECT SUM (agriculture) AS agriculture FROM votes", function(err, results, fields){
         if(error) {
             req.flash('error', error)
             res.render('votes/agriculture', {
                 data: ''
             })
         } else {
             res.render('votes/agriculture', {
                 data: result,
             })
         }
     })
    })
  
   

module.exports = router