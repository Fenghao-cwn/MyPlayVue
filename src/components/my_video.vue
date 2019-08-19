<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<message_top></message_top>
			<div class="page-header">
				<h1>
					My Video Management <small>我的视频管理</small>
				</h1>
			</div>
			<div class="recommended">
				<div class="row">
					<div class="col-md-3 my_video" >
						<div class="thumbnail">
							<img alt="300x200" src="../../static/images/c1.jpg" />
							<div class="caption">
							<h3>
								Thumbnail label
							</h3>
								<p>
									Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
								</p>
								<p>
									<a class="btn btn-primary" href="#">删除</a>
									<a class="btn" href="#">Action</a>
								</p>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>
</template>

<script>
	import message_top from '@/components/message_top'
	export default {
		name: 'my_video',
		data() {},
		components: {
			message_top //组件私有注册
		}
	}
</script>

<style scoped>
	
	.page-header {
		margin-left: 30px;
	}
	.my_video{
		margin-left: 50px;
	}
</style>