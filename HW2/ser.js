#!/usr/bin/env node
// include `express`
const express = require('express');
const fs = require('fs');

// create an express, aka web server, instance
const app = express()

const port = 26969

// start the server
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}/dist`))

app.get('/list', (req, res) => {
  var file = "students.sample.json";
  var result = JSON.parse(fs.readFileSync(file));
  console.log(result);
  res.send(result);
})

app.get('/search', (req, res) => {
  var file = "students.sample.json";
  var result = JSON.parse(fs.readFileSync(file));
  var search_result = result[req.query.student_ID];
  if(search_result){
    res.send('Hello, ' + search_result + '');
  }
  else{
    res.send('Not Found.');
  }
})

app.get('/add', (req, res) => {
  var file = "students.sample.json";
  var result = JSON.parse(fs.readFileSync(file));
  result[req.query.student_ID] = req.query.student_name;
  console.log(result);

  fs.writeFileSync(file, JSON.stringify(result));


  res.send("Success.");
})

app.get('/delete', (req, res) => {
  var file = "students.sample.json";
  var result = JSON.parse(fs.readFileSync(file));
  var search_result = result[req.query.student_ID];
  if(search_result){
    delete result[req.query.student_ID];
    fs.writeFileSync(file, JSON.stringify(result));
    res.send('Success.');
  }
  else{
    res.send('Not Found.');
  }
})









