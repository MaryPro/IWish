import { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import style from './IdeaList.module.css'
import IdeaCard from '../IdeaCard/IdeaCard'

export default function IdeaList({ dispatch, ideas, res, setRes, category }) {
  useEffect(() => {
    setRes(() => ideas.filter(obj => {
      // let showGood = false;
      // if (obj.tag.includes(category)) {
      //   showGood = true
      // }
      // return showGood
      return obj.tag.includes(category)
    }))
  }, [category])


  return (
    <div className={style.list}>
      <Row>
        {res && res.map(el => <div key={el.id}> <IdeaCard idea={el} /> </div>)}
      </Row>
    </div>
  )
}
