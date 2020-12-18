import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container, Row, Button } from 'react-bootstrap'

import NavBar from "./components/NavBar/NavBar"
import IdeasBoard from './components/IdeasBoard/IdeasBoard'
import CategoryList from './components/CategoryList/CategoryList'
import UserPage from './components/UserPage/UserPage'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
          {/* тут идеи подарков */}
          <IdeasBoard />
        </Route>

        <Route path='/dashboard/'>
          Личный кабинет
          <UserPage />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
