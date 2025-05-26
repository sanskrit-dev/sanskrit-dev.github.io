import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import App from './App.vue';
import Home from './views/Home.vue';
import Explore from './views/Explore.vue';
import Pricing from './views/Pricing.vue';
import Contact from './views/Contact.vue';
// import Register from './views/Register.vue';
import Login from './views/Login.vue';
import NotFound from './views/NotFound.vue';
import Payment from './views/Payment.vue';

// Router Configuration
const routes = [
  { path: '/', component: Home },
  { path: '/explore', component: Explore },
  { path: '/pricing', component: Pricing },
  { path: '/payment', component: Payment },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  // { path: '/register', component: Register },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  }
});

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0tsHYFB0-mXH4h1AeaWDnJa4lLwf5NDw",
  authDomain: "login.sanskrit.dev",
  projectId: "sanskrit-dev-3e22f",
  storageBucket: "sanskrit-dev-3e22f.firebasestorage.app",
  messagingSenderId: "1060293128191",
  appId: "1:1060293128191:web:565c8806fddaa29a42c1ca",
  measurementId: "G-VKQER865MQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Create Vue App
const app = createApp(App);
app.use(router);
app.mount('#app');
