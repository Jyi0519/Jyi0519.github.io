// 卡片滚动动画
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.index-card');

  if (cards.length) {
    document.querySelector('.row').style.overflow = 'hidden';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const state = entry.isIntersecting ? 1 : 0;
        entry.target.style.setProperty('--state', state);
      });
    }, {
      rootMargin: '0px 0px -10% 0px', // 卡片进入视口10%时触发
    });
    
    cards.forEach(card => {
      observer.observe(card);
    });
  }
});