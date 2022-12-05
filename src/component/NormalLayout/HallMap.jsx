import React from 'react';
import KakaoMapScript from "./HallMap/KakaoMapScript";

import { FaSubway, FaBus, FaTaxi } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap';

function HallMap(props) {
    React.useEffect(() => {
        KakaoMapScript();
    }, []);

    function maxWidth() {
        return 520 > window.innerWidth ? window.innerWidth - 40 : 480
    }
    function maxHeight() {
        return 520 > window.innerWidth ? (window.innerWidth - 40) / 4 * 3 : 480 / 4 * 3
    }

    return (
        <div className="d-flex flex-column align-content-center py-5">
            <div className="d-flex d-row align-items-top justify-content-center ">
                <div className="m-2 pt-2 px-3 " style={{ borderRadius: 8, textAlign: 'center' }}>
                    <h4> 《 오시는 길 》 </h4>
                    <div style={{ fontSize: '10pt', marginBottom: 10 }}>
                        서울 강남구 강남대로 262 양재 캠코 타워 B1
                    </div>
                </div>
            </div>
            <div className="d-flex align-content-center justify-content-center">
                <div id='myMap' style={{ width: maxWidth(), height: maxHeight() }}></div>
            </div>
            <Row className="d-flex flex-column align-content-center mt-3 mx-0">
                <Col sm={4} className=" pt-3">
                    <div className="d-flex justify-content-center mb-2" style={{ fontSize: 30 }}>
                        <FaTaxi />
                    </div>
                    <div className="d-flex justify-content-center">
                        <h4>주차장 안내</h4>
                    </div>
                    <p className="text-center">지하주차장 250대 수용 가능<br />
                                        차량번호 등록시 2시간 무료주차<br />
                    </p>
                </Col>
                <Col sm={4} className=" pt-3 ">
                    <div className="d-flex justify-content-center mb-2" style={{ fontSize: 30 }}>
                        <FaSubway />
                    </div>
                    <div className="d-flex justify-content-center">
                        <h4>지하철 안내</h4>
                    </div>
                    <p className="d-flex justify-content-center">양재역 3번출구에서 도보 2분거리</p>
                </Col>
                <Col sm={4} className="pt-3">
                    <div className="d-flex justify-content-center mb-2" style={{ fontSize: 30 }}>
                        <FaBus />
                    </div>
                    <div className="d-flex justify-content-center">
                        <h4>버스 안내</h4>
                    </div>
                    <Row className="d-flex justify-content-center">
                        <Col xs={2} className="text-center"><b>간선</b></Col>
                        <Col xs={8}>140, 400, 402, 407, 421,<br></br>  440, 441, 462, 470</Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col xs={2} className="text-center"><b>직행</b></Col>
                        <Col xs={8}>1005-1, 1550, 1570, <br></br>3002, 3007, 9700</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default HallMap;