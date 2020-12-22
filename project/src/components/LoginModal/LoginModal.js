import { React, useEffect, useState } from "react";
import { Form, Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUserLoginAC } from "../../redux/actionCreatorsUser";
import IdeasBoard from "../IdeasBoard/IdeasBoard";
import PersonalBoard from "../PersonalBoard/PersonalBoard";
import {render} from "@testing-library/react";


//модалка
function LoginModal({ show, setShow }) {
<<<<<<< HEAD

  const history = useHistory()

=======
>>>>>>> f1752477820c7ceab2a15f99911eea452a530d33
  const resultLogin = useSelector(store => store.user)
  const dispatch = useDispatch();
  const [state, setState] = useState('')

  const subLog = (e) => {
    e.preventDefault();
    const {
      login: {
        value: login
      },
      password: {
        value: password
      }
    } = e.target
<<<<<<< HEAD
    dispatch(fetchUserLoginAC({ login, password })
        // .then(res => console.log(res))
        // .then(answer => alert(answer.message))

    )


    if (resultLogin.currentUser.success === false) {alert(resultLogin.currentUser.message)}
    setShow(false);


    !resultLogin.currentUser.success && alert(resultLogin.currentUser.message)
    // if (resultLogin.currentUser.success === false) { alert(resultLogin.currentUser.message) }
    setShow(false);
    history.push('/dashboard')

=======
    dispatch(fetchUserLoginAC({ login, password }))
>>>>>>> f1752477820c7ceab2a15f99911eea452a530d33
  }
  useEffect(() => {
    !resultLogin.currentUser.success ? setState(resultLogin.currentUser.message) :
      setShow(false)
  }, [resultLogin])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>

          <Modal.Title>  <div>{state}</div>Пожалуйста, введите имя пользователя и пароль</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={subLog}>
            <Form.Group controlId="formBasicText">
              <Form.Label>Логин</Form.Label>
              <Form.Control name="login" type="text" placeholder="Введите логин" />
              <Form.Text className="text-muted">
                Мы уважаем право на сохранность личных данных и поэтому не собираем и не передаем
                информацию о Вас третьим лицам.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control name="password" type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Button variant="success" type="submit">
              Войти
                    </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
                    </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoginModal
