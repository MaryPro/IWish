import { React} from "react";
import { Form, Button, Modal } from 'react-bootstrap'
import {useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { fetchUserLoginAC } from "../../redux/actionCreatorsUser";


//модалка
function LoginModal({ show, setShow }) {

  const resultLogin = useSelector(store => store.user)
  const dispatch = useDispatch();

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
    dispatch(fetchUserLoginAC({ login, password }))
    if (resultLogin.currentUser.success === false) {alert(resultLogin.currentUser.message)}
    setShow(false);

    console.log(resultLogin.currentUser.success)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Пожалуйста, введите имя пользователя и пароль</Modal.Title>
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
              <Form.Control  name="password" type="password" placeholder="Введите пароль" />
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
