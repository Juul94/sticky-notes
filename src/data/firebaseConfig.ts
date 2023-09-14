import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBxYM2PbXUI4_GAQco5ud8Nn6siarT_my4',
    authDomain: 'react-sticky-notes-8af98.firebaseapp.com',
    projectId: 'react-sticky-notes-8af98',
    storageBucket: 'react-sticky-notes-8af98.appspot.com',
    messagingSenderId: '726560019151',
    appId: '1:726560019151:web:3de51600deec32eecc5dba',
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };
