import React from 'react'

import FirebaseApi from '../api/FirebaseApi';
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