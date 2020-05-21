import React, { Component } from 'react'
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const ingredientsPrice = {
  cheese: 20,
  bacon: 50,
  meat: 60,
  salad: 20
}
export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
          salad: 0,
          cheese: 0,
          bacon: 0,
          meat: 0
        },
        totalPrice: 50
    }

    addIngredient = type => {
      let oldCount = this.state.ingredients[type];
      let updateIngredient = {...this.state.ingredients};
      updateIngredient[type] = oldCount + 1;
      let priceAddition = ingredientsPrice[type];
      let oldPrice = this.state.totalPrice;
      let newPrice = oldPrice + priceAddition;
      this.setState({
        ingredients: updateIngredient,
        totalPrice: newPrice
      })
    }

    removeIngredient = type => {
      let oldCount = this.state.ingredients[type];
      if (oldCount <= 0) return;
      let updateIngredient = {...this.state.ingredients};
      updateIngredient[type] = oldCount - 1;
      let priceDeduction = ingredientsPrice[type];
      let oldPrice = this.state.totalPrice;
      let newPrice = oldPrice - priceDeduction;
      this.setState({
        ingredients: updateIngredient,
        totalPrice: newPrice
      })
    }

  render() {
    const disableInfo = { ...this.state.ingredients };
    for(let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls 
          addIngredient={this.addIngredient} 
          removeIngredient={this.removeIngredient} 
          disableInfo={disableInfo}
          price={this.state.totalPrice}
          />
      </Aux>
    )
  }
}
