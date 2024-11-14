function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}



const mobileBtn = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.querySelector('#hamburger-icon i');

// Ensure the mobile menu starts hidden
mobileMenu.classList.add('hidden');

mobileBtn.addEventListener('click', () => {
    // Open/hide mobile menu
    mobileMenu.classList.toggle('hidden');

    // Change mobile toggler icon on open/close
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenuIcon.classList.remove('fa-bars');
        mobileMenuIcon.classList.add('fa-xmark');
    } else {
        mobileMenuIcon.classList.remove('fa-xmark');
        mobileMenuIcon.classList.add('fa-bars');
    }
});
