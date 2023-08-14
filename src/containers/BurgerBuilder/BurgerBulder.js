import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../Burger/Burger';
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,

        }
    };


    render() {

        return (
            <Auxi>
                <div>
                    <Burger ingredients={this.state.ingredients} />

                </div>
                <div>
                    Build controls
                </div>
            </Auxi>
        )
    }
}
export default BurgerBuilder;