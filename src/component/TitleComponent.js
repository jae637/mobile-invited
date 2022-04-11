import React from 'react'

import titleImage from '../res/title.jpg';

function TitleComponent() {
    return (
        <>
            <img
                className="d-block w-100 p-3"
                src={titleImage}
                alt="First slide"
            />
        </>
    );
}

export default TitleComponent;