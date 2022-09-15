import React, { useEffect, useState } from 'react'
import PlusorMinus from '../AddtoBag/PlusorMinus'
import Book from '../Book/Book'
import BookDetail from '../BookDetail/BookDetail'
import BookFooter from '../Footer/BookFooter'
import Header from '../Header/Header'
import { getBookList } from '../Service/dataService'
import Wishlist from '../Wishlist/Wishlist'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function DashboardTwo() {
    const [bookItem, setBookItem] = useState([])
    const [bookSwitch, setBookSwitch] = useState(false)
    // const [bookDetail, setBookDetail] = useState({})
    const [bookData, setBookData] = useState([])
    const [page, setPage] = React.useState(1);


    const listentoBook = (data) => {
        setBookData(data)
        console.log(data)
        setBookSwitch(true)
    }

    React.useEffect(() => {
        GetBooks()
    }, [])

    const GetBooks = () => {
        getBookList()
            .then((response) => {
                console.log(response);
                setBookItem(response.data.result)
                // setBookDetail(response.data.result)
            })
            .catch((error) => { console.log(error) })
    }
    console.log(bookItem)

    const pageChange = (value) => {
        setPage(value)
    }



    return (
        <div style={{ width: '100vw', height: '360vh', display: 'flex', flexDirection: 'column', alignContent: 'flex-end' }}>
           
            <div><Header /></div>

            {/* <div style={{ width: '80vw', height: '350vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'space-around', marginLeft: '150px' }}>
                {
                    bookSwitch ? <BookDetail
                        bookData={bookData} /> : bookItem.map((book) => <Book book={book} listentoBook={listentoBook} />)
                }
            </div> */}

            <div style={{ width: '80vw', height: '350vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'space-around', marginLeft: '150px' }}>
                {
                    bookSwitch ? <BookDetail bookData={bookData} /> :
                        page == 1 ?
                            bookItem.filter(book => book.bookName).slice(0, 8).map((book) =>
                                <Book book={book} listentoBook={listentoBook} />)
                        : page == 2 ?
                            bookItem.slice(8, 16).map((book) =>
                                <Book book={book} listentoBook={listentoBook} />)
                        : page == 3 ?
                            bookItem.slice(16, 24).map((book) =>
                                <Book book={book} listentoBook={listentoBook} />)
                        : null
                }
            </div>

            {/* <Stack spacing={2}> */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '30px' }}>
                    <Pagination count={5} page={page} onChange={pageChange} />
                </div>
            {/* </Stack> */}

            {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '30px' }}><Pagination count={10} /></div> */}
            <div><BookFooter /></div>
        </div>
    )
}

export default DashboardTwo
