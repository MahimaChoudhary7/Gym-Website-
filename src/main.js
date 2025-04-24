import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue'
import App from './App.vue'

library.add(faBars, faXmark);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
