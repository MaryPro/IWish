import {Alert} from "react-bootstrap"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetWishListAC, addListWishAC } from '../../redux/actionCreators'
import AddWishListForm from '../AddWishListForm/AddWishListForm'
import CarouselList from '../CarouselList/CarouselList'
export default function WishLists() {

    const dispatch = useDispatch()
    const { wishlists } = useSelector(store => store)

    useEffect(() => {
        dispatch(fetchGetWishListAC())

    }, [])

    return(
        <>
            <AddWishListForm/>
            {wishlists && wishlists.map((wishlist) => <div>

                <Alert variant='success' key={Math.random()}>
                    {wishlist.titleWish}
                </Alert>
                {/*<CarouselList gift={wishlists && wishlists.map(el => el.gifts)}/>*/}


            </div>)

            }
            </>

    )
}

