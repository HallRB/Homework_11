const app = express();
const express = require('express');
const path = require('path');
const fs = require('fs');
const noteJSON = require('./db/db.json');
const PORT = 8080;

const app = express();

// Serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));
// Needed to display html in local browser
app.use(express.static('./'));

// User middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

