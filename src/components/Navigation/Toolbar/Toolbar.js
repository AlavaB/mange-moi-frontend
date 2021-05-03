import React from 'react';

import classes from './Toolbar.module.css';
import appLogo from '../../../assets/images/app-logo.png';
import NavigationItem from '../NavigationItem/NavigationItem';
//import Recipe from "../../../containers/AddRecipe/AddRecipe";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Brand}>
        <a className={classes.Title} href="#">
          Mange-moi
        </a>
        <img src={appLogo} alt="Logo" className={classes.Logo}></img>
      </div>
      
      <nav>
        <ul className={classes.NavItems}>
          <NavigationItem link="/" className={classes.NavItem}>Mon Compte</NavigationItem>
          <NavigationItem link="../../../containers/AddRecipe/AddRecipe">Créer une Recette</NavigationItem>
        </ul>
      </nav>
    </header>
  );
}

export default toolbar;