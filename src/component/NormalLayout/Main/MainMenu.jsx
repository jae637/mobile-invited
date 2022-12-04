import React from 'react';

import weddingCardImg from 'asset/images/01인사말.png';
import weddingCardImgActive from 'asset/images/01인사말_select.png';
import hallMapImg from 'asset/images/02오시는길.png';
import hallMapImgActive from 'asset/images/02오시는길_select.png';
import infoImg from 'asset/images/03방명록.png';
import infoImgActive from 'asset/images/03방명록_select.png';
import deliverHeartImg from 'asset/images/04마음전하시는곳.png';
import deliverHeartImgActive from 'asset/images/04마음전하시는곳_select.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainMenu(props) {
    const [select, setSelect] = useState('None')
    const navigate = useNavigate()

    return (
        <>
            {select !== 'wedding' ?
                <img src={weddingCardImg} alt="weddingCardImg" onClick={(e) => setSelect("wedding")} /> :
                <img src={weddingCardImgActive} alt="weddingCardImgActive"></img>
            }
            {select !== 'hall' ?
                <img src={hallMapImg} alt="hallMapImg" onClick={(e) => { setSelect("hall") }}></img> :
                <img src={hallMapImgActive} alt="hallMapImgActive" onClick={() => navigate("map")} ></img>
            }
            {select !== 'info' ?
                <img src={infoImg} alt="infoImg" onClick={(e) => { setSelect("info") }}></img> :
                <img src={infoImgActive} alt="infoImgActive"></img>
            }
            {select !== 'deliver' ?
                <img src={deliverHeartImg} alt="deliverHeartImg" onClick={(e) => { setSelect("deliver") }}></img> :
                <img src={deliverHeartImgActive} alt="deliverHeartImgActive" onClick={() => navigate("deliver-heart")}></img>
            }
        </>
    );
}

export default MainMenu;