import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js';
import {getAuth,setPersistence,browserLocalPersistence,onAuthStateChanged,signInWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js';
import {getFirestore,collection,doc,setDoc,getDocs,deleteDoc,serverTimestamp,query,where,orderBy,limit} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';
import {getMessaging,isSupported,getToken,onMessage} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging.js';
const firebaseConfig={apiKey:'AIzaSyDNvckr8JVpkV1HDB9-H7lNjFw_Pihoq6o',authDomain:'hydroponic-control-d996e.firebaseapp.com',projectId:'hydroponic-control-d996e',storageBucket:'hydroponic-control-d996e.firebasestorage.app',messagingSenderId:'294452457565',appId:'1:294452457565:web:bbe514cfad5942a22e5db4'};
const app=initializeApp(firebaseConfig);const auth=getAuth(app);const db=getFirestore(app);await setPersistence(auth,browserLocalPersistence);
let messaging=null;
try{if(await isSupported()) messaging=getMessaging(app)}catch(e){console.warn('FCM unsupported',e)}
export {app,auth,db,messaging,onAuthStateChanged,signInWithEmailAndPassword,signOut,collection,doc,setDoc,getDocs,deleteDoc,serverTimestamp,query,where,orderBy,limit,getToken,onMessage};
