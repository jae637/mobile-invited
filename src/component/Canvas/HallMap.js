import React from 'react';
import KakaoMapScript from "./HallMap/KakaoMapScript";

import { FaSubway, FaBus, FaTaxi } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap';

function HallMap(props) {
    React.useEffect(() => {
        KakaoMapScript();
    }, []);

    function maxHeight() {
        return window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight - 80
    }

    return (
        <>
            <div id='myMap' style={{ height: maxHeight() }}></div>
            <Row className="p-2 mt-3">
                <Col sm={4} className=" pt-3 ">
                    <div className="d-flex justify-content-center mb-2" style={{ fontSize: 60 }}>
                        <FaSubway />
                    </div>
                    <div className="d-flex justify-content-center">
                        <h4>지하철 안내</h4>
                    </div>
                    <p className="d-flex justify-content-center">양재역 3번출구에서 도보 2분거리위치</p>
                </Col>
                <Col sm={4} className=" pt-3">
                    <div className="d-flex justify-content-center mb-2" style={{ fontSize: 60 }}>
                        <FaBus />
                    </div>
                    <div className="d-flex justify-content-center">
                        <h4>버스 안내</h4>
                    </div>
                    <Row>
                        <Col xs={2} className="text-center"><b>간선</b></Col>
                        <Col xs={10}>140, 400, 402, 407, 421, 440, 441, 462, 470</Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="text-center"><b>직행</b></Col>
                        <Col xs={10}>1005-1, 1550, 1570, 3002, 3007, 9700</Col>
                    </Row>
                </Col>
                <Col sm={4} className=" pt-3">
                    <div className="d-flex justify-content-center mb-2" style={{ fontSize: 60 }}>
                        <FaTaxi />
                    </div>
                    <div className="d-flex justify-content-center">
                        <h4>주차장 안내</h4>
                    </div>
                    <p className="text-center">도곡동 캠코 양재타워 주차장<br />
                                        인포데스크에서 차량번호 등록<br />
                                            (무료주차 2시간)
                         </p>
                </Col>
            </Row>
        </>
    );
}

export default HallMap;