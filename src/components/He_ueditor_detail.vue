<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<message_top></message_top>
			<div class="page-header">
				<h1>
					Details of Her/His Tidings <small>她/他的动态详情</small>
				</h1>
			</div>
			<div class="recommended">
				<div  class="col-sm-7" style="width: 880px; margin-left:25px;margin-top: 20px;">
				<div class="panel panel-info">
					<div class="panel-heading">
						<div class="col-md-1 column">
							<a href=""><img style="width: 40px;height: 40px;margin-top: -8px;margin-left: -17px;" alt="140x140" :src="user.photourl" class="img-circle" /></a>
						</div>
						<b style="font-size:medium;margin-left: -14px;">昵称:{{user.name}} </b>

					</div>
					<div  class="panel-body ">
						<b style="font-size:medium;margin-left: 340px;">标题：{{dynamic.title}}</b>
						<p class="p-ueditor" style="line-height: 20px; font-size: 12px;text-indent:2em;">{{dynamic.content}}</p>
						<p class="time-p" >{{dynamic.createtime}}</p>
					</div>
				</div>
				
			</div>		
			</div>

		</div>
		<div class="media">
			<div class="media-body">
				<div class="media">
					<h5>昵称：</h5>
					<div class="img-user col-md-1 column">
						<a href=""><img alt="140x140" src="../../static/img/noface.gif" class="img-circle" /></a>
					</div>
					<div class="media-body">
						<p>个性签名：</p>
						<span><a href="#" @click="delFollow(Myfollow.id)"> 删除评论 </a></span>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import message_top from '@/components/message_top'
	export default {
		name: 'ueditor_detail',
		data() {
			return {
				user:{
					name:'',
					photourl:''
				},
				dynamic:{
					title:'',
					createtime:'',
					content:''
				}
			}
		},
		components: {
			message_top //组件私有注册
		},
		created() {
			this.loadUeditor();
			this.loadUser();
		},
		methods: {
			loadUeditor(){
				var did=this.$route.query.id;
				this.$http.get("http://localhost/Personal/selectDynamic",{
					params:{
						"did":did
					}
				}).then(
					function(result){
						this.dynamic=result.body;
				},function(error){
					
				})
			},
			loadUser(){
				this.$http.get("http://localhost/Personal/getUser").then(
					function(result){
						this.user=result.body;
				},function(error){
					
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
		width: 40px;
		height: 40px;
		margin-top: -8px;
		margin-left: -17px;
	}
	
	.page-header {
		margin-left: 30px;
		margin-top: 20px;
	}
	
	.time-p {
		font-size: 12px;
		margin-left: 750px;
		margin-top: 10px;
		line-height: 20px;
		color: #9E9E9E;
	}
	
		.media{
		border-bottom: 1px solid gainsboro;
		margin-left: 97px;
	}
.img-circle {
		width: 60px;
		height: 60px;
		/*margin-top: 125px;
		margin-left: 20px;*/
	}
	
</style>