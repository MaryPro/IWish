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
                {wishlist.gifts !== undefined ? <CarouselList gift={wishlist && wishlist.gifts} key={Math.random()}/> : <h1>Список пока пуст</h1>}

                <button type="submit" id={wishlist._id} onClick={() =>

                    fetch('/wishlists', {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'Application/json',
                        },
                        body: JSON.stringify({id: wishlist._id})
                    })
                        .then(res => res.json())
                        .then(mes =>alert(mes.message))
                        .then(setIndepCount(indepCount => indepCount + 1))





                }>удалить список</button>




            </div>)

            }
            </>

    )
}

