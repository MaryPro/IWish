import React from 'react'
import { Col, Accordion, Card, Button } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { fetchUserUpdAC } from "../../../redux/actionCreatorsUser";

export default function SendAvatar({ currUser, indepCount, setIndepCount}) {
  const id = currUser._id
  const dispatch = useDispatch()
 
  const sendFoto = async (e) => {
    e.preventDefault()

    const { file: { files }, method } = e.target
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'iwish_img')
    const res = await fetch('https://api.cloudinary.com/v1_1/di5lpqwcp/image/upload', {
      method,
      body: data
    })

    const file = await res.json();
    const avatar = file.url;
    await setIndepCount(indepCount + 1)
    
    dispatch(fetchUserUpdAC({ id, avatar }))
  }

  return (
    <>
      <Col md={6}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Загрузить фото
                  </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <form encType="multipart/form-data" method="POST" onSubmit={sendFoto} name="fileinfo">
                  <div style={{ display: 'flex' }}>
                    <input type='file' name='file' id="file" />
                    <button>Загрузить</button>
                  </div>
                </form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </>
  )
}

