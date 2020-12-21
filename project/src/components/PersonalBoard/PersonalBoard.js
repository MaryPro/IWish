import { useEffect, useState } from 'react'
import {Row,Col } from 'react-bootstrap'
import Informer from '../Informer/Informer'

export default function PersonalBoard() {
  const [userLog, setLogUser] = useState({ currentUser: { token: '', user: { login: '' } }, isAuth: false })

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      setLogUser(JSON.parse(user))
    };
  }, [userLog.isAuth])
  return (
    <>
      <Row>
       
        <Col md={3}>
          <h3>Привет, {userLog.currentUser.user.login}!</h3>
          <img src="https://www.whatsonnetwork.co.uk/uploads/800x600/0d64d17f287374a58cf7b951981755f9.jpg" 
          alt="avatar"
          width="200"
          height="200"
          />
        </Col>
        <Col>
          <h2>Личный кабинет</h2>
          <p>Тут какая то личная информация</p>
        </Col>
        <Informer/>
      </Row>
    </>
  )
}
