<template>
	<div>
		<mt-swipe :auto="2000">
			<mt-swipe-item><img src="../images/kobe1.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="../images/kobe2.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="../images/kobe3.jpg"></mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/images">
		                    <img src="../images/menu1.png">
		                    <div class="mui-media-body">Images</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu2.png">
		                    <div class="mui-media-body">News</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu3.png">
		                    <div class="mui-media-body">Products</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu4.png">
		                    <div class="mui-media-body">Comments</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu5.png">
		                    <div class="mui-media-body">Videos</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu6.png">
		                    <div class="mui-media-body">Contact</div></a></li>
		 </ul>
		 <transition>
    	<router-view></router-view>
    </transition> 
	</div>
</template>

<script>
</script>


<style lang="less" scoped>
	.mint-swipe {
		height: 200px;
	}
	img {
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9 {
		border: none;
		background-color: #fff;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: none;
		img {
			width: 60px;
			height: 60px;
		}
	}
</style>