const Pizzas = [
    {
        id: 1, 
        nombre: "HUEVO DURO", 
        ingredientes: ["muzarella", "huevo duro", "oregano", "aceitunas"], 
        precio: 700, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-americana.jpg?fit=1000%2C1000&ssl=1'
    },
    {
        id: 2, 
        nombre: "FUGAZZETA", 
        ingredientes: ["muzarella", "tomate", "oregano", "aceitunas"], 
        precio: 650, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-fugazzeta.jpg?fit=1000%2C1000&ssl=1'
    }, 
    {
        id: 3, 
        nombre: "MUZARELLA", 
        ingredientes: ["muzarella", "oregano", "aceitunas"], 
        precio: 550, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-muzzarella-1.jpg?fit=1000%2C1000&ssl=1'
    },
    {
        id: 4, 
        nombre: "NAPOLITANA", 
        ingredientes: ["muzarella", "tomate", "oregano", "aceitunas"], 
        precio: 800, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-napolitana.jpg?fit=1000%2C1000&ssl=1'
    },
    {
        id: 5, 
        nombre: "CALABREZA", 
        ingredientes: ["muzarella", "longaniza", "oregano"], 
        precio: 1000, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-calabresa.jpg?fit=1000%2C1000&ssl=1'
    },
    {
        id: 6, 
        nombre: "ESPECIAL", 
        ingredientes: ["muzarella", "jamon", "oregano", "aceitunas"], 
        precio: 900, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-especial.jpg?fit=1000%2C1000&ssl=1'
    }
];

/*
En este ultimo desafío general vamos a utilizar el mismo array "Pizzas🍕":

👉 Guardarlo en el local storage. 
👉 Renderizar HTML desde JS. 
👉 Renderizar en cards todas las pizzas del array (Incluir nombre, imagen, precio e ingredientes). 
👉 Crear una barra de búsqueda (input), la cual tenga la función de mostrarnos solo las pizzas 
cuyos nombres coincidan con la búsqueda realizada.  */

const infoPizza = document.querySelector('#info-pizza');
const formPizza = document.querySelector('#form-pizza');

const imprimirStock = () => {

    const pizzasExistentes = localStorage.getItem('pizzas');
    const pizzasStock = JSON.parse(pizzasExistentes);

    const pizzasDisponible = document.querySelector('#nombres-disp');

    const pizzasDisponibleText = document.createTextNode(`${pizzasStock.map(Pizza => Pizza.nombre).join(' - ')}`);
    pizzasDisponible.appendChild(pizzasDisponibleText);

};

const limpiarData = () => {
    while (infoPizza.firstChild) {
        infoPizza.removeChild(infoPizza.firstChild);
    }
};

const imprimirCard = (array) => {

    const cardPizza = document.createElement('div');
    cardPizza.classList.add("card");
    
    const textoPizza = document.createElement('div');
    textoPizza.classList.add("text-container");

    const primerTextoPizza = document.createElement('div');
    primerTextoPizza.classList.add("primer-info");

    const nombrePizza = document.createElement('p');
    const textNombre = document.createTextNode(array.nombre);
    nombrePizza.appendChild(textNombre);
    nombrePizza.classList.add("name");

    const precioPizza = document.createElement('p');
    const textPrecio = document.createTextNode(`$${array.precio}`);
    precioPizza.appendChild(textPrecio);
    precioPizza.classList.add("price");

    const ingredientesPizza = document.createElement('p');
    const textIngredientes = document.createTextNode(array.ingredientes.join(', '));
    ingredientesPizza.appendChild(textIngredientes);
    ingredientesPizza.classList.add("ingredients");

    const imgContenedorPizza = document.createElement('div');
    imgContenedorPizza.classList.add("img-contenedor");


    const imgPizza = document.createElement('img');
    imgPizza.setAttribute('src', array.imagen);
    imgPizza.classList.add("imagen-pizza");

    infoPizza.appendChild(cardPizza);

    cardPizza.appendChild(textoPizza);
    cardPizza.appendChild(imgContenedorPizza);

    textoPizza.appendChild(primerTextoPizza);
    textoPizza.appendChild(ingredientesPizza);

    primerTextoPizza.appendChild(nombrePizza);
    primerTextoPizza.appendChild(precioPizza);
    
    imgContenedorPizza.appendChild(imgPizza);

/* <div class="card">
        <div class="text-container">
            <div class="primer-info">
                <p id="nombre" class="name">Fugazzeta</p>
                <span id="precio" class="price">$650</span>
            </div>
            <p id="ingredientes" class="ingredients">muzarella, tomate, oregano, aceitunas</p>
        </div>
        <div id="img-container" class="img-contenedor">
            <img src="https://BLABLABLA">
        </div>
    </div> 
*/
};

const imprimirError = () => {
    
    const cardPizza = document.createElement('div');
    cardPizza.classList.add("card");

    const nodoError = document.createElement('p');
    const textError = document.createTextNode('INGRESE UN CÓDIGO VÁLIDO');
    nodoError .classList.add("error");

    infoPizza.appendChild(cardPizza);

    cardPizza.appendChild(nodoError);
    nodoError.appendChild(textError);

};

document.addEventListener('DOMContentLoaded', (e) => {

    localStorage.setItem('pizzas', JSON.stringify(Pizzas));

    imprimirStock();

});

const codigoPizza = document.querySelector('#input-nombre');

formPizza.addEventListener('submit', (e) => {
    e.preventDefault();

    limpiarData();
    
    const pizza = Pizzas.find((pizza) => pizza.nombre == codigoPizza.value.toUpperCase());

    !pizza ? imprimirError() : imprimirCard(pizza);

    e.target.reset();

});