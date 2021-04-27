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
            this.setState({ loadedRecipe: response.data});
          })
      }
    }
    
      
    
  }

  render () {
    let recipe = <p style={{ textAlign: "center" }}>Veuillez choisir une recette</p>;
    if (this.state.loadedRecipe) {
      recipe = (
        <div className={classes.ShowRecipe}>
          <h1>{this.state.loadedRecipe.name}</h1>
          <p>{this.state.loadedRecipe.ingredients}</p>
          <p>{this.state.loadedRecipe.description}</p>
          <button>Supprimer</button>
        </div>
      )
    }  
    return recipe;
  }
  
}

export default ShowRecipe;