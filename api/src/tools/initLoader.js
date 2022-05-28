const axios = require("axios");
const { API_KEY2 } = process.env;
const { Diet } = require('../db');

module.exports = async function initLoader(){
  try{  
    const apiInfo = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`
    );
    const diets = await apiInfo.data.results.map((e) => {
      return e.diets;
    });
    let result = diets.flat().concat('VEGETARIAN');
    result = new Set(result);
    result = [...result];
         
    result.forEach( async (e)=>{
      await Diet.findOrCreate({
        where: {
          name: e
        }
      });
    })
  }catch(e){
      return console.log('Error : ', e)
  }  
};