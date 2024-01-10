require("dotenv").config();

const serverless = require("serverless-http");
const router = express.Router();

const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.json({
    hello: "Krishan",
  });
});

app.use('/.netlify/functions/index',router)


app.get("/login", (req, res) => {
  res.send("DashBoard Page");
});

module.exports.handler = serverless(app);

app.listen(process.env.PORT, () => {
  console.log(`server is listening at ${port}`);
});

//npm init
//npm install express
//at package.json we change "scripts": {
//    "start": "node index.js"
//}

//npm run start for run the express code

//npm i dotenv

//create new file name as .env and write the code there

//for add dotenv package to this page =>

// require('dotenv').config()

//for use this package =>

//process.env.variable_name

//FREE DEPLOYMENT CLOUD Service NETLIFY.com
