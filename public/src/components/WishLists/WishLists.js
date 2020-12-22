import { Alert } from "react-bootstrap"
import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetWishListAC, addListWishAC } from '../../redux/actionCreators'
import AddWishListForm from '../AddWishListForm/AddWishListForm'
import CarouselList from '../CarouselList/CarouselList'
import ButtonDeleteList from "../ButtonDeleteList/ButtonDeleteList";
import style from './WishLists.module.css'

export default function WishLists() {
  const [indepCount, setIndepCount] = useState(0)
  const dispatch = useDispatch()

  const resultLogin = useSelector(store => store.user)
  const [userLog, setLogUser] = useState({ currentUser: { token: '', user: { login: '', _id:'' } }, isAuth: false })
 
  useEffect(() => {
    setLogUser(resultLogin)
   }, [resultLogin]);

  useEffect(() => {
    // const userID = (JSON.parse(localStorage.getItem('user')).currentUser.user._id);
    const user = localStorage.getItem('user')
    if (user) {
      setLogUser(JSON.parse(user))
    };
  }, [])

  useEffect(() => {
    console.log(userLog.currentUser.user._id);
    dispatch(fetchGetWishListAC(userLog.currentUser.user._id))
  }, [indepCount])

  const { wishlists } = useSelector(store => store)
  // console.log(wishlists);
  return (
    <>
      <AddWishListForm indepCount={indepCount} setIndepCount={setIndepCount} />
      {wishlists && wishlists.map((wishlist) => <div>

        <Alert variant='success' className={style.list} key={Math.random()}>
          {wishlist.titleWish}
          <ButtonDeleteList id={wishlist._id} indepCount={indepCount} setIndepCount={setIndepCount} />
        </Alert>
        {wishlist.gifts !== undefined ? <CarouselList gift={wishlist && wishlist.gifts} key={Math.random()} /> :
          <h1>Список пока пуст</h1>}

      </div>)

      }
    </>

  )
}

