import React from 'react';

import classes from './Recipe.module.css';

const recipe = (props) => {
  return (
    <article className={classes.Recipe}>
      <h1>{props.title}</h1>
      <p>{props.ingredients}</p>
      <p>{props.description}</p>
    </article>
  );
}

export default recipe;