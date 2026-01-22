/**
 * Medical Device Sales Representative Website
 * Interactive JavaScript functionality
 */

(function() {
    'use strict';

    // ============================================
    // Mobile Menu Toggle
    // ============================================

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isOpen = nav.classList.contains('mobile-open');
            
            if (isOpen) {
                nav.classList.remove('mobile-open');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            } else {
                nav.classList.add('mobile-open');
                mobileMenuToggle.classList.add('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
            }
        });

        // Close mobile menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('mobile-open');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ============================================
    // Smooth Scrolling for Navigation Links
    // ============================================

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') {
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Scrollspy - Highlight Active Section in Nav
    // ============================================

    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = Array.from(document.querySelectorAll('.nav-link'));

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 150; // Offset for header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    const linkHref = link.getAttribute('href');
                    if (linkHref === `#${sectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });

        // Handle hero section (top of page)
        if (window.scrollY < 100) {
            navLinksArray.forEach(link => {
                link.classList.remove('active');
            });
        }
    }

    // Throttle scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNavLink, 10);
    });

    // Initial call
    updateActiveNavLink();

    // ============================================
    // FAQ Accordion
    // ============================================

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const answer = this.nextElementSibling;

            // Close all other FAQ items
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                }
            });

            // Toggle current FAQ item
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                answer.classList.remove('active');
            } else {
                this.setAttribute('aria-expanded', 'true');
                answer.classList.add('active');
            }
        });
    });

    // ============================================
    // Contact Form Validation & Toast
    // ============================================

    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    function showToast(message) {
        if (toast && toastMessage) {
            toastMessage.textContent = message;
            toast.classList.add('show');

            setTimeout(function() {
                toast.classList.remove('show');
            }, 4000);
        }
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateForm(formData) {
        const errors = [];

        // Validate name
        if (!formData.get('name') || formData.get('name').trim().length < 2) {
            errors.push('Please enter your name (at least 2 characters)');
        }

        // Validate email
        const email = formData.get('email');
        if (!email || !validateEmail(email)) {
            errors.push('Please enter a valid email address');
        }

        // Validate message
        if (!formData.get('message') || formData.get('message').trim().length < 10) {
            errors.push('Please enter a message (at least 10 characters)');
        }

        return errors;
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const errors = validateForm(formData);

            if (errors.length > 0) {
                showToast(errors[0]);
                return;
            }

            // Show success message
            showToast('Thanks—message ready to send');

            // Reset form
            contactForm.reset();

            // In a real implementation, you would send the form data to a server here
            // For example:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     showToast('Message sent successfully!');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     showToast('Error sending message. Please try again.');
            // });
        });
    }

    // ============================================
    // Sticky Header Shadow Enhancement
    // ============================================

    const header = document.getElementById('header');

    function updateHeaderShadow() {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    }

    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateHeaderShadow, 10);
    });

    // Initial call
    updateHeaderShadow();

})();

