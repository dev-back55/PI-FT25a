import axios from "axios";

export const GET_RECIPES = 'GET_RECIPES';
export const SELECTPAG = 'SELECTPAG';
export const GET_RECIPE_NAME = 'GET_RECIPE_NAME';
export const FILTERID = 'FILTERID';
export const FILTEREDBYDIETS = 'FILTEREDBYDIETS';
export const ORDERBYNAME = 'ORDERBYNAME';
export const GET_DIETS = 'GET_DIETS';
export const CLEAR_RECIP = 'CLEAR_RECIP';
export const GET_RECIPES_DETAIL = 'GET_RECIPES_DETAIL';
export const POST_CREATE_RECIPE = 'POST_CREATE_RECIPE';

const urlrecipes = "http://localhost:3001/recipes";
const urldiets = "http://localhost:3001/types";

export function getAllRecipes(){
    return async (dispatch)=>{
        
        return await axios.get(urlrecipes)
        .then(res => dispatch({type: "GET_RECIPES", payload: res.data}))
    }

}

export function getDbDiets(){
    return async (dispatch)=>{
        return await axios(urldiets)
        .then(res => dispatch({type: "GET_DIETS", payload: res.data}))
    }
}

export function selectPag(payload){
    return {
      type: SELECTPAG,
      payload
    }
}

export function getRecipeName(name) {
    return async function (dispatch) {
      const response = await axios.get(`${urlrecipes}?name=${name}`);
      console.log(response.data)
      if(!response.data.length){
          return alert('NOT FOUND...')
      }
      return dispatch({
        type: "GET_RECIPE_NAME",
        payload: response.data,
      });
    };
}

export function filterId(recipes, value){
    let recipesFilterById = []
    recipesFilterById = [...recipes]
    
      if(value === "All"){
          recipesFilterById = [...recipes]
      }
  
      if(value === "DB"){
        recipesFilterById = recipes?.filter(elem=>typeof elem.id === 'string')
      }
  
      if(value === "Api"){
        recipesFilterById = recipes?.filter(elem=>typeof elem.id === 'number')
      }
      
     
  
      if(!recipesFilterById.length){
              alert('Not Recipes in Data Base');
        recipesFilterById = [...recipes]
      }
      
      return function (dispatch) {
        dispatch({type: FILTERID, payload: recipesFilterById}) 
      }
}

export function filterByDiets(recipes, value){
    const dietFilter = [...recipes];
      console.log(value.toUpperCase(), 'value en action x type diets')

      let filtrados =  dietFilter.filter((e) => e.diets.includes(value.toUpperCase()));
      
    console.log(filtrados);

    if(!filtrados.length){
      filtrados = [...recipes]
      alert('No se puede Filtrar, estas recetas no tienen esa dieta')
    }
      return function (dispatch) {
          dispatch({type: FILTEREDBYDIETS, payload: filtrados});
      };
}

export function orderByName(recipes, indice){
    let sorted = []
    console.log(indice, 'indice en order by name')

    if(indice === "asc"){
        sorted = recipes.sort(function (a, b) {
          if(a.title > b.title) {
            return 1;
          }
          if(b.title > a.title) {
            return -1;
          }
          return 0;
        })
    };

    if(indice === "desc"){
        sorted = recipes.sort(function (a, b) {
          if(a.title > b.title) {
            return -1;
          }
          if(b.title > a.title) {
            return 1;
          }
          return 0;
        })
    };  
    if(indice === "pasc"){
        sorted = recipes.sort(function (a, b) {
          if(a.healthScore > b.healthScore) {
            return 1;
          }
          if(b.healthScore > a.healthScore) {
            return -1;
          }
          return 0;
        })
    };
    if(indice === "pdesc"){  
        sorted = recipes.sort(function (a, b) {
          if(a.healthScore > b.healthScore) {
            return -1;
          }
          if(b.healthScore > a.healthScore) {
            return 1;
          }
          return 0;
        })    
      }  
    return function (dispatch) {
      dispatch({type: ORDERBYNAME, payload: sorted});
    };
}

export function clearRecip(){
  
    return function (dispatch) {
      dispatch({type: CLEAR_RECIP}) 
    }
}

export function getRecipeDetail(id) {
    return async function(dispatch) {
      return await fetch(`${urlrecipes}/${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json, 'json encontrado x id actions')
      dispatch({type: "GET_RECIPES_DETAIL", payload: json});
      })
      .catch(err => (alert('Recipe NOT FOUND...')))
    }
}

export function postCreateRecipe (recipe){
  return async function (dispatch){
    console.log(recipe, 'antes de axios post')
    const response = await axios.post("http://localhost:3001/recipe/", recipe);
    console.log(response, ' dsp de axios post')
    dispatch({ type: "POST_CREATE_RECIPE", payload: recipe });
  }
}
