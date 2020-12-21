import {Alert} from "react-bootstrap"
import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetWishListAC, addListWishAC } from '../../redux/actionCreators'
import AddWishListForm from '../AddWishListForm/AddWishListForm'
import CarouselList from '../CarouselList/CarouselList'
export default function WishLists() {
const [indepCount, setIndepCount] = useState(null)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchGetWishListAC())

    }, [indepCount])
    const { wishlists } = useSelector(store => store)
    return(
        <>
            <AddWishListForm indepCount={indepCount} setIndepCount={setIndepCount}/>
            {wishlists && wishlists.map((wishlist) => <div>

                <Alert variant='success' key={Math.random()}>
                    {wishlist.titleWish}
                </Alert>
                <CarouselList gift={wishlist && wishlist.gifts}/>


            </div>)

            }
            </>

    )
}

