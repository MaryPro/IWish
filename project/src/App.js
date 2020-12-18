import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container, Row, Button } from 'react-bootstrap'

import NavBar from "./components/NavBar/NavBar"
import IdeasBoard from './components/IdeasBoard/IdeasBoard'
import NavFilter from './components/NavFilter/NavFilter';
import {useSelector} from 'react-redux'
import CategoryList from './components/CategoryList/CategoryList'
import UserPage from './components/UserPage/UserPage'
function App() {
  const authCheck = useSelector(store => store.user)
 const logged = authCheck.isAuth

  return (
    <BrowserRouter>
        <NavBar/>

        <Switch>

        <Route exact path='/'>
          <Container>
            <h1> IWish </h1>
            <div> Приложение по подбору подарков </div>
            <Row><Link to="/ideas/all"> <Button variant="light">Посмотреть идеи</Button> </Link> </Row>
              
            <CategoryList />
          </Container>
        </Route>

        <Route path='/ideas/:category'>
          <IdeasBoard />
        </Route>

        <Route path='/dashboard/'>
          {/* Личный кабинет */}
          <UserPage />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
