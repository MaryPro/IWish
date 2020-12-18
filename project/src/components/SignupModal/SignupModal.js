import {React, useState} from "react";
import {Form, Button, Modal} from 'react-bootstrap'


//модалка регистрации
function SignupModal({show, setShow}) {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Пожалуйста, введите имя пользователя и пароль</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Логин</Form.Label>
                            <Form.Control type="text" placeholder="Придумайте и введите логин"/>
                            <Form.Text className="text-muted">
                                Мы уважаем право на сохранность личных данных и поэтому не собираем и не передаем
                                информацию о Вас третьим лицам.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Введите адрес Вашей эектронной почты"/>
                            <Form.Text className="text-muted">
                                {/*Мы уважаем право на сохранность личных данных и поэтому не собираем и не передаем*/}
                                {/*информацию о Вас третьим лицам.*/}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль"/>
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