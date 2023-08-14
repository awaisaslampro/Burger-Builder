import classes from './BuildControl.module.css';
const BuildControl = (props) => (
    <div>
        <div className={classes.BuildControl}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);
export default BuildControl;