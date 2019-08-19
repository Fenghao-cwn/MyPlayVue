<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<message_top></message_top>
			<div class="page-header">
				<h1>
					My Collection <small>我的收藏</small>
				</h1>
			</div>
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
							<p class="solo-p">
									Cras justo odio, dapibus ac facilisis in,egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
								</p>
							<div class="img-user col-md-1 column">
								<a href="/solo_message"><img alt="140x140" src="../../static/img/noface.gif" class="img-circle" /></a>
							</div>
							<p class="author">
								<a href="#" class="author">John Maniya</a>
							</p>
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
	import message_top from '@/components/message_top'
	export default {
		name: 'my_collection',
		data() {},
		components: {
			message_top //组件私有注册
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

	 .solo-p{
		display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-box-pack: center;
	    -webkit-box-align: center;
	    -webkit-line-clamp:2;
	    overflow: hidden;

	}
	.title{
		display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-box-pack: center;
	    -webkit-box-align: center;
	    -webkit-line-clamp:1;
	    overflow: hidden;
	}
</style>