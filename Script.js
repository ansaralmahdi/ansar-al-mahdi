document.addEventListener("DOMContentLoaded", function() {
    alert("به سایت من خوش آمدید!");
});
<script>
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
</script>
// فعال‌سازی Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});
