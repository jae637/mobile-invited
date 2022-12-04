import React from 'react'

import FirebaseApi from '../../api/FirebaseApi';
import { Carousel } from 'react-bootstrap'

import titleImg from 'asset/images/00title.png';
import MovingDot from './Main/MovingDot';

import { useNavigate } from 'react-router-dom';

function WeddingCards() {
    const [cardItem, setCardItem] = React.useState([]);

    const navigation = useNavigate()

    function maxWidth() {
        return 520 > window.innerWidth ? window.innerWidth - 80 : 480
    }

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
                <div className="mb-2 py-3 bg-white text-center" style={{ borderRadius: 8, maxWidth: maxWidth(), width: "100%" }}>
                    저희 두 사람이 만나<br></br>
                    사랑으로 하나의 가정을<br></br>
                    이루게 되었습니다.<br></br>
                    <br></br>
                    바쁘신 가운데 두 사람의<br></br>
                    앞날을 축복해 주시면<br></br>
                    감사하겠습니다.
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