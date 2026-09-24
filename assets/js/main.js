/**
 * Ayush Singh - Portfolio Website Scripts
 * Features:
 * - Theme Switcher (Dark & Light Mode with localStorage persistence)
 * - Mobile Navigation Drawer
 * - Scroll-triggered Counting Animation
 * - Scroll Reveal Animations
 * - Active Nav Link Highlighting
 * - One-click Copy to Clipboard
 * - Contact Form Handler
 */

(function () {
  'use strict';

  /* ==========================================================================
     Theme Toggle (Dark & Light Mode)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIconSun   = document.getElementById('themeIconSun');
  const themeIconMoon  = document.getElementById('themeIconMoon');
  const rootHtml       = document.documentElement;

  const setTheme = (theme) => {
    rootHtml.setAttribute('data-theme', theme);
    localStorage.setItem('ayush_theme', theme);
    if (themeIconSun && themeIconMoon) {
      if (theme === 'light') {
        themeIconSun.style.display = 'block';
        themeIconMoon.style.display = 'none';
      } else {
        themeIconSun.style.display = 'none';
        themeIconMoon.style.display = 'block';
      }
    }
  };

  const savedTheme = localStorage.getItem('ayush_theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = rootHtml.getAttribute('data-theme');
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  /* ==========================================================================
     Mobile Drawer Menu
     ========================================================================== */
  const mobileBtn    = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks  = document.querySelectorAll('.mobile-link');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     Scroll Reveal Animations (IntersectionObserver)
     ========================================================================== */
  const reveals = document.querySelectorAll('.reveal-elem');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     Counter Animation for Metrics
     ========================================================================== */
  const metricNumbers = document.querySelectorAll('.metric-number[data-target]');
  const runCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    const step = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
      const current = Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    metricNumbers.forEach(el => counterObserver.observe(el));
  } else {
    metricNumbers.forEach(el => {
      const target = el.getAttribute('data-target');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      el.textContent = prefix + target + suffix;
    });
  }

  /* ==========================================================================
     Active Nav Link Highlight on Scroll
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (window.scrollY >= secTop) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
  }, { passive: true });

})();

/* ==========================================================================
   Copy to Clipboard Utility (Global)
   ========================================================================== */
function copyText(text, btn) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
      setTimeout(() => {
        btn.innerHTML = originalHtml;
      }, 2000);
    });
  }
}

/* ==========================================================================
   Interactive Form Submission (Global)
   ========================================================================== */
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('senderName').value;
  const email = document.getElementById('senderEmail').value;
  const subject = document.getElementById('senderSubject').value;
  const message = document.getElementById('senderMessage').value;
  const statusBox = document.getElementById('formStatus');

  // Trigger mailto link to direct to Ayush's email
  const mailtoUrl = `mailto:ayushsingh.zip@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
  window.location.href = mailtoUrl;

  // Visual feedback in UI
  if (statusBox) {
    statusBox.className = 'form-status success';
    statusBox.innerHTML = `✓ Thank you, ${name}! Your email client has been opened to send your message to <strong>ayushsingh.zip@gmail.com</strong>.`;
  }
  document.getElementById('contactForm').reset();
}
