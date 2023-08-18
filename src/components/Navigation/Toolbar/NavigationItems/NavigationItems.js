import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem';
const NavigationItems = (Props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active={true}>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
);

export default NavigationItems