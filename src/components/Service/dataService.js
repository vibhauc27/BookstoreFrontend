import axios from 'axios'
let configObjForaddNotes1 = {
  headers: {
    "x-access-token": localStorage.getItem("token")
  },
  // headers: {
  //   Authorization: localStorage.getItem("token")
  // },
}


export const getBookList = () => {
  let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book`, configObjForaddNotes1)
  return response
}
export const getCartItems = () => {
  console.log(configObjForaddNotes1)
  let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`, configObjForaddNotes1)
  return response
}

export const addWishlist = (obj) => {
  let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${obj}`,obj,configObjForaddNotes1)
  return response
}

export const getWishlistItems = () => {
  let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items`, configObjForaddNotes1)
  return response
}

export const removeWishlist = async(obj) => {
  let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${obj}`,configObjForaddNotes1)
  return response
}

export const addCartItems = (obj)  => {
  console.log(obj);
  let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/"+obj, obj , configObjForaddNotes1)
  return response
}

export const cartItemQuantity = (obj)  => {
  let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${obj.id}`, obj, configObjForaddNotes1)
  console.log(obj)
  return response
}

export const customerDetails = (obj)  => {
  let response = axios.put("https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user", obj, configObjForaddNotes1)
  return response
}

export const orderSummary = (obj)  => {
  console.log(obj)
  let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order", obj , configObjForaddNotes1)
  return response
}

export const removeCartitem = (obj) => {
  let response = axios.delete("https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/"+obj, configObjForaddNotes1)
  return response
}

