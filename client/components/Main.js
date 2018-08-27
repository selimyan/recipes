import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../store';

class Main extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchInitialRecipes()
  }

  render() {
    { console.log(this.props) }
    const recipes = this.props.recipes

    return (
      <div class='all-recipes'>
        <h1>Heghush's Recipes</h1>
        {recipes.map(recipe => (
          <div class='recipe-box' key={recipe.id}>
            <div class='recipe-header'>
              <h2>{recipe.name}</h2>
              <div class='recipe-options'>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <div class='recipe-img'>
              <img src={recipe.imgUrl} />
            </div>
            <div class='recipe-ingredients'>
              {recipe.ingredients}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = (state) => ({
  recipes: state.recipes
})

const mapDispatch = dispatch => ({
  fetchInitialRecipes: () => dispatch(fetchRecipes())
})

export default connect(mapState, mapDispatch)(Main)
