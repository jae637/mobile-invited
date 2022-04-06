import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByQX73rsPzZbHle8X1fxcC9DKCklmsQdY",
    authDomain: "mobile-invited.firebaseapp.com",
    projectId: "mobile-invited",
    storageBucket: "mobile-invited.appspot.com",
    messagingSenderId: "586130120798",
    appId: "1:586130120798:web:df497ff0954371aee154cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const db = getFirestore(app);

const functions = {
    async getImageURL(name) {
        let pictureUrl = ref(storage, `picture/${name}`);
        let url = await getDownloadURL(pictureUrl)
        return url;
    }
}

export default functions