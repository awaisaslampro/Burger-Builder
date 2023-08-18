import Auxi from "../../hoc/Auxi";
import SideDrawer from "../Navigation/Toolbar/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <Auxi>
            <Toolbar />
            <SideDrawer />
            <main className={classes.Layout}>
                {props.children}
            </main>
        </Auxi>
    )
}
export default Layout;