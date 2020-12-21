import { Form, Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { fetchPostIdeaAC } from '../../../redux/actionCreators'

export default function AddCard({ show, setShow }) {
  const dispatch = useDispatch();
  const categories = ['Семье', 'Друзьям', 'Любимым', 'Коллегам', 'Себе', 'Детям', 'Для всех']

  const addIdea = (e) => {
    e.preventDefault();

    let checkboxesChecked = []
    function getCheckedCheckBoxes() {
      let checkboxes = document.querySelectorAll('.form-check-input');
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].id)
        }
      }
      return checkboxesChecked
    }
    getCheckedCheckBoxes()

    const {
      titleWish: {
        value: titleWish
      },
      description: {
        value: description
      }
    } = e.target
    console.log(titleWish, description, checkboxesChecked, 'addcards');
    dispatch(fetchPostIdeaAC({ titleWish, description, tag: checkboxesChecked }))
    setShow(false)
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <hr />
      <Button onClick={handleShow}>Создать идею</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавьте свою идею</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={addIdea}>

            <Form.Group controlId="formBasicText">
              <Form.Label>Название идеи</Form.Label>
              <Form.Control name="titleWish" type="text" placeholder="Придумайте и введите название идеи" />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Описание</Form.Label>
              <Form.Control name="description" type="text" placeholder="Опишите свою идею" />
            </Form.Group>

            <Form.Group className="formBasicCheckBox">
              <Form.Label>Кому подходит подарок? Выберете все подходящие категории</Form.Label>
              {categories.map((category) => (
                <Form.Check
                  name='category'
                  type='checkbox'
                  id={category}
                  label={category}
                />
              ))}

            </Form.Group>
            <Button variant="success" type="submit">
              Добавить
                </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
                </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </div>
  )
}

