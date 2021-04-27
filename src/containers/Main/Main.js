import React, { Component } from 'react';

import Auxilary from '../../hoc/Auxilary';
import AddRecipe from '../AddRecipe/AddRecipe';
import ShowRecipe from '../ShowRecipe/ShowRecipe';
//import Recipe from '../../components/Recipe/Recipe';

class Main extends Component {
  

  render() {
    
    return (
      <Auxilary>
        <AddRecipe />
        <ShowRecipe />
      </Auxilary>
    )
  }
}

export default Main; 