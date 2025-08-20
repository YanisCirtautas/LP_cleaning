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
                el.textContent = el.dataset[langKey];
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
    const modal = document.getElementById('booking-modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    const openModal = () => modal.classList.add('active');
    const closeModal = () => modal.classList.remove('active');

    if (modal && openModalBtn && closeModalBtn) {
        openModalBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        
        // Close modal when clicking on the overlay
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Close modal on Escape key press
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});