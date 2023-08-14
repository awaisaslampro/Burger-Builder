import React from "react"
import BuildControl from "../BuildControl/BuildControl";
import classes from './BuildControls.module.css';
const controls = [
    { label: 'Salad', type: "salad" },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
const BuildControls = (props) => {
    return (
        <div>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} />
            ))}

            <div>Build Controls</div>
        </div>

    )
}

export default BuildControls;