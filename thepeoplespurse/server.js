const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define mongoose routes here
const deptsRouter = require('./routes/depts');
const tax_bracketsRouter = require('./routes/tax_brackets');

app.use('/BudgetVoting', deptsRouter);
app.use('/BudgetVoting', tax_bracketsRouter);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thepeoplespurse", {
  useNewUrlParser: true,
  useFindAndModify: false
});

require("./backend/routes")(app);
