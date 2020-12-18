import {Alert} from "react-bootstrap"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetWishListAC } from '../../redux/actionCreators'
export default function WishLists() {


    const dispatch = useDispatch()
    const { wishlists } = useSelector(store => store)

    useEffect(() => {
        dispatch(fetchGetWishListAC())

    }, [])

    return(
        <>
            {wishlists.map((wishlist) => <Alert variant='success'>
                {wishlist.titleWish}
            </Alert>)

            }
            </>

    )

}


