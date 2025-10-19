// Main JavaScript for CTRL Sports Landing Page

class WaitlistModal {
    constructor() {
        this.modal = document.getElementById('waitlistModal');
        this.closeBtn = document.getElementById('closeModal');
        this.init();
    }

    init() {
        // Check if modal was already shown in this session
        const modalShown = sessionStorage.getItem('waitlistModalShown');
        
        if (!modalShown) {
            // Show modal after a brief delay for better UX
            setTimeout(() => {
                this.show();
            }, 1000);
        }

        // Event listeners
        this.closeBtn.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });

        // Track when user clicks the waitlist button
        const waitlistBtn = this.modal.querySelector('.waitlist-button');
        if (waitlistBtn) {
            waitlistBtn.addEventListener('click', () => {
                sessionStorage.setItem('waitlistModalShown', 'true');
                this.close();
            });
        }
    }

    show() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        sessionStorage.setItem('waitlistModalShown', 'true');
    }
}

class CTRLLandingPage {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 5; // Updated from 6 to 5 (removed 4.jpg)
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupImageSlider();
        this.setupSmoothScrolling();
        this.addEventListeners();
    }

    // Intersection Observer for scroll animations and video autoplay
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class for animations
                    if (entry.target.classList.contains('slide-up')) {
                        entry.target.classList.add('visible');
                    }

                    // Handle video autoplay for all videos
                    const video = entry.target.querySelector('video');
                    if (video) {
                        video.play().catch(e => console.log('Video autoplay failed:', e));
                    }
                } else {
                    // Pause videos when out of view (except hero video)
                    const video = entry.target.querySelector('video');
                    if (video && !video.classList.contains('hero-video')) {
                        video.pause();
                    }
                }
            });
        }, observerOptions);

        // Observe all sections with animations
        document.querySelectorAll('.slide-up').forEach(section => {
            observer.observe(section);
        });

        // Observe video sections for autoplay
        document.querySelectorAll('.fullscreen-video-section, .mini-video-section, .video-section').forEach(section => {
            observer.observe(section);
        });
    }

    // Setup image slider
    setupImageSlider() {
        const sliderTrack = document.querySelector('.slider-track');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dotsContainer = document.querySelector('.slider-dots');

        if (!sliderTrack || !prevBtn || !nextBtn || !dotsContainer) {
            console.error('Slider elements not found');
            return;
        }

        // Create dots
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        // Button event listeners
        prevBtn.addEventListener('click', () => this.prevSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        // Touch/swipe support for mobile
        this.setupTouchControls(sliderTrack);

        // Auto-advance slider
        this.setupAutoSlide();
    }

    // Touch controls for mobile slider
    setupTouchControls(sliderTrack) {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        sliderTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        sliderTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        sliderTrack.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diffX = startX - currentX;
            const threshold = 50;

            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }

    // Auto-advance slider
    setupAutoSlide() {
        setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }

    // Slider navigation methods
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateSlider();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlider();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlider();
    }

    updateSlider() {
        const sliderTrack = document.querySelector('.slider-track');
        const dots = document.querySelectorAll('.dot');

        if (!sliderTrack) return;

        // Move slider
        sliderTrack.style.transform = `translateX(-${this.currentSlide * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    // Smooth scrolling for anchor links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Additional event listeners
    addEventListeners() {
        // Parallax effect for hero video
        window.addEventListener('scroll', this.throttle(() => {
            const scrolled = window.pageYOffset;
            const heroVideo = document.querySelector('.hero-video');
            if (heroVideo) {
                heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }, 16));

        // Handle video errors gracefully
        document.querySelectorAll('video').forEach(video => {            
            video.addEventListener('error', (e) => {
                console.error('Video error:', e);
                const container = video.closest('.fullscreen-video-section, .mini-video-section, .hero-section, .video-section');
                if (container && !container.classList.contains('hero-section')) {
                    container.style.display = 'none';
                }
            });

            video.addEventListener('loadeddata', () => {
                console.log('Video loaded successfully:', video.src);
            });
        });

        // Optimize performance on resize
        window.addEventListener('resize', this.throttle(() => {
            this.updateSlider();
        }, 250));
    }

    // Throttle function for performance
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Enhanced loading and initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the waitlist modal
    new WaitlistModal();

    // Initialize the landing page
    new CTRLLandingPage();

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Preload all videos
    const criticalVideos = ['vid/pro.mp4', 'vid/cam.mp4', 'vid/mini.mp4', 'vid/cv.mp4'];
    criticalVideos.forEach(src => {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = src;
        video.addEventListener('error', () => {
            console.warn(`Failed to preload: ${src}`);
        });
        video.addEventListener('loadedmetadata', () => {
            console.log(`Preloaded: ${src}`);
        });
    });

    // Log page initialization
    console.log('CTRL Landing Page initialized');
    console.log('Total slides in slider:', 5);
    console.log('Waitlist modal ready');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    const videos = document.querySelectorAll('video');
    if (document.hidden) {
        videos.forEach(video => {
            if (!video.paused) {
                video.dataset.wasPlaying = 'true';
                video.pause();
            }
        });
    } else {
        videos.forEach(video => {
            if (video.dataset.wasPlaying === 'true') {
                video.play().catch(e => console.log('Resume play failed:', e));
                delete video.dataset.wasPlaying;
            }
        });
    }
});

// Export for potential external use
window.CTRLLandingPage = CTRLLandingPage;
window.WaitlistModal = WaitlistModal;