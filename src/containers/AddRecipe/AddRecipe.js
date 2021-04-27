import React, { Component } from "react";
import axios from "axios";

import classes from "./AddRecipe.module.css";

class addRecipe extends Component {
  state = {
    name: "",
    ingredients: "",
    description: "",
  };

  postNewRecipe = () => {
    const recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      description: this.state.description
    };
    axios.post('http://localhost:3000/api/recipes', recipe)
      .then(response => console.log(response))
  };

  render() {
    return (
      <div className={classes.AddRecipe}>
        <h1>Créer une recette</h1>
        <div className={classes.AddRecipeForm}>
          Saisir le nom de la recette
          <input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
        </div>

        <div className={classes.AddRecipeForm}>
          Ajoutez les ingrédients
          <input type="text" value={this.state.ingredients} onChange={(event) => this.setState({ ingredients: event.target.value })} />
        </div>

        <div className={classes.AddRecipeForm}>
          Indiquez la marche à suivre
          <input type="text" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} />
        </div>

        <button onClick={this.postNewRecipe}>CREER LA RECETTE</button>
      </div>
    );
  }
};

export default addRecipe;
