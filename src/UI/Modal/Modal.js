import React from 'react';
import classes from './Modal.module.css';
import Auxi from '../../hoc/Auxi';
import Backrop from '../Backdrop/Backdrop';
const Modal = (props) => {
    return (
        <Auxi>
            <Backrop show={props.show} clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxi>
    )
}
export default Modal