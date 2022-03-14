const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');

const app = express();

//Bringing in notes route into the index routing
app.use('/notes', notesRouter);

module.exports = app;
