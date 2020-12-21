import React, { useEffect, useState } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'
import { useSelector, useDispatch } from "react-redux";
import { logoutUserAC } from "../../redux/actionCreatorsUser";
import { BrowserRouter } from "react-router-dom";

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
  }, [show, showSignup])



  return (
    <>
      <Navbar bg="success" variant="dark">
        {/*{userLog.currentUser.user.login ? <h1 style={{ alignItem: 'right' }}>{userLog.currentUser.user.login}</h1> : null}*/}
        <Navbar.Brand href="/dashboard">IWish</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Главная</Nav.Link>
          {!userLog.isAuth ?
            <Nav.Link href="#signup" onClick={signupVisible}>Регистрация</Nav.Link> : null}
          <SignupModal setShow={setShowSignup} show={showSignup} />
          {!userLog.isAuth ?
            <Nav.Link href="#login" onClick={visibleModal}>Войти</Nav.Link> : null}
          <LoginModal setShow={setShow} show={show} />
          {userLog.isAuth ? <Nav.Link href="/dashboard">Личный кабинет</Nav.Link> : null}
          {userLog.isAuth ? <Nav.Link href="/" onClick={() => logout()}>Выйти</Nav.Link> : null}

        </Nav>
      </Navbar>
    </>
  )

}

export default NavBar;
