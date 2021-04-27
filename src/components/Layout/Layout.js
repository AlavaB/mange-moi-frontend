import React from 'react';

import Auxilary from '../../hoc/Auxilary'; // wrapping component 
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Main from '../../containers/Main/Main.js';

const layout = () => {
  return (
    <Auxilary>
      <Toolbar />
      <Main />
    </Auxilary>
  );
  
};

export default layout; 