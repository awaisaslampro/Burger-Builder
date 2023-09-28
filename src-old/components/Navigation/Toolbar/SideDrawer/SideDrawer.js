import React from 'react'
import classes from './SideDrawer.module.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Auxi from '../../../../hoc/Auxi/Auxi'
import BackDrop from '../../../UI/Backdrop/Backdrop';
const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxi>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div>canceled</div>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    )
}

export default SideDrawer;