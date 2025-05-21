import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Explore from './views/Explore.vue';
import Pricing from './views/Pricing.vue';
import Contact from './views/Contact.vue';
// import NotFound from './views/NotFound.vue';

// Router Configuration
const routes = [
  { path: '/', component: Home },
  { path: '/explore', component: Explore },
  { path: '/pricing', component: Pricing },
  { path: '/contact', component: Contact },
  // { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  }
});

// Create Vue App
const app = createApp(App);
app.use(router);
app.mount('#app');
