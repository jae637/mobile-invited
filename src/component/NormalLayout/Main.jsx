import React from 'react';
import { useParams } from 'react-router-dom';
import titleImg from 'asset/images/00title.png';

import MainMenu from './Main/MainMenu';
import MovingDot from './Main/MovingDot';

function Main() {
    const navigate = useParams();
    const personalName = navigate.name

    return (
        <div className="d-flex flex-column align-content-center py-5">
            <div className="background-banner d-flex d-row align-items-top justify-content-center">
                <img src={titleImg} alt="title" />
            </div>
            <div className="d-flex d-row align-items-top justify-content-center">
                <div className='speech-balloon py-2 d-flex align-items-baseline mt-4' >
                    <div className="p-2 bg-white" style={{ borderRadius: 8, fontSize: '0.8rem' }}>
                        '{personalName}' 님을 <br />
                        초대합니다.
                    </div>
                </div>
                <MovingDot />
            </div>
            <div className="background-banner d-flex align-items-center flex-column">
                <MainMenu />
            </div>
        </div>
    );
}

export default Main;