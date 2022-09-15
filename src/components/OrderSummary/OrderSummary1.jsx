import React from 'react'
import './OrderSummary.css'
import bookimage from '../../bookimage.png'

function OrderSummary1(props) {
  return (
    <div>
      <div className='orderSummaryColumn2'>
                <div className='orderSummaryImage'>
                    <img className="imageOne" src={bookimage} />
                </div>
                <div className='orderSummaryBook'>
                    <div className='orderSummaryRow2text1'>{props.cart.product_id.bookName}</div>
                    <div className='orderSummaryRow2text2'>{props.cart.product_id.author}</div>
                    <div className='orderSummaryRow2text3'>
                        <div className='orderSummaryDiscountPrice'>{props.cart.product_id.discountPrice}</div>
                        <div className='orderSummaryPrice'>{props.cart.product_id.price}</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default OrderSummary1
