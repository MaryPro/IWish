import {Row,Col } from 'react-bootstrap'
import Informer from '../Informer/Informer'

export default function PersonalBoard() {
  return (
    <>
      <Row>
       
        <Col md={3}>
          <h3>Name: Санта</h3>
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
