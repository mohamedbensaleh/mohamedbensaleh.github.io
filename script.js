// Smooth Scroll for Menu Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Mobile Menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close Menu When Clicking Outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target) || menuIcon.contains(event.target);
    if (!isClickInsideMenu && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Close Menu When a Link is Clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

// Toggle Theme
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Refresh Page on Profile Photo Click
const profilePhoto = document.querySelector('.profile-photo');
profilePhoto.addEventListener('click', () => {
    window.location.reload();
});
