<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<solo_top></solo_top>
			<div class="page-header">
				<h1>
					Her/His Video <small>TA的视频</small>
				</h1>
			</div>
			<!--视频-->
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
			<!--收藏-->
			<div class="recommended">
						<div class="recommended-grids img-big">
							<div class="col-md-2 resent-grid recommended-grid show-video-grid img-coll">
								<div class="resent-grid-img recommended-grid-img">
									<a href=""><img src="../../static/images/c1.jpg" alt="" /></a>
									<div class="time small-time show-time">
										<p>5:09</p>
									</div>
									<div class="clck show-clock">
										<span class="glyphicon glyphicon-time" aria-hidden="true"></span>
									</div>
								</div>
								<div class="resent-grid-info recommended-grid-info">
									<h5><a href="single.html" class="title">Varius sit sed Nullam interdum</a></h5>
									<div class="img-user col-md-1 column">
										<a href="/solo_top"><img alt="140x140" src="../../static/img/noface.gif" class="img-circle" /></a>
									</div>
									<p class="author">
									<a href="#" class="author">John Maniya</a></p>
									<p class="views" style="margin-left: 50px;">1,897 views</p>
								</div>
							</div>
							
							
							<div class="clearfix"> </div>
						</div>
					</div>

		</div>

	</div>
</template>

<script>
	import solo_top from '@/components/solo_top'
	export default {
		name: 'solo_message',
		data() {},
		components: {
			solo_top //组件私有注册
		}
	}
</script>

<style scoped>
	.img-big{
		margin-top: -10px;
	}
	.img-coll{
		margin-left: 30px;
		margin-top: 30px;
	}
.img-circle {
		width: 30px;
		height: 30px;
		margin-top: 6px;
		margin-left: -3px;
	}
	.page-header{
		margin-left: 30px;
	}

	
</style>