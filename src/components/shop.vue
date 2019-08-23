<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<div class="main-grids">
				<div class="recommended">
					<div class="recommended-grids">
						<div id="top" class="callbacks_container" v-for="type in typeList ">
							<div class="recommended-info" style="margin-top: 2em;">
								<h3>{{type.typeName}}</h3>
								
							</div>
							<ul class="rslides callbacks callbacks1" id="slider3">
								<li id="callbacks1_s0" style="display: block; float: left; position: relative; opacity: 1; z-index: 2; transition: opacity 500ms ease-in-out 0s;"
								 class="callbacks1_on">
									<div class="animated-grids" v-for="(item,index) in goodList" v-if="item.typeId == type.id">
										<div class="col-md-3 resent-grid recommended-grid slider-first">
											<div class="resent-grid-img recommended-grid-img">
												<a href="single.html"><img :src="item.picture" alt=""></a>
											</div>
											<div class="resent-grid-info recommended-grid-info">
												<h4>
													<a href="single.html">
														{{item.name}}
													</a>
												</h4>
												<h4>￥{{item.price}}.00</h4>
												<!--<a class="btn btn-primary" :href="'/goodsInfo/:'+item.id">购买</a>-->
											     <button class="btn btn-primary"  @click="goumai(item.id)">购买</button>

											</div>
										</div>


									</div>
								</li>

							</ul>
							<br>
						</div>
					</div>
				</div>


			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'shop',
		data() {
			return {
				typeList: [{
						'id':'' ,
						'typeName': ''
					}],

			goodList: [{
					'id': '', //商品id
					'name': "", //商品名
					'picture': '', //图片链接
					'price': '', //单价
					'introduce': "",
					'typeId':''
				}]
			}
		},
		created:function(){
			this.shoplist();
			this.type()
		},
		methods:{
			type:function(){
				this.$http.get("http://localhost:80/goodsType/selectType").then(
					function(result){
						this.typeList=result.body;
					},function(){
						
					}
				)
			},
			
			shoplist:function(){
				this.$http.get("http://localhost:80/goods/select").then(
					function(result){
						console.log(result.body);
						this.goodList=result.body;
					
				   },function(){
				   	
				   })
			},
			goumai:function(id){
				console.log("传之前："+id);
				this.$router.push({
					path:'/goodsInfo',
					query:{						
						id:id
					}
				})
			}
		}
	}
</script>

<style scoped>
	.callbacks1_on {
		margin-top: 2em;

	}

	.resent-grid a img {
		width: 100%;
		height: 210px;
	}

	.resent-grid {
		margin-top: 2em;
		padding-left: 0.1em;
	}

	.callbacks1_on {
		margin-top: 0em;
	}

	.animated-grids {
		margin-bottom: 0em;
	}

	.slid-bottom-grids {
		margin: 1em 0 0 0;
	}

	.recommended-grids {
		margin: 1em 0;
	}

	.resent-grid-img {
		position: relative;
		box-shadow: 0px 0px 1px #C1C1C1 !important;
	}

	.recommended-info h3 {
		font-size: 20px;
		color: #181818;
		/* margin: 0 0 1em 0; */
		font-weight: 600;
	}
</style>
