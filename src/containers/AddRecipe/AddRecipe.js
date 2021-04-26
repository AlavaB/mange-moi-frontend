import React, { Component } from "react";

import classes from "./AddRecipe.module.css";

class addRecipe extends Component {
  state = {
    recipeName: "",
    ingredients: "",
    description: "",
  };

  newRecipeHandler = (event) => {
    
  };

  submitNewRecipeName = () => {
    console.log(this.state);
    /*à envoyer dans la base de données*/
  };

  render() {
    return (
      <div className={classes.AddRecipe}>
        <h1>Créer une recette</h1>
        <div className={classes.AddRecipeForm}>
          Saisir le nom de la recette
          <input type="text" name="recipename" onChange={(e) => this.setState({ recipeName: e.target.value })} />
        </div>

        <div className={classes.AddRecipeForm}>
          Ajoutez les ingrédients
          <input type="text" name="ingredients" onChange={(e) => this.setState({ ingredients: e.target.value })} />
        </div>

        <div className={classes.AddRecipeForm}>
          Indiquez la marche à suivre
          <input type="text" name="description" onChange={(e) => this.setState({ description: e.target.value })} />
        </div>
        
        <button onClick={this.submitNewRecipeName}>CREER LA RECETTE</button>
      </div>
    );
  }
};

export default addRecipe;
