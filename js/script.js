const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }
});

}