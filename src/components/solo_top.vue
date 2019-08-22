<template>
	<div>
		<div class="img-top">
			<div class="img-user col-md-1 column">
				<a href=""><img alt="140x140" :src="author.photourl" class="img-circle" /></a>
			</div>
			<div class="col-md-8 column ">
				<h3 class="user-name">{{author.name}}</h3>
				<h6 class="user-text">{{author.signature}}</h6>
			</div>
			<button class="btn btn-default  button-g">
				<span class="glyphicon glyphicon-plus"></span>关注
			</button>
			<button class="btn btn-default btn-info button-g">
					<span class="glyphicon glyphicon-envelope"></span>私信
			</button>

			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'solo_top',
		data() {
			return{
				author:{
					name:'',
					signature:'',
					photourl:''
				}
				
			}
		},
		created(){
			this.loadAuthor();
		},
		methods:{
			loadAuthor(){
				var aid=this.$route.query.aid;//得到从my_collection跳转传来的参数
				this.$http.get("http://localhost/Personal/selectAuthorById",{
					params:{
						"aid":aid
					}
				}).then(
					function(result){
						this.author=result.body;
				},function(error){
					alert("失败")
				})
			}
		}
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
	.button-g{
		margin-top: 140px;
		margin-left: 20px;
	}
</style>