 const { Router } = require("express");
const { Diet, Recipe } = require("../db");
const router = Router();


router.post("/", async (req, res) => {
    const {title, summary, aggregateLikes, healthScore, steps, selectedDiets, image} = req.body;
    
    try {
        
      const recipeCreated = await Recipe.create({
        title,
        image,
        summary,
        aggregateLikes,
        healthScore,
        steps,
      });

      console.log(selectedDiets, 'en post diets')
      
      if(selectedDiets){
          const idTempDb = await Diet.findAll({
            where:{
              name: selectedDiets
            }
          });
          const idTemp=[];
          idTempDb.forEach(elem=>{
            idTemp.push(elem.dataValues.id)
          });
          await recipeCreated.addDiets(idTemp);
      }
      console.log(recipeCreated, ' post recipe final')

      if(!recipeCreated) return res.status(404).json({error: "Recipe Not Created...!"});
      
      return res.status(201).json(recipeCreated).send('Recipe Created...!')
    
    } catch (error) {
      console.log("RECIPE NOT CREATED", error);
    }
  });
  module.exports = router;