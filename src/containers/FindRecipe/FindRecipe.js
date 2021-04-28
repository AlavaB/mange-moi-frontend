import React, { Component } from 'react';

import classes from "./FindRecipe.module.css";

class FindRecipe extends Component {
  render () {
    return (
      <div>
        <h1 className={classes.FindRecipeTitle}>
          Qu'est ce que je vais manger ce soir ?<br />
          Voici les meilleures idées de recettes
        </h1>
        <p className={classes.FindRecipeText}>Faites votre choix par ingrédient :</p>
        <input type="text" placeholder="Exemple: poulet, saumon, carottes" className={classes.FindRecipeInput}></input>
        <button>RECHERCHER</button>
      </div>
    );
  }
};

export default FindRecipe;