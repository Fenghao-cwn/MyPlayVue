<template>
	<div>
		<div class="img-top">
			<div class="img-user col-md-1 column">
				<a href="/updateUser" data-toggle="tooltip" data-placement="top" title="修改个人信息"><img alt="140x140" src="../../static/img/noface.gif" class="img-circle" /></a>
			</div>
			<div class="col-md-8 column ">
				<h3 class="user-name">火星花</h3>
				<h6 class="user-text">花花花啦啦啦啦啦啦拉拉拉拉啦</h6>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'message_top',
		data() {}
	}
</script>

<style scoped>
	.img-top {
		margin-top: -19px;
		/*width: 1267px;*/
		height: 200px;
		background-image: url(../../static/img/cb1c3ef50e22b6096fde67febe863494caefebad.png);
	}
	
	.img-circle {
		width: 60px;
		height: 60px;
		margin-top: 125px;
		margin-left: 20px;
	}
	
	.user-name {
		color: white;
		margin-left: -10px;
		margin-top: 130px;
	}
	
	.user-text {
		margin-left: -10px;
		color: white;
	}
</style>