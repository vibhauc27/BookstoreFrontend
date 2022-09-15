import React from 'react'
import './BookDetail.css'
import bookimage from '../../bookimage.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
// import PlusorMinus from '../AddtoBag/PlusorMinus';
import { addCartItems, addWishlist, getCartItems, getWishlistItems } from '../Service/dataService';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { cartItemQuantity } from '../Service/dataService';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function BookDetail(props) {
    // const [addtobagSwitch, setAddtobagSwitch] = React.useState(true)
    const [addtoCart, setAddtoCart] = React.useState(true)
    const [cartId, setCartId] = React.useState([])
    const [quantity, setQuantity] = React.useState(1)

    const getWishlist = (event) => {
        addWishlist(event.target.id)
            .then((response) => {
                console.log(response)
                // props.listenToWishlist(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // const clickAddtoBag = () => {
    //     // setAddtobagSwitch(false)
    //     setAddtoCart(false)
    //     props.listentoAddtobag()
    // }

    const GetCart = () => {
        getCartItems()
            .then((response) => {
                console.log(response)
                let filter = []
                filter = response.data.result.filter(function (book) {
                    if (props.bookData._id === book.product_id._id)
                        setCartId(book._id)
                    setQuantity(book.quantityToBuy)
                    return book
                })
                setAddtoCart(filter)

            })
            .catch((error) => {
                console.log(error)
            })

    }
    console.log(addtoCart)

    React.useEffect(() => {
        GetCart()
    }, [])

    const clickAddtoBag = () => {
        addCartItems(props.bookData._id)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        setAddtoCart(false)
    }

    const incrementCounter = () => {
        let addingItem = {
            id: cartId,
            quantityToBuy: quantity + 1
        }
        cartItemQuantity(addingItem)
            .then((response) => {
                console.log(response)
                GetCart()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const decrementCounter = () => {
        let addingItem = {
            id: cartId,
            quantityToBuy: quantity - 1
        }
        cartItemQuantity(addingItem)
            .then((response) => {
                console.log(response)
                GetCart()
            })
            .catch((error) => {
                console.log(error)
            })
    }




    return (
        <div className="bookDetailParent">
            <div className='bookDetail' >
                <div className='rowOneBookDetail'>
                    <div className='rowOneSectionOne'><img className="imageBookDetail" src={bookimage} /></div>
                    <div className='rowOneSectionTwo'>
                        {
                            cartId.length == 0 ? <div className='addToBag' onClick={clickAddtoBag}>Add to bag</div> :
                                // <PlusorMinus />
                                <div className='plusorMinusParent' >
                                    <div onClick={decrementCounter}><RemoveCircleOutlineIcon color="disabled" sx={{ fontSize: 38 }} /></div>
                                    <div className='plusorMinusBox'>{quantity}</div>
                                    <div onClick={incrementCounter}><AddCircleOutlineOutlinedIcon sx={{ fontSize: 38 }} /></div>
                                </div>
                        }

                        <div className='wishlist' id={props.bookData._id} onClick={getWishlist}><FavoriteIcon /> Wishlist</div>
                    </div>
                </div>

                <div className='rowTwoBookDetail'>
                    <div className="bookDetailText1">{props.bookData.bookName}</div>
                    <div className="bookDetailText2">{props.bookData.author}</div>
                    <div className="bookDetailText3">4.5 *</div>
                    <div className="bookDetailText4">
                        <div className="bookDetailText4Row1">{props.bookData.discountPrice}</div>
                        <div className="bookDetailText4Row2">{props.bookData.price}</div>
                    </div>
                    <div className="bookDetailParagraph">
                        <div className="bookDetailPara">-Book detail</div>
                        {props.bookData.description}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BookDetail
