import {useState} from 'react'
import { useParams } from 'react-router-dom'
import WishLists from '../WishLists/WishLists'
import { Container, Row, Col } from 'react-bootstrap'
import PersonalBoard from '../PersonalBoard/PersonalBoard'

export default function UserPage() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Container>
        <PersonalBoard count={count} setCount={setCount}/>
        <hr />
         <WishLists count={count} setCount={setCount}/>
      </Container>
    </>
  )
}
