import { useParams } from 'react-router-dom'
import IdeaList from '../IdeaList/IdeaList'
import {Container,Row,Col } from 'react-bootstrap'

export default function IdeasBoard() {
  //нужно передать в category категорию на русском
  const { category } = useParams()

  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            Блок фильтрации
          </Col>
          <Col>
            Подарки для {category}
            <IdeaList />
          </Col>
        </Row>
      </Container>
    </>
  )
}
