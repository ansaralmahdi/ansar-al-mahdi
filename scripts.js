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

    // ذخیره در localStorage
    let messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ name, email, message, date: new Date().toLocaleString('fa-IR') });
    localStorage.setItem('messages', JSON.stringify(messages));

    // ارسال به ایمیل با EmailJS
    emailjs.send('service_yi7vnpp', 'template_bi1l8qq', {
        from_name: name,
        from_email: email,
        message: message,
        date: new Date().toLocaleString('fa-IR')
    }).then(() => {
        alert('پیام شما با موفقیت ارسال شد!');
        document.getElementById('contactForm').reset();
    }).catch((error) => {
        alert('خطا در ارسال پیام. لطفاً دوباره امتحان کنید.');
        console.error('خطای EmailJS:', error);
    });

    // دانلود به‌صورت فایل JSON
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
    let downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "messages.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    console.log('پیام‌های ذخیره‌شده:', messages);
});

    // ذخیره در localStorage
    let messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ name, email, message, date: new Date().toLocaleString('fa-IR') });
    localStorage.setItem('messages', JSON.stringify(messages));

    // ارسال به ایمیل با EmailJS
    emailjs.send('service_yi7vnpp', 'template_bi1l8qq', {
        from_name: name,
        from_email: email,
        message: message,
        date: new Date().toLocaleString('fa-IR')
    }).then(() => {
        alert('پیام شما با موفقیت ارسال شد!');
        document.getElementById('contactForm').reset();
    }).catch((error) => {
        alert('خطا در ارسال پیام. لطفاً دوباره امتحان کنید.');
        console.error('خطای EmailJS:', error);
    });

    console.log('پیام‌های ذخیره‌شده:', messages);
});

    // برای تست موقت با localStorage
    let messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ name, email, message, date: new Date().toLocaleString('fa-IR') });
    localStorage.setItem('messages', JSON.stringify(messages));
    
    alert('پیام شما ذخیره شد! (برای ارسال واقعی، EmailJS یا سرور را تنظیم کنید)');
    document.getElementById('contactForm').reset();
    
    // نمایش پیام‌های ذخیره‌شده در کنسول (برای تست)
    console.log('پیام‌های ذخیره‌شده:', messages);
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
