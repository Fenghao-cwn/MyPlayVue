<template>
	<div >
	<div  class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main cfcf">
	<div class="main-notice" >
		<div class="container containers" >
			<div class="row clearfix rows">
				<div class="col-md-12 column notice">
					<blockquote class=" system-notice1">
						<p style="color:#21DEEF ;font-size: 24px; margin-top: -10px;">
							 收件箱
						</p> 
					</blockquote>
					<div style="height: 42px;margin-bottom: 23px;">
					</div>
					
					<div v-for="inbox in inboxs">
						<div class="media well">
							 <a href="#" class="pull-left  "><img   :src="inbox.photourl" class="media-object head-sculpture" alt='' /></a>
							<div class="media-body">
								<h3 class="media-heading">
									<a href="#">{{inbox.name}}</a><span>&nbsp;|&nbsp;<a href="#">回复</a></span>&nbsp;&nbsp;&nbsp;<span>{{inbox.createdate}}</span>
								</h3>
								<a href="/notice_content">
								<div class="medias">
									<div class="media-body qwqw">
										{{inbox.content}}
									</div>
								</div>
								</a>
								
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
			getinbox:function(){
				this.$http.get("http://localhost/message/inbox").then(
					function(result){
						this.inboxs = result.body;
					},
					function(error){
						alert("数据加载失败.")
					}
				)
			}
		}
	}
</script>
 
<style scoped>

</style>