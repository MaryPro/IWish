import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import style from './components/CategoryList/CategoryList.module.css'
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
          <div className={style.main}>
            <Container>
              <h1> IWish </h1>
              <div> Приложение по подбору подарков </div>
              <div><Link to="/ideas/Все категории"> <img src='https://pngicon.ru/file/uploads/1303507150_box3-256x256.png' /> </Link></div>
              <div></div>
              <div><h3>Посмотреть идеи</h3></div>
            </Container>
          </div>
          <CategoryList />
        </Route>

        <Route path='/ideas/:category'>
          <IdeasBoard />
        </Route>

        <Route exact path='/dashboards/'>
          123
          {/* <UserPage /> */}
        </Route>

      
      </Switch>
    </BrowserRouter>
  )
}

export default App;
