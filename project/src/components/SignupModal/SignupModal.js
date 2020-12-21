import {React} from "react";
import {Form, Button, Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRegAC } from "../../redux/actionCreatorsUser";


//модалка регистрации
function SignupModal({show, setShow}) {
  const dispatch = useDispatch();
    const resultSignup = useSelector(store => store.user)
    // const [show, setShow] = useState(false);
    const subReg = (e) => {
      e.preventDefault();
      const {
        login: {
          value: login
        },
        password: {
          value: password
        },
        email: {
          value: email
        }
      } = e.target
      dispatch(fetchUserRegAC({ login, password, email }))
        if(!resultSignup.isAuth || resultSignup.isAuth === false) {alert("Ошибка регистрации. Попробуйте ввести другой логин или email")} else {if (resultSignup.isAuth || resultSignup.isAuth === true) {alert("Регистрация прошла успешно! Добро Пожаловать!")}
      };
        setShow(false)
      console.log(resultSignup)
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

                    <Form onSubmit={subReg}>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Логин</Form.Label>
                            <Form.Control name="login" type="text" placeholder="Придумайте и введите логин"/>
                            <Form.Text className="text-muted">
                                Мы уважаем право на сохранность личных данных и поэтому не собираем и не передаем
                                информацию о Вас третьим лицам.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email"  type="email" placeholder="Введите адрес Вашей эектронной почты"/>
                            <Form.Text className="text-muted">
                                {/*Мы уважаем право на сохранность личных данных и поэтому не собираем и не передаем*/}
                                {/*информацию о Вас третьим лицам.*/}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Введите пароль"/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Зарегистрироваться
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

export default SignupModal
