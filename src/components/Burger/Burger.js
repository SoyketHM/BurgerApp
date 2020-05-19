import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let transfromIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((k, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transfromIngredients.length === 0) {
        transfromIngredients = <p>Please start adding ingredients</p>
    }
    
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {transfromIngredients}
        <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger
