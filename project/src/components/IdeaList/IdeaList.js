import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap'
import style from './IdeaList.module.css'
import IdeaCard from '../IdeaCard/IdeaCard'
import { fetchGetWishListAC } from '../../redux/actionCreators'


export default function IdeaList({ dispatch, ideas, res, setRes, category }) {
  useEffect(() => {
    setRes(() => ideas.filter(obj => {
      // let showGood = false;
      // if (obj.tag.includes(category)) {
      //   showGood = true
      // }
      // return showGood
      return obj.tag.includes(category)
    }))
  }, [category])

  const { wishlists } = useSelector(store => store)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      const userID = (user.currentUser.user._id);
      dispatch(fetchGetWishListAC(userID))
    }
    console.log('gggggggggggggggggggg');
  }, [])

  return (
    <div className={style.list}>
      <Row>
        {res && res.map(el => <div key={el.id}> <IdeaCard idea={el} wishlists={wishlists} /> </div>)}
      </Row>
    </div>
  )
} 
