document.addEventListener('DOMContentLoaded', () => {
    // 1. Переключение тёмной и светлой темы
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    themeToggleBtn?.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-bs-theme', newTheme);
        themeIcon.className = newTheme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
    });

    // 2. Модальное окно просмотра изображений
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', (event) => {
            const triggerEl = event.relatedTarget;
            const src = triggerEl.getAttribute('data-src');
            const title = triggerEl.getAttribute('data-title');

            document.getElementById('modalImage').src = src;
            document.getElementById('modalTitle').textContent = title;
        });
    }

    // 3. Фильтрация карточек по категориям
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.classList.add('animate-fade');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});