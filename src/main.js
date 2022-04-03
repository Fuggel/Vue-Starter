import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './sass/app.scss'


const app = createApp(App);

app.mount('#app')
app.use(router)
app.use(store)

