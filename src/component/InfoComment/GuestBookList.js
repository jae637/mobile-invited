import React from 'react';
import { ListGroup } from 'react-bootstrap'


function GuestBookList({ list }) {
    return (
        <div>
            <ListGroup as="ol" numbered>
                {list.map(item =>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.title}</div>
                            {item.name}
                        </div>
                    </ListGroup.Item>
                )
                }
            </ListGroup>
        </div>
    );
}

export default GuestBookList;