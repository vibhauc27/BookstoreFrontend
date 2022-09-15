import React, { useState } from 'react'
import './MyCart.css'
import BookFooter from '../Footer/BookFooter'
import Header from '../Header/Header'
import bookimage from '../../bookimage.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CustomerDetail from '../CustomerDetails/CustomerDetail'
import OrderSummary from '../OrderSummary/OrderSummary'
import { cartItemQuantity, getCartItems } from '../Service/dataService'
import MyCartDashboard from './MyCartDashboard'


function MyCart() {
    const [placeOrderSwitch, setPlaceOrderSwitch] = useState(true)
    const [orderSummarySwitch, setOrderSummarySwitch] = useState(true)
    // const [cartId, setCartId] = React.useState([])
    // const [quantity, setQuantity] = React.useState(1)
    const [listOfCart, setListOfCart] = useState([])


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

    const clickPlaceOrder = () => {
        setPlaceOrderSwitch(false)
    }

    const listentoOrderSummary = () => {
        setOrderSummarySwitch(false)
    }

    const listenToRemove = () => {
        GetCartItem()
    }

    console.log(listOfCart)

    return (
        <div>
            <Header />
            <div className='myCartParent' >
                <div className='myCartBox'>
                    <div className='mycartColumn1'>
                        <div className='myCartText'>My Cart</div>
                        <div className='loacationMyCart'>
                            <div className='locationIcon'><LocationOnIcon /></div>
                            <div>BridgeLabz Solutions LLP, No...</div>
                            <div className='arrowIcon'><ArrowDropDownIcon /></div>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'space-between', height:'400px'}}>
                        {
                            listOfCart.map((cart) => <MyCartDashboard cart={cart} listenToRemove={listenToRemove}/>)
                        }
                    </div>

                    <div className='mycartColumn3'>
                        {
                            placeOrderSwitch ? <button className='mycartButton' onClick={clickPlaceOrder}>Place order</button> : null
                        }
                        {/* <button className='mycartButton' onClick={clickPlaceOrder}>Place order</button> */}
                    </div>
                </div>
                <div>
                    {
                        placeOrderSwitch ? <div className='addressDetailBox'>Address details</div> : <CustomerDetail listentoOrderSummary={listentoOrderSummary} />
                    }
                </div>
                <div>
                    {
                        orderSummarySwitch ? <div className='orderSummaryBox'>Order Summary </div> : <OrderSummary />
                    }
                </div>

            </div>

            <BookFooter />
        </div >
    )
}

export default MyCart



















{/* <div className='myCartParent' >
                <div className='myCartBox'>
                    <div className='mycartColumn1'>
                        <div className='myCartText'>My Cart</div>
                        <div className='loacationMyCart'>
                            <div className='locationIcon'><LocationOnIcon /></div>
                            <div>BridgeLabz Solutions LLP, No...</div>
                            <div className='arrowIcon'><ArrowDropDownIcon /></div>
                        </div>
                    </div>
                    <div className='mycartcolumn2'>
                        <div className='mycartBookimage'><img className="imageOne" src={bookimage} /></div>
                        <div className='myCartRow2'>
                            <div className='myCartRow2text1'>Don't make me think</div>
                            <div className='myCartRow2text2'>by Steve Krug</div>
                            <div className='myCartRow2text3'>
                                <div className='myCartDiscountPrice'>1200</div>
                                <div className='myCartPrice'>1500</div>
                            </div>
                            <div className='plusorMinusColumn'>
                                <div className='plusorMinus'>
                                    <div onClick={decrementCounter}><RemoveCircleOutlineIcon color="disabled" sx={{ fontSize: 25 }} /></div>
                                    <div className='plusorMinusbox'>1</div>
                                    <div onClick={incrementCounter}><AddCircleOutlineOutlinedIcon sx={{ fontSize: 25 }} /></div>
                                </div>
                                <div className='removebutton'>Remove</div>
                            </div>
                        </div>
                    </div>
                    <div className='mycartColumn3'>
                        {
                            placeOrderSwitch ? <button className='mycartButton' onClick={clickPlaceOrder}>Place order</button> : null
                        }
                        
                    </div>
                </div>
                <div>
                    {
                        placeOrderSwitch ? <div className='addressDetailBox'>Address details</div> : <CustomerDetail listentoOrderSummary={listentoOrderSummary} />
                    }
                </div>
                <div>
                    {
                        orderSummarySwitch ? <div className='orderSummaryBox'>Order Summary </div> : <OrderSummary />
                    }
                </div>

            </div> */}

