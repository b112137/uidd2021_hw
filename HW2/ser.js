#!/usr/bin/env node

// Step 1 and step 2 code goes here

// include `express`
const express = require('express');
const fs = require('fs');

// create an express, aka web server, instance
const app = express()

const port = 17269

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

  var file="students.sample.json";
  var result=JSON.parse(fs.readFileSync(file));
  console.log(result);
  res.send(result)
})






// Step 7 code goes here
const bodyParser = require('body-parser')

// setup `body-parser`
// �]�w `body-parser`
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/step7', (req, res) => {
   // `bady-parser` stores parsed data in `req.body`
     // `bady-parser` �N�ѪR�n����Ʀs��b `req.body`
       res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})






