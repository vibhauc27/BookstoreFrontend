import React, { useState } from 'react'
import './OrderSummary.css'
// import bookimage from '../../bookimage.png'
import { getCartItems, orderSummary } from '../Service/dataService'
// import MyCartDashboard from './MyCartDashboard'
import OrderSummary1 from './OrderSummary1'

function OrderSummary() {
    const [listOfCart, setListOfCart] = useState([])
    // const [note, setNote] = useState()

    // const clickCheckout = () => {props.listentoCheckout()}

    const GetCartItem = () => {
        getCartItems()
            .then((response) => {
                console.log(response)
                setListOfCart(response.data.result)

            })
            .catch((error) => {
                console.log(error)
            })
    }
    React.useEffect(() => {
        GetCartItem()
    }, [])

    const clickCheckout = () => {
        let orders = [];
        for (let i = 0; i < listOfCart.length; i++) {
            let add = {
                product_id: listOfCart[i].product_id._id,
                product_name: listOfCart[i].product_id.bookName,
                product_quantity: listOfCart[i].quantityToBuy,
                product_price: listOfCart[i].product_id.price
            }
            orders.push(add);
        }
        let data = {
            orders: orders,
        }
        // props.listentoCheckout()
        orderSummary(data)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (

        <div className='orderSummaryParent'>
            <div className='orderSummaryColumn1'>Order Summary</div>

            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', height: '300px' }}>
                {
                    listOfCart.map((cart) => <OrderSummary1 cart={cart} />)
                }
            </div>

            <div className='orderSummaryColumn3'><button className='checkoutButton' onClick={clickCheckout}>Checkout</button></div>
        </div>
    )
}

export default OrderSummary
