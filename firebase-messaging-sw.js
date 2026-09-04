importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'AIzaSyDNvck8rJVpkV1HDB9-H7lNjFw_Pihoq6o',authDomain:'hydroponic-control-d996e4.firebaseapp.com',projectId:'hydroponic-control-d996e4',storageBucket:'hydroponic-control-d996e4.firebasestorage.app',messagingSenderId:'294452457565',appId:'1:294452457565:web:bbe514cfad5942a22e5db4'});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{if(payload.notification)return;const d=payload.data||{};self.registration.showNotification(d.title||'Hydroponic Control',{body:d.body||'New notification',icon:'./icons/icon-192.png',badge:'./icons/icon-192.png',tag:d.type||'hydroponic',data:{url:d.url||'./'}});});
self.addEventListener('notificationclick',e=>{e.notification.close();const url=e.notification.data?.url||'./';e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus'in c)return c.focus()}return clients.openWindow(url)}));});
