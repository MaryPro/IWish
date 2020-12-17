import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetIdeasAC } from '../../redux/actionCreators'
import {Row} from 'react-bootstrap'
import style from './IdeaList.module.css'

import IdeaCard from '../IdeaCard/IdeaCard'

export default function IdeaList() {

  const dispatch = useDispatch()
  const { ideas } = useSelector(store => store)

  useEffect(() => {
    dispatch(fetchGetIdeasAC())

  }, [])

  return (
    <div className={style.list}>
      <Row>
      
      {ideas && ideas.map(el => <div key={el.id}> <IdeaCard idea={el}/> </div> )}
      </Row>
    </div>
  )
}
