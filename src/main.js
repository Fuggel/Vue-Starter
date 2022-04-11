import { createApp } from 'vue'
import App from './App.vue'
import './sass/app.scss'
import router from './router'
import store from './store'

const app = createApp(App);
app.mount('#app')
app.use(router)
app.use(store)

