# Responsive Personal Portfolio Website

A clean, modern, and accessible personal portfolio website built with semantic HTML5, CSS3 (Flexbox & Grid), and vanilla JavaScript.

---

## 📌 Project Overview
The goal of this project is to create an interactive, responsive portfolio website that highlights a developer's profile, technical skillset, past experience, featured projects, and contact channels. It is designed to work seamlessly across mobile phones, tablets, and desktop displays.

---

## 🛠️ Tools & Technologies
- **HTML5:** Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Custom variables, CSS Grid, Flexbox, media queries for responsive layouts, transitions, and hover effects.
- **JavaScript (ES6):** Mobile navigation drawer toggling, dynamic scroll spy, and real-time form validation.
- **Font Awesome:** Icons for skills, contact methods, and social profiles.
- **Google Fonts:** Clean typography using *Inter*.

---

## 🚀 Deliverables & Features
1. **Responsive Header & Navigation:**
   - Sticky navbar with brand logo.
   - Hamburger slide-out drawer on mobile screens.
   - Active section indicator dynamically highlighting current scroll position.
2. **Hero / Home Section:**
   - Greeting, title, brief bio, CTA buttons, and social media links.
3. **About Me Section:**
   - Professional bio accompanied by milestone badges (experience, project count).
4. **Skills Section:**
   - Grid layout showcasing core competencies (HTML, CSS, JS, React, Node, Git).
5. **Experience & Education Timeline:**
   - Clear chronological vertical timeline detailing academic background and employment history.
6. **Featured Projects:**
   - Multi-column project cards with tag lists, descriptions, and direct external links.
7. **Interactive Contact Form:**
   - Client-side validation for required fields, email format regex, and minimum message length.
   - User feedback messages on error or success.
8. **Footer:**
   - Automated copyright year calculation and quick back-to-top navigation.

---

## 📐 Approach & Architecture

### 1. Semantic Structure (HTML5)
- Every major block of content is wrapped in semantic tags to provide an accessible, screen-reader-friendly structure and optimize SEO.

### 2. Mobile-First & Flexible Layouts (CSS)
- Used CSS Grid (`repeat(auto-fit, minmax(...))`) for skills and project cards so items wrap naturally across screen sizes without hardcoded breakpoints.
- Implemented Flexbox for navigation, headers, and hero alignment.
- Media queries target breakpoints at `992px` (tablets/laptops) and `768px` (mobile devices).

### 3. Progressive Enhancement (JavaScript)
- Navigation and form validation function independently without external bulky libraries.
- Form inputs validate both on form submission and on dynamic `input` changes to immediately guide the user.

---

## 🎯 Outcomes
- **Cross-Device Usability:** Tested and verified on mobile screens (<768px), tablets (768px–992px), and desktop displays (>992px).
- **Clean User Experience:** Intuitive navigation, high contrast text for readability, and clear interactive feedback states on buttons and forms.
- **Performance:** Lightweight footprint with zero third-party framework dependencies.

---

## 📂 File Structure
```text
portfolio/
│
├── index.html        # Semantic HTML structure & content
├── style.css         # Styling, CSS variables, & responsive media queries
├── script.js         # Navigation menu & form validation
└── README.md         # Documentation, design approach, & project summary