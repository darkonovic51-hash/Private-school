/* =========================================================================
   ELITE ACADEMY MANAGEMENT SYSTEM — CORE SHARED MODULE (shared.js)
   -------------------------------------------------------------------------
   PROTOTYPE NOTICE:
   This module currently persists data in the browser's localStorage and
   optionally mirrors it to Firebase Realtime Database for cross-device
   sync during the prototype phase. THIS IS NOT A SECURE PRODUCTION
   ARCHITECTURE. localStorage is publicly readable/writable by anyone with
   access to the browser, and the Firebase config below is a CLIENT KEY,
   not a secret — real security must come from Firebase Realtime Database
   Rules (or a proper backend) before this system goes live with real
   student data. The production version MUST use:
     - A secure backend API
     - Real authentication (not a hardcoded demo password)
     - Server-side authorization / role checks
     - A production-grade database with proper access rules
   ========================================================================= */

/* ============================================================
   0. FIREBASE (OPTIONAL SYNC LAYER)
   ============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCljtKMldmy8V2IIEKwnYvVjFcKp2fC33g",
  authDomain: "academy-school-16d1b.firebaseapp.com",
  databaseURL: "https://academy-school-16d1b-default-rtdb.firebaseio.com",
  projectId: "academy-school-16d1b",
  storageBucket: "academy-school-16d1b.firebasestorage.app",
  messagingSenderId: "284992101039",
  appId: "1:284992101039:web:f6a3b834a58db6a037125a"
};

let firebaseDbRef = null;

function initFirebase(){
  // Requires firebase-app-compat.js + firebase-database-compat.js loaded via
  // <script> tags BEFORE shared.js in the HTML file. If not present, the
