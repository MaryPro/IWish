import {Alert} from "react-bootstrap"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetWishListAC } from '../../redux/actionCreators'
import CarouselList from '../CarouselList/CarouselList'
export default function WishLists() {


    const dispatch = useDispatch()
    const { wishlists } = useSelector(store => store)

    useEffect(() => {
        dispatch(fetchGetWishListAC())

    }, [])

    return(
        <>
            {wishlists.map((wishlist) => <div>

                <Alert variant='success' key = {Math.random()}>
                {wishlist.titleWish}
            </Alert>
            <CarouselList gift = {wishlists.map(el => el.gifts)} />


            </div>)

            }
            </>

    )

}


