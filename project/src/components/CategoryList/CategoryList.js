import { Row, Card} from 'react-bootstrap'
import CategoryCard from '../CategoryCard/CategoryCard'

export default function CategoryList() {
  
  const categories = [
    {"loved" : "Любимому"},
    {"family" : "Семье"},
    {"friends" : "Друзьям"},
    {"colleges" : "Коллегам"},
    {"me" : "Себе"},
    {"children" : "Детям"}
  ]

  return (
    <>
      <h2> Категории подарков </h2>
      <div>Кому выбираете подарок?</div>

      <Row>
        {categories && categories.map(el => <div key={el + Math.random()}> <CategoryCard categoryObj={el} /> </div>)}
      </Row>
    </>
  )
}

