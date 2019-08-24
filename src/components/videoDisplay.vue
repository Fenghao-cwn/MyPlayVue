<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<div class="show-top-grids">
				<div class="col-sm-10 show-grid-left main-grids">
					<div class="recommended">
						<div class="recommended-grids english-grid">
							<div class="recommended-info">
								<div class="heading">
									<h3>{{cname}}</h3>
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
										<div class="time small-time show-time movie-time">
											<p>7:34</p>
										</div>
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
							<div class="clearfix"> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'videoDisplay',
		data() {
			return {
				viedos: [],
				cid: 0,
				cname:""
			}
		},
		beforeRouteUpdate(to,from,next){
		    var cid=to.query.cid;
		    this.selectByType(cid);
		},
		created: function() {
			this.selectByType();
		},
		methods: {
			selectByType: function(cid) {
				//var cid = this.$route.query.cid;
				//console.log(cid);
				this.$http.get("http://localhost:80/cate/videos", {
					params: {
						cid: cid,
						ddata:new Date()
					}
				}).then(function(result) {
					this.viedos = result.body;
					console.log(this.viedos);
				}, function(error) {
					alert("加载数据失败！！");
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