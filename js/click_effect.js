// 页面点击特效 - 飘心动画
(function() {
    // 词汇数组
    const words = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    let wordIndex = 0;

    // 等待DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
        // 为页面添加点击事件
        document.body.addEventListener('click', function(e) {
            // 创建飘字元素
            const $word = document.createElement('span');
            $word.textContent = words[wordIndex];
            wordIndex = (wordIndex + 1) % words.length;

            // 设置样式
            $word.style.cssText = `
                z-index: 9999;
                position: absolute;
                font-weight: bold;
                color: #FF0000;
                top: ${e.pageY - 20}px;
                left: ${e.pageX}px;
                pointer-events: none;
                user-select: none;
                font-size: 16px;
            `;

            // 添加到页面
            document.body.appendChild($word);

            // 执行动画
            animateWord($word, e.pageY);
        });
    });

    // 动画函数
    function animateWord(element, startY) {
        // 设置初始位置和透明度
        let y = startY - 20;
        let opacity = 1;
        
        // 动画持续时间（毫秒）
        const duration = 3000;
        // 开始时间
        const startTime = Date.now();
        
        // 动画循环
        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // 计算当前位置和透明度
            y = startY - 20 - progress * 160;
            opacity = 1 - progress;
            
            // 更新元素样式
            element.style.top = `${y}px`;
            element.style.opacity = opacity;
            
            // 继续动画或结束
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                // 动画结束后移除元素
                element.remove();
            }
        }
        
        // 开始动画
        requestAnimationFrame(update);
    }

    // 延迟执行的函数（原代码功能）
    setTimeout(function() {
        const buryElements = document.querySelectorAll('.buryit');
        buryElements.forEach(el => el.removeAttribute('onclick'));
    }, 2000);
})();