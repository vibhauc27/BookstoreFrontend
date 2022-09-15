// import React, { useState } from 'react'
// import './PlusorMinus.css'
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import { cartItemQuantity } from '../Service/dataService';


// function PlusorMinus() {
// const [cartId, setCartId] = useState([])
// const [quantity, setQuantity] = useState(0)

//   const incrementCounter = () => {
//     let addingItem = {
//       id : cartId,
//       quantityToBuy : quantity + 1
//     }
//     cartItemQuantity(addingItem)
//         .then((response) => {
//         console.log(response)
//         GetCart()
//          })
//         .catch((error) => {
//             console.log(error)
//         })
// }

// const decrementCounter = () => {
//   let addingItem = {
//     id : cartId,
//     quantityToBuy : quantity + 1
//   }
//   cartItemQuantity(addingItem)
//       .then((response) => {
//       console.log(response)
//       GetCart()
//        })
//       .catch((error) => {
//           console.log(error)
//       })
// }



//   // const [getCartitems, setGetCartItems] = React.useState([])

//   // React.useEffect(() => {
//   //   GetCart()
//   // }, [])

//   // const GetCart = () => {
//   //   getCartItems()
//   //     .then((response) => {
//   //       console.log(response);
//   //       setGetCartItems(response.data)
//   //     })
//   //     .catch((error) => { console.log(error) })
//   // }
//   // console.log(getCartitems)

// //   return (
// //     <div className='plusorMinusParent' >
// //       <div onClick={incrementCounter}><RemoveCircleOutlineIcon color="disabled" sx={{ fontSize: 38 }} /></div>
// //       <div className='plusorMinusBox'>1</div>
// //       <div onClick={decrementCounter}><AddCircleOutlineOutlinedIcon sx={{ fontSize: 38 }} /></div>
// //     </div>
// //   )
// // }

// // export default PlusorMinus
