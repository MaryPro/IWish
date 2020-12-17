import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"
import IdeasBoard from './components/IdeasBoard/IdeasBoard'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>

        <Route exact path='/'>
          IWish 
          Приложение по подбору подарков
        </Route>

        <Route path='/ideas/:category'>
          {/* тут идеи подарков */}
          <IdeasBoard />
        </Route>
      
        <Route path='/dashboard/:id'>
          Личный кабинет
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
