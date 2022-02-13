const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();
module.exports = router;

let created = [];

const getSpecies = async () => {
    const api = await axios.get('https://rickandmortyapi.com/api/character');
    const species = await api.data.results.map(c => c.species);
    return species;
}

router.get('/', async (req, res) => {
    const species = await getSpecies();
    const allSpecies = [...species, ...created];
    const unique = [...new Set(allSpecies)];
    res.status(200).send(unique);
})

router.post('/', (req,res) => {
    let { species } = req.body
    if(species.includes(",")) species = species.split(", ");
    typeof species === "string" ? created.push(species) : created = [...created, ...species];
    res.status(200).send("especie creada correctamente");
})