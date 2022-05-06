import React from 'react';
import { Modal, Button, ListGroup, FormControl, InputGroup, Form } from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs";
import FirebaseApi from "api/FirebaseApi"

function DetailContents({ item }) {
    const [show, setShow] = React.useState(false);
    const [deleteShow, setDeleteShow] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [validated, setValidated] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function deleteGuestBook(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            try {
                let hash = Object.keys(item)[0];
                if (item[hash].password === password) {
                    FirebaseApi.deleteGuestBoock(hash).then(result => {
                        if (result === true) {
                            alert("삭제 되었습니다.")
                            window.location.reload();
                        }
                    })
                } else {
                    alert("비밀번호가 다릅니다.")
                }
                // FirebaseApi.addGuestBook({ name, title, password, contents, date: new Date() })
            } catch (e) {
                alert(e)
            }
            setPassword('')
            setDeleteShow(false)
        } else {
            setValidated(true);
        }
    }
    return (
        <>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                onClick={handleShow}
            >
                <div className="ms-2 me-auto" >
                    <div className="fw-bold">{item[Object.keys(item)[0]].title}</div>
                    {item[Object.keys(item)[0]].name}
                </div>
            </ListGroup.Item>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header style={{ display: 'flex', alignContent: "justifyContent" }}>
                    <Modal.Title>{item[Object.keys(item)[0]].title}</Modal.Title>
                    <BsFillTrashFill className="mr-5" style={{ cursor: 'pointer' }} variant="danger" onClick={() => { setDeleteShow(true) }}></BsFillTrashFill>
                </Modal.Header>
                <Modal.Body>{item[Object.keys(item)[0]].contents.split('\n').map(txt => <span>{txt}<br /></span>)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={deleteShow} onHide={() => { setDeleteShow(false); setPassword('') }} size="sm">
                <Form noValidate validated={validated} onSubmit={(e) => { deleteGuestBook(e); return false; }}>
                    <Modal.Header style={{ display: 'flex', alignContent: "justifyContent" }}>
                        <Modal.Title>삭제</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup>
                            <InputGroup.Text id="inputGroup-sizing-default">비밀번호</InputGroup.Text>
                            <FormControl
                                aria-describedby="inputGroup-sizing-default"
                                required
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password"
                                value={password}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={() => { setDeleteShow(false); setPassword(''); }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </>
    );
}

export default DetailContents;