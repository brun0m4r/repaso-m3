const express = require('express');

const router = express.Router();
module.exports = router;

// al no haber base de datos los personajes y especies creados se deberan guardar en
// estos arreglos
let charactersCreated = [];
let speciesCreated = [];
let id = 21;

// escriban sus rutas acá o en las rutas modularizadas
// siéntanse libres de dividir entre archivos si lo necesitan