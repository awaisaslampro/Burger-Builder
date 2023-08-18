import React from 'react';
import Auxi from "../../../hoc/Auxi";
import Button from '../../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li className='font-semibold' key={igKey}>
                <span
                    style={{ textTransform: 'capitalize' }}>
                    {igKey}</span>:{props.ingredients[igKey]}
            </li>
        })
    return (
        <Auxi>
            <div className='m-2.5'>
                <p className='font-black text-lg'>Your Order</p>
                <p className='pt-5 italic'>A delicious burger with the following ingredients:</p>
                <ul className='list-disc pl-8 py-5'>
                    {ingredientSummary}
                </ul>
                <p className='font-black'>Total Price: {`${props.price.toFixed(2)}$`}</p>
                <p>Continue to Checkout?</p>

                <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </div>
        </Auxi>
    )
}
export default OrderSummary;