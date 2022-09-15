import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
    const [search, setsearch] = React.useState("")

    const handleSearch = (event) => {
        setsearch(event.target.value)

    }

    return (
        <div class="homeParent">
            <div class="header">
                <div class="book">
                    <MenuBookTwoToneIcon />
                    Bookstore
                </div>
                <div class="search">
                    <div class="search_box">
                        <button type="submit" class="searchButton">
                            <SearchIcon htmlColor='grey' />
                        </button>
                        <input type="text" class="searchfield" placeholder='Search...' value={search} onChange={handleSearch} />

                    </div>
                </div>
                <div class="icons">
                    <div class="profile">
                        <PermIdentityIcon />
                        Profile
                    </div>
                    <div class="cart">
                        <ShoppingCartOutlinedIcon />
                        Cart
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header





{/* <div style={{ width: '80vw', height: '350vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'space-around', marginLeft: '150px' }}>
                {
                    bookSwitch ? <BookDetail bookData={bookData} /> :
                        page == 1 ?
                            bookItem.slice(0, 8).filter(book => book.bookName.toLowerCase().includes(search)).map((book) =>
                                <Book book={book} listentoBook={listentoBook} />)
                        : page == 2 ?
                            bookItem.slice(8, 16).map((book) =>
                                <Book book={book} listentoBook={listentoBook} />)
                        : page == 3 ?
                            bookItem.slice(16, 24).map((book) =>
                                <Book book={book} listentoBook={listentoBook} />)
                        : null
                }
            </div> */}