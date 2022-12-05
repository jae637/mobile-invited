import React from 'react';

import weddingCardImg from 'asset/images/01인사말.png';
import weddingCardImgActive from 'asset/images/01인사말_select.png';
import hallMapImg from 'asset/images/02오시는길.png';
import hallMapImgActive from 'asset/images/02오시는길_select.png';
import infoImg from 'asset/images/03방명록.png';
import infoImgActive from 'asset/images/03방명록_select.png';
import deliverHeartImg from 'asset/images/04마음전하시는곳.png';
import deliverHeartImgActive from 'asset/images/04마음전하시는곳_select.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainMenu(props) {
    const [select, setSelect] = useState('None')
    const navigate = useNavigate()

    useEffect(() => {
        let timeout = setTimeout(() => {
            if (select !== 'None') {
                const mapping = {
                    "wedding": "wedding-cards",
                    "hall": "map",
                    "info": "info",
                    "deliver": "deliver-heart"
                }
                navigate(mapping[select])
            }
        }, 200)
        return () => { clearTimeout(timeout) }
    }, [select])

    return (
        <>
            {select !== 'wedding' ?
                <img style={{ maxWidth: '62%' }} src={weddingCardImg} alt="weddingCardImg" onClick={(e) => setSelect("wedding")} /> :
                <img style={{ maxWidth: '62%' }} src={weddingCardImgActive} alt="weddingCardImgActive" onClick={() => navigate("wedding-cards")}></img>
            }
            {select !== 'hall' ?
                <img style={{ maxWidth: '62%' }} src={hallMapImg} alt="hallMapImg" onClick={(e) => { setSelect("hall") }}></img> :
                <img style={{ maxWidth: '62%' }} src={hallMapImgActive} alt="hallMapImgActive" onClick={() => navigate("map")} ></img>
            }
            {select !== 'info' ?
                <img style={{ maxWidth: '62%' }} src={infoImg} alt="infoImg" onClick={(e) => { setSelect("info") }}></img> :
                <img style={{ maxWidth: '62%' }} src={infoImgActive} alt="infoImgActive" onClick={() => navigate("info")}></img>
            }
            {select !== 'deliver' ?
                <img style={{ maxWidth: '62%' }} src={deliverHeartImg} alt="deliverHeartImg" onClick={(e) => { setSelect("deliver") }}></img> :
                <img style={{ maxWidth: '62%' }} src={deliverHeartImgActive} alt="deliverHeartImgActive" onClick={() => navigate("deliver-heart")}></img>
            }
        </>
    );
}

export default MainMenu;