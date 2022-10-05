import React from "react";

import Firebase from 'api/FirebaseApi';
import GuestBookDetailList from "./InfoComment/GuestBookList";

function InfoComment() {
    const [allGuestBooks, setAllGuestBooks] = React.useState([])

    React.useEffect(() => {
        console.log("몇번 호출되는지")
        Firebase.getGuestBook().then(datas => {
            console.log(datas)
            setAllGuestBooks(datas)
        })
    }, [])

    return (
        <div>
            <GuestBookDetailList list={allGuestBooks} />
        </div>
    );
}

export default InfoComment;