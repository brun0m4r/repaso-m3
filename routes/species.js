const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();
module.exports = router;

// al no haber base de datos las especies creadas se deberan guardar en este arreglo
let created = [];

