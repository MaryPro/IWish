import { useParams } from 'react-router-dom'
import IdeaList from '../IdeaList/IdeaList'

export default function IdeasBoard() {
  //нужно передать в category категорию на русском
  const { category } = useParams()
  return (
    <div>
      Подарки для {category}
      <IdeaList />
    </div>
  )
}
