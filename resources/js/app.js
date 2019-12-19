

require('./bootstrap');

window.Vue = require('vue');


import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)

import VueRouter from 'vue-router'

Vue.use(VueRouter)
import {routes} from './routes';



Vue.component('example-component', require('./components/ExampleComponent.vue').default);
/*Vue.component('example-component', require('./components/ExampleComponent.vue'));*/
Vue.component('admin-home', require('./components/admin/AdminMaster.vue').default);

// V-form
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;


/*sweet alert*/
import swal from 'sweetalert2'
window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:'history',
})


const app = new Vue({
    el: '#app',
    router,
    store,
});
