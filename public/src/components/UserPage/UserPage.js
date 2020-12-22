import { useParams } from 'react-router-dom'
import WishLists from '../WishLists/WishLists'
import {Container,Row,Col } from 'react-bootstrap'
import PersonalBoard from '../PersonalBoard/PersonalBoard'

export default function UserPage() {
    return (
        <>
         Ваши листы
        <Container>
          {/* <PersonalBoard /> */}
                        {/* Ваши листы */}
                        {/* <WishLists /> */}
        </Container>
        </>
    )
}
