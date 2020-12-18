import { useParams } from 'react-router-dom'
import WishLists from '../WishLists/WishLists'
import {Container,Row,Col } from 'react-bootstrap'

export default function IdeasBoard() {

    // const { category } = useParams()

    return (
        <>

                        Ваши листы
                        <WishLists />

        </>
    )
}
