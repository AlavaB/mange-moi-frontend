import React from 'react';

import classes from './Toolbar.module.css';
import appLogo from '../../../assets/images/app-logo.png';
import NavigationItem from '../NavigationItem/NavigationItem';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <h1>Mange-moi</h1>
      <img src={appLogo} alt='Logo'></img>
      <nav>
        <ul className={classes.NavItems}>
          <NavigationItem link="/">Accueil</NavigationItem>
          <NavigationItem link="/">Tous les ingrédients</NavigationItem>
        </ul>
        
      </nav>
    </header>
  )
}

export default toolbar;