import React from 'react';

import DetailContents from './GuestBook/DetailContents'
import { Modal, Button, Container, Pagination, ListGroup } from 'react-bootstrap'
import GuestBook from './GuestBook';

function GuestBookDetailList(props) {
    const [show, setShow] = React.useState(false);
    const [guestBookData, setGuestBookData] = React.useState([]);
    const [page, setPage] = React.useState(1)
    React.useEffect(() => {
        console.log(props.list)
        setGuestBookData(props.list)
    }, [props])
    const handleClose = () => { setShow(false); }
    const handleShow = () => { setShow(true) };
    const Paging = () => {
        let result = [];
        if (page > 3)
            result.push(<Pagination.Ellipsis></Pagination.Ellipsis>)
        for (let i = page - 2; page - 2 <= i && i <= page + 2 && i <= parseInt((guestBookData.length - 1) / 10) + 1; i++) {
            if (i < 1)
                continue
            if (i === page) {
                result.push(<Pagination.Item active>{i}</Pagination.Item>)
            } else {
                result.push(<Pagination.Item onClick={(e) => { setPage(parseInt(e.target.innerText)) }} value={i}>{i}</Pagination.Item>)
            }
        }
        // if (page < parseInt(guestBookData.length / 10) - 3)
        if (page <= parseInt((guestBookData.length - 1) / 10) + 1 - 3)
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
                <Modal.Header style={{ display: "flex", alignContent: "justifyContent" }} >
                    <Modal.Title>방명록 글</Modal.Title>
                    <GuestBook />
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <ListGroup as="ol" >
                            {guestBookData.filter((element, index) => index >= (page - 1) * 10 && index < parseInt(Math.min(page * 10, guestBookData.length))).map(item => <DetailContents item={item} />)}
                        </ListGroup>
                    </Container>
                </Modal.Body>
                <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination>
                        <Pagination.First onClick={(e) => { setPage(1) }} />
                        <Pagination.Prev onClick={(e) => { setPage(Math.max(page - 1, 1)) }} />

                        <Paging />
                        <Pagination.Next onClick={(e) => { setPage(Math.min(page + 1, parseInt((guestBookData.length - 1) / 10) + 1)) }} />
                        <Pagination.Last onClick={(e) => { setPage(parseInt((guestBookData.length - 1) / 10) + 1) }} />
                    </Pagination>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default GuestBookDetailList;