import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../Burger/Burger';
import BuilControls from '../Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.7
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 2,
            cheese: 0,

        },
        totalPrice: 4
    };
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })

    }


    render() {

        return (
            <Auxi>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                    <BuilControls />
                </div>
            </Auxi>
        )
    }
}
export default BurgerBuilder;