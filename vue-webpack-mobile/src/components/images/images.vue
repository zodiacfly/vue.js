<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in movieList" :key="item.id">
				<router-link :to="'/home/images/images-view/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.cover">
					<div class="mui-media-body">
						{{ item.ename }}
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui'

	export default{
		data : function(){
			return {
				movieList : []
			}
		},
		created : function(){
			this.getNews()
		},
		methods : {
			getNews : function(){
				this.$http.get('http://service.picasso.adesk.com/v1/vertical/category').then(function(result){
					
					if(result.status===200){
						this.movieList = result.body.res.category
						
					} else {
						Toast('Error')
					}
				})
			}
		}
	}
</script>
<style>

</style>