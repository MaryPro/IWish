import React, { useEffect, useState } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAC } from "../../redux/actionCreatorsUser";
import style from './NavBar.module.css'
import { Link, NavLink } from "react-router-dom";

function NavBar() {

  //функция с модалкой
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUserAC())
  const [show, setShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const resultLogin = useSelector(store => store.user)
  const [userLog, setLogUser] = useState({ currentUser: { token: '', user: { login: '' } }, isAuth: false })
  const visibleModal = () => {
    setShow(true)
  }
  const signupVisible = () => {
    setShowSignup(true)
  }

  useEffect(() => {
    setLogUser(resultLogin)
  }, [resultLogin]);

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setLogUser(JSON.parse(user))
    };
  }, [])



  return (
    // <div style={style}>
    //   <div className={style.div}>

    //     <Navbar className={`${style.bar} fixed-top`} variant="dark">
    //       <div >
    //         <Navbar.Brand href="/">IWish</Navbar.Brand>
    //       </div>
    //       <div >
    //         <Nav>

    //           {/* <Nav.Link href="/">Главная</Nav.Link> */}
    //           {!userLog.isAuth ?
    //             <Nav.Link className={style.link} onClick={signupVisible}>Регистрация</Nav.Link> : null}
    //           <SignupModal setShow={setShowSignup} show={showSignup} />
    //           {!userLog.isAuth ?
    //             <Nav.Link className={style.link} onClick={visibleModal}>Войти</Nav.Link> : null}
    //           <LoginModal setShow={setShow} show={show} />

    //           {userLog.isAuth ? <Nav.Link className={style.link} href="/" onClick={() => logout()}>Выйти</Nav.Link> : null}
    //           {/* {userLog.isAuth ? <Nav.Link className={style.link} href="/dashboards/">{userLog.currentUser.user.login}</Nav.Link> : null} */}
    //           {userLog.isAuth ? <Link className={style.link} to="/dashboard">{userLog.currentUser.user.login}</Link> : null}

    //         </Nav>
    //       </div>
    //     </Navbar>
    //   </div>
    // </div>



    <div>
      <nav className={`navbar navbar-expand-lg navbar-light navbar-dark  fixed-top ${style.bar}`}>
        <div className="nav-wrapper">
          <ul className="navbar-nav right hide-on-med-and-down">
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/">IWish</NavLink></li>
            {!userLog.isAuth && <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={signupVisible}>Регистрация</NavLink></li>}
            <SignupModal setShow={setShowSignup} show={showSignup} />
            {!userLog.isAuth && <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={visibleModal}>Войти</NavLink></li>}
            <LoginModal setShow={setShow} show={show} />

            {userLog.isAuth && <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={() => logout}>Выйти</NavLink></li>}
            {userLog.isAuth && <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard" >{userLog.currentUser.user.login}</NavLink></li>}

          </ul>
        </div>
      </nav>
    </div >

  )

}

export default NavBar;
