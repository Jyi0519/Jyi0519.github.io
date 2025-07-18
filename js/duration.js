// 网站建立时间（使用ISO格式，修改为你的实际建站日期）
const startDate = new Date("2025-07-18T12:00:00");

// 补零函数（兼容不支持padStart的旧浏览器）
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

function createTime() {
    const now = new Date();
    const elapsed = now - startDate;

    // 计算各时间单位
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    // 格式化为两位数
    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(seconds);

    // 更新DOM（使用textContent而非innerHTML，避免XSS风险）
    const timeDateEl = document.getElementById("timeDate");
    const timesEl = document.getElementById("times");
    
    if (timeDateEl) timeDateEl.textContent = `本站已在夹缝中生存 ${days} 天 `;
    if (timesEl) timesEl.textContent = `${formattedHours} 小时 ${formattedMinutes} 分 ${formattedSeconds} 秒`;
}

// 页面加载后立即执行一次
document.addEventListener('DOMContentLoaded', () => {
    createTime();
    // 每秒更新一次（降低频率，减少性能消耗）
    setInterval(createTime, 1000);
});