import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: true
        }
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then((res) => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({ loading: false, orders: fetchOrders })
            })
            .catch((err) => {
                this.setState({ loading: false })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.orders.map((order) => (
                        <Order
                            ingredients={order.ingredients}
                            price={order.price}
                            key={order.id} />
                    ))
                }
            </div>
        )
    }
}
export default withErrorHandler(Orders, axios);