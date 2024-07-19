import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDq-ZwKtnS9NODalDcq-1SFDl13ySopeC0",
    authDomain: "tic-toc-toe-7c569.firebaseapp.com",
    projectId: "tic-toc-toe-7c569",
    storageBucket: "tic-toc-toe-7c569.appspot.com",
    messagingSenderId: "257626800006",
    appId: "1:257626800006:web:68193aecef6ce53656b607"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
