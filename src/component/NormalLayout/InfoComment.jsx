import React from "react";

import Firebase from 'api/FirebaseApi';
import GuestBookDetailList from "./InfoComment/GuestBookList";
import { useNavigate, useParams } from 'react-router-dom';
import titleImg from 'asset/images/00title.png';
import MovingDot from './Main/MovingDot';


function InfoComment() {
    const navigation = useNavigate()
    const navigate = useParams();
    const personalName = navigate.name

    const [allGuestBooks, setAllGuestBooks] = React.useState([])

    React.useEffect(() => {
        console.log("몇번 호출되는지")
        Firebase.getGuestBook().then(datas => {
            console.log(datas)
            setAllGuestBooks(datas)
        })
    }, [])

    return (
        <div className="d-flex flex-column align-content-center py-5">
            <div className="background-banner d-flex d-row align-items-top justify-content-center">
                <img src={titleImg} alt="title" onClick={() => { navigation("../") }} />
            </div>

            <div className="d-flex align-items-top justify-content-center">
                <div className='speech-balloon py-2 d-flex align-items-baseline mt-4' >
                    <div className="p-2 bg-white" style={{ borderRadius: 8, fontSize: '0.8rem' }}>
                        '{personalName}' 님<br />
                        반갑습니다!<br />
                        방명록을<br />
                        남겨주세요.
                    </div>
                </div>
                <MovingDot />
            </div>
            <div className="d-flex align-items-top justify-content-center pt-3 ">
                <div className="m-2 pt-2 px-2 bg-white" style={{ borderRadius: 8 }}>
                    <h4>방명록</h4>
                </div>
            </div>
            <div className="d-flex flex-column d-row align-items-center justify-content-center pt-3 ">
                <GuestBookDetailList list={allGuestBooks} />
            </div>
        </div>
    );
}

export default InfoComment;