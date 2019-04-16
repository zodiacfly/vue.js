<template>
	<div>
		<h3>Comments</h3>
		<hr>
		<textarea v-model="comment"></textarea>

		<label for="input_name">Your Name</label>
		<input type="text" required minlength="2" maxlength="10" placeholder="please input yout name" v-model="name" @keyup.enter="postCom">

		<mt-button type="primary" size="large" @click="postCom">Submit</mt-button>

		<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
			<li class="mui-table-view-cell" v-for="item in sonList"  :key="item.id">
				<div class="mui-table">
					<div class="mui-table-cell mui-col-xs-10">
						<h5>post by ：{{ item.name }}</h5>
						<p class="mui-h6">content : {{ item.comment }}</p>
					</div>
					<div class="mui-table-cell mui-col-xs-5 mui-text-right">
						<span class="mui-h5">{{ item.time | dateFormat }}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				name : '',
				comment : '',
				sonList : []
			}
		},
		created : function(){
			this.renderCom()
		},
		methods : {
			postCom : function(){
				var newCom = {id : Date.now(), name : this.name, time : new Date(), comment : this.comment}
				var list = JSON.parse(localStorage.getItem('myData'+this.newid) || '[]')
				list.unshift(newCom)
				localStorage.setItem('myData'+this.newid,JSON.stringify(list))	
				
				this.name = this.comment = ''

				this.renderCom()
			},
			renderCom : function(){
				var list = JSON.parse(localStorage.getItem('myData'+this.newid) || '[]')
				this.sonList = list
			}
		},
		props : ['newid']
	}
</script>

<style>

</style>