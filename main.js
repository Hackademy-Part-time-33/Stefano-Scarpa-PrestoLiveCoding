
let myNavbar = document.querySelector('#myNavbar');
let logoCustom = document.querySelector('#logo-custom');
let links = document.querySelectorAll('.nav-link');

// effetto onscroll, cambia la navbar e i vari link
window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if (scrolled > 0) {
        myNavbar.classList.add('nav-scroll');
        logoCustom.classList.add('logo-custom');

        links.forEach(link => {
            link.style.color = 'var(--white)';
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


// cominciamo a fare il conteggio

let firtsNumber = document.querySelector('#firtsNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirthNumber = document.querySelector('#thirthNumber');

function createInterval(number, element, time) {
    let count = 0;
    let interval = setInterval(() => {
        if (count < number) {
            count++
            element.innerHTML = count;
        } else {
            clearInterval(interval);
        }
    }, time)
};


let check = false;

let observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        if (el.isIntersecting && check == false) {
            createInterval(1000, firtsNumber, 5);
            createInterval(500, secondNumber, 5);
            createInterval(99, thirthNumber, 10)
            check = true;
        }
    })
});

observer.observe(firtsNumber);