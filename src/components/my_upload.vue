<template>
	<div>
		<!--<div class="container">-->
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<div class="row clearfix">
				<div class="page-header">
				<h1>
					Upload My Video <small>上传我的视频</small>
				</h1>
			</div>
				<div class="col-md-7 column">
					<form action="" method="post" role="form">
						<div class="form-group">
							<label for="exampleInputEmail1">标题：</label>
							<input type="text" name="title" class="form-control" id="exampleInputEmail1" />
						</div>
					
							<div class="form-group">
							<label for="exampleInputEmail1">类别：</label>
								<select name="tid" class="form-control">
									
										<option value="">lala</option>
										<option value="">lala</option>
										<option value="">lala</option>	
								</select>
							</div>
							<div class="form-group">
							<label for="name">视频描述:</label>
							<textarea class="form-control" name="signature" rows="3"></textarea>
						</div>
						<div class="form-group">
							<label for="lastname">上传视频和视频封面:</label>
							
							<upload></upload>
							
						</div>
						<button type="submit" class="btn btn-default">提交</button>
					</form>
				</div>
			</div>
		</div>

		<!--</div>-->
	</div>
</template>

<script>
	import upload from '@/components/upload' 
	export default {
		name: 'my_upload',
		data() {},
		components:{
  			upload  //组件私有注册
 		},
		
	}
</script>

<style scoped>
	.clearfix {
		margin-left: 50px;
		font-size: 13px;
	}
	
	
</style>