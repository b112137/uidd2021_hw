#!/usr/bin/env node

// Step 1 and step 2 code goes here

// include `express`
const express = require('express');
const fs = require('fs');

// create an express, aka web server, instance
const app = express()

const port = 26969

// handle `/step1` url
app.get('/step1', (req, res) => {
   // response browser
  res.send('hello world')
})

// start the server
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.get('/step2', (req, res) => {
  res.send('<h1>hello world</h1>');
})

// Step 3 code goes here

app.use(express.static(`${__dirname}/dist`))


// Step 4 code goes here

let nRequests = 0
app.get('/step4', (req, res) => {
    res.send(`this is request #${++nRequests}`)
}) 

// Step 5

app.get('/step5', (req, res) => {
    res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})





app.get('/list', (req, res) => {
  var file = "students.sample.json";
  var result = JSON.parse(fs.readFileSync(file));
  // var result_string = JSON.stringify(result);
  console.log(result);
  res.send(result);
})

app.get('/search', (req, res) => {
  var file = "students.sample.json";
  var result = JSON.parse(fs.readFileSync(file));
  console.log(req.query.fname);
  console.log(result[req.query.fname]);

  res.send("get");
})










