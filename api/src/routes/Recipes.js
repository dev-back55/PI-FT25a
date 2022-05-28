const { Router } = require("express");
const { Diet, Recipe } = require("../db");
const { dbRecipe } = require('../tools/formtRecipe');
const axios = require("axios");
const router = Router();

const { API_KEY } = process.env;
const { API_KEY2 } = process.env;
const { API_KEY3 } = process.env;
const { API_KEY4 } = process.env;
const { API_KEY5 } = process.env;
const { API_KEY6 } = process.env;
const { API_KEY7 } = process.env;
const { API_KEY8 } = process.env;
const { API_KEY9 } = process.env;
const { API_KEY10 } = process.env;


//?  FUNCIONES CONTROLADORAS  
//? Trae recipes de API
router.get('/', async (req, res, next) => {
    try {
      const recipeApi = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`
      );
      const recipeApiData = recipeApi.data?.results.map((e) => {
        return {
          id: e.id,
          title: e.title,
          image: e.image,
          summary: e.summary.replace(/<[^>]*>?/g, ""),
          aggregateLikes: e.aggregateLikes,
          healthScore: e.healthScore,
          diets: e.diets.join(" - ").toUpperCase(),
          steps: e.analyzedInstructions[0]?.steps.map((e) => e.step)
        };
      });
      //? Trae recipes de DB
      const dbRecipes = await Recipe.findAll({
        include: Diet
      });
      const recipeDbInfo = [];
      for (const recip of dbRecipes) {
        recipeDbInfo.push(dbRecipe(recip.dataValues))}
      
      
      //? se une toda la data de Api y Db
      const infoTotal = recipeApiData.concat(recipeDbInfo);

          //? SI VIENE TITLE X QUERY
          const {name} = req.query
          if(name){
           let recipesByName = []
           recipesByName = infoTotal.filter((e) =>
           e.title.toLowerCase().includes(name.toLowerCase()))

            return recipesByName.length?res.status(200).json(recipesByName):res.status(404).json({error: 'Search by title NOT FOUND...!'})
          }

      return res.status(200).json(infoTotal);

    } catch (error) {
      next(error);
    }
});
  

  //? Trae recipes de DB
  const getDbInfo = async () => {
    let dbRecipes = await Recipe.findAll({
      include: Diet
    });
    const recipeInfo = [];
    dbRecipes.forEach(e => {
      recipeInfo.push(dbRecipe(e))
    })
    
    return recipeInfo
    
  };
  

  //? Trae todas las Recipes 
    const getAllRecipes = async () => {
    const recipeApiData = await getApiInfo();
    const dbRecipesData = await getDbInfo();
    const infoTotal = recipeApiData.concat(dbRecipesData);
    return infoTotal;
  };
  

  //? busca x nombre
  // router.get("/", async (req, res) => {
  //   try {
  //     const { name } = req.query;
  //     // console.log("NAMEEE", name)
  //     // console.log("RECETAS TOTALES",totalRecipes);
  //     let totalRecipes = await getAllRecipes();
  //     if (name) {
  //       let recipesByName = await totalRecipes.filter((e) =>
  //         e.title.toLowerCase().includes(name.toLowerCase())
  //       );
        
  //       recipesByName.length
  //         ? res.status(200).json(recipesByName)
  //         : res.status(400).json({error: 'SEARCH BY TITLE NOT FOUND...'})
  //     } else {
  //       res.status(200).json(totalRecipes);
        
  //     }
  //   } catch (error) {
  //     res.status(400).send("SEARCH BY TITLE NOT FOUND...");
      
  //   }
  // });
  

  //? Trae recipes x id 
  router.get('/:id', async function(req, res){
   try { 
    const {id} = req.params
    
    if(id.length < 10 && typeof parseInt(id) === 'number') {
        //? Busca en API   

        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`)

        const recipe = await response.data
        
            if(recipe){
                
              const recip = {
                  id:recipe.id,
                  title:recipe.title,
                  image:recipe.image,
                  summary:recipe.summary.replace(/<[^>]*>?/g, ""),
                  aggregateLikes: recipe.aggregateLikes,
                  healthScore:recipe.healthScore,
                  diets:recipe.diets.join(" - ").toUpperCase(),
                  steps:recipe.analyzedInstructions[0]?.steps.map((e) => e.step)
                  }

                return res.status(200).json(recip);
            } else {
              return res.status(404).json({error: 'Recipe Not Found!!'})
            }
    }else {
            //? Busca en DB
            let recipDb =  await Recipe.findByPk(id,{
              include: Diet
            }); 
            
            const newrecipe = dbRecipe(recipDb)
            
            return res.status(200).json(newrecipe) 
          }    
    
   }catch (error) {
     console.log(error)
   }  
});
  
module.exports = router;

/* (recipe.analyzedInstructions[0] && recipe.analyzedInstructions[0].steps?recipe.analyzedInstructions[0].steps.map(item=>item.step).join(""):'')
*/