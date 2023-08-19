import React, { Component } from "react";
import Auxi from "../../hoc/Auxi/Auxi";
import SideDrawer from "../Navigation/Toolbar/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from './Layout.module.css'
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    // drawerToggleClicked
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }
    render() {
        return (
            <Auxi>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
}
export default Layout;