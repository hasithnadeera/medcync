// app/firebase/firebaseConfig.js
'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCj1fnWlxhnRJhm5WwWEg1hwyrqmenbGFE",
  authDomain: "medsyncbysyntaxia.firebaseapp.com",
  projectId: "medsyncbysyntaxia",
  storageBucket: "medsyncbysyntaxia.firebasestorage.app",
  messagingSenderId: "246300877446",
  appId: "1:246300877446:web:28e79bec630f7569136707",
  measurementId: "G-R55FKF6QQW"
};

// Ensure it only initializes once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Analytics (browser only)
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
