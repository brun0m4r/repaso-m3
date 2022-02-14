const express = require('express');

const server = express();

// Acuérdense de agregar su router o cualquier middleware que necesiten acá.

server.use(express.json());

server.listen(3000, () => {
    console.log('running on port', 3000);
});