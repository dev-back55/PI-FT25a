const { Router } = require('express');
const router = Router();

const recipesRoute = require("./Recipes");
const typeOfDietsRoute = require("./TypeOfDiets");
const postRecipeRoute = require("./PostRecipe");

// Configurar los routers
router.use("/types", typeOfDietsRoute);
router.use("/recipes", recipesRoute);
router.use("/recipe", postRecipeRoute);

module.exports = router;  