import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuelidate from 'vuelidate'
const app = createApp(App)

app.use(router, vuelidate)

app.mount('#app')
