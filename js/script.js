const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const form = document.querySelector("form");
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

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


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Собираем данные из формы
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), 
        });

        if (response.ok) {
            alert('Email sent successfully!');
            form.reset();
        } else {
            const errorData = await response.json();
            alert(`Failed to send email: ${errorData.error || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});





