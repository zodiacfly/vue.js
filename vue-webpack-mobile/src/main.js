import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.component(Header.name,Header)

var vm = new Vue({
	el : '#app',
	render : c => c(app),
	router
})