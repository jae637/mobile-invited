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
            setGuestBooks(datas.filter((value, index) => index < 10));
        })
    }, [])

    return (
        <div>
            <GuestBookList list={guestBooks} />
            <span style={{ display: "flex", justifyContent: "space-between" }}>
                <GuestBook />
                <GuestBookDetailList list={allGuestBooks} />
            </span>
        </div>
    );
}

export default InfoComment;