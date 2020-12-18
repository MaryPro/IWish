import { Dropdown, DropdownButton, Col } from 'react-bootstrap'
import style from './IdeaCard.module.css'

export default function IdeaCard({ idea }) {
  return (
    <div className={style.card}>
      <Col>
        <DropdownButton
          menuAlign="right"
          title={<i class="far fa-heart"></i>}
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>

        <img src={idea.img} alt={idea.titleGift} width="100" />
        <div className={style.asd}>
          <p className={style.star} style={{fontSize: '40px', color: 'Dodgerblue'}}>
            <i class="fas fa-star"></i>
          </p>
         <span  className={style.rate}>{idea.rate}</span> 
          {idea.titleGift}
        </div>
      </Col>
    </div>
  )
}

