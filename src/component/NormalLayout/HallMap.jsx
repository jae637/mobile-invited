import React from 'react';
import KakaoMapScript from "./HallMap/KakaoMapScript";

import { FaSubway, FaBus, FaTaxi } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap';

import titleImg from 'asset/images/00title.png';
import MovingDot from './Main/MovingDot';

import { useParams, useNavigate } from 'react-router-dom';

function HallMap(props) {
    const navigation = useNavigate()
    const navigate = useParams();
    const personalName = navigate.name

    React.useEffect(() => {
        KakaoMapScript();
    }, []);

    function maxWidth() {
        return 480 > window.innerWidth ? window.innerWidth : 480
    }
    function maxHeight() {
        return 480 > window.innerHeight ? window.innerHeight : 480
    }

    return (
        <div className="d-flex flex-column align-content-center py-5">
            <div className="background-banner d-flex d-row align-items-top justify-content-center">
                <img src={titleImg} alt="title" onClick={() => { navigation("../") }} />
            </div>

            <div className="d-flex align-items-top justify-content-center">
                <MovingDot />
                <div className='speech-balloon py-2 d-flex align-items-baseline mt-4' >
                    <div className="p-2 bg-white" style={{ borderRadius: 8, fontSize: '0.8rem' }}>
                        저희의 예식장<br />
                        위치입니다.
                    </div>
                </div>
            </div>
            <div className="d-flex d-row align-items-top justify-content-center pt-3 ">
                <div className="m-2 pt-2 px-2 bg-white" style={{ borderRadius: 8 }}>
                    <h4>오시는 길</h4>
                </div>
            </div>
            <div className="d-flex align-content-center justify-content-center">
                <div id='myMap' style={{ width: maxWidth(), height: maxHeight() }}></div>
            </div>
            <Row className="d-flex flex-column align-content-center mt-3 mx-0">
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
        </div>
    );
}

export default HallMap;