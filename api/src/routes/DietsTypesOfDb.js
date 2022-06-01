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
      // const info = await axios.get(
      //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`
      // );
      // const types = info.data?.results.map((e) => e.diets); //extraemos info
      // const newTypes = types.flat().concat("vegetarian", "ketogenic");
      // const finalTypes = [...new Set(newTypes)];
      // // console.log(finalTypes);
   
      // for (let element in finalTypes) {
      //   Diet.findOrCreate({
      //     where: { title: finalTypes[element] },
      //   });
      // }
  
      const newDiets = await Diet.findAll();
      res.status(200).json(newDiets);
    } catch (error) {
      console.log(error);
    }
  });

  //? Trae Diets de DB
  //const getDbDiets = async () => {
  //  let dbDiets = await Diet.findAll();
  //  return dbDiets
  //}  

  module.exports = router;