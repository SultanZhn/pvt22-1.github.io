const dishData = [
{   
    src: 'img/product-1.jpg',
    title: 'DOUBLE CHEESE PIZZA',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    price: '$15.30',
    category: 'BURGERS'
},
{   
    src: 'img/product-2.jpg',
    title: 'SEAFOOD',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    price: '$23.99',
    category: 'STEAKS'
},
{   
    src: 'img/product-3.png',
    title: 'DOUBLE MAC BURGER',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    price: '$13.80',
    category: 'SALADS'
},
{   
    src: 'img/product-4.jpg',
    title: 'PASTA',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    price: '$16.99',
    category: 'PASTS'
},
{   
    src: 'img/product-5.jpg',
    title: 'BEEF CHEESE BURGER',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    price: '$11.50',
    category: 'BURGERS'
},
{   
    src: 'img/product-6.jpg',
    title: 'GRAND ITALIANO PIZZA',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    price: '$21.30',
    category: 'PIZZAS'
},
{   
    src: 'img/product-7.jpg',
    title: 'LEMONADE',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    price: '$5.00',
    category: 'DRINKS'
},
{   
    src: 'img/product-8.jpg',
    title: 'CHICKEN BURGER',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    price: '$14.35',
    category: 'DESERTS'
},
]

let menuLinks = document.getElementById('menu-links')
let menuCard = document.getElementById('menu-grid')

let dishCategory = []
for(let dish of dishData){
    dishCategory.push(dish.category)
}
dishCategory = [...new Set(dishCategory)]

let menuOutput = `<li><button onclick="filterItem('ALL')" id="active">ALL</button></li>`
for(let dish of dishCategory){
    menuOutput += `
        <li><button onclick="filterItem('${dish}')">${dish}</button></li>
    `
}

menuLinks.innerHTML = menuOutput

let menuOutputItem = ``
for(let dish of dishData){
    menuOutputItem += `
    <div class="menu_grid_card">
        <img src="${dish.src}" alt="">
        <div class="menu_items">
            <h3>${dish.title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="price">${dish.price}</p>
        </div>
    </div>
    `
}

menuCard.innerHTML = menuOutputItem

function filterItem(categ){
    let outputFilter = ``
    for(let dish of dishData){
        if(categ == dish.category){
            outputFilter += `
                <div class="menu_grid_card">
                    <img src="${dish.src}" alt="">
                    <div class="menu_items">
                        <h3>${dish.title}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p class="price">${dish.price}</p>
                    </div>
                </div>
                `
        }else if(categ == 'ALL'){
            outputFilter += `
                <div class="menu_grid_card">
                    <img src="${dish.src}" alt="">
                    <div class="menu_items">
                        <h3>${dish.title}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p class="price">${dish.price}</p>
                    </div>
                </div>
                `
        }
    }

    menuCard.innerHTML = outputFilter
}