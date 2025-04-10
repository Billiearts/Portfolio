// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for animations
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// Preload images for better performance
const images = [
    'images/logo.png',
    'images/Matriculatoin-149.jpg',
    'images/Cover - Flyer.jpg',
    'images/Jackbel Fabrics.jpg',
    'images/Abby\'s Luxe Zone.jpg',
    'images/Tombrown label review.jpg',
    'images/Optimistic Pulse Wear.jpg',
    'images/Ice kenkey delights.jpg',
    'images/peakpx.jpg'
];

images.forEach(image => {
    new Image().src = image;
});