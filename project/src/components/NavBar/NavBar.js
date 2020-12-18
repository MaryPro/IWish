import React, {useState} from "react";
import {Navbar, Nav} from 'react-bootstrap'

import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'

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


    return (
        <>
            <Navbar bg="success" variant="dark">
                <Navbar.Brand href="#home">IWish</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Главная</Nav.Link>
                    <Nav.Link href="#signup" onClick={signupVisible}>Регистрация</Nav.Link>
                    <SignupModal setShow = {setShowSignup} show = {showSignup}/>
                    <Nav.Link href="#login" onClick={visibleModal}>Войти</Nav.Link>
                <LoginModal setShow = {setShow} show = {show}/>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;