document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent!');
        form.reset();
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});