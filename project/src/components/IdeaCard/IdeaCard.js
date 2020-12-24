import React, {useState, useEffect} from 'react'
import { Col, Dropdown, FormControl } from 'react-bootstrap'
import Star from './Star/Star'
import style from './IdeaCard.module.css'
import { Link } from 'react-router-dom'
import AddWishListForm from '../AddWishListForm/AddWishListForm'
import { fetchGetIdeasAC } from '../../redux/actionCreators'
import { useDispatch } from 'react-redux'

export default function IdeaCard({ idea, wishlists, res, setRes, }) {
  const [thisIdea, setThisIdea] = useState(idea)
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
 
  const saveIdea = (e) => {
    e.preventDefault()
    setCount(count +1)
    const wishListTitle = e.target.innerText;
    
    fetch('/saveidea', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ wishListTitle, idea })
    })
    .then(res => res.json())

    fetch('/changeRate', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({thisIdea})
    })
      .then(res => res.json())
      .then(updIdea => setThisIdea(() => updIdea))

    }
   
    console.log(thisIdea);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={style.heart}
    >
      {children}
      &#x25bc;
    </a>
  ));


  return (
    <>
      <div className={style.card}>
        <Col>

          <div className={style.ideaimg} >
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {<i className="fas fa-heart"></i>}
              </Dropdown.Toggle>

              <Dropdown.Menu >
    
                {wishlists && wishlists.map(list => <Dropdown.Item eventKey="1" key={list + Math.random()} onClick={saveIdea}>
                 {list.titleWish}
                </Dropdown.Item>
                )}
                {/* <Dropdown.Divider /> */}
                
              </Dropdown.Menu>

            </Dropdown>

            <img src={idea.img} alt={idea.titleGift} width="220" height='220' />
          </div>

          <div className={style.description}>
            <Star thisIdea={thisIdea} />
            <div className={style.titleGift}>
              {idea.titleGift}
            </div>
          </div>
        </Col>
      </div>
    </>
  )
}
