import React, { Component } from 'react';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import AddRecipe from './components/AddRecipe/AddRecipe';
import ShowRecipe from './components/ShowRecipe/ShowRecipe';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <AddRecipe />
        <ShowRecipe />
      </div>
      
    )
  }
}

export default App;
