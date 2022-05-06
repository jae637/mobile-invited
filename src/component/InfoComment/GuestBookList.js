import React from 'react';
import { ListGroup } from 'react-bootstrap'

import DetailContents from './GuestBook/DetailContents'

function GuestBookList({ list }) {
    return (
        <div>
            <ListGroup as="ol" >
                {list.map((item, index) => <DetailContents item={item} />)}
            </ListGroup>
        </div>
    );
}

export default GuestBookList;