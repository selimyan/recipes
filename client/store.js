import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk"
import axios from "axios"

const initialState = {
  recipes: [],
  singleRecipe: {}
}

const GOT_RECIPES_FROM_SERVER = 'GOT_RECIPES_FROM_SERVER'
const GOT_RECIPE_FROM_SERVER = 'GOT_RECIPE_FROM_SERVER'

export const gotRecipesFromServer = recipes => ({
  type: GOT_RECIPES_FROM_SERVER,
  recipes
})

export const fetchRecipes = () => {
  return async dispatch => {
    const response = await axios.get("/api/recipes");
    const recipes = response.data;
    const action = gotRecipesFromServer(recipes);
    dispatch(action);
  };
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case GOT_RECIPES_FROM_SERVER:
      const recipes = action.recipes
      return { ...newState, recipes }
    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
