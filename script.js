document.addEventListener('DOMContentLoaded', () => {
    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- Language Switcher ---
    const translatableElements = document.querySelectorAll('[data-lang-da]');
    const langButtons = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('language') || 'da'; // Default to Danish

    const setLanguage = (lang) => {
        const langKey = `lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`; // Creates 'langDa' or 'langEn'
        
        translatableElements.forEach(el => {
            if (el.dataset[langKey]) {
                el.innerHTML = el.dataset[langKey];
            }
        });
        
        document.documentElement.lang = lang;
        
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${lang}`);
        });

        // Save the selected language to localStorage
        localStorage.setItem('language', lang);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.id.split('-')[1];
            setLanguage(lang);
        });
    });

    // Set language on initial load
    setLanguage(savedLang);

    // --- Modal Logic ---
    const bookingModal = document.getElementById('booking-modal');
    const contactModal = document.getElementById('contact-modal'); // Новое модальное окно контактов

    const openBookingModalBtn = document.querySelector('.button-primary'); // Кнопка "Get a Quote" в навигации
    const openContactModalBtn = document.getElementById('open-contact-modal-btn'); // Кнопка в секции Hero
    
    const closeBookingModalBtn = bookingModal.querySelector('.modal-close-btn');
    const closeContactModalBtn = contactModal ? contactModal.querySelector('.modal-close-btn') : null; // Проверка на существование

    const bookingForm = document.querySelector('.booking-form');

    const openModal = (modalElement) => modalElement.classList.add('active');
    const closeModal = (modalElement) => modalElement.classList.remove('active');

    console.log('bookingModal:', bookingModal);
    console.log('contactModal:', contactModal);
    console.log('openBookingModalBtn:', openBookingModalBtn);
    console.log('openContactModalBtn:', openContactModalBtn);
    console.log('closeBookingModalBtn:', closeBookingModalBtn);
    console.log('closeContactModalBtn:', closeContactModalBtn);

    // Логика для модального окна бронирования
    if (bookingModal && openBookingModalBtn && closeBookingModalBtn) {
        openBookingModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(bookingModal);
        });
        closeBookingModalBtn.addEventListener('click', () => closeModal(bookingModal));
        bookingModal.addEventListener('click', (event) => {
            if (event.target === bookingModal) {
                closeModal(bookingModal);
            }
        });
    }

    // Логика для модального окна контактов
    if (contactModal && openContactModalBtn && closeContactModalBtn) {
        openContactModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(contactModal);
        });
        closeContactModalBtn.addEventListener('click', () => closeModal(contactModal));
        contactModal.addEventListener('click', (event) => {
            if (event.target === contactModal) {
                closeModal(contactModal);
            }
        });
    }

    // Закрытие модальных окон по Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (bookingModal.classList.contains('active')) {
                closeModal(bookingModal);
            }
            if (contactModal && contactModal.classList.contains('active')) {
                closeModal(contactModal);
            }
        }
    });

    // Handle form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const squareMeters = document.getElementById('square-meters').value;

            console.log('Данные формы бронирования:');
            console.log('Имя:', name);
            console.log('E-mail:', email);
            console.log('Квадратные метры:', squareMeters);

            alert('Your request has been sent! We will contact you shortly.');
            closeModal(bookingModal);
            bookingForm.reset();
        });
    }
});
