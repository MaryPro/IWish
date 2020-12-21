import { Dropdown, DropdownButton, Col } from 'react-bootstrap'
import Star from './Star/Star'
import style from './IdeaCard.module.css'

export default function IdeaCard({ idea }) {

  return (
    <div className={style.card}>
      <Col>
        {/* <DropdownButton
          menuAlign="right" */}
          {/* title= */}
          {}
          {/* id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton> */}
          
        
        <div className={style.ideaimg} >
          <div className={style.heart}>
            {<i class="fas fa-heart"></i>}
          </div>
          <img src={idea.img} alt={idea.titleGift} width="220" height='220'/>
        </div>
       
        <div className={style.description}>
          <Star idea={idea}/>
          <div className={style.titleGift}>
            {idea.titleGift}
          </div>
        </div>
      </Col>
    </div>
  )
}

