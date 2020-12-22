import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Row,Col } from 'react-bootstrap'
import Informer from '../Informer/Informer'
import style from './PersonalBoard.module.css'
import SendAvatar from './SendAvatar/SendAvatar'
import {fetchGetUserAC} from '../../redux/actionCreatorsUser'

export default function PersonalBoard() {
  const dispatch = useDispatch()

  const [userLog, setLogUser] = useState({ currentUser: { token: '', user: { login: '' } }, isAuth: false })
  const [indepCount, setIndepCount] = useState(0)
  const {user} = useSelector(store => store)
  const currUser = user.currentUser.user

  useEffect(() => {
    const userLoc = localStorage.getItem('user')
    userLoc && setLogUser(JSON.parse(userLoc))
    const userID = (JSON.parse(localStorage.getItem('user')).currentUser.user._id);
    dispatch(fetchGetUserAC(userID))
  }, [indepCount])

  return (
    <div >
      <Row className={style.row}>
       
        <Col md={3}>
          <h3>Привет, {currUser && currUser.login}!</h3>
          <img className={style.ava} src={currUser && currUser.avatar}  alt="avatar"/>
        </Col>
        <Col>
          <h2>Личный кабинет</h2>
          <p>Тут какая то личная информация</p>
        </Col>
        <Col className={style.informer}>
        <Informer/>
        </Col>
        
      </Row>
      <Row>
        <SendAvatar currUser={userLog.currentUser.user} indepCount={indepCount} setIndepCount={setIndepCount} />
      </Row>
    </div>
  )
}
