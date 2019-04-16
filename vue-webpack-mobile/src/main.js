import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


import router from './router.js'
import { Swipe, SwipeItem } from 'mint-ui'
import { Button } from 'mint-ui';

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button);

Vue.component(Header.name,Header)

Vue.filter('dateFormat',function(date){
			var dt = new Date(date)
			var y = dt.getFullYear()
			var m = dt.getMonth() + 1
			var d = dt.getDate()
			var hr = dt.getHours()
			var min = dt.getMinutes()
			
				m = m >= 10 ? m : '0' + m;
				d = d >= 10 ? d : '0' + d;
				hr = hr >= 10 ? hr : '0' + hr;
				min = min >= 10 ? min : '0' + min;
			
			return `${y}-${m}-${d} ${hr}:${min}`
		})

var vm = new Vue({
	el : '#app',
	render : c => c(app),
	router
})