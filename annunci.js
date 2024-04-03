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

    // creazione filtro per categorie
    let categoryWrapper = document.querySelector('#categoryWrapper');
   
    function setCategory(params) {

        let category = data.map((annuncio)=> annuncio.category);
        let uniqueCategory = [];

        category.forEach((category)=> {
            if (!uniqueCategory.includes(category) ) {
                uniqueCategory.push(category);
            }
        });

        uniqueCategory.forEach((category)=> {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="category" id="${category}">
            <label class="form-check-label" for="${category}">
              ${category}
            </label>
            `;
            categoryWrapper.appendChild(div);
        });
    }
    setCategory();



    // creazione card con gli annunci

    let cardWrapper = document.querySelector('#cardWrapper');

    function showCards(card) {
        card.sort((a,b) => a.price - b.price);
        cardWrapper.innerHTML = '';

        card.forEach((annuncio) => {
            let div = document.createElement('div');
            div.classList.add('card', 'rounded-0', 'p-0', 'mb-3');
            div.style.width = '300px';
            div.innerHTML = `
            <img src="${annuncio.image}" class="card-img-top" alt="articolo 1">
            <div class="card-body">
              <h5 class="card-title">${annuncio.name}</h5>
              <p class="card-text">${annuncio.category}</p>
              <p class="card-text">${annuncio.price}</p>
              <a href="#" class="btn btn-custom">Aggiungi</a>
            </div>
            `;
            cardWrapper.appendChild(div);
        });
    }
    showCards(data);



    // creiamo i filti per le nostre card

    // input radio
    let radios = document.querySelectorAll('.form-check-input');
    
    
    function filterByCategory() {
        let checked = Array.from(radios).find((button) => button.checked);
        let categoria = checked.id;

        if (categoria != 'all') {
            let filtered = data.filter((annuncio) => annuncio.category == categoria);
            showCards(filtered);
        } else {
            showCards(data);
        };
    }
    filterByCategory();

    radios.forEach((button)=> {
        button.addEventListener('click', ()=> {
            filterByCategory();
        });
    });



// end of fetch
});