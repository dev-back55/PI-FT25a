const { Router } = require("express");
const { Diet } = require("../db");
//const axios = require("axios");
const router = Router();

const { API_KEY } = process.env;
const { API_KEY2 } = process.env;
const { API_KEY3 } = process.env;
const { API_KEY4 } = process.env;
const { API_KEY5 } = process.env;
const { API_KEY6 } = process.env;
const { API_KEY7 } = process.env;
const { API_KEY8 } = process.env;

//? Trae Diets de DB

router.get("/", async (req, res) => {
    try {
      const newDiets = await Diet.findAll();
      res.status(200).json(newDiets);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;