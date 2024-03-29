let myNavbar = document.querySelector('#myNavbar');
let logoCustom = document.querySelector('#logo-custom');
let links = document.querySelectorAll('.nav-link');
let hamburger = document.querySelector('#hamburger');

// effetto onscroll, cambia la navbar e i vari link
window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if (scrolled > 0) {
        myNavbar.classList.add('nav-scroll');
        logoCustom.classList.add('logo-custom');

        links.forEach(link => {
            link.style.color = 'var(--white)';
            hamburger.style.color = 'var(--white)';
            link.addEventListener('mouseenter', () => {
                link.style.color = 'var(--gold)';
            })
            link.addEventListener('mouseleave', () => {
                link.style.color = 'var(--white)';
            })
        })

    } else {
        myNavbar.classList.remove('nav-scroll')
        logoCustom.classList.remove('logo-custom');
        hamburger.style.color = 'var(--black)';
        links.forEach(link => {
            link.style.color = 'var(--black)';
            link.addEventListener('mouseenter', () => {
                link.style.color = 'var(--gold)';
            })
            link.addEventListener('mouseleave', () => {
                link.style.color = 'var(--black)';
            })
        })
    }
});


// collegamento fetch al nostro file json

fetch('./annunci.json').then((response) => response.json()).then((data)=>{
    console.log(data);

    




});