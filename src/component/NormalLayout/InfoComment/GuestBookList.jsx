import React from 'react';

import DetailContents from './GuestBookList/DetailContents'
import { Modal, Container, Pagination, ListGroup } from 'react-bootstrap'
import GuestBook from './GuestBook';

function GuestBookDetailList(props) {
    const [guestBookData, setGuestBookData] = React.useState([]);
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
        setGuestBookData(props.list)
    }, [props])

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
        return result
    }

    return (
        <div style={{ width: 480 }}>
            <div className="m-2 mx-3">
                <GuestBook />
            </div>
            <Container>
                <ListGroup as="ol" >
                    {guestBookData.filter((element, index) => index >= (page - 1) * 10 && index < parseInt(Math.min(page * 10, guestBookData.length))).map(item => <DetailContents item={item} />)}
                </ListGroup>
            </Container>
            <Pagination className="justify-content-center my-2">
                <Pagination.First onClick={(e) => { setPage(1) }} />
                <Pagination.Prev onClick={(e) => { setPage(Math.max(page - 1, 1)) }} />

                <Paging />
                <Pagination.Next onClick={(e) => { setPage(Math.min(page + 1, parseInt((guestBookData.length - 1) / 10) + 1)) }} />
                <Pagination.Last onClick={(e) => { setPage(parseInt((guestBookData.length - 1) / 10) + 1) }} />
            </Pagination>
        </div>
    );
}

export default GuestBookDetailList;