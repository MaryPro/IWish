import {Row} from "react-bootstrap"
import React from 'react';
import ImageUploader from 'react-images-upload';
import {useEffect, useState, useContext} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchGetWishListAC, addListWishAC} from '../../redux/actionCreators'
import AddWishListForm from '../AddWishListForm/AddWishListForm'
import CarouselList from '../CarouselList/CarouselList'
import style from './WishLists.module.css'
import IdeaCard from "../IdeaCard/IdeaCard";

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
        <Row>
            <AddWishListForm indepCount={indepCount} setIndepCount={setIndepCount}/>
        </Row>
        {wishlists && wishlists.map((wishlist) => 
            <CarouselList wishlist={wishlist} indepCount={indepCount} setIndepCount={setIndepCount}/>
            )}
           
        </>
    )
}

