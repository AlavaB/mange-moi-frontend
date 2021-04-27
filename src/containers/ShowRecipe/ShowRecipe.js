import React, { Component } from 'react';
import axios from "axios";

import Recipe from '../../components/Recipe/Recipe';
import classes from './ShowRecipe.module.css';


class ShowRecipe extends Component {
  state= {
    recipes: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/recipes')
      .then(response => {
        this.setState({ recipes: response.data });
        //console.log(response);
      })
  }
  render() {
    const recipes = this.state.recipes.map(recipe => {
      return <Recipe title={recipe.name} ingredients={recipe.ingredients} description={recipe.description} />
    });
    return (
      <div className={classes.ShowRecipe}>
        <h1>Voir toutes les recettes</h1>
        <div className={classes.ShowRecipeBox}>
          {recipes}

        </div>
      </div>
    );
  }
  
}

export default ShowRecipe;