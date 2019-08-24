<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<div class="main-grids">
				<div class="top-grids">
					<div class="recommended-info">
						<h3>猜你喜欢</h3>
					</div>
					<div v-for="recom in recomms">
						<div class="col-md-3 resent-grid recommended-grid movie-video-grid" style="margin-bottom: 50px;">
							<div class="resent-grid-img recommended-grid-img">
								<a href="toVideo(recom.id)"><img :src="recom.photourl" @click="toVideo(recom.id)" alt="" /></a>
								<div class="clck movie-clock">
									<span class="glyphicon glyphicon-time" aria-hidden="true"></span>
								</div>
							</div>
							<div class="resent-grid-info recommended-grid-info recommended-grid-movie-info">
								<h5><a href="toVideo(video.id)" class="title">{{video.title}}</a></h5>
								<ul>

									<li class="right-list">
										<p class="views views-info">{{recom.showcount}} views</p>
									</li>
								</ul>
							</div>
						</div>

					</div>
					<div class="clearfix "> </div>
					<div class="recommended-info">
						<div class="heading">
							<h3>所有视频</h3>
						</div>
						<div class="heading-right">
							<a href="#small-dialog8" class="play-icon popup-with-zoom-anim">Subscribe</a>
						</div>
						<div class="clearfix"> </div>
					</div>
					<!--视频循环-->
					<div v-for="video in viedos">
						<div class="col-md-3 resent-grid recommended-grid movie-video-grid" style="margin-bottom: 50px;">
							<div class="resent-grid-img recommended-grid-img">
								<a href="toVideo(video.id)"><img :src="video.photourl" @click="toVideo(video.id)" alt="" /></a>
								<div class="clck movie-clock">
									<span class="glyphicon glyphicon-time" aria-hidden="true"></span>
								</div>
							</div>
							<div class="resent-grid-info recommended-grid-info recommended-grid-movie-info">
								<h5><a href="toVideo(video.id)" class="title">{{video.title}}</a></h5>
								<ul>
									<li>
									</li>
									<li class="right-list">
										<p class="views views-info">{{video.showcount}} views</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="clearfix "> </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Middle',
		data() {
			return {
				recomms: [],
				videos: []
			}
		},
		created: function() {
			this.recom();
			this.selectAll();
		},
		methods: {
			recom: function() {
				this.$http.get("http://localhost:80/uesr/recom").then(function(result) {
					this.recomms = result.body;
					console.log(this.recomms);
				}, function(error) {
					alert("推荐视频加载失败！！ ");
				})
			},
			selectAll: function() {
				this.$http.get("http://localhost:80/cate/all").then(function(result) {
					this.viedos = result.body;
				}, function(error) {
					alert("全部视频加载失败！！");
				})

			},
			toVideo(vid){
				this.$router.push({
	  				path:'/videoShow',
	  				query:{
	  					vid:vid
	  				}
	  			});
	  			 this.$router.go(0);   
			}

		}
	}
</script>

<style scoped>

</style>