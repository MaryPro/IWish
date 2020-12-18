import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function CategoryCard({categoryObj}) {
  const categoryRoute =  Object.keys(categoryObj)[0]
  const category = categoryObj[categoryRoute]
  return (
    <div>
      <Col>
       <Link to = {'/ideas/' + categoryRoute}>
          <div>
            {category}
          </div>
        </Link>
      </Col>
    </div>
  )
}

