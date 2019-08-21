<template>
	<div >
	<div  class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main cfcf">
	<div class="main-notice" >
		<div class="container containers" >
			<div class="row clearfix rows">
				<div class="col-md-12 column notice">
					<blockquote class="system-notice1">
						<p style="color:#21DEEF ;font-size: 24px; margin-top: -10px;">
							 发件箱
						</p> 
					</blockquote>
					<div style="height: 42px;margin-bottom: 23px;">
					</div>
					
					<div v-for="outbox in outboxs">
						<div class="media well">
							 <a href="#" class="pull-left  "><img  :src="outbox.photourl"  class="media-object head-sculpture" alt='' /></a>
							<div class="media-body">
								<h3 class="media-heading">
									<a href="#">{{outbox.name}}</a><span>| {{outbox.createdate}}</span>
								</h3>
								<a href="/notice_content">
								<div class="medias">
									<div class="media-body qwqw">
											{{outbox.content}}
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
		name: 'outbox',
		data() {
			return{
				outboxs:[]
			}
		},
		created:function(){
			this.getoutbox();
		},
		methods:{
			getoutbox:function(){
				this.$http.get("http://localhost/message/outbox").then(
					function(result){
						this.outboxs = result.body;
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