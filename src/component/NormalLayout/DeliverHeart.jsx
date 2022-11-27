import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import titleImg from 'asset/images/00title.png';
import { FaRegCopy } from 'react-icons/fa';
import MovingDot from './Main/MovingDot';

function DeliverHeart(props) {
    function clipboard(text) {
        var aux = document.createElement("textarea");
        aux.value = text;
        document.body.appendChild(aux);
        aux.select();
        aux.setSelectionRange(0, 9999);
        document.execCommand("copy");
        document.body.removeChild(aux);
        alert("복사가 완료되었습니다.")
    }
    return (
        <div className="d-flex flex-column align-content-center py-5"
            style={{ textAlign: 'center', width: window.innerWidth, height: window.innerHeight, backgroundColor: '#e3b2ad' }}>

            <div className="background-banner d-flex d-row align-items-top justify-content-center">
                <img src={titleImg} alt="title" />
            </div>

            <div className="d-flex align-items-top justify-content-center">
                <MovingDot />
                <div className='speech-balloon py-2 d-flex align-items-baseline mt-4' >
                    <div className="p-2 bg-white" style={{ borderRadius: 8, fontSize: '0.8rem' }}>
                        감사합니다.
                    </div>
                </div>
            </div>
            <div className="align-self-center">
                <Card style={{ width: '100%' }} className={"my-2 "}>
                    <Card.Body>
                        <Card.Title>신랑 측 마음 전하는 곳</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center" onClick={() => { clipboard("우리은행 1002961499443") }}>
                                <span>
                                    신랑 최재형 <br />
                                    우리은행 : 1002-961-499443
                                    </span>
                                <span>
                                    <FaRegCopy />
                                </span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }} className={"my-2"}>
                    <Card.Body>
                        <Card.Title>신부 측 마음 전하는 곳</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center" onClick={() => { clipboard("카카오뱅크 3333030755400") }}>
                                <span>
                                    신부 한소람 <br />
                                    카카오뱅크 : 3333-030-755400
                                </span>
                                <span>
                                    <FaRegCopy />
                                </span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default DeliverHeart;