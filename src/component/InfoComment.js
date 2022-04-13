import GuestBook from "./InfoComment/GuestBook";
import GuestBookList from "./InfoComment/GuestBookList";
import React from "react";

import Firebase from 'api/FirebaseApi';

function InfoComment() {
    const [guestBooks, setGuestBooks] = React.useState([])
    React.useEffect(() => {
        Firebase.getGuestBook(5).then(datas => {
            setGuestBooks(datas);
        })
    }, [guestBooks])
    return (
        <div>
            길고 긴 시간 끝에 두 사람이 만나 하나가 되는 날입니다.
            행복한 나날들이 있도록 오셔서 축복해 주시고 지켜봐 주십시오.
            <GuestBookList list={guestBooks} setList={setGuestBooks} />
            <GuestBook />
        </div>
    );
}

export default InfoComment;