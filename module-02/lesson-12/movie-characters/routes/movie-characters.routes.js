// routes/movie-characters.routes.js

const router = require("express").Router();

// Require and instantiate the API Service

const ApiService = require("../services/api.service");

const apiService = new ApiService();

// List all the characters from the API.
router.get("/movie-characters/list", (req, res) => {
  apiService

    .getAllCharacters()

    .then((response) => {
      res.json(response.data);

      // res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
    })

    .catch((error) => console.log(error));
});

// !! We will integrate the form view later !!

// Render a form to create a new character
router.get("/movie-characters/create", (req, res) => {
  res.send(`Here we'll render the form to create a new characters`);
});

// Submit info to create a new character
router.post("/movie-characters/create", (req, res) => {
  const characterInfo = req.body;

  apiService

    .createCharacter(characterInfo)

    .then((response) => {
      res.json(response.data);

      // res.redirect('/movie-characters/list'); // <== leave this line commented for now
    })

    .catch((error) => console.log(error));
});

// !! We will integrate the form view later !!

// Render a form to edit a character
router.get("/movie-characters/edit/:id", (req, res) => {
  res.send(
    `Here we'll render the form to update character with ID ${req.params.id}`
  );
});

// Submit info to edit a character with a matching id.
router.post("/movie-characters/edit/:id", (req, res) => {
  const characterId = req.params.id;

  const characterInfo = req.body;

  apiService

    .editCharacter(characterId, characterInfo)

    .then((response) => {
      res.json(response.data);

      // res.redirect('/movie-characters/list'); // <== leave this line commented for now
    })

    .catch((error) => console.log(error));
});

// Delete a character with a matching id
router.get("/movie-characters/delete/:id", (req, res) => {
  const characterId = req.params.id;

  apiService

    .deleteCharacter(characterId)

    .then((response) => {
      res.json(response.data);

      // res.redirect(`/movie-characters/list`); // <== leave this line commented for now
    })

    .catch((error) => console.log(error));
});

module.exports = router;
