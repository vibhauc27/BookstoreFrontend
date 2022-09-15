import React from 'react'
import './Wishlist.css'
import bookimage from '../../bookimage.png'
import { getWishlistItems, removeWishlist } from '../Service/dataService'
import Header from '../Header/Header'

function Wishlist() {
  const [wishlistQuantity, setWishlistQuantity] = React.useState([])

  const Getwishlist = () => {
    getWishlistItems()
      .then((response) => {
        //console.log(response)
        setWishlistQuantity(response.data.result)

      })
      .catch((error) => {
        console.log(error)
      })

  }
  const clickRemoveWishlist = (event) => {
    removeWishlist(event.target.id)
      .then((response) => {
        console.log(response)
        Getwishlist()
      })
      .catch((error) => {
        console.log(error)
      })

  }

  console.log(wishlistQuantity)

  React.useEffect(() => {
    Getwishlist()
  }, [])


  return (
    <div >
      <Header />

      <div className="wishlistParent">
        <div className="mywishlist">
          <h3 className="mywishlistText">My Wishlist</h3>
          {
            wishlistQuantity.map((cart) =>
              <div className="wishlistrow1">
                <div className="wishlistimage">
                  <img className="imageOne" src={bookimage} />

                </div>
                <div className="wishlistDetails">
                  <div className="wishlistBook">{cart.product_id.bookName}</div>
                  <div className="wishlistAuthor">by {cart.product_id.author}</div>
                  <div className="wishlistPrice">
                    <div className="wishlistPrice1">Rs {cart.product_id.price}</div>
                    <div className="wishlistDiscountPrice">{cart.product_id.discountPrice}</div>
                  </div>
                </div>
                <button className="wishlistRemove" id={cart.product_id._id} onClick={clickRemoveWishlist}>Remove</button>
              </div>
            )
          }

        </div>
      </div>
    </div>
  )
}







//   return (
//     <div className='wishlistParent'>
//       <div className='wishlistColumn1'>My Wishlist</div>
//       <div className='wishlistColumn2'>Book 1</div>

//     </div>
//   )
// }

export default Wishlist
