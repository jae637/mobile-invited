import React from "react";

import Firebase from 'api/FirebaseApi';
import GuestBook from "./InfoComment/GuestBook";
import GuestBookList from "./InfoComment/GuestBookList";
import GuestBookDetailList from "./InfoComment/GuestBookDetailList";

function InfoComment() {
    const [allGuestBooks, setAllGuestBooks] = React.useState([])
    const [guestBooks, setGuestBooks] = React.useState([])
    React.useEffect(() => {
        console.log("몇번 호출되는지")
        Firebase.getGuestBook().then(datas => {
            console.log(datas)
            setAllGuestBooks(datas)
            setGuestBooks(datas.filter((value, index) => index < 5));
        })
    }, [])
    return (
        <div>
            길고 긴 시간 끝에 두 사람이 만나 하나가 되는 날입니다.
            행복한 나날들이 있도록 오셔서 축복해 주시고 지켜봐 주십시오.
            <GuestBookList list={guestBooks} />
            <span style={{ display: "flex", justifyContent: "space-between" }}>
                <GuestBook />
                <GuestBookDetailList list={allGuestBooks} />
            </span>
        </div>
    );
}

export default InfoComment;