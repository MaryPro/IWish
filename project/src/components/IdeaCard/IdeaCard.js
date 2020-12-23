import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Col, Dropdown } from 'react-bootstrap'
import Star from './Star/Star'
import style from './IdeaCard.module.css'

import { fetchGetWishListAC } from '../../redux/actionCreators'

export default function IdeaCard({ idea , wishlists}) {
  // const dispatch = useDispatch()

  // const { wishlists } = useSelector(store => store)

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   if (user) {
  //     const userID = (user.currentUser.user._id);
  //     dispatch(fetchGetWishListAC(userID))
  //   }
  //   console.log('gggggggggggggggggggg');
  // }, [])

  const saveIdea = (e) => {
    e.preventDefault()
    const wishListTitle = e.target.innerText;

    fetch('/saveidea', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ wishListTitle, idea })
    })
      .then(res => res.json())
      .then(ok => console.log(ok))
  }



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
    <div className={style.card}>
      <Col>

        <div className={style.ideaimg} >
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              {<i className="fas fa-heart"></i>}
            </Dropdown.Toggle>

            <Dropdown.Menu >
              {wishlists && wishlists.map(list => <Dropdown.Item eventKey="1" key={list + Math.random()}>
                <Link to='/dashboard' onClick={saveIdea}>{list.titleWish}</Link>
              </Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">Создать новый список</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>

          <img src={idea.img} alt={idea.titleGift} width="220" height='220' />
        </div>

        <div className={style.description}>
          <Star idea={idea} />
          <div className={style.titleGift}>
            {idea.titleGift}
          </div>
        </div>
      </Col>
    </div>
  )
}

