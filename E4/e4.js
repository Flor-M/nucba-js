const Pizzas = [
    {
        id: 1, 
        nombre: "Huevo Duro", 
        ingredientes: ["muzarella", "huevo duro", "oregano", "aceitunas"], 
        precio: 700, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-americana.jpg?fit=1000%2C1000&ssl=1'
    },
    {
        id: 2, 
        nombre: "Fugazzeta", 
        ingredientes: ["muzarella", "tomate", "oregano", "aceitunas"], 
        precio: 650, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-fugazzeta.jpg?fit=1000%2C1000&ssl=1'
    }, 
    {
        id: 3, 
        nombre: "Muzarella", 
        ingredientes: ["muzarella", "oregano", "aceitunas"], 
        precio: 550, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-muzzarella-1.jpg?fit=1000%2C1000&ssl=1'
    },
    {
        id: 4, 
        nombre: "Napolitana", 
        ingredientes: ["muzarella", "tomate", "oregano", "aceitunas"], 
        precio: 800, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-napolitana.jpg?fit=1000%2C1000&ssl=1'
    },
    {
        id: 5, 
        nombre: "Calabreza", 
        ingredientes: ["muzarella", "longaniza", "oregano"], 
        precio: 1000, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-calabresa.jpg?fit=1000%2C1000&ssl=1'
    },
    {
        id: 6, 
        nombre: "Especial", 
        ingredientes: ["muzarella", "jamon", "oregano", "aceitunas"], 
        precio: 900, 
        imagen: 'https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-especial.jpg?fit=1000%2C1000&ssl=1'
    }
];

// Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

// 👉 A cada Pizza, agregarle una imagen. 
// 👉 Guardar el array en el local storage. 
// 👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
// 👉 Debajo del card tiene que haber un input y un botón. 

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// 🆙 Antes de entregar, debemos deployar nuestro repositorio en Vercel, y entregar ambos links. (GitHub y Vercel). 

const infoPizza = document.querySelector('#info-pizza');
const formPizza = document.querySelector('#form-pizza');


const limpiarData = () => {
    while (infoPizza.firstChild) {
        infoPizza.removeChild(infoPizza.firstChild);
    }
};

const imprimirData = (array) => {

    const cardPizza = document.createElement('div');
    cardPizza .classList.add("card");
    
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
    const textIngredientes = document.createTextNode(array.ingredientes);
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
            <img src="https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-fugazzeta.jpg?fit=1000%2C1000&ssl=1" alt="Imagen ilustrativa de pizza Fugazzeta" class="imagen-pizza">
        </div>
    </div> 
*/
};

const imprimirError = () => {
    
    const cardPizza = document.createElement('div');
    cardPizza .classList.add("card");

    const nodoError = document.createElement('p');
    const textError = document.createTextNode('INGRESE UN CÓDIGO VÁLIDO');
    nodoError .classList.add("error");
    // agregar clase

    infoPizza.appendChild(cardPizza);

    cardPizza.appendChild(nodoError);
    nodoError.appendChild(textError);

};


document.addEventListener('DOMContentLoaded', (e) => {

    localStorage.setItem('pizzas', JSON.stringify(Pizzas));

});

const codigoPizza = document.querySelector('#codigo');

formPizza.addEventListener('submit', (e) => {

    e.preventDefault();

    limpiarData();

    const pizza = Pizzas.find((pizza) => pizza.id == codigoPizza.value);

    !pizza ? imprimirError() : imprimirData(pizza);

    e.target.reset();

});