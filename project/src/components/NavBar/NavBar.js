import React, {useState} from "react";
import {Navbar, Nav} from 'react-bootstrap'
import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'
import {useSelector, useDispatch} from "react-redux";
import {logoutUserAC} from "../../redux/actionCreatorsUser";
import {BrowserRouter} from "react-router-dom";

function NavBar() {
//функция с модалкой
    const dispatch = useDispatch();
    const logout = () => dispatch(logoutUserAC())
    const [show, setShow] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const visibleModal = () => {
        setShow(true)
    }
    const signupVisible = () => {
        setShowSignup(true)
    }


    const authCheck = useSelector(store => store.user)
    const logged = authCheck.isAuth
    let userName = null
    if (logged === true) { userName = authCheck.currentUser.user.login}

    // const idUser = authCheck.currentUser.user._id

    return (
        <>
            <Navbar bg="success" variant="dark">
                {userName ? <h1 style={{alignItem:'right'}}>{userName}</h1> : null}
                <Navbar.Brand href="/dashboard">IWish</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    {!logged || logged === false ?
                        <Nav.Link href="#signup" onClick={signupVisible}>Регистрация</Nav.Link> : null}
                    <SignupModal setShow={setShowSignup} show={showSignup}/>
                    {!logged || logged === false ?
                        <Nav.Link href="#login" onClick={visibleModal}>Войти</Nav.Link> : null}
                    <LoginModal setShow={setShow} show={show}/>
                    {logged && logged === true ? <Nav.Link href="/dashboard">Личный кабинет</Nav.Link> : null}
                    {logged && logged === true ? <Nav.Link href="/" onClick={() => logout()}>Выйти</Nav.Link> : null}

                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;
