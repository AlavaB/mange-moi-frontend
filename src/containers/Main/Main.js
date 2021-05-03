import React, { Component } from 'react';
import axios from "axios";

import Auxilary from '../../hoc/Auxilary';
import AddRecipe from '../AddRecipe/AddRecipe';
import Recipe from '../../components/Recipe/Recipe';
import ShowRecipe from '../ShowRecipe/ShowRecipe';
import FindRecipe from '../FindRecipe/FindRecipe';
import classes from './Main.module.css';

class Main extends Component {
  state = {
    recipes: [],
    selectedRecipeId: null
  };
  
  componentDidMount() {
    axios.get("http://localhost:3000/api/recipes")
      .then((response) => {
        const recipes = response.data.slice(0, 50);
        const updateRecipes = recipes.map((recipe) => {
          return {
            ...recipe
          };
        });
      this.setState({ recipes: updateRecipes });
      console.log(recipes);
    });
    
  }


  selectedRecipeHandler = (id) => {
    this.setState({ selectedRecipeId: id })
  };

  render() {
    const recipes = this.state.recipes.map((recipe) => {
      return <Recipe 
        key={recipe._id} 
        title={recipe.name} 
        ingredients={recipe.ingredients} 
        description={recipe.description} 
        clicked={() => this.selectedRecipeHandler(recipe._id)} />;
        
    });
    return (
      <Auxilary>
        <section>
          <FindRecipe />
        </section>

        <section className={classes.AllRecipes}>
          <h1 className={classes.ShowAllRecipesTitle}>
            ... ou retrouvez toutes nos meilleures idées de <span className={classes.RecipeTextColor}>recettes !</span>
          </h1>
          <div className={classes.SingleRecipe}>{recipes}</div>
        </section>

        <section>
          <AddRecipe />
        </section>
        <section>
          <ShowRecipe id={this.state.selectedRecipeId} />
        </section>
      </Auxilary>
    );
  }
}

export default Main; 