import React from 'react'
import Header from '../Header/Header'
import './Success.css'
import icon_success1 from '../../icon_success1.png'
import icon_success2 from '../../icon_success2.png'
import BookFooter from '../Footer/BookFooter'


function Success() {
    return (
        <div>
            <Header />
            <div className='successParent'>
                <div className='order'>
                    <div className='successImage'><img className="imageOne" src={icon_success1} /></div>
                    <div className='orderText1'>Order Placed Successfully</div>
                    <div className='successImage'><img className="imageOne" src={icon_success2} /></div>
                </div>
                <div className='orderMessage'>hurray!!! your order is confirmed the order id is 
                    #123456 save the order id for further communication..
                </div>
                <div className='successOrderTable'>
                    <div className='successTableHeader'>
                        <div>Email us</div>
                        <div>Contact us</div>
                        <div>Address</div>
                    </div>
                    <div className='successTableBody'>
                        <div className='successEmail'>admin@bookstore.com</div>
                        <div className='successContact'>+919876543210</div>
                        <div className='successAddress'>42, 14th Main, 15th Cross, Sector 4 ,
                        opp to BDA complex, near Kumarakom restaurant,
                         HSR Layout, Bangalore 560034</div>
                    </div>
                </div>
            </div>
            <BookFooter />
        </div>
    )
}

export default Success
