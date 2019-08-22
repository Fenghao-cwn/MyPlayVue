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
				<div class="recommended-grids img-big">
					<div v-for="video in videos" class="col-md-2 resent-grid recommended-grid show-video-grid img-coll">
						<div class="resent-grid-img recommended-grid-img">
							<a href=""><img :src="video.photourl" style="width: 200px;height: 150px;" alt="" /></a>
						</div>
						<div style="width: 200px;height: 95px;" class="resent-grid-info recommended-grid-info">
							<div class="caption">
								<h5 style="margin-top: -5px;"><a href="#" style="margin-top: 3px;" class="title">{{video.title}}</a></h5>
								<p class="solo-p">
									{{video.vediodetail}}
								</p>
								<p>	
									<a  href="#" style="display: block;margin-top: 7px;margin-left: 30px;color: #9E9E9E;">上传时间：{{video.createtime}}</a>
								</p>
							</div>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>

			<!--收藏-->
			<div class="page-header">
				<h1>
					Her/His Collection <small>TA的收藏</small>
				</h1>
			</div>
			<div class="recommended">
				<div class="recommended-grids img-big">
					<div v-for="AuthorCollection in AuthorCollections" class="col-md-2 resent-grid recommended-grid show-video-grid img-coll">
						<div class="resent-grid-img recommended-grid-img">
							<a href=""><img :src="AuthorCollection.vphoto" style="width: 200px;height: 150px;" alt="" /></a>
						</div>
						<div style="width: 200px;height: 130px;" class="resent-grid-info recommended-grid-info">
							<div class="p-title">
								<h5><a class="title">{{AuthorCollection.title}}</a></h5>
								<p class="solo-p">
										{{AuthorCollection.vediodetail}}
									</p>
							</div>
							<div class="div-user">	
								<div class="img-user col-md-1 column">
									<a href=""><img alt="140x140" :src="AuthorCollection.photourl" class="img-circle" /></a>
								</div>
								<p class="author">
									<a href="#" class="author">{{AuthorCollection.name}}</a>
								</p>
								<p class="views" style="margin-left: 50px; width: 100px;">{{AuthorCollection.signature}}</p>
							</div>
						</div>
					</div>
						

					<div class="clearfix"> </div>
				</div>
			</div>

			<!--动态-->
			<div class="page-header">
				<h1>
					Her/His Tidings <small>TA的动态</small>
				</h1>
			</div>
			<div class="recommended">
				<div class="col-sm-7" style="width: 880px; margin-left:25px;margin-top: 20px;">
				<div class="panel panel-info">
					<div class="panel-heading">
						<div class="col-md-1 column">
							<a href=""><img style="width: 40px;height: 40px;margin-top: -8px;margin-left: -17px;" alt="140x140" src="../../static/img/noface.gif" class="img-circle" /></a>
						</div>
						<b style="font-size:medium;margin-left: -14px;">酉月未央 </b>

					</div>
					<div class="panel-body">
						<p>平日无事其乐融融</p>
						<p>一朝犯险作鸟兽散</p>
					</div>
				</div>
				
			</div>		
			</div>

		</div>

	</div>
</template>

<script>
	import solo_top from '@/components/solo_top'
	export default {
		name: 'solo_message',
		data() {
			return{
				videos:[],
				AuthorCollections:[]
			}
		},
		components: {
			solo_top //组件私有注册
		},
		created(){
			this.loadAuthorVideo();
			this.loadAuthorCollection();
		},
		methods:{
			loadAuthorVideo(){
				var aid=this.$route.query.aid;
				this.$http.get("http://localhost/Personal/selectAuthorVideo",{
					params:{
						"aid":aid
					}
				}).then(
					function(result){
						this.videos=result.body;
				},function(error){
					alert("失败")
				})
			},
			loadAuthorCollection(){
				var aid=this.$route.query.aid;
				this.$http.get("http://localhost/Personal/selectAuthorCollection",{
					params:{
						"aid":aid
					}
				}).then(
					function(result){
						this.AuthorCollections=result.body;
				},function(error){
					alert("失败")
				})
			}
		}
	}
</script>

<style scoped>
	.img-big {
		margin-top: -10px;
	}
	
	.img-coll {
		margin-left: 30px;
		margin-top: 30px;
	}
	
	.img-circle {
		width: 30px;
		height: 30px;
		margin-top: 6px;
		margin-left: -3px;
	}
	
	.page-header {
		margin-left: 30px;
		margin-top: 20px;
	}
	 .solo-p{
		display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-box-pack: center;
	    -webkit-box-align: center;
	    -webkit-line-clamp:2;
	    overflow: hidden;
	    height: 27.2px;
	    width: 170px;
	    margin-top: -5px;

	}

	.views,.title{
		display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-box-pack: center;
	    -webkit-box-align: center;
	    -webkit-line-clamp:1;
	    overflow: hidden;
	   height: 20px;
	   
	}
	.div-user{
		margin-top: 16px;
		width: 200px;
		height: 80px;
	}
	.p-title{
		width: 180px;
		height: 50px;
	}
</style>