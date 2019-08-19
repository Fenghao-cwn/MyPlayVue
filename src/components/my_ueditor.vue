<template>
	<div>
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<message_top></message_top>
			<div class="page-header">
				<h1>
					My Tidings <small>我的动态</small>
				</h1>
			</div>
			<div class="recommended">
				<div class="col-sm-7" style="width: 880px; margin-left:25px;margin-top: 20px;">
				<div class="panel panel-info">
					<div class="panel-heading">
						<div class="col-md-1 column">
							<a href=""><img alt="140x140" src="../../static/img/noface.gif" class="img-circle" /></a>
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
	import message_top from '@/components/message_top'
	export default {
		name: 'my_ueditor',
		data() {},
		components: {
			message_top //组件私有注册
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
		width: 40px;
		height: 40px;
		margin-top: -8px;
		margin-left: -17px;
	}
	.page-header{
		margin-left: 30px;
	}

	
</style>