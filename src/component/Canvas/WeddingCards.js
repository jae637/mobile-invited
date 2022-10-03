import React from 'react'

import FirebaseApi from '../../api/FirebaseApi';
import { Carousel } from 'react-bootstrap'

function WeddingCards() {
    const [cardItem, setCardItem] = React.useState([]);

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
        <>
            <div className="mb-3">
                길고 긴 시간 끝에 두 사람이 만나 하나가 되는 날입니다.<br />
                행복한 나날들이 있도록 오셔서 축복해 주시고 지켜봐 주십시오.
            </div>
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
        </>
    );
}

export default WeddingCards;