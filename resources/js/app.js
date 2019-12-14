

require('./bootstrap');

window.Vue = require('vue');



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

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:'history',
})


const app = new Vue({
    el: '#app',
    router
});
