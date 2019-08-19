<template>
	<div>
		<div class="col-sm-8 single-left">
			<!--视频开始-->
			<div>
				<div class="Dplayer_box">
					<h5>标题</h5>
					<div class="player_av">
						<div id="dplayer"></div>
					</div>
				</div>
			</div>
			<!--视频结束-->
			<!--按钮开始-->
			<div id="buttons">
				<button type="button" class="btn btn-default buttons">
					<span class="glyphicon glyphicon-thumbs-up">点赞</span>
				</button>
				<button type="button" class="btn btn-default buttons">
					<span class="glyphicon glyphicon-star-empty">收藏</span>						
				</button>
				<button type="button" class="btn btn-default buttons">
					<span class="glyphicon glyphicon-new-window">转发</span>
				</button>
				<button type="button" class="btn btn-default buttons">
					<span class="glyphicon glyphicon-circle-arrow-down">下载</span>						
				</button>
			</div>
			<!--按钮结束-->
			<!--评论开始-->
			<div class="all-comments">
				<div class="all-comments-info">
					<a>所有评论 (*)</a>
					<div class="box">
						<form>
							<textarea placeholder="请输入您的评论" required=" "></textarea>
							<input type="submit" value="SEND">
						</form>
					</div>
					<div class="all-comments-buttons">
						<ul>
							<li>
								<a href="#" class="top">热门评论</a>
							</li>
							<li>
								<a href="#" class="top newest">最新评论</a>
							</li>
							<li>
								<a href="#" class="top my-comment">我的评论</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="media-grids">
					<div class="media">
						<h5>Marry Johne</h5>
						<div class="media-left">
							<a href="#">
							</a>
						</div>
						<div class="media-body">
							<p>Maecenas ultricies rhoncus tincidunt maecenas imperdiet ipsum id ex pretium hendrerit maecenas imperdiet ipsum id ex pretium hendrerit</p>
							<span>View all posts by :<a href="#"> Admin </a></span>
						</div>
					</div>
				</div>
			</div>
			<!--评论结束-->
		</div>
		<!--右侧开始-->
		<div class="col-md-4 single-right">
			<h3>关于作者</h3>
			<div id="author">
				<div id="author-left">
					<a><img src="images/c1.jpg" /></a>
				</div>
				<div id="author-right">
					<h4>姓名</h4>
					<p>个性签名</p>
					<button class="btn btn-default">
						<span class="glyphicon glyphicon-plus"></span>关注
					</button>
					<button class="btn btn-default">
						<span class="glyphicon glyphicon-envelope"></span>私信
					</button>
					
				</div>
			</div>
			<h3>向你推荐</h3>
			<div class="single-grid-right">
				<div class="single-right-grids">
					<div class="col-md-4 single-right-grid-left">
						<a href="single.html"><img src="images/r1.jpg" alt="" /></a>
					</div>
					<div class="col-md-8 single-right-grid-right">
						<a href="single.html" class="title"> Nullam interdum metus</a>
						<p class="author">
							<a href="#" class="author">John Maniya</a>
						</p>
						<p class="views">2,114,200 views</p>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
		<!--右侧结束-->
	</div>
</template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.25.0/DPlayer.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.25.0/DPlayer.min.js"></script>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
<script>
	export default {
		name: 'videoShow',
		data() {
			return {

			}
		}
	}
</script>
<script>
	var url = "不做 BUG 仔，必须 GET 的 IDEA 调试技巧.mp4";
	var danmakuId1 = md5(url);
	const dp = new DPlayer({
		container: document.getElementById('dplayer'),
		//自动播放
		autoplay: false,
		// 主题色
		theme: '#FADFA3',
		// 视频循环播放
		loop: false,
		lang: 'zh-cn',
		// 开启截图，如果开启，视频和视频封面需要开启跨域
		screenshot: false,
		// 开启热键
		hotkey: true,
		// 预加载，可选值: 'none', 'metadata', 'auto'
		preload: 'auto',
		// 在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
		//logo: 'logo.png',
		// 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
		volume: 0.7,
		// 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
		mutex: true,
		video: {
			//视频地址
			url: url,
			//视频封面
			//pic:"demo.jpg",
			// 缩略图
			//thumbnails: 'demo.jpg',
			//播放器类型
			type: 'auto'
		},
		//显示弹幕
		danmaku: {
			// 弹幕池id，必须唯一
			id: danmakuId1,
			// 彈幕接口
			api: 'http://apidp.purvavideha.cn/',
			// 弹幕后端验证 token
			//token: 'tokendemo',
			// 弹幕最大数量
			//maximum: 1000,
			// 额外外挂弹幕
			//addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
			// 弹幕用户名
			user: 'moff',
			// 弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%'
			bottom: '15%',
			// 海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效
			unlimited: true
		},
		// 自定义进度条提示点
		highlight: [{
				time: 30,
				text: '这是第 30 秒'
			},
			{
				time: 120,
				text: '这是 2 分钟'
			}
		]
	});
	// 弹出框
	function alerdat_back(text) {
		$(".alert_back").html(text).show();
		setTimeout(function() {
			$(".alert_back").fadeOut();
		}, 1200)
	}
	//秒转分秒
	function formatTime(seconds) {
		return [
				//            parseInt(seconds / 60 / 60),
				parseInt(seconds / 60 % 60),
				parseInt(seconds % 60)
			]
			.join(":")
			.replace(/\b(\d)\b/g, "0$1");
	}
</script>
<style scoped>
	.Dplayer_box {
				overflow: hidden;
				width: 680px;
				height: 456px;
				margin: 50px 50px 20px 50px;
				display: block;
				border-top: 1px solid #e5e9ef;
				border-bottom: 1px solid #e5e9ef;
				background-color: #f6f9fa
			}
			
			#buttons {
				margin: 0px 50px;
			}
			
			.buttons {
				margin-left: 70px;
			}
			
			#dplayer {
				background-size: 100% 100%;
				margin-top: 30px
			}
			
			.player_av {
				width: 680px;
				height: 100%;
				float: left;
				background: #000
			}
			#author,#author-right{
				    overflow: hidden;
			}
			#author-left a {
				width: 65px;
				height: 65px;
				display: inline-block;
				border-radius: 50%;
				-webkit-border-radius: 50%;
			}
			
			#author-left a img {
				width: 65px;
				height: 65px;
				display: inline-block;
				border-radius: 50%;
				-webkit-border-radius: 50%;
			}
			#author-left{
				float: left;
				margin: 10px;
			}
			#author-right{
				float: left;
				margin: 10px;
			}
</style>