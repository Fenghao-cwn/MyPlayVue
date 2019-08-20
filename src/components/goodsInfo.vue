<template>
	<div class="showall">
        <!--left -->
        <div class="showbot">
            <div id="showbox">
            	<div id="img">
            		<img src="static/images/goods2.jpg"  width="400" height="400" />
            	</div>
                <div id="showsum">
	            	
	                	<div class="tr-nobdr">
	                		<h3 style="">商品名</h3>
	                	</div>
	            		<div class="txt">
	            			<span class="nowprice">￥<a href="">599.00</a></span>
	            			
	            		</div>
	                	<div class="txt-h">
	                		<span class="tex-o" style="font-size: 25px;">分类</span>
	                		<ul class="glist" id="glist" data-monitor="goodsdetails_fenlei_click">
	                			<li><a title="type1" href="">手办</a></li>
	                			<li><a title="type2" href="">周边</a></li>
	                		</ul>
	                	</div>
	                	<div class="gcIpt">
	                		<span class="guT" style="margin-left:5px;font-size: 25px;">数量</span>
	                		<input id="sub"  type="button" value="-"/>  
	                		<input id="text" type="text" value="1"style="width:30px; text-align: center; color: #0F0F0F;"/>  
	                		<input id="add"  type="button" value="+"/>
	                	</div>
	                	<div class="nobdr-btns">
	                		<button class="addcart yh">立即购买</button>
	                	</div>
	                	
	        		
            	</div>
            </div>
        </div>
    </div>  
            
</template>
<script>
	export default {
		name: 'goodsInfo',
		/*data:{
			i:1,
			add:document.getElementById("add"),
		 	i:document.getElementById("text").value,
			sub:document.getElementById("sub"),
		},
		methods:{
			
			add:function(){
				i++,
				document.getElementById("text").value = i;
			},
			sub:function(){
	          if (i>1) {
				i--;
				document.getElementById("text").value = i;
			} else{
				i=1;
				document.getElementById("text").value = i;
			}
	    } 
	}*/
}
</script>
<script>
	window.onload = function(){
				var add = document.getElementById("add");
				var i = document.getElementById("text").value;
				var sub = document.getElementById("sub");
				
				add.onclick = function(){
					i++;
					document.getElementById("text").value = i;
					
				}
				sub.onclick = function(){
					if (i>1) {
						i--;
						document.getElementById("text").value = i;
						
					} else{
						i=1;
						document.getElementById("text").value = i;
						
					}
				}				
			}	

</script>
	
<style>
	#app{margin-left:340px; margin-top:100px;width:1000px;}
	.showall{width: 800px;height: 500px;}
	.showbot #img{float: left;}
	.showall #showsum{padding-left:20px; width:400px;height: 400px;float: left;}
	.showall 
	.tr-nobdr{margin-top: 20px;padding-bottom: 10px;}
	.tr-nobdr h3{color: #171717;font-size: 28px;font-weight:400;}
	.txt{width: 400px;margin-top: 15px;overflow: hidden;background: #f8f8f8;font-size: 36px;color: #f73a3a;}
	.nowprice a{font-size: 36px;color: #f73a3a;}
	.nowprice a:hover{text-decoration: none;}
	.cumulative{float: right;}
	.number{
		float: left;
		margin-top: 30px;
		padding: 0px 10px;
		border-right: #e7e7e7 solid 1px;
		font-size: 14px;
		text-align: center;
		color: #bfbfbf;
	}
	.number em{
		color: #5885c6;
		font-style:normal
	}
	.tyu{
		border: none;
	}
	
	.tex-o{
		float: left;
		font-size: 14px;
		line-height: 80px;
		padding-right: 20px;
		color: #848484;
	}
	#glist{padding-top:25px;}
	#glist li{
		float: left;
		padding-right: 10px;
	}
	#glist li a{
		padding: 5px 8px;
		color: #222222;
		font-size: 16px;
		border: #e3e3e3 solid 1px;
		display: block;
	}
	#glist li a:hover{
		border: #f73a3a solid 1px;
		text-decoration: none;
		color: #f73a3a;
	}
	.gcIpt{
		height: 60px;
	}
	.guT{
		color: #848484;
		font-size: 14px;
		padding-right:18px;
		line-height: 40px;
	}
	.gcIpt input{
		float: left;
		border: #e3e3e3 solid 1px;
		padding: 5px 8px;
		color: #848484;
		font-size: 16px;}
	.nobdr-btns{
		padding-top: 20px;
	}
	.addcart{
	background: #fd532d;
	padding: 0px 50px;
	border-radius: 4px;
	color: #FFFFFF;
	margin-right: 10px;
	font-size:16px;
	line-height: 50px;
	}
	.yh{ background: #e60013;}
	.addcart img{vertical-align:middle;margin-bottom:3px;padding-right: 5px;}
	.guarantee{
	height: 50px;
	}
	.guarantee span{
		color: #666666;
		font-size: 14px;
		line-height: 50px;}
	.guarantee span a img{vertical-align:middle;margin-bottom:3px;}
</style>