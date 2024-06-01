import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA736xAgiNc4V1iYdvxOC8OyaYfCy0kuOI",
    authDomain: "mgsurvey-a06ea.firebaseapp.com",
    projectId: "mgsurvey-a06ea",
    storageBucket: "mgsurvey-a06ea.appspot.com",
    messagingSenderId: "783821287261",
    appId: "1:783821287261:web:d248ef3c9d7f4507f882b4",
    measurementId: "G-L55G7JJZJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, analytics };