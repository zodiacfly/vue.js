import VueRouter from 'vue-router'
import home from './components/home.vue'
import member from './components/member.vue'
import cart from './components/cart.vue'
import search from './components/search.vue'


var router = new VueRouter({
  routes: [
  	{path : '/', redirect : '/home'},
  	{path : '/home', component : home},
  	{path : '/member', component : member},
  	{path : '/cart', component : cart},
  	{path : '/search', component : search}
  ],
  linkActiveClass : 'mui-active'
})


export default router