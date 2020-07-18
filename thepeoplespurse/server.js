const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//mongo db set up
const mongoose = require("mongoose");
let BudgetDB = require("./model/model.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/node-react-starter", { useNewUrlParser: true});


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
