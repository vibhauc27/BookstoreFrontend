import React from 'react'
import './Book.css'
import bookimage from '../../bookimage.png'
// import { getCartItems } from '../Service/dataService';

function Book(props) {
    const clickHandler = (book) =>  {console.log(book); props.listentoBook(book)}

    // const getCart = () => {
    //     getCartItems()
    //     .then((response) => {
    //         console.log(response)
    //     }) 
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }


    return (
        <div>
            <div class="bookLists">
                <div class="bookOne" onClick={() => clickHandler(props.book)}>
                    <div class="imagebookpage" >
                        <div class="bookImage1">
                            <img className="imageOne" src={bookimage} />
                        </div>

                    </div>
                    <div class="bookcoloumn2">
                        <div class="bookOneText">{props.book.bookName}</div>
                        <div class="bookTwoText">{props.book.author}</div>
                        <div class="bookThreeText">4.5 *</div>
                        <div class="bookFourText">
                            <div>{props.book.discountPrice}</div>
                            <div class="bookPrice">{props.book.price}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Book
