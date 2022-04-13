import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap'


function GuestBookList({ list, setList }) {
    return (
        <div>
            <ListGroup as="ol" numbered>
                {list.map(item =>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.contents}</div>
                            {item.name}
                        </div>
                        <Badge style={{ cursor: 'pointer' }} bg="danger" onClick={() => { console.log('test') }}>
                            X
                    </Badge>
                    </ListGroup.Item>
                )
                }
            </ListGroup>
        </div>
    );
}

export default GuestBookList;