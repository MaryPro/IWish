import { useParams } from 'react-router-dom'
import IdeaList from '../IdeaList/IdeaList'
import { Container, Row, Col } from 'react-bootstrap'
import NavFilter from '../NavFilter/NavFilter'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchGetIdeasAC } from '../../redux/actionCreators'

export default function IdeasBoard() {
  //нужно передать в category категорию на русском
  const { category } = useParams()

  const dispatch = useDispatch()
  const { ideas } = useSelector(store => store)
  const [res, setRes] = useState(ideas)
  
  useEffect(() => {
    dispatch(fetchGetIdeasAC())
  }, [])

  useEffect(() => {
    setRes(()=> ideas)
       }, [ideas])

  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <NavFilter dispatch={dispatch} ideas={ideas} res={res} setRes={setRes}/>
          </Col>
          <Col>

            Подарки для {category}
            <IdeaList category={category} dispatch={dispatch} ideas={ideas} res={res} setRes={setRes}/>


          </Col>
        </Row>
      </Container>
    </>
  )
}
