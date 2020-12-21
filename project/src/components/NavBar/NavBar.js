import React, { useEffect, useState } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'
import { useDispatch } from "react-redux";
import { logoutUserAC } from "../../redux/actionCreatorsUser";
import style from './NavBar.module.css'

function NavBar() {

  //функция с модалкой
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUserAC())
  const [show, setShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [userLog, setLogUser] = useState({ currentUser: { token: '', user: { login: '' } }, isAuth: false })
  const visibleModal = () => {
    setShow(true)
  }
  const signupVisible = () => {
    setShowSignup(true)
  }


  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      setLogUser(JSON.parse(user))
    };
  }, [userLog.isAuth])



  return (
    <div  >
      <div className={style.div}>

        <Navbar className={style.bar} variant="dark">
          <div >
            <Navbar.Brand href="/">IWish</Navbar.Brand>
          </div>
          <div >
            <Nav >

              {/* <Nav.Link href="/">Главная</Nav.Link> */}
              {!userLog.isAuth ?
                <Nav.Link onClick={signupVisible}>Регистрация</Nav.Link> : null}
              <SignupModal setShow={setShowSignup} show={showSignup} />
              {!userLog.isAuth ?
                <Nav.Link onClick={visibleModal}>Войти</Nav.Link> : null}
              <LoginModal setShow={setShow} show={show} />

              {userLog.isAuth ? <Nav.Link href="/" onClick={() => logout()}>Выйти</Nav.Link> : null}
              {userLog.isAuth ? <Nav.Link href="/dashboard">{userLog.currentUser.user.login}</Nav.Link> : null}

            </Nav>
          </div>
        </Navbar>
      </div>
    </div>

  )

}

export default NavBar;
