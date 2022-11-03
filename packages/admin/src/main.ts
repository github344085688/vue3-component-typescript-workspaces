import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@project/share/assets/css/unis.css';
import {loding,butloding} from '@project/share/directives/loding';
import plugins from '@project/share/plugins';
import components from './components';
const app = createApp(App);
app.use(router);
app.use(store);
app.use(plugins);
app.use(components);
app.directive('loding', loding);
app.directive('butloding', butloding);
app.mount("#app");

