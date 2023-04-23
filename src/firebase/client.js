import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.CVF2023_Firebase_APIKey,
    authDomain: "creating-videos-festival.firebaseapp.com",
    projectId: "creating-videos-festival",
    storageBucket: "creating-videos-festival.appspot.com",
    messagingSenderId: "346331428173",
    appId: "1:346331428173:web:b17b280e9dd1eccd8c3304"
};


const app = getApps()?.length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);