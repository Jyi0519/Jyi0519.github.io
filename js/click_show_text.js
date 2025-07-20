// 页面点击特效 - 随机颜色飘字动画
(function() {
    // 词汇数组
    const words = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    let wordIndex = 0;

    // 随机颜色生成器
    function getRandomColor() {
        // 生成明亮的颜色（避免深色看不清）
        const hue = Math.floor(Math.random() * 360); // 色调 0-360
        const saturation = 80 + Math.floor(Math.random() * 20); // 饱和度 80-100%
        const lightness = 40 + Math.floor(Math.random() * 30); // 亮度 40-70%
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    // 等待DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
        // 为页面添加点击事件
        document.body.addEventListener('click', function(e) {
            // 创建飘字元素
            const $word = document.createElement('span');
            $word.textContent = words[wordIndex];
            wordIndex = (wordIndex + 1) % words.length;

            // 设置样式（颜色随机）
            $word.style.cssText = `
                z-index: 9999;
                position: absolute;
                font-weight: bold;
                color: ${getRandomColor()};
                top: ${e.pageY - 20}px;
                left: ${e.pageX}px;
                pointer-events: none;
                user-select: none;
                font-size: 16px;
                text-shadow: 0 0 3px rgba(0,0,0,0.3); /* 添加文字阴影增强可读性 */
            `;

            // 添加到页面
            document.body.appendChild($word);

            // 执行动画
            animateWord($word, e.pageY);
        });
    });

    // 动画函数
    function animateWord(element, startY) {
        let y = startY - 20;
        let opacity = 1;
        const duration = 3000;
        const startTime = Date.now();

        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            y = startY - 20 - progress * 160;
            opacity = 1 - progress;
            
            element.style.top = `${y}px`;
            element.style.opacity = opacity;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.remove();
            }
        }
        
        requestAnimationFrame(update);
    }

    setTimeout(function() {
        document.querySelectorAll('.buryit').forEach(el => el.removeAttribute('onclick'));
    }, 2000);
})();