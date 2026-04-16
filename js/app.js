/**
 * РАЗЪЁМАГРО — Main Application Script
 * GSAP animations, scroll effects, interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // ========================================
    // THEME TOGGLE
    // ========================================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('razemagro-theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply theme
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    }
    
    // Theme toggle handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = html.getAttribute('data-theme') === 'dark';
            if (isDark) {
                html.removeAttribute('data-theme');
                localStorage.setItem('razemagro-theme', 'light');
            } else {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('razemagro-theme', 'dark');
            }
        });
    }
    
    // ========================================
    // GSAP & SCROLLTRIGGER SETUP
    // ========================================
    gsap.registerPlugin(ScrollTrigger);
    
    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', { passive: true }, (e) => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ========================================
    // PROGRESS BAR
    // ========================================
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', { passive: true }, () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
    // ========================================
    // MOBILE MENU
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // ========================================
    // HERO ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        // Hero parallax background
        gsap.to('.hero-img', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
        
        // Hero text animations
        const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        
        heroTl
            .from('.hero-title', {
                y: 60,
                opacity: 0,
                duration: 1,
                delay: 0.3
            })
            .from('.hero-subtitle', {
                y: 40,
                opacity: 0,
                duration: 0.8
            }, '-=0.5')
            .from('.hero-buttons .btn', {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15
            }, '-=0.4')
            .from('.hero-scroll', {
                y: 20,
                opacity: 0,
                duration: 0.6
            }, '-=0.2');
    }
    
    // ========================================
    // PROBLEM SECTION ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        gsap.from('.problem-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.problem-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }
    
    // ========================================
    // SOLUTION SECTION ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        gsap.from('.solution-content', {
            x: -60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.solution',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.from('.solution-visual', {
            x: 60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.solution',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
    }
    
    // ========================================
    // HOW IT WORKS ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        // Step cards animation
        gsap.from('.step-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.steps-grid',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Progress line animation (desktop only)
        const stepsProgress = document.querySelector('.steps-progress');
        if (stepsProgress && window.innerWidth >= 1024) {
            gsap.to(stepsProgress, {
                width: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.steps-grid',
                    start: 'top 60%',
                    end: 'bottom 60%',
                    scrub: 1
                }
            });
        }
    }
    
    // ========================================
    // ADVANTAGES SECTION ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        gsap.from('.advantage-card', {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.advantages-grid',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });
    }
    
    // ========================================
    // PRODUCTION SECTION ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        gsap.from('.production-image-wrapper', {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.production',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.from('.production-content', {
            x: 60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.production',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Create particles for production section
        createParticles();
    }
    
    // ========================================
    // PRODUCT ACTION PARALLAX
    // ========================================
    if (!prefersReducedMotion) {
        gsap.to('.product-action-img', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.product-action',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
        
        gsap.from('.product-action-content', {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.product-action',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });
    }
    
    // ========================================
    // COMMERCIALIZATION COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('.market-number');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        const decimals = parseInt(counter.dataset.decimals) || 0;
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 85%',
            onEnter: () => {
                animateCounter(counter, target, decimals);
            },
            once: true
        });
    });
    
    function animateCounter(element, target, decimals) {
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (easeOutExpo)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = start + (target - start) * easeProgress;
            
            element.textContent = current.toFixed(decimals);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    if (!prefersReducedMotion) {
        gsap.from('.market-card', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.market-grid',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.from('.market-stat', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.market-stats',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    }
    
    // ========================================
    // TEAM SECTION ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        gsap.from('.team-card', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.team',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
    }
    
    // ========================================
    // PARTNERS SECTION ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        gsap.from('.partner-card', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.partners-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.from('.partners-support', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.partners',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
    }
    
    // ========================================
    // CTA SECTION ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        gsap.from('.cta-title', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.from('.cta-text', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.from('.btn-cta', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.from('.contact-card', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contacts-grid',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    }
    
    // ========================================
    // SECTION HEADER ANIMATIONS
    // ========================================
    if (!prefersReducedMotion) {
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }
    
    // ========================================
    // PARTICLES FOR PRODUCTION SECTION
    // ========================================
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        
        const particleCount = window.innerWidth < 768 ? 10 : 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 20 + 10}px;
                background: linear-gradient(to bottom, rgba(245, 158, 11, 0.8), transparent);
                border-radius: 2px;
                left: ${Math.random() * 100}%;
                top: -20px;
                pointer-events: none;
            `;
            container.appendChild(particle);
            
            gsap.to(particle, {
                y: '100%',
                x: `+=${Math.random() * 50 - 25}`,
                rotation: Math.random() * 360,
                opacity: 0,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                delay: Math.random() * 3,
                ease: 'power1.out'
            });
        }
    }
    
    // ========================================
    // BUTTON RIPPLE EFFECT
    // ========================================
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.cssText = `
                position: absolute;
                width: 0;
                height: 0;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            gsap.to(ripple, {
                width: 200,
                height: 200,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => ripple.remove()
            });
        });
    });
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // LAZY LOADING FOR IMAGES
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // INITIAL REVEAL
    // ========================================
    document.body.style.opacity = '1';
});

// Window resize handler for responsive animations
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
