}
document.querySelector('.ellipsis').addEventListener('click', function() {
       document.querySelector('.hidden-titles').style.display = 'block';
       this.style.display = 'none'; // مخفی کردن سه نقطه پس از کلیک
   });
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
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var query = document.getElementById('searchQuery').value.toLowerCase();
    var results = document.getElementById('searchResults');
    results.innerHTML = '';

    // مثال: جستجو در عناوین مقالات
    var articles = document.querySelectorAll('.article-list article h3');
    articles.forEach(function(article) {
        if (article.textContent.toLowerCase().includes(query)) {
            var resultItem = document.createElement('div');
            resultItem.textContent = article.textContent;
            results.appendChild(resultItem);
        }
    });
});
// جستجو
document.querySelector('#header .search button').addEventListener('click', function() {
    var query = document.querySelector('#header .search input').value;
    alert('جستجو برای: ' + query);
});
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
<script>
    function showContent(contentId) {
        // ۱. همه بخش‌ها را مخفی کن
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // ۲. بخش موردنظر را نمایش بده
        const activeSection = document.getElementById(contentId);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // ۳. منو را بعد از کلیک ببند (اختیاری)
        document.querySelector('.menu').classList.remove('active');
    }

    // نمایش صفحه اصلی به صورت پیشفرض
    window.onload = () => showContent('home');
</script>
