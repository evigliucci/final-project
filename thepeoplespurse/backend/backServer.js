const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
//need to rename to fit with schema, etc
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

//defines the db
const dbRoute = 
  'mongodb://localhost:27017/thepeoplespurse?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';

// connects back end code with the database
mongoose.connect(dbRoute, {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', () => console.log('connected to database'));

//checks if connection with db is successful
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//needs to be rewritten to pull data and push it into the chart js divs
//this is our get method that fetches all available data from the database
router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true, data: data});
  });
});

//needs to be rewritten to update tax brackets, votes, and depts
//this is our update method that overwrites existing data in our database
router.post('/updateData', (req,res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//append api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));