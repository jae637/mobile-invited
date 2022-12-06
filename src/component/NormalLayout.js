import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import FirebaseApi from 'api/FirebaseApi'


function NormalLayout(props) {
    const [images, setImages] = useState([])
    React.useEffect(() => {
        async function dataPush() {
            let data = []
            for (let i = 1; i < 4; i++) {
                let tmp = await FirebaseApi.getImageURL(`p${i}.png`);
                data.push(tmp)
            }
            return data;
        }
        dataPush().then(d => {
            console.log("NormalLayout")
            setImages(d);
        });
    }, [])

    // const navigate = useParams();
    // const personalName = navigate.name
    return (
        <div>
            {/* {personalName + "님 반갑습니다."}
            <Link to={"home"}>여기</Link> */}
            <Outlet context={{ images }} />

        </div>
    );
}

export default NormalLayout;