// Import necessary functions from the Firebase SDK
import { initializeApp } from 'firebase/app'; // Import initializeApp to initialize Firebase
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Import getAuth and GoogleAuthProvider for authentication

// Firebase configuration object containing API keys and identifiers
const firebaseConfig = {
    apiKey: "AIzaSyDq-ZwKtnS9NODalDcq-1SFDl13ySopeC0",
    authDomain: "tic-toc-toe-7c569.firebaseapp.com",
    projectId: "tic-toc-toe-7c569",
    storageBucket: "tic-toc-toe-7c569.appspot.com",
    messagingSenderId: "257626800006",
    appId: "1:257626800006:web:68193aecef6ce53656b607"
};

// Initialize Firebase app with the configuration
const app = initializeApp(firebaseConfig);
// Get the authentication instance from the initialized app
const auth = getAuth(app);
// Create a new instance of the GoogleAuthProvider
const provider = new GoogleAuthProvider();

// Export the auth and provider instances for use in other parts of the application
export { auth, provider };
