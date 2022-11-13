import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FirebaseApi from 'api/FirebaseApi'

function Main(props) {
    const [bg, setBg] = useState('')

    const navigate = useParams();
    const personalName = navigate.name

    useEffect(() => {
        console.log(bg)
        FirebaseApi.getImageURL("background.png").then(imgData => {
            console.log(imgData)
            setBg(imgData);
        })
    }, [])

    return (
        <div style={{ textAlign: 'center', width: window.innerWidth, height: window.innerHeight, backgroundImage: `url(${bg})`, backgroundSize: '100% 100%' }}>
            <div className="pt-5">
                '{personalName}' 님을 초대합니다.
            </div>
        </div>
    );
}

export default Main;