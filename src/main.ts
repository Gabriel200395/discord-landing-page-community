import { createApp } from 'vue'
import App from './pages/App.vue'
import './index.css' 

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'; 

library.add(fas, far, fab) 
dom.watch();




const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
