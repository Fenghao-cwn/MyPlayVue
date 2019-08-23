<template>
	<div >
	<div  class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main cfcf">
	<div class="main-notice" >
		<div class="container containers" >
			<div class="row clearfix rows">
				<div class="col-md-12 column notice">
					<blockquote class=" system-notice1">
						<p style="color:#21DEEF ;font-size: 24px; margin-left: 17px;">
							 收件箱
						</p> 
					</blockquote>
					<div style="height: 42px;margin-bottom: 23px;">
					</div>
					
					<div v-for="inbox in inboxs">
						<div class="media well ">
							 <div class="boxclose" @click="close">×</div>
							 <a href="#" class="pull-left  "><img   :src="inbox.photourl" class="media-object head-sculpture" alt='' /></a>
							<div class="media-body">
								<h3 class="media-heading">
									<a href="#">{{inbox.fromname}}</a><span>&nbsp;|&nbsp;<a href="#">回复</a></span>&nbsp;&nbsp;&nbsp;<span>{{inbox.createdate}}</span>
								</h3>
								<div class="medias"  @click="getcontent(inbox.id)">
									<div class="media-body qwqw">
										{{inbox.content}}
									</div>
								</div>
								
								
							</div>
						</div>
					</div>
					
					
					
					
					 
					
					
				</div>
			</div>
		</div>
		
		
		
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'inbox',
		data() {
			return{
				inboxs:[]
			}
		},
		created:function(){
			this.getinbox();
		},
		methods:{
			close:function(){//修改
				this.$http.put("http://localhost/message/close",{//传参
					"id":this.message.id
				}).then(
					function(){
						
					},
					function(){
						
					}
				)
			},
			getinbox:function(){
				this.$http.get("http://localhost/message/inbox").then(
					function(result){
						this.inboxs = result.body;
					},
					function(error){
						alert("数据加载失败.")
					}
				)
			},
			getcontent:function(id){
				this.$router.push({
					path:"/notice_content",
					query:{
						id:id
					}
				})
			}
		}
	}
</script>
 
<style scoped>
.media{
	position: relative;
}	
	
.boxclose{
    font-size: 20px;
    position: absolute;
    top: 4px;
    right: 11px;
    color: gray;
    cursor: default;
}
</style>