import React from 'react'

import FirebaseApi from '../api/FirebaseApi';
import { Carousel } from 'react-bootstrap'

function WeddingCards() {
    const [date, setDate] = React.useState([]);

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
            setDate(d);
        });
    }, [])

    return (
        <Carousel variant="dark">
            {date.map(d =>
                <Carousel.Item key={d}>
                    <img
                        className="d-block w-100"
                        src={d}
                        alt="First slide"
                    />
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default WeddingCards;