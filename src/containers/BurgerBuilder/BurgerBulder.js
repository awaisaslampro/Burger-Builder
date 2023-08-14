import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../Burger/Burger';
import BuilControls from '../Burger/BuildControls/BuildControls';
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 2,
            cheese: 0,

        }
    };

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