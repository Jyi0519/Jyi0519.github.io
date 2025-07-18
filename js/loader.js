window.addEventListener('load', () => {
    // 等待所有资源（包括背景图）加载完成
    setTimeout(() => {
        const loader = document.getElementById('loader-container');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 300);
});

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});