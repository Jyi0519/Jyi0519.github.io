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