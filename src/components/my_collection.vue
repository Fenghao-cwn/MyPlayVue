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
					<div v-for="collection in collections" class="col-md-2 resent-grid recommended-grid show-video-grid img-coll">
						<div class="resent-grid-img recommended-grid-img">
							<a href=""><img style="width: 200px;height: 150px;" :src="collection.vphoto" alt="" /></a>
							<div class="time small-time show-time">
								<p>5:09</p>
							</div>
							<div class="clck show-clock">
								<span class="glyphicon glyphicon-time" aria-hidden="true"></span>
							</div>
						</div>
						<div style="width: 200px;height: 130px;" class="resent-grid-info recommended-grid-info">
							<h5><a href="single.html" class="title">{{collection.title}}</a></h5>
							<p class="solo-p">
									{{collection.vediodetail}}
								</p>
							<div class="img-user col-md-1 column">
								<a href=""><img alt="140x140" :src="collection.photourl" class="img-circle" /></a>
							</div>
							<p class="author">
								<a href="#" class="author">{{collection.name}}</a>
							</p>
							<p class="views" style="margin-left: 50px;">{{collection.signature}}</p>
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
		data() {
			return{
				
				collections:[]
			}
		},
		components: {
			message_top //组件私有注册
		},
		created(){
			this.loadMyCollection();
		},
		methods:{
			loadMyCollection(){
				this.$http.get("http://localhost/Personal/selectMyCollection").then(
					function(result){
						this.collections=result.body;
				},function(error){
					/*alert("！！！")*/
				})
			}
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
		margin-top: 19px;
		margin-left: -3px;
	}
	.page-header{
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