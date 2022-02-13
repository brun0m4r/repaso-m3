const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();
module.exports = router;

let created = [];

const getCharacters = async () => {
    const api = await axios.get('https://rickandmortyapi.com/api/character');
    const apiInfo = await api.data.results.map(r => {
        return {
            id: r.id,
            name: r.name,
            species: r.species,
            gender: r.gender,
            image: r.image
        };
    });
    return apiInfo;
}

router.get('/', async (req, res) => {
    const { name, gender, species } = req.query;
    const characters = await getCharacters();
    const allCharacters = [...characters, ...created];
    if(name) {
        let character = allCharacters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
        character.length
        ? res.status(200).send(character)
        : res.status(404).send('el personaje buscado no fue encontrado')
    } else if(gender) {
        let filter = allCharacters.filter(c => c.gender.toLowerCase() == gender.toLowerCase());
        filter.length
        ? res.status(200).send(filter)
        : res.status(404).send('genero no encontrado');
    } else if(species) {
        let filter = allCharacters.filter(c => c.species.toLowerCase().includes(species.toLowerCase()));
        filter.length
        ? res.status(200).send(filter)
        : res.status(404).send('especie no encontrada');
    } else {
        res.status(200).send(allCharacters);
    };
});

let id = 21

router.post('/', async (req, res) => {
    const {
        name,
        species,
        gender,
        image
    } = req.body;
    const especies = (await axios.get('http://localhost:3000/species')).data;
    const newCharacter = {
        id,
        name,
        species,
        gender,
        image
    };
    if(!newCharacter.name || !newCharacter.species || !newCharacter.gender || !newCharacter.image) {
        res.status(400).send('faltan propiedades para crear el personaje');
    } if(!especies.includes(newCharacter.species)){
        res.status(400).send('especie invalida');
    } else {
        id++;
        created.push(newCharacter);
        res.status(200).send(`character ${name} created succesfully`);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const characters = await getCharactersz();
    const character = characters.filter(c => c.id == id);
    character.length
    ? res.status(200).send(character)
    : res.status(404).send("personaje no encontrado");
})