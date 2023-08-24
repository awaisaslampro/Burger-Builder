import React from 'react';
import classes from './Backdrop.module.css';
const Backrop = (props) => {
    return (
        <div>
            {props.show ?
                <div className={classes.Backdrop} onClick={props.clicked}></div>
                : null}
        </div>
    )
}
export default Backrop;