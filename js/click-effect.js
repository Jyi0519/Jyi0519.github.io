// 页面点击特效 - 随机颜色飘字动画
(function() {
    const words = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    let wordIndex = 0;

    // 改用RGB生成随机亮色（避免深色，确保可见）
    function getRandomColor() {
        // 生成 150-255 之间的RGB值（保证亮度）
        const r = 150 + Math.floor(Math.random() * 106);
        const g = 150 + Math.floor(Math.random() * 106);
        const b = 150 + Math.floor(Math.random() * 106);
        return `rgb(${r}, ${g}, ${b})`;
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.body.addEventListener('click', function(e) {
            const $word = document.createElement('span');
            $word.textContent = words[wordIndex];
            wordIndex = (wordIndex + 1) % words.length;

            $word.style.cssText = `
                z-index: 9999;
                position: absolute;
                font-weight: bold;
                color: ${getRandomColor()}; /* 使用RGB颜色 */
                top: ${e.pageY - 20}px;
                left: ${e.pageX}px;
                pointer-events: none;
                user-select: none;
                font-size: 16px;
                text-shadow: 0 0 3px rgba(0,0,0,0.3);
            `;

            document.body.appendChild($word);
            animateWord($word, e.pageY);
        });
    });

    function animateWord(element, startY) {
        let y = startY - 20, opacity = 1;
        const duration = 3000, startTime = Date.now();

        function update() {
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            y = startY - 20 - progress * 160;
            opacity = 1 - progress;
            element.style.top = `${y}px`;
            element.style.opacity = opacity;
            progress < 1 ? requestAnimationFrame(update) : element.remove();
        }
        requestAnimationFrame(update);
    }

    setTimeout(() => {
        document.querySelectorAll('.buryit').forEach(el => el.removeAttribute('onclick'));
    }, 2000);
})();