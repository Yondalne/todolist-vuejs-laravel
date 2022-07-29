import './bootstrap.js';

import { createApp } from "vue"
import App from "./vue/app.vue"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusCircle, faTrash)


// const app = new Vue ({
//     el: "#app",
//     components: { App }
// })

// For vue 3
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app")

