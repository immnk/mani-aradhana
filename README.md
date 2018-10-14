# Aradhana
A mobile app made for my communication with my girlfriend

# Build Instructions
Aaru@123

ionic cordova build android --release

keytool -genkey -v -keystore aaru.keystore -alias aaru -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore aaru.keystore

./platforms/android/build/outputs/apk/android-release-unsigned.apk aaru /Users/manikantat/Library/Android/sdk/build-tools/25.0.2/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk aaru.apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore aaru.keystore D:\MyProjects\ionic\aradhana\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk hvhc

C:\Softwares\Android\build-tools\28.0.3\zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk aaru.apk
​
