const express = require('express');
const fs = require('fs');
const api = require('./index.js');
const notes = require('../../../db/db.json');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET Route for the home page
app.get('*', (req, res)=>
    res.sendFile(path.join(__dirname, '../../index.html'))
);

//GET Route for the notes page
app.get('/notes', (req, res)=>
    res.sendFile(path.join(__dirname, '../../notes.html'))
);

//TODO: Read db.json and return all saved notes as JSON
app.get('/api/notes', (req, res)=>{
    res.status(200).json

});

//TODO: POST /api/notes receive a new note and save on teh request body, add it to the db.json file

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

module.exports = app;