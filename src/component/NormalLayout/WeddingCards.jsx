import React from 'react'

import FirebaseApi from '../../api/FirebaseApi';
import { Carousel } from 'react-bootstrap'

import { useOutletContext } from 'react-router-dom';

// import MovingDot from './Main/MovingDot';

function WeddingCards() {
    const { images } = useOutletContext();
    const [cardItem, setCardItem] = React.useState(images || []);

    React.useEffect(() => {
        async function dataPush() {
            let data = []
            for (let i = 1; i < 4; i++) {
                let tmp = await FirebaseApi.getImageURL(`p${i}.png`);
                data.push(tmp)
            }
            return data;
        }
        if (cardItem.length === 0)
            dataPush().then(d => {
                setCardItem(d);
            });
    }, [])

    return (
        <div className="d-flex flex-column align-content-center">
            <div className="d-flex align-items-top justify-content-center ">
                <div style={{ width: 480 }}>
                    {
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
                    }
                </div>
            </div>
            <div className="d-flex flex-column align-items-top justify-content-center my-3 text-center">
                <h3>《 인사말 》</h3>
                <br></br>
                저희 두 사람이 만나<br></br>
                    사랑으로 하나의 가정을<br></br>
                    이루게 되었습니다.<br></br>
                <br></br>
                    바쁘신 가운데 두 사람의<br></br>
                    앞날을 축복해 주시면<br></br>
                    감사하겠습니다.
            </div>
            {/* <div className="d-flex align-items-top justify-content-center my-3">
                <MovingDot />
            </div> */}

        </div>
    );
}

export default WeddingCards;