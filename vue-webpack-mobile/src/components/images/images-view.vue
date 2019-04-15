<template>
	<div class="mui-content-padded">
		<p>
			<img :src="src" />
		</p>
	</div>
</template>

<script>

	export default {
		data : function(){
			return {
				id : this.$route.params.id,
				src : ''
			}
		},
		created : function(){
			this.showPic()
		},
		methods : {
			showPic : function(){
				this.$http.get('http://service.picasso.adesk.com/v1/vertical/category').then(function(result){
					
					if(result.status===200){
						var that = this
						result.body.res.category.forEach(function(item){
							if(item.id === that.id){
								that.src = item.cover
							}
						})					
					} else {
						Toast('Error')
					}
				})
			}
		}
	}	
</script>

<style lang="less" scoped>
	.mui-content-padded img {
		width: 100%;
		height: 100%;
	}
</style>