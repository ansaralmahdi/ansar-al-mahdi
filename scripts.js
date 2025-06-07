// لود منو
fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-placeholder').innerHTML = data;
        document.querySelectorAll('.menu-items a').forEach(link => {
            if (link.href === window.location.href) {
                link.style.color = '#0066cc';
                link.style.fontWeight = 'bold';
            }
            link.addEventListener('click', () => {
                document.body.classList.remove('menu-active');
            });
        });
    })
    .catch(error => console.error('خطا در لود منو:', error));

// باز و بسته کردن منو
function toggleMenu() {
    document.body.classList.toggle('menu-active');
}

// باز و بسته کردن زیرمنو
function toggleSubMenu(e) {
    e.preventDefault();
    const subMenu = e.target.nextElementSibling;
    subMenu.classList.toggle('active');
}

// بستن منو با کلیک خارج
document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-container') && !e.target.closest('.hamburger-menu')) {
        document.body.classList.remove('menu-active');
    }
});

// اسکرول گالری
function scrollGallery(direction) {
    let gallery = document.getElementById('gallery');
    let scrollAmount = 200;
    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// فیلتر گالری
function filterGallery(category) {
    document.querySelectorAll('.gallery-item').forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// فرم تماس (با EmailJS)
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ name, email, message, date: new Date().toLocaleString('fa-IR') });
    localStorage.setItem('messages', JSON.stringify(messages));

    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
    let downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "messages.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    alert('پیام ذخیره شد!');
    document.getElementById('contactForm').reset();
});
// جستجو
const contentItems = [
    { title: 'تاریخچه هیئت', text: 'هیئت قرآنی انصار المهدی در سال ۱۳۹۸...' },
    { title: 'برنامه‌های هفتگی', text: 'هر پنجشنبه محافل قرآنی...' },
    { title: 'درباره ما', text: 'هیئت قرآنی انصار المهدی با هدف نشر معارف...' }
];

document.getElementById('searchForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    let query = document.getElementById('searchQuery').value.toLowerCase();
    let results = contentItems.filter(item => 
        item.title.toLowerCase().includes(query) || item.text.toLowerCase().includes(query)
    );
    let resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = results.length ? 
        results.map(item => `<h3>${item.title}</h3><p>${item.text}</p>`).join('') : 
        'نتیجه‌ای یافت نشد.';
});
