import { useEffect, useState } from 'react'
import {Row,Col } from 'react-bootstrap'
import Informer from '../Informer/Informer'
import style from './PersonalBoard.module.css'
import SendAvatar from './SendAvatar/SendAvatar'

export default function PersonalBoard() {
  const [userLog, setLogUser] = useState({ currentUser: { token: '', user: { login: '' } }, isAuth: false })

  useEffect(() => {
    const user = localStorage.getItem('user')
      user && setLogUser(JSON.parse(user))
  }, [])

  return (
    <div >
      <Row className={style.row}>
       
        <Col md={3}>
          <h3>Привет, {userLog.currentUser.user.login}!</h3>
          <img className={style.ava} src={userLog.currentUser.user.avatar}
          alt="avatar"

          />
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
        <SendAvatar currUser={userLog.currentUser.user} />
      </Row>
    </div>
  )
}
