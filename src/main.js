import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowLeft,faBars,faArrowRight,faHome,faCaretDown,faSearch,faCompass,faFileText,faUser,faFilter,faStar,faMinusCircle,faPlusCircle,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faArrowLeft,faArrowRight,faBars,faHome,faCaretDown,faSearch,faCompass,faFileText,faUser,faFilter,faStar,faMinusCircle,faPlusCircle,faShoppingCart)


import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import "@/assets/css/reset.css"

let app = createApp(App);
//注册全局组件
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(router).mount('#app')

