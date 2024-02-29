import './index.css' 
import { createApp } from 'vue'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'; 
import i18n from './lang'
import App from './pages/App.vue'

library.add(fas, far, fab) 
dom.watch();

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(i18n)
app.mount('#app')
