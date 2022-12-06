import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByQX73rsPzZbHle8X1fxcC9DKCklmsQdY",
    authDomain: "mobile-invited.firebaseapp.com",
    projectId: "mobile-invited",
    storageBucket: "mobile-invited.appspot.com",
    messagingSenderId: "586130120798",
    appId: "1:586130120798:web:df497ff0954371aee154cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

const functions = {
    async getImageURL(name) {
        let pictureUrl = ref(storage, `picture/${name}`);
        let url = await getDownloadURL(pictureUrl)
        return url;
    },
    async getGuestBook() {
        let querySnapshot = await getDocs(collection(db, "guestbook"));
        let returnData = []
        querySnapshot.forEach((item) => {
            if (item.data().visiable !== false) {
                let obj = {}
                obj[item.id] = item.data()
                returnData.push(obj)
            }
        })
        returnData.sort((a, b) => {
            return Object.values(b)[0]['date'] - Object.values(a)[0]['date']
        })
        return returnData;
    },
    async addGuestBook(contents) {
        try {
            const docRef = await addDoc(collection(db, "guestbook"), contents);
            return docRef.id
        } catch (e) {
            throw e
        }
    },
    async deleteGuestBoock(hash) {
        try {
            const docRef = doc(db, "guestbook", hash);
            await updateDoc(docRef, { visiable: false })
            return true
        } catch (e) {
            throw e
        }
    }
}

export default functions