const { Router } = require("express");
const router = Router();

const Character = require("../models/Character.model");

router.get("/all-characters", async (req, res) => {
  try {
    const characters = await Character.find();
    res.render("characters/all-characters", { characters });
  } catch (error) {
    console.error(error);
  }
});

router.get("/create-a-character", async (req, res) => {
  res.render("characters/create-a-character");
});

router.post("/create-a-character", async (req, res) => {
  try {
    await Character.create(req.body);
  } catch (error) {
    console.error(error);
  }

  res.redirect("/characters/all-characters");
});

module.exports = router;
