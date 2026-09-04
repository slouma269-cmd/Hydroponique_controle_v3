# Hydroponic Control v3

Arabic is the default language and the complete UI is translated to Arabic/English/French.

## Firebase
Replace Firestore Rules with `firestore.rules`. The rules restrict each signed-in user to their own `/users/{uid}` tree.

## MQTT
Host: `99580666d99a4632b4a1d5087e22d494.s1.eu.hivemq.cloud`
WebSocket: `8884`
Username: `hydro_app`
Password is never included in the repository. The user enters it once in Settings. It is stored in localStorage only when “remember” is enabled; otherwise sessionStorage is used.

Topics:
- hydroponic/GH001/sensors
- hydroponic/GH001/state
- hydroponic/GH001/config
- hydroponic/GH001/config/state
- hydroponic/GH001/command
- hydroponic/GH001/ack
- hydroponic/GH001/availability

## Growth
Growth is independent of ESP32/Nano. Groups and manual pH/EC records are stored in Firestore under the authenticated user's UID.


V19: Firebase Cloud Messaging Web Push background support using the provided VAPID public key. Registers firebase-messaging-sw.js and stores the current FCM token under users/{uid}/pushTokens/{deviceId}.
