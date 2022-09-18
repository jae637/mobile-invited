import React from 'react';
import { ListGroup } from 'react-bootstrap'

import DetailContents from './GuestBook/DetailContents'

function GuestBookList({ list }) {
    return (
        <div className='mb-3'>
            <ListGroup as="ol" >
                {list.map((item, index) => <DetailContents item={item} />)}
            </ListGroup>
        </div>
    );
}

export default GuestBookList;