<template>
	<div>
		<!--<div class="container">-->
		<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
			<div class="row clearfix">
				<div class="page-header">
				<h1>
					Update Personal Information <small>修改个人信息</small>
				</h1>
			</div>
				<div class="col-md-6 column">
					<form action="" method="post" role="form">
						<div class="form-group">
							<label for="exampleInputEmail1">昵称：</label><input type="text" name="name" class="form-control" id="exampleInputEmail1" />
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">手机号：</label><input type="text" readonly="readonly" name="phone" class="form-control" id="exampleInputEmail1" />
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">密码：</label><input type="password"  name="password" class="form-control" id="exampleInputPassword1" />
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">性别：</label>
							<label>
							<input type="radio" name="optionsRadios" id="optionsRadios1" value="男" checked> 男
						</label> &nbsp;&nbsp;&nbsp;&nbsp;
							<label>
							<input type="radio" name="optionsRadios" id="optionsRadios2" value="女">女
						</label>

						</div>
						<div class="form-group">
							<label for="name">个性签名:</label>
							<textarea class="form-control" name="signature" rows="3"></textarea>
						</div>
						<div class="form-group">
							<label for="exampleInputFile">上传头像:</label><input type="file" name="file" id="exampleInputFile" />
							<p class="help-block">
								Example block-level help text here.
							</p>
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
	export default {
		name: 'updateUser',
		data() {}
	}
</script>

<style scoped>
	.page-header{
		margin-left: 10PX;
	}
	.clearfix {
		margin-left: 40px;
		font-size: 13px;
	}
	
	
</style>