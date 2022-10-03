import React from 'react';
import KakaoMapScript from "./HallMap/KakaoMapScript";

function HallMap(props) {
    React.useEffect(() => {
        KakaoMapScript();
    }, []);

    function maxHeight() {
        return window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight - 80
    }

    return (
        <>
            <div id='myMap' style={{ height: maxHeight() }}></div>
        </>
    );
}

export default HallMap;