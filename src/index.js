require("dotenv").config();

const express = require("express");
const app = express();

const port = 5000;
app.get("/", (req, res) => {
  // res.json({
  //   hello: "Krishan",
  // });
  res.send("Welcome to front Landing page ");
});

app.get("/login", (req, res) => {
  res.send("DashBoard Page");
});

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

//npm i -D nodemon

// mkdir controllers db middlewares models routes utils       in src folder