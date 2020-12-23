import {Alert} from "react-bootstrap"
import React from 'react';
import ImageUploader from 'react-images-upload';
import {useEffect, useState, useContext} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchGetWishListAC, addListWishAC} from '../../redux/actionCreators'
import AddWishListForm from '../AddWishListForm/AddWishListForm'
import CarouselList from '../CarouselList/CarouselList'
import ButtonDeleteList from "../ButtonDeleteList/ButtonDeleteList";
import style from './WishLists.module.css'
import ShareList from '../ShareList/ShareList'

export default function WishLists() {
    const [indepCount, setIndepCount] = useState(0)
    const dispatch = useDispatch()

    const {wishlists} = useSelector(store => store)


    useEffect(() => {
        const userID = (JSON.parse(localStorage.getItem('user')).currentUser.user._id);
        dispatch(fetchGetWishListAC(userID))
    }, [indepCount])

    return (
        <>

            <AddWishListForm indepCount={indepCount} setIndepCount={setIndepCount}/>
            {wishlists && wishlists.map((wishlist) => <div>

                <Alert variant='success' className={style.list} key={Math.random()}>
                    {wishlist.titleWish}
                    <ShareList id={wishlist._id} user={wishlist.user}/>
                    <ButtonDeleteList id={wishlist._id} indepCount={indepCount} setIndepCount={setIndepCount}/>
                </Alert>
                {wishlist.gifts !== undefined ? <CarouselList gift={wishlist && wishlist.gifts} key={Math.random()}/> :
                    <h1>Список пока пуст</h1>}

            </div>)

            }
        </>

    )
}

