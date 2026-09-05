# Hydroponic Control — Final v21

This package is based on the latest v20 dashboard build and keeps Home, Data, Control, Alerts, Settings, Growth, Firebase Auth/Firestore, sensor history, PDF export/share, and FCM background support.

## Control protocol
The web app uses these MQTT topics:
- hydroponic/GH001/sensors
- hydroponic/GH001/state
- hydroponic/GH001/config
- hydroponic/GH001/config/state
- hydroponic/GH001/command
- hydroponic/GH001/ack
- hydroponic/GH001/availability

Control commands are explicit ON/OFF, not only TOGGLE. The UI waits for ACK/STATE confirmation before treating a device command or mode change as confirmed.

## HiveMQ
Web app: secure WebSocket WSS port 8884. ESP32 firmware: native MQTT over TLS port 8883.
Host: 99580666d99a4632b4a1d5087e22d494.s1.eu.hivemq.cloud
Username: hydro_app

## ESP32 pins
GPIO13 UP; GPIO14 DOWN; GPIO26 OK; GPIO27 BACK; GPIO16 RX2 from Nano D3 TX through a 5V→3.3V divider; GPIO17 TX2 to Nano D2 RX; common GND for buttons.

## Nano pins
A0 Water Level; D4 DS18B20; D5 Fan1; D6 Fan2; D7 Pump1 NFT; D8 Pump2 Venturi; D9 Pump3 Tank Fill; D10 Pump4 Pad; D11 buzzer; D2 RX from ESP32; D3 TX to ESP32 through divider; A4/A5 I2C SHT40 + LCD 16x2 at 0x27.

## Firebase
Project: hydroponic-control-d996e. Firestore data is scoped to users/{uid}. FCM requires HTTPS and a service worker. Firebase currently recommends the newer Installation ID registration APIs; this package retains getToken for compatibility with the existing app.

## Important
Do not put the HiveMQ password in GitHub. Enter it in Settings. For production ESP32 TLS, replace setInsecure() with CA certificate verification.
