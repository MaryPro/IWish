import { Col } from 'react-bootstrap'
import style from './IdeaCard.module.css'
export default function IdeaCard({idea}) {
  return (
    <div className={style.card}>
      <Col>
        <div> <a href="#" > like </a> </div>
        <img src={idea.img} alt={idea.titleGift} width="100"/>
        <div>
          {idea.rate}
          {idea.titleGift}
        </div>
      </Col>
    </div>
  )
}

