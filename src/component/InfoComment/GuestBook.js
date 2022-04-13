import React from 'react';
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap'

import Firebase from 'api/FirebaseApi';

function GuestBook() {
    const [show, setShow] = React.useState(false);
    const [validated, setValidated] = React.useState(false);
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [contents, setContents] = React.useState('');

    const handleClose = () => {
        setShow(false);
        setName('');
        setPassword('');
        setContents('');
        setValidated(false);
    }
    const handleShow = () => setShow(true);

    async function handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            try {
                Firebase.addGuestBook({ name, password, contents, date: new Date() })
                console.log(await Firebase.getGuestBook(5));
            } catch (e) {
                alert(e)
            }
            handleClose()
        } else {
            setValidated(true);
        }
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                글 쓰기
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={(e) => { handleSubmit(e); return false; }}>
                    <Modal.Header closeButton>
                        <Modal.Title>방명록 글 쓰기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col md={12} className="mb-2">
                                    <Form.Control
                                        style={{
                                            resize: 'none',
                                            height: '10em'
                                        }}
                                        required
                                        onChange={(e) => { setContents(e.target.value) }}
                                        value={contents}
                                        as="textarea"
                                        placeholder="내용" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} xs={6}>
                                    <Form.Control
                                        type="input"
                                        required
                                        onChange={(e) => { setName(e.target.value) }}
                                        value={name}
                                        placeholder="이름" />
                                </Col>
                                <Col md={6} xs={6}>
                                    <Form.Control
                                        required
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        value={password}
                                        type="password"
                                        placeholder="비밀번호" />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            저장
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            취소
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default GuestBook;