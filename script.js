/* ==========================================================================
   Responsive Navigation Menu (Toggle & Active Links)
   ========================================================================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Open Mobile Menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Close Mobile Menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// Update dynamic footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ==========================================================================
   Scroll-Based Active Navigation Highlight
   ========================================================================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active');
      } else {
        sectionsClass.classList.remove('active');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ==========================================================================
   Form Validation & Interactive Feedback
   ========================================================================== */
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const formStatus = document.getElementById('form-status');

// Helper function to show input error
function showError(input, errorElementId, message) {
  const parent = input.parentElement;
  parent.classList.add('invalid');
  const errorElement = document.getElementById(errorElementId);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

// Helper function to clear input error
function clearError(input, errorElementId) {
  const parent = input.parentElement;
  parent.classList.remove('invalid');
  const errorElement = document.getElementById(errorElementId);
  if (errorElement) {
    errorElement.textContent = '';
  }
}

// Simple email regex pattern
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Form Submit Event Handler
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'name-error', 'Please enter your name.');
    isValid = false;
  } else {
    clearError(nameInput, 'name-error');
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'email-error', 'Please enter your email.');
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'email-error', 'Please enter a valid email address.');
    isValid = false;
  } else {
    clearError(emailInput, 'email-error');
  }

  // Validate Subject
  if (subjectInput.value.trim() === '') {
    showError(subjectInput, 'subject-error', 'Please enter a subject.');
    isValid = false;
  } else {
    clearError(subjectInput, 'subject-error');
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    showError(messageInput, 'message-error', 'Please write a message.');
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, 'message-error', 'Message must be at least 10 characters.');
    isValid = false;
  } else {
    clearError(messageInput, 'message-error');
  }

  // Submission Simulation
  if (isValid) {
    formStatus.className = 'form-status success';
    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
    contactForm.reset();

    // Reset status message after 5 seconds
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);
  } else {
    formStatus.className = 'form-status error';
    formStatus.textContent = 'Please fix the errors above and try again.';
  }
});

// Clear errors on real-time typing
[nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
  input.addEventListener('input', () => {
    clearError(input, `${input.id}-error`);
  });
});