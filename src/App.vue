<template>
	<div id="app">
		<!--头部开始-->
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
					<a class="navbar-brand" href="/">
						<h1><img src="../static/images/logo.png" alt="" /></h1></a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<div class="top-search">
						<form class="navbar-form navbar-right">
							<input type="text" class="form-control" placeholder="Search...">
							<input type="submit" value=" ">
						</form>
					</div>
					<div class="header-top-right">
						<div class="file">
							<a href="/my_upload">上传视频</a>
						</div>
						<div class="signin">
							<a href="#small-dialog3" class="play-icon popup-with-zoom-anim">注册</a>
							<!-- pop-up-box -->

							<!--//pop-up-box -->
							
							<div id="small-dialog3" class="mfp-hide">
								<h3>创建账号</h3>
								<div class="signup">
									<form>
										<input type="text" class="email" placeholder="昵称" required="required" />
										<input type="password" placeholder="密码" required="required" pattern=".{6,}" autocomplete="off" />
										<input type="text" class="email" placeholder="填写常用手机号" maxlength="10" pattern="[1-9]{1}\d{9}" />
										<div class="note">
											<input type="text" class="email " placeholder="请输入短信验证码" maxlength="10" pattern=".{6,}" />
											<button class="note-button el-button">
															<span >点击获取</span>
														</button>
										</div>
										<input type="submit" value="	注 册	" />
										<div class="tologin">
											<a href="#">已有账号，直接登录></a>
										</div>
									</form>
								</div>
								<div class="clearfix"> </div>
							</div>
							
							
							<div id="small-dialog5" class="mfp-hide">
								<h3>Help</h3>
								<div class="help-grid">
									<p>Suspendisse tristique magna ut urna pellentesque, ut egestas velit faucibus. Nullam mattis lectus ullamcorper dui dignissim, sit amet egestas orci ullamcorper.</p>
								</div>
								<div class="help-grids">
									<div class="help-button-bottom">
										<p>
											<a href="#small-dialog4" class="play-icon popup-with-zoom-anim">Feedback</a>
										</p>
									</div>
									<div class="help-button-bottom">
										<p>
											<a href="#small-dialog6" class="play-icon popup-with-zoom-anim">Lorem ipsum dolor sit amet</a>
										</p>
									</div>
									<div class="help-button-bottom">
										<p>
											<a href="#small-dialog6" class="play-icon popup-with-zoom-anim">Nunc vitae rutrum enim</a>
										</p>
									</div>
									<div class="help-button-bottom">
										<p>
											<a href="#small-dialog6" class="play-icon popup-with-zoom-anim">Mauris at volutpat leo</a>
										</p>
									</div>
									<div class="help-button-bottom">
										<p>
											<a href="#small-dialog6" class="play-icon popup-with-zoom-anim">Mauris vehicula rutrum velit</a>
										</p>
									</div>
									<div class="help-button-bottom">
										<p>
											<a href="#small-dialog6" class="play-icon popup-with-zoom-anim">Aliquam eget ante non orci fac</a>
										</p>
									</div>
								</div>
							</div>
							<div id="small-dialog6" class="mfp-hide">
								<div class="video-information-text">
									<h4>Video information & settings</h4>
									<p>Suspendisse tristique magna ut urna pellentesque, ut egestas velit faucibus. Nullam mattis lectus ullamcorper dui dignissim, sit amet egestas orci ullamcorper.</p>
									<ol>
										<li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
										<li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
										<li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
										<li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
										<li>Nunc vitae rutrum enim. Mauris at volutpat leo. Vivamus dapibus mi ut elit fermentum tincidunt.</li>
									</ol>
								</div>
							</div>

						</div>
						<div class="signin">
							<a href="#small-dialog" class="play-icon popup-with-zoom-anim">登录</a>
							<div id="small-dialog" class="mfp-hide">
								<h3>Login</h3>
								<div class="signup">
									<form>
										<input type="text" class="email" placeholder="您的手机号" required="required" pattern="([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?"/>
										<input type="password" placeholder="密码" required="required" pattern=".{6,}"  autocomplete="off" />				
										<p style="overflow: hidden;">
											<input type="submit" style="float: left;margin-left: 5%;"  value="	 登  录	 "/>
									  	<input type="submit" style="float: right;margin-right: 5%;"  value="	 注 册	  "/>
										</p>
										<div class="forget-pass">
												<a href="#">忘记密码？</a>
										</div>
									</form>
								
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</nav>
		<!--头部结束-->
		<!--左侧开始-->
		<div class="col-sm-3 col-md-2 sidebar">
			<div class="tp-navigation">
				<div class="t-menu">MENU</div>
				<div class="t-img">
					<img src="images/lines.png" alt="" />
				</div>
				<div class="clearfix"> </div>
			</div>
			<div class="drop-navigation drop-navigation">
				<ul class="nav nav-sidebar">
					<li class="active">
						<a href="/" class="home-icon"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>主站</a>
					</li>
					<li>
						<a href="shows.html" class="user-icon"><span class="glyphicon glyphicon-home glyphicon-blackboard" aria-hidden="true"></span>电视台</a>
					</li>
					<li>
						<a href="/ueditor" class="sub-icon"><span class="glyphicon glyphicon-home glyphicon-hourglass" aria-hidden="true"></span>动态</a>
					</li>
					<li>
						<a href="#" class="menu1"><span class="glyphicon glyphicon-film" aria-hidden="true"></span>视频分类<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
					</li>
					<ul class="cl-effect-2">
						<li>

							<router-link to="/videoDisplay">动漫</router-link>
						</li>
						<li>
							<router-link to="/videoDisplay">电影</router-link>

						</li>
						<li>
							<router-link to="/videoDisplay">电视剧</router-link>

						</li>
					</ul>

					<!-- script-for-menu -->

					<li>
						<a href="movies.html" class="song-icon"><span class="glyphicon glyphicon-music" aria-hidden="true"></span>Songs</a>
					</li>
					<li>
						<a href="news.html" class="news-icon"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>会员购</a>
					</li>
					<li>
						<a href="#" class="menu"><span class="glyphicon glyphicon-film glyphicon-king" aria-hidden="true"></span>个人中心<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
					</li>
					<ul class="cl-effect-1">
						<li>
							<a href="sports.html">个人资料</a>
						</li>
						<li>
							<a href="/my_collection">我的收藏</a>
						</li>
						<li>
							<a href="sports.html">我的动态</a>
						</li>
						<li>
							<a href="/my_follow">我的关注</a>
						</li>
						<li>
							<a href="/my_video">视频管理</a>
						</li>
					</ul>
					<li>
						<a href="#" class="menu2"><span class="glyphicon glyphicon-film glyphicon-queen" aria-hidden="true"></span>消息中心<span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
					</li>
					<ul class="cl-effect-3">
						<li>
							<a href="/inbox">收件箱</a>
						</li>
						<li>
							<a href="/outbox">发件箱</a>
						</li>
						<li>
							<a href="#">收到的赞</a>
						</li>
						<li>
							<a href="/notice">系统通知</a>
						</li>
						
					</ul>
				</ul>
				<!-- script-for-menu -->

				<div class="side-bottom">
					<div class="side-bottom-icons">
						<ul class="nav2">
							<li>
								<a href="#" class="facebook"> </a>
							</li>
							<li>
								<a href="#" class="facebook twitter"> </a>
							</li>
							<li>
								<a href="#" class="facebook chrome"> </a>
							</li>
							<li>
								<a href="#" class="facebook dribbble"> </a>
							</li>
						</ul>
					</div>
					<div class="copyright">
						<p>Copyright &copy; 2015.Company name All rights reserved.
							<a target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="clearfix"> </div>
		<!--左侧结束-->
		
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>
<style>

</style>