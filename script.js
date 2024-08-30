// smoot scrolling for navigation links.


document.querySelectorAll('#navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// toggle navigation view for mobile view

const navbar = document.getElementById('navbar');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';
toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
});
document.body.insertBefore(toggleButton, navbar);

// simple slides shows for feature slides 