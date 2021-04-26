import React from 'react';

import Auxilary from '../../hoc/Auxilary'; // wrapping component 
import Toolbar from "../Navigation/Toolbar/Toolbar";
import AddRecipe from '../../containers/AddRecipe/AddRecipe';

const layout = (props) => {
  return (
    <Auxilary>
      <Toolbar />
      <AddRecipe />
      <div>ShowRecipe</div>
    </Auxilary>
  );
  
};

export default layout; 