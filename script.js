        // Loading screen functionality
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('loadingScreen').classList.add('hidden');
            }, 1500); // Increased to 1500ms for better user experience
        });
        
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Accordion functionality
        document.querySelectorAll('.accordion-item').forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', () => {
                const currentlyActive = document.querySelector('.accordion-item.active');
                
                if (currentlyActive && currentlyActive !== item) {
                    currentlyActive.classList.remove('active');
                    currentlyActive.querySelector('.accordion-content').style.maxHeight = null;
                }
                
                item.classList.toggle('active');
                
                const content = item.querySelector('.accordion-content');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }
            });
        });
        
        // Scroll animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };
        
        window.addEventListener('scroll', fadeInOnScroll);
        window.addEventListener('load', fadeInOnScroll);
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.style.padding = window.scrollY > 50 ? '1rem 0' : '1.25rem 0';
        });
        
        // Video Modal functionality (removed as videos now open in new tabs)
        
        // Carousel functionality
        let currentSlideIndex = 1;
        
        function changeSlide(direction) {
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.dot');
            
            // Remove active class from current slide and dot
            slides[currentSlideIndex - 1].classList.remove('active');
            dots[currentSlideIndex - 1].classList.remove('active');
            
            // Update slide index
            currentSlideIndex += direction;
            
            if (currentSlideIndex > slides.length) {
                currentSlideIndex = 1;
            }
            if (currentSlideIndex < 1) {
                currentSlideIndex = slides.length;
            }
            
            // Add active class to new slide and dot
            slides[currentSlideIndex - 1].classList.add('active');
            dots[currentSlideIndex - 1].classList.add('active');
        }
        
        function currentSlide(slideIndex) {
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.dot');
            
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Update current slide index
            currentSlideIndex = slideIndex;
            
            // Add active class to selected slide and dot
            slides[currentSlideIndex - 1].classList.add('active');
            dots[currentSlideIndex - 1].classList.add('active');
        }
        
        // Auto-advance carousel every 5 seconds
        setInterval(() => {
            changeSlide(1);
        }, 5000);

