const { Router } = require('express');
const router = Router();

const recipesRoute = require("./Recipes");
const DietsTypesOfDbRoute = require("./DietsTypesOfDb");
const postRecipeRoute = require("./PostRecipe");

// Configurar los routers
router.use("/types", DietsTypesOfDbRoute);
router.use("/recipes", recipesRoute);
router.use("/recipe", postRecipeRoute);

module.exports = router;  