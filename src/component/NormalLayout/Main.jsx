import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import titleImg from 'asset/images/00title.png';

import Banner1 from 'asset/moving-dot/001.png';
import Banner2 from 'asset/moving-dot/002.png';
import Banner3 from 'asset/moving-dot/003.png';
import Banner4 from 'asset/moving-dot/004.png';
import Banner5 from 'asset/moving-dot/005.png';
import Banner6 from 'asset/moving-dot/006.png';
import MainMenu from './Main/MainMenu';

function Main() {
    const navigate = useParams();
    const personalName = navigate.name
    const [bannerIndex, setBannerIndex] = useState(0)

    useEffect(() => {
        const customInterval = setInterval(() => {
            setBannerIndex(bannerIndex + 1);
        }, 100);
        return () => clearInterval(customInterval);
    }, [bannerIndex])

    function MovingDot() {
        let imgArr = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6]
        return <div className="background-banner">
            <img src={imgArr[bannerIndex % imgArr.length]} alt="banner" />
        </div>
    }

    return (
        <div className="d-flex flex-column align-content-center justify-content-center"
            style={{ textAlign: 'center', width: window.innerWidth, height: window.innerHeight, backgroundColor: '#e3b2ad' }}>
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