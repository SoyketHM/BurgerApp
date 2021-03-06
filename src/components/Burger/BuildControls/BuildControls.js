import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <h5>Current Price: &#2547;&nbsp;<strong>{props.price.toFixed(2)}</strong></h5>
        {controls.map(ctrl => (
            <BuildControl
            key={ctrl.label} 
            label={ctrl.label} 
            added={()=>props.addIngredient(ctrl.type)}
            remove={()=>props.removeIngredient(ctrl.type)}
            disabled={props.disableInfo[ctrl.type]}
            />
        ))}
    </div>
);

export default BuildControls;