import { CLEAR_RECIP, FILTEREDBYDIETS, FILTERID, GET_DIETS, GET_RECIPES, GET_RECIPES_DETAIL, GET_RECIPE_NAME, ORDERBYNAME, POST_CREATE_RECIPE, SELECTPAG } from './actions'

const initialState = {
    allrecipes : [],
    allrecipesBkp : [],
    allrecipesDB: [],
    alldiets : [],
    pagina : 1,
    recipe : {}
}

export function reducer(state=initialState, {type, payload}) {
    switch (type) {
        case GET_RECIPES:
            return {...state, allrecipes: payload, allrecipesBkp: payload}
        
        
        case SELECTPAG:
            return {...state, pagina: payload}

        case GET_RECIPE_NAME:
            return { ...state, allrecipes: payload, pagina: 1}
        
        case FILTERID:
            return { ...state, allrecipes: payload, pagina: 1}    
        
        case FILTEREDBYDIETS:     
            return { ...state, allrecipes: payload, pagina: 1}

        case ORDERBYNAME:
            return { ...state, allrecipes: payload}
        
        case GET_DIETS:
            return {...state, alldiets: payload}

        case CLEAR_RECIP:
            return {...state, recipe: {}, allrecipes: []}
        
        case GET_RECIPES_DETAIL:
            return {...state, recipe: payload}
        
        case POST_CREATE_RECIPE:
            return {
                ...state,
                allrecipes: [...state.allrecipes, payload],
                allrecipesBkp: [...state.allrecipesBkp, payload],
                allrecipesDB: [...state.allrecipesDB, payload]
            }

        default: return state
    }
}


module.export={
     reducer
}