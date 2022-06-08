import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router/router"
import Navbar from '../src/components/navbar.vue'
import Footer from '../src/components/footer.vue'
import AddToCartButton from '../src/components/AddToCartButton.vue'
import './index.css'

createApp(App)
    .use(router)
    .component("Navbar", Navbar)
    .component("Footer", Footer)
    .component("AddToCartButton", AddToCartButton)
    .mount("#app");
