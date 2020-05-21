import React, { Component } from 'react'
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 1,
            bacon: 2,
            meat: 2,
            salad: 1
        }
    }
  render() {
    return (
      <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls />
      </Aux>
    )
  }
}
