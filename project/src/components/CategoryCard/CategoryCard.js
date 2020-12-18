import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function CategoryCard({ categoryObj }) {
  const categoryRoute = Object.keys(categoryObj)[0]
  const category = categoryObj[categoryRoute]
  return (
    <div>
      <Col>
        <Link to={'/ideas/' + categoryRoute}>
          <Card  
            bg="success"
            style={{ width: '10rem' , height: '10rem', color: 'white', marginBottom: '1rem'}}
          >
            <Card.Img  src={categoryObj.img} />
            <Card.ImgOverlay>
                {category}
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Col>
    </div>
  )
}

