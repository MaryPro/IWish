import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container, Row, Button } from 'react-bootstrap'
import style from './components/CategoryList/CategoryList.module.css'

import NavBar from "./components/NavBar/NavBar"
import IdeasBoard from './components/IdeasBoard/IdeasBoard'
import NavFilter from './components/NavFilter/NavFilter';
import {useSelector} from 'react-redux'
import CategoryList from './components/CategoryList/CategoryList'
import UserPage from './components/UserPage/UserPage'
import Informer from './components/Informer/Informer'

function App() {
  const authCheck = useSelector(store => store.user)
 const logged = authCheck.isAuth

  return (
    <BrowserRouter>
        <NavBar/>

        <Switch>

        <Route exact path='/'>
          <div className={style.main}>
            <Container>
                <h1> IWish </h1>
                <div> Приложение по подбору подарков </div>
                <div><Link to="/ideas/all"> <Button variant="light">Посмотреть идеи</Button> </Link></div>
            </Container>
          </div>
            <CategoryList />
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
