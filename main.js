
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
            createInterval(1000, firtsNumber, 0.2);
            createInterval(500, secondNumber, 0.2);
            createInterval(99, thirthNumber, 10)
            check = true;
        }
    })
});

observer.observe(firtsNumber);

// sezione swiper js


// sezione reviews

let userName = document.querySelector('#userName');
let userTitle = document.querySelector('#userTitle');
let userDescription = document.querySelector('#userDescription');
let swiperWrapper = document.querySelector('.swiper-wrapper');
let btnRewview = document.querySelector('#btnRewview');

let reviews = [
    {nome : "ste", title : "ciao", description : "molto bello"},
    {nome : "andrea", title : "buongiorno", description : "stupendo"},
    {nome : "silvia", title : "splendido", description : "ottimo sito"},
    {nome : "paola", title : "brutto", description : "spedizione in ritardo"},
];

function generateCard() {
    reviews.forEach((review) => {

        console.log(review);

        let container = document.createElement('div');
        container.classList.add('swiper-slide');
        container.innerHTML = `
        <div class="title" data-swiper-parallax="-300">${review.nome}</div>
        <div class="subtitle" data-swiper-parallax="-200">${review.title}</div>
        <div class="text" data-swiper-parallax="-100">
            <p>
              ${review.description}
            </p>
        </div>
        `;
    
        swiperWrapper.appendChild(container);
    
    });
}

generateCard();

btnRewview.addEventListener('click', () => {
    swiperWrapper.innerHTML= '';
    reviews.push({nome : userName.value, title : userTitle.value, description : userDescription.value});
    generateCard();
    userName.value = '';
    userTitle.value = '';
    userDescription.value = '';
    swiper.update();
});


    const swiper = new Swiper(".swiper", {
        speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: '.swiper-scrollbar',
          },
      });
    

