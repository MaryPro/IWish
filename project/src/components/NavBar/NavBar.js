import React, {useState} from "react";
import {Navbar, Nav} from 'react-bootstrap'

import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'
import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";

function NavBar() {
//функция с модалкой

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

    return (
        <>
            <Navbar bg="success" variant="dark">
                <Navbar.Brand href="/dashboard">IWish</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    {!logged || logged === false ? <Nav.Link href="#signup" onClick={signupVisible}>Регистрация</Nav.Link> : null}
                    <SignupModal setShow={setShowSignup} show={showSignup}/>
                    {!logged || logged === false ?<Nav.Link href="#login" onClick={visibleModal}>Войти</Nav.Link> : null}
                    <LoginModal setShow={setShow} show={show}/>
                    {logged && logged === true ? <Nav.Link href="/dashboard">Личный кабинет</Nav.Link> : null}

                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;
