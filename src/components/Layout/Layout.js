import Auxi from "../../hoc/Auxi";

const Layout = (props) => {
    return (
        <Auxi>
            <div>sidebar ,toolbar drewrers</div>
            <main className="my-content">
                {props.children}
            </main>
        </Auxi>
    )
}
export default Layout;