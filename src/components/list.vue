<template>
  <div>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		<div class="page-shopping-cart" id="shopping-cart">
			<h4 class="cart-title">我的订单</h4>
			<div class="cart-product-title clearfix">
				<div class="td-product fl">商品</div>
				<div class="td-num fl">数量</div>
				<div class="td-price fl">单价(元)</div>
				<div class="td-total fl">金额(元)</div>

			</div>
			<div class="cart-product clearfix">
				<table>
					<tbody>
						<tr v-for="(item,index) in productList">

							<td class="td-product"><img :src="item.pro_img" width="98" height="98">
								<div class="product-info">
									<h6>{{item.pro_name}}</h6>
									<p>品牌：{{item.pro_brand}}&nbsp;&nbsp;产地：{{item.pro_place}}</p>
									<p>规格/纯度:{{item.pro_purity}}&nbsp;&nbsp;起定量：{{item.pro_min}}</p>
									<p>配送仓储：{{item.pro_depot}}</p>
								</div>
								<div class="clearfix"></div>
							</td>
							<td class="td-num">
								<div class="product-num">


                  <input type="text" class="num-input" v-model="item.pro_num" disabled="disabled">

								</div>
							</td>
							<td class="td-price">
								<p class="red-text">￥<span class="price-text">{{item.pro_price.toFixed(2)}}</span></p>
							</td>
							<td class="td-total">
								<p class="red-text">￥<span class="total-text">{{item.pro_price*item.pro_num}}</span>.00</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="cart-product-info">
				<a class="btn-buy fr" href="javascript:;">立即支付</a>
				<p class="fr product-total">￥<span>{{getTotal.totalPrice}}</span></p>
				<p class="fr check-num"><span>{{getTotal.totalNum}}</span>件商品总计（不含运费）：</p>
			</div>



      <div class="form-horizontal">
              <h4 class="cart-title">收货地址</h4>
      						<div class="form-group">
      							<label for="name" class="col-sm-1 control-label">姓名：</label>
      							<div class="col-sm-6">
      								<input class="form-control" name="name" value="" placeholder="请输入姓名" type="text" required="required">
      							</div>
      						</div>
      						<div class="form-group">
      							<label for="name" class="col-sm-1 control-label">电话：</label>
      							<div class="col-sm-6">
      								<input class="form-control" name="phone" value="" placeholder="请输入电话" type="text" required="required">
      							</div>
      						</div>
      						<div class="form-group">
      							<label for="name" class="col-sm-1 control-label">地址：</label>
      							<div class="col-sm-6">
      								<input class="form-control" name="address" value="" placeholder="请输入地址" type="text" required="required">
      							</div>
      						</div>
      					</div>



		</div>
	</div>
  </div>
</template>

<script>
	export default {
		name: 'list',

		data() {

      return{
        productList: [{
        	'pro_name': '【斯文】甘油 | 丙三醇', //产品名称
        	'pro_brand': 'skc', //品牌名称
        	'pro_place': '韩国', //产地
        	'pro_purity': '99.7%', //规格
        	'pro_min': "215千克", //最小起订量
        	'pro_depot': '上海仓海仓储', //所在仓库
        	'pro_num': 3, //数量
        	'pro_img': 'static/images/goods2.jpg', //图片链接
        	'pro_price': 800 //单价
        },
        {
        	'pro_name': '【斯文】甘油 | 丙三醇', //产品名称
        	'pro_brand': 'skc', //品牌名称
        	'pro_place': '韩国', //产地
        	'pro_purity': '99.7%', //规格
        	'pro_min': "215千克", //最小起订量
        	'pro_depot': '上海仓海仓储', //所在仓库
        	'pro_num': 3, //数量
        	'pro_img': 'static/images/goods2.jpg', //图片链接
        	'pro_price': 800 //单价
        }
        ]
      }

		},
    computed: {
    	//获取总价和产品总件数
    	getTotal: function() {
    		//获取productList中select为true的数据。
    		var _proList = this.productList.filter(function(val) {
    				return val.select
    			}),
    			totalPrice = 0;
    		for (var i = 0, len = _proList.length; i < len; i++) {
    			//总价累加
    			totalPrice += _proList[i].pro_num * _proList[i].pro_price;
    		}
    		//选择产品的件数就是_proList.length，总价就是totalPrice
    		return {
    			totalNum: _proList.length,
    			totalPrice: totalPrice
    		}
    	}
    },
    methods: {

    },
    mounted: function() {
    	//为productList添加select（是否选中）字段，初始值为true
    	var _this = this;
    	//为productList添加select（是否选中）字段，初始值为true
    	this.productList.map(function(item) {
    		_this.$set(item, 'select', true);
    	})
    	//要像上面这样写双向绑定才能起效，下面的写法是有问题的，双向绑定不起效的！
    	//this.productList.map(function (item) {item.select=true})
    }
	}
</script>



<style scoped>
.fl{
		  float: left;
		}
		.fr{
		  float: right;
		}
		blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, li, ol, p, table, td, textarea, th, ul {
		  margin: 0;
		  padding: 0;
		}
		.clearfix{
		  zoom: 1;
		}
		.clearfix:after {
		  clear: both;
		}
		.clearfix:after {
		  content: '.';
		  display: block;
		  overflow: hidden;
		  visibility: hidden;
		  font-size: 0;
		  line-height: 0;
		  width: 0;
		  height: 0;
		}
		a{
		  text-decoration: none;
		  color: #333;
		}
		img{vertical-align: middle;}
		.page-shopping-cart{
		  width: 70vw;
		  margin: 50px 0 auto 20vw;
		  font-size: 14px;
		  border:1px solid #e3e3e3;
		  border-top:2px solid #317ee7;
		}
		.page-shopping-cart .cart-title{
		  color:#317ee7;
		  font-size: 16px;
		  text-align: left;
		  padding-left: 20px;
		  line-height: 68px;
		}
		.page-shopping-cart .red-text {
		  color: #e94826;
		}
		.page-shopping-cart .check-span{
		  display: block;
		  width: 24px;
		  height: 20px;
		  margin-top: 9px;
		  background: url("../../static/images/cartBg.png") no-repeat 0 0;
		}

		/* 点击时改变勾选 */
		.page-shopping-cart .check-span.check-true{
		  background: url('../../static/images/cartBg.png') no-repeat 0 -22px;
		}
		.page-shopping-cart .td-check{
		  width:70px;
		}
		.page-shopping-cart .td-product{
		  width:420px;
		}
		.page-shopping-cart .td-num, .page-shopping-cart .td-price, .page-shopping-cart .td-total{
		  width:260px;
		}
		.page-shopping-cart .td-do{
		  width:150px;
		}
		.cart-product-title{
		  text-align: center;
		  height: 38px;
		  line-height: 38px;
		  padding: 0 20px;
		  background-color: #f7f7f7;
		  border-top: 1px solid #e3e3e3;
		  border-bottom: 1px solid #e3e3e3;
		}
		.cart-product-title .td-product{
		  text-align: center;
		  font-size: 14px;
		}
		.cart-product-title .td-check{
		  text-align: left;
		}
		.cart-product-title .td-check .check-span .check-span{
		  margin:9px 6px 0 0;
		}

		/* 内容开始 */
		.cart-product{
		  padding: 0 20px;
		  text-align: center;
		}
		.cart-product table{
		  width: 100%;
		  text-align: center;
		  font-size: 14px;
		}
		.cart-product table td{
		  padding: 20px 0;
		}
		.cart-product table tr{
		  border-bottom:1px dashed #e3e3e3;
		}
		.cart-product table tr:last-child{
		  border-bottom:none;
		}
		.cart-product table .product-num{
		  border: 1px solid #e3e3e3;
		  display: inline-block;
		  text-align: center;
		}
		.cart-product table .product-num .num-do{
		  width: 24px;
		  height: 28px;
		  background: #f7f7f7;
		  display: block;
		}
		.cart-product table .product-num .num-reduce span{
		  display: block;
		  width: 6px;
		  height: 2px;
		  margin:13px auto 0 auto;
		  background: url("../../static/images/cartBg.png") no-repeat -40px -22px;
		}
		.cart-product table .product-num .num-add span{
		  display: block;
		  width: 8px;
		  height: 8px;
		  margin:10px auto 0 auto;
		  background: url("../../static/images/cartBg.png") no-repeat -60px -22px;
		}
		.cart-product table .product-num .num-input{
		  width: 42px;
		  height: 28px;
		  line-height:28px;
		  border:none;
		  text-align: center;
		}
		.cart-product table .td-product{
		  text-align: center;
		  font-size: 12px;
		  line-height: 20px;
		}
		.cart-product table .td-product img{
		  border:1px solid #e3e3e3;
		  margin-right: 10px;
		}
		.cart-product table .td-product .product-info{
		  display: inline-block;
		  vertical-align: middle;
		  text-align: left;
		}
		.cart-product table .td-do{
		  font-size: 12px;
		}

		/* 最后一行统计 */

		.cart-product-info{
		  height:50px;
		  line-height: 50px;
		  background: #f7f7f7;
		  padding-left: 20px;
		}
		.cart-product-info .delete-product{
		  color:#666;
		}
		.cart-product-info .delete-product span{
		  display: inline-block;
		  vertical-align: top;
		  margin:18px 8px 0 0;
		  width:13px;
		  height: 15px;
		  background: url("../../static/images/cartBg.png") no-repeat -60px 0;
		}
		.cart-product-info .product-total{
		  font-size: 14px;
		  color:#e94826;
		}
		.cart-product-info .product-total span{
		  font-size: 20px;
		}
		.cart-product-info .check-num{
		  color:#333;
		}
		.cart-product-info .check-num span{
		  color: #e94826;
		}
		.cart-product-info .keep-shopping{
		  color: #666;
		  margin-left: 40px;
		}
		.cart-product-info .keep-shopping span{
		  display: inline-block;
		  vertical-align: top;
		  margin:18px 8px 0 0;
		  width: 15px;
		  height: 15px;
		  background: url("../../static/images/cartBg.png") no-repeat -40px 0;
		}
		.cart-product-info .btn-buy{
		  height: 50px;
		  color: #fff;
		  font-size: 20px;
		  display: block;
		  width: 110px;
		  background: #ff0000;
		  text-align: center;
		  margin-left: 30px;
		}



		/* cart-worder */

		.page-shopping-cart .cart-worder {
		    padding: 20px; }
		.page-shopping-cart .cart-worder .choose-worder {
		    color: #fff;
		    display: block;
		    background: #39e;
		    width: 140px;
		    height: 40px;
		    line-height: 40px;
		    border-radius: 4px;
		    text-align: center;
		    margin-right: 20px; }
		.page-shopping-cart .cart-worder .choose-worder span {
		    display: inline-block;
		    vertical-align: top;
		    margin: 9px 10px 0 0;
		    width: 22px;
		    height: 22px;
		    background: url("../../static/images/cartBg.png") no-repeat -92px 0; }
		.page-shopping-cart .cart-worder .worker-info {
		    color: #666; }
		.page-shopping-cart .cart-worder .worker-info img {
		    border-radius: 100%;
		    margin-right: 10px; }
		.page-shopping-cart .cart-worder .worker-info span {
		    color: #000; }

		.choose-worker-box {
		    width: 620px;
		    background: #fff; }
		.choose-worker-box .box-title {
		    height: 40px;
		    line-height: 40px;
		    background: #F7F7F7;
		    text-align: center;
		    position: relative;
		    font-size: 14px; }
		.choose-worker-box .box-title a {
		    display: block;
		    position: absolute;
		    top: 15px;
		    right: 16px;
		    width: 10px;
		    height: 10px;
		    background: url("../../static/images/../../static/images/shopping_cart.png") no-repeat -80px 0; }
		.choose-worker-box .box-title a:hover {
		    background: url("../../static/images/shopping_cart.png") no-repeat -80px -22px; }
		.choose-worker-box .worker-list {
		    padding-top: 30px;
		    height: 134px;
		    overflow-y: auto; }
		.choose-worker-box .worker-list li {
		    float: left;
		    width: 25%;
		    text-align: center;
		    margin-bottom: 30px; }
		.choose-worker-box .worker-list li p {
		    margin-top: 8px; }
		.choose-worker-box .worker-list li.cur a {
		    color: #f70; }
		.choose-worker-box .worker-list li.cur a img {
		    border: 1px solid #f70; }
		.choose-worker-box .worker-list li a:hover {
		    color: #f70; }
		.choose-worker-box .worker-list li a:hover img {
		    border: 1px solid #f70; }
		.choose-worker-box .worker-list li img {
		    border: 1px solid #fff;
		    border-radius: 100%; }
    .form-horizontal .form-group {
        margin: 10px 0px 10px 0px;
    }
</style>
