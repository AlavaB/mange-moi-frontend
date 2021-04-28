import React from 'react';

import classes from './Toolbar.module.css';
import appLogo from '../../../assets/images/app-logo.png';
import NavigationItem from '../NavigationItem/NavigationItem';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <a className={classes.Title} href='#'>Mange-moi</a>
      <img src={appLogo} alt='Logo'></img>
      <nav>
        <ul className={classes.NavItems}>
          <NavigationItem link="/">Mon Compte</NavigationItem>
          <NavigationItem link="/">Créer une Recette</NavigationItem>
        </ul>
        
      </nav>
    </header>
  )
}

export default toolbar;