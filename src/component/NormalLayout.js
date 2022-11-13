import React from 'react';
import { Outlet } from 'react-router-dom';


function NormalLayout(props) {

    // const navigate = useParams();
    // const personalName = navigate.name
    return (
        <div>
            {/* {personalName + "님 반갑습니다."}
            <Link to={"home"}>여기</Link> */}
            <Outlet />

        </div>
    );
}

export default NormalLayout;