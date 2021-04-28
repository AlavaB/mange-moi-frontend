import React, { Component } from 'react';
import axios from 'axios';

import classes from './ShowRecipe.module.css';


class ShowRecipe extends Component {
  state = {
    loadedRecipe: null
  }

  componentDidUpdate () {
    if (this.props.id) {
      if (!this.state.loadedRecipe || (this.state.loadedRecipe && this.state.loadedRecipe.id !== this.props.id)) {
        axios.get("http://localhost:3000/api/recipes/" + this.props.id)
          .then(response => {
            this.setState({ loadedRecipe: response.data})
          })
      }
    }
  }
  
  deleteRecipeHandler = () => {
    axios.delete("http://localhost:3000/api/recipes/" + this.props.id)
      .then(response => {
        console.log(response);
        
      })
  };

  render () {
    let recipe = <p style={{ textAlign: "center" }}>Sélectionner une recette pour en avoir tous les détails !</p>;
    if (this.state.loadedRecipe) {
      recipe = (
        <div className={classes.ShowRecipe}>
          <h1>{this.state.loadedRecipe.name}</h1>
          <p>{this.state.loadedRecipe.ingredients}</p>
          <p>{this.state.loadedRecipe.description}</p>
          <button onClick={this.deleteRecipeHandler}>Supprimer</button>
          <button >Modifier</button>
        </div>
      );
    }  
    return recipe;
  }
  
}

export default ShowRecipe;