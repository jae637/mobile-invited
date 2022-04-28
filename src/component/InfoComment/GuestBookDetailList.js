import React from 'react';

import Firebase from 'api/FirebaseApi'
import { Modal, Button, Row, Col, Container, Pagination, ListGroup } from 'react-bootstrap'

function GuestBookDetailList(props) {
    const [show, setShow] = React.useState(false);
    const [guestBookData, setGuestBookData] = React.useState([]);
    const [page, setPage] = React.useState(1)
    const handleClose = () => {
        setShow(false);
        setGuestBookData([])
    }
    const handleShow = async () => {
        let data = []
        try {
            data = await Firebase.getGuestBook();
        } catch (e) {
            console.log(e)
        }
        setShow(true)
        setGuestBookData(data)
    };
    const Paging = () => {
        let result = [];
        if (page > 3)
            result.push(<Pagination.Ellipsis></Pagination.Ellipsis>)
        // for (let i = page - 2; page - 2 <= i && i <= page + 2 && i <= parseInt(guestBookData.length / 10) + 1; i++) {
        for (let i = page - 2; page - 2 <= i && i <= page + 2 && i <= 7; i++) {
            if (i < 1)
                continue
            if (i === page) {
                result.push(<Pagination.Item active>{i}</Pagination.Item>)
            } else {
                result.push(<Pagination.Item onClick={(e) => { console.log(parseInt(e.target.innerText)); setPage(parseInt(e.target.innerText)) }} value={i}>{i}</Pagination.Item>)
            }
        }
        // if (page < parseInt(guestBookData.length / 10) - 3)
        if (page <= 7 - 3)
            result.push(<Pagination.Ellipsis></Pagination.Ellipsis>)
        console.log(result)
        return result
    }
    console.log(parseInt(guestBookData.length / 10) + 1)
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                전체 글 보기
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>방명록 글</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <ListGroup as="ol" numbered>
                            {guestBookData.filter((element, index) => index >= (page - 1) * 10 && index < page * 10).map(item => {
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{item.title}</div>
                                        {item.name}
                                    </div>
                                </ListGroup.Item>
                            })}
                        </ListGroup>
                    </Container>
                </Modal.Body>
                <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination>
                        <Pagination.First onClick={(e) => { setPage(1) }} />
                        <Pagination.Prev onClick={(e) => { setPage(Math.max(page - 1, 1)) }} />

                        <Paging />
                        {/* <Pagination.Next onClick={(e) => { setPage(Math.min(page + 1, parseInt(guestBookData.length / 10))) }} /> */}
                        <Pagination.Next onClick={(e) => { setPage(Math.min(page + 1, 7)) }} />
                        {/* <Pagination.Last onClick={(e) => { setPage(parseInt(guestBookData.length / 10)) }} /> */}
                        <Pagination.Last onClick={(e) => { setPage(7) }} />
                    </Pagination>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default GuestBookDetailList;