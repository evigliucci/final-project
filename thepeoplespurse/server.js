const mongoose = require('mongoose');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
let database = require('./backend/db');
const voteRoutes = require('./routes/voteRoutes');
const voteSchema = require('./backend/models/voteSchema');
const id = require('./client/src/components/TaxBrackets');
const { response } = require('express');
const { create } = require('./backend/models/voteSchema');
const router = express.Router();

//defines the db
const dbRoute = 
  'mongodb://localhost:27017/thepeoplespurse';

// connects back end code with the database
mongoose.connect(dbRoute, {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', () => console.log('connected to database'));

//checks if connection with db is successful
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// mongoose.Promise = global.Promise;
// mongoose.connect(database.db, {
//   useNewUrlParser: true
// }).then(() => {
//     console.log('Database connected successfully')
// },
//   error => {
//     console.log('Database could not be connected : ' + error)
//   }
// )



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/vote', voteRoutes)

const API_PORT = 3001;
const server = app.listen(API_PORT, () => {
  console.log(`🌎 ==> API server now on port ${API_PORT}!`);
});

//error handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if(!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

app.post('/taxBracket', (req,res) => {
  const bracket = {id};
  console.log(bracket);
  console.log(db);

  db.collection('budgetVotes').save(id, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('bracket added to db');
    res.sendStatus(201);
  });
});


// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });





// //bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(logger('dev'));

// //needs to be rewritten to pull data and push it into the chart js divs
// //this is our get method that fetches all available data from the database

// // router.get('/getData', (req, res) => {
// //   Data.find((err, data) => {
// //     if (err) return res.json({ success: false, error: err});
// //     return res.json({ success: true, data: data});
// //   });
// // });

// //needs to be rewritten to update tax brackets, votes, and depts
// //this is our update method that overwrites existing data in our database

// // router.post('/updateData', (req,res) => {
// //   const { id, update } = req.body;
// //   Data.findByIdAndUpdate(id, update, (err) => {
// //     if (err) return res.json({ success: false, error: err });
// //     return res.json({ success: true });
// //   });
// // });

// //append api for our http requests
// app.use('/api', router);

// // launch our backend into a port
// app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

