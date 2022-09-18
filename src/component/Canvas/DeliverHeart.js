import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function DeliverHeart(props) {
    function clipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("복사가 완료되었습니다.")
            })
    }
    return (
        <>
            <Card style={{ width: '100%' }} className={"my-2"}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>신랑 측 마음 전하는 곳</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item onClick={() => { clipboard("우리은행 1002961499443") }}>
                            신랑 최재형 <br />
                            우리은행 : 1002-961-499443
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card style={{ width: '100%' }} className={"my-2"}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>신부 측 마음 전하는 곳</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item onClick={() => { clipboard("카카오뱅크 3333030755400") }}>
                            신부 한소람 <br />
                            카카오뱅크 : 3333-030-755400
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

        </>
    );
}

export default DeliverHeart;