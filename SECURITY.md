# API and Firebase Security Checklist

This app uses Firebase from a client application, so Firebase config values in environment files are not secrets.
Real protection must be done with Firebase security controls.

## 1) Deploy Firestore rules from this repo

1. Install Firebase CLI if needed:
   npm install -g firebase-tools
2. Login:
   firebase login
3. Select project:
   firebase use diabeteas-app
4. Deploy rules and indexes:
   firebase deploy --only firestore:rules,firestore:indexes

## 2) Important behavior change after deploying rules

The rules in firestore.rules allow public create for recipes without authentication.
Users can submit recipes, but update/delete is blocked for everyone.
Only the recipes collection is writable, and payload shape is validated.

## 3) Lock down the Firebase API key

In Google Cloud Console for this project:
1. Go to APIs and Services -> Credentials.
2. Open the browser key used by the app.
3. Restrict application usage to your allowed web origins.
4. Restrict API usage to only Firebase APIs your app needs.

## 4) Enable Firebase App Check

In Firebase Console:
1. Open Build -> App Check.
2. Register your web app with reCAPTCHA v3 or Enterprise.
3. Enable enforcement for Firestore once verified.
4. This is the main abuse control when you do not require login.

## 5) Protect non-Firebase third-party APIs

Never call secret APIs directly from Ionic/Angular client code.
Use a backend endpoint or Cloud Functions to store secrets and proxy requests.

## 6) Reality check about Firebase keys

You cannot hide Firebase web config keys in a browser/mobile app build.
These values are public by design.
Security comes from Firestore rules, App Check, and API key restrictions.
