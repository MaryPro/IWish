import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetIdeasAC } from '../../redux/actionCreators'
import {Row} from 'react-bootstrap'
import style from './IdeaList.module.css'

import IdeaCard from '../IdeaCard/IdeaCard'

export default function IdeaList({dispatch, ideas, res, setRes, category }) {

  // const dispatch = useDispatch()
  // const { ideas } = useSelector(store => store)

  // useEffect(() => {
  //   dispatch(fetchGetIdeasAC())

  // }, [])
// console.log(res)
// console.log(ideas)

// const res1 = ideas.map((item)=>item.tag)
// console.log(res1)

useEffect(() => {
  setRes(() => ideas.filter(obj => {
    let showGood = false;
   
        if (obj.tag.includes(category)) {
          console.log(obj.tag.includes(category))
          showGood = true
        }
       
    return showGood
  }))
}, [category])

console.log(category)
console.log(res)


  return (
    <div className={style.list}>
      <Row>
      

      {res && res.map(el => <div key={el.id}> <IdeaCard idea={el}/> </div> )}
      {/* {category ? res.map(el => <div key={el.id}> <IdeaCard idea={el}/> </div> ) :null} */}

      </Row>
    </div>
  )
}
