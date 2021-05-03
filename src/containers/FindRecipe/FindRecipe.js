import React, { Component } from 'react';

import classes from "./FindRecipe.module.css";

class FindRecipe extends Component {
  render () {
    return (
      <div className={classes.FindRecipe}>
        <h1 className={classes.FindRecipeTitle}>Recherchez une <span className={classes.RecipeTextColor}>recette</span> à partir d'un ingrédient ...</h1> 
        <input type="text" placeholder="Exemple: poulet, saumon, carottes" className={classes.FindRecipeInput}></input>
        <button>RECHERCHER</button>
      </div>
    );
  }
};

export default FindRecipe;