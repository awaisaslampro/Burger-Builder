import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuilControls from '../../components/Burger/BuildControl/BuildControl';
import Modal from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Auxi from '../../hoc/Auxi/Auxi';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.7
}
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('https://react-my-burger-e2518-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }
    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map((igKey => {
                return ingredients[igKey]
            }))
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 })
    }
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
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        // if (updatedCount < 0)
        //     return;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    //sending post request to Firebase
    purchaseContinuedHandler = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Anees Aslam",
                address: {
                    street: "testing street 1",
                    country: "pakistan"
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: "fastest"
        }
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({
                    loading: false, purchasing: false
                })
            })
            .catch(err => { this.setState({ loading: false, purchasing: false }) });
    }
    purchasCancelHandler = () => {
        this.setState({ purchasing: false })
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (
                <Auxi>

                    <Burger ingredients={this.state.ingredients} />
                    <BuilControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Auxi>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                purchaseContinued={this.purchaseContinuedHandler}
                purchaseCanceled={this.purchasCancelHandler}
                price={this.state.totalPrice}
            />
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        // {salad: true, meat: false, ...}
        return (
            <Auxi>
                <Modal show={this.state.purchasing} modalClosed={this.purchasCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxi>
        );
    }
}
//         let orderSummary = <OrderSummary
//             ingredients={this.state.ingredients}
//             purchaseContinued={this.purchaseContinuedHandler}
//             purchaseCanceled={this.purchasCancelHandler}
//             price={this.state.totalPrice}
//         />
//         if (this.state.loading) {
//             orderSummary = <Spinner />
//         }
//         //will return structure like this {salad: true,bacon:false,cheese:true}
//         return (
//             <Auxi>
//                 <div>
//                     <Modal show={this.state.purchasing} modalClosed={this.purchasCancelHandler}>
//                         {orderSummary}
//                     </Modal>

//                     <Burger ingredients={this.state.ingredients} />
//                     <BuilControls
//                         ingredientAdded={this.addIngredientHandler}
//                         ingredientRemoved={this.removeIngredientHandler}
//                         disabled={disabledInfo}
//                         purchasable={this.state.purchasable}
//                         ordered={this.purchaseHandler}
//                         price={this.state.totalPrice}
//                     />
//                 </div>
//             </Auxi>
//         )
//     }
// }
export default withErrorHandler(BurgerBuilder, axios);