import VueRouter from 'vue-router'
import home from './components/home.vue'
import member from './components/member.vue'
import cart from './components/cart.vue'
import search from './components/search.vue'
import images from './components/images/images.vue'
import imagesView from './components/images/images-view.vue'


var router = new VueRouter({
  routes: [
  	{path : '/', redirect : '/home'},
  	{path : '/home', component : home},
  	{path : '/member', component : member},
  	{path : '/cart', component : cart},
  	{path : '/search', component : search},
  	{path : '/home/images', component : images},
  	{path : '/home/images/images-view/:id', component : imagesView}
  ],
  linkActiveClass : 'mui-active'
})


export default router