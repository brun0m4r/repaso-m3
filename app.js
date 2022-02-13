const express = require('express');
const characters = require('./routes/characters');
const species = require('./routes/species');

const server = express();

server.use(express.json());
server.use('/characters', characters);
server.use('/species', species);

server.listen(3001, () => {
    console.log('running on port', 3001);
});