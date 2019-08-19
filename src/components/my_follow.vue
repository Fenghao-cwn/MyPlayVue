<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<message_top></message_top>
			<div class="page-header">
				<h1>
					People of concern <small>关注的人</small>
				</h1>
			</div>
			<div class="media">
				<h5>Tom Brown</h5>
				<div class="img-user col-md-1 column">
					<a href="/solo_top"><img alt="140x140" src="../../static/img/noface.gif" class="img-circle" /></a>
				</div>
				<div class="media-body">
					<p>Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id ex pretium hendrerit maecenas imperdiet ipsum id ex pretium hendrerit</p>
					<span><a href="#"> 取消关注 </a></span>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import message_top from '@/components/message_top'
	export default {
		name: 'my_follow',
		data() {},
		components: {
			message_top //组件私有注册
		}
	}
</script>

<style scoped>
	.media{
		border-bottom: 1px solid gainsboro;
		margin-left: 30px;
	}
.img-circle {
		width: 60px;
		height: 60px;
		/*margin-top: 125px;
		margin-left: 20px;*/
	}
	.page-header{
		margin-left: 30px;
	}
</style>