import IdeaCard from '../IdeaCard/IdeaCard'
import style from './CarouselList.module.css'
import { Alert, Carousel, Col, Row } from "react-bootstrap"
import ButtonDeleteList from "../ButtonDeleteList/ButtonDeleteList";
import ShareList from '../ShareList/ShareList'

export default function CarouselList({ wishlist, count, setCount }) {

  return (
    <>

      {/* <div className={style.carousel}> */}
        <a name={wishlist.titleWish}></a>

        <div  className={style.carousel} key={Math.random()}>
          <Col>
            <p>{wishlist.titleWish}</p>
          </Col>
          <Col>
            <ShareList id={wishlist._id} user={wishlist.user} />
            <ButtonDeleteList id={wishlist._id} count={count} setCount={setCount} />
          </Col>
        

        </div>
      {/* </div> */}


      <Carousel>
        {wishlist.gifts && wishlist.gifts.map(idea => <Carousel.Item key={idea + Math.random()}>
          < IdeaCard idea={idea} key={Math.random()} />
        </Carousel.Item>
        )}
      </Carousel>
      <hr/>


    </>
  )

}
