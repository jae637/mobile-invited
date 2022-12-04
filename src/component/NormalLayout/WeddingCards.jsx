import React from 'react'

import FirebaseApi from '../../api/FirebaseApi';
import { Carousel } from 'react-bootstrap'

import titleImg from 'asset/images/00title.png';
import MovingDot from './Main/MovingDot';

import { useNavigate } from 'react-router-dom';

function WeddingCards() {
    const [cardItem, setCardItem] = React.useState([]);

    const navigation = useNavigate()

    React.useEffect(() => {
        async function dataPush() {
            let data = []
            for (let i = 1; i < 3; i++) {
                let tmp = await FirebaseApi.getImageURL(`test${i}.jpg`);
                data.push(tmp)
            }
            return data;
        }
        dataPush().then(d => {
            setCardItem(d);
        });
    }, [])

    return (
        <div className="d-flex flex-column align-content-center py-5">
            <div className="background-banner d-flex d-row align-items-top justify-content-center">
                <img src={titleImg} alt="title" onClick={() => { navigation("../") }} />
            </div>

            <div className="d-flex align-items-top justify-content-center">
                <MovingDot />
            </div>
            <div className="d-flex align-items-top justify-content-center my-3">
                <div className="m-2 py-1 px-2 bg-white" style={{ borderRadius: 8 }}>
                    길고 긴 시간 끝에 두 사람이 만나 하나가 되는 날입니다.<br />
                    행복한 나날들이 있도록 오셔서 축복해 주시고 지켜봐 주십시오.
                </div>
            </div>
            <div className="d-flex align-items-top justify-content-center">
                <div style={{ width: 480 }}>
                    {
                        cardItem.length > 0 ?
                            <Carousel variant="dark">
                                {cardItem.map(d =>
                                    <Carousel.Item key={d}>
                                        <img
                                            className="d-block w-100"
                                            src={d}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>)}
                            </Carousel>
                            : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default WeddingCards;