# System Patterns: RenHjem Landing Page

## System Architecture

This project is a client-side rendered static website. It consists of:
*   `index.html`: The main HTML structure, including content for different sections and modal windows.
*   `style.css`: Stylesheets for visual presentation, including responsive design.
*   `script.js`: JavaScript for interactive elements, such as header scroll effects, language switching, and modal window functionality.
*   `sitemap.xml` and `robots.txt`: For SEO purposes.

## Key Technical Decisions

*   **Static Site:** Chosen for simplicity, performance, and low hosting costs.
*   **Vanilla JavaScript:** Used for interactivity to avoid framework overhead for a simple landing page.
*   **CSS Variables:** For consistent styling and easy theme management.
*   **Semantic HTML5:** For better accessibility and SEO.
*   **Multilingual Content:** Implemented using `data-lang-da` and `data-lang-en` attributes, managed by JavaScript.

## Design Patterns in Use

*   **Module Pattern (Implicit):** JavaScript code is encapsulated within a `DOMContentLoaded` listener, acting as a single module.
*   **Component-like Structure:** HTML sections (`#hero`, `#about`, `#services`, `#contact`) are treated as distinct components.
*   **State Management (Local Storage):** The selected language is stored in `localStorage` to persist user preference.
*   **Modal Dialogs:** Reusable pattern for booking and contact forms.

## Component Relationships

*   **Header:** Contains navigation links and language switcher. Interacts with `window.scrollY` for scroll effect.
*   **Sections:** Independent content blocks (`#hero`, `#about`, `#services`, `#contact`).
*   **Modals:** Triggered by buttons in the header and hero section. Managed by `script.js`.
*   **Language Switcher:** Modifies `innerHTML` of elements based on `data-lang` attributes.
