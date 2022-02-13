const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();
module.exports = router;

// al no haber base de datos los personajes creados se deberan guardar en este arreglo
let created = [];
let id = 21;

