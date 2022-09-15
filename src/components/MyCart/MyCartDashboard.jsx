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
import { cartItemQuantity, getCartItems, removeCartitem } from '../Service/dataService'

function MyCartDashboard(props) {
  // const [placeOrderSwitch, setPlaceOrderSwitch] = useState(true)
  // const [orderSummarySwitch, setOrderSummarySwitch] = useState(true)
  // const [cartId, setCartId] = React.useState([])
  const [quantity, setQuantity] = React.useState(props.cart.quantityToBuy)
  const [addCart, setAddCart] = React.useState([])


  const GetCartItem = () => {
    getCartItems()
      .then((response) => {
        console.log(response)
        let filter = []
        filter = response.data.result.filter(function (book) {
          if (props.cart.product_id._id === book.product_id._id)
          setQuantity(book.quantityToBuy)
          return book
        })
        setAddCart(filter)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const incrementCounter = () => {
    let addingItem = {
      id: props.cart.product_id._id,
      quantityToBuy: props.cart.quantityToBuy + 1
    }
    cartItemQuantity(addingItem)
      .then((response) => {
        console.log(response)
        GetCartItem()

      })
      .catch((error) => {
        console.log(error)
      })
  }

  const decrementCounter = () => {
    let addingItem = {
      id: props.cart.product_id._id,
      quantityToBuy: props.cart.quantityToBuy - 1
    }
    cartItemQuantity(addingItem)
      .then((response) => {
        console.log(response)
        GetCartItem()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const clickRemove = (event) => {
    removeCartitem(event.target.id)
      .then((response) => {
        console.log(response)
        props.listenToRemove(true)
      })
      .catch((error) => {
        console.log(error)
      })

  }


  return (
    <div>

      <div className='mycartcolumn2'>
        <div className='mycartBookimage'><img className="imageOne" src={bookimage} /></div>
        <div className='myCartRow2'>
          <div className='myCartRow2text1'>{props.cart.product_id.bookName}</div>
          <div className='myCartRow2text2'>{props.cart.product_id.author}</div>
          <div className='myCartRow2text3'>
            <div className='myCartDiscountPrice'>{props.cart.product_id.discountPrice}</div>
            <div className='myCartPrice'>{props.cart.product_id.price}</div>
          </div>
          <div className='plusorMinusColumn'>
            <div className='plusorMinus'>
              <div onClick={decrementCounter} id={props.cart._id}><RemoveCircleOutlineIcon color="disabled" sx={{ fontSize: 25 }} /></div>
              <div className='plusorMinusbox'>{quantity}</div>
              <div onClick={incrementCounter} id={props.cart._id}><AddCircleOutlineOutlinedIcon sx={{ fontSize: 25 }} /></div>
            </div>
            <div className='removebutton' id={props.cart._id} onClick={clickRemove}>Remove</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCartDashboard
